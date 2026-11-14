import nodemailer from "nodemailer";
import { contact, site } from "@/data/content";
import { validateContact, type ContactPayload } from "@/lib/contactValidation";

/**
 * Contact form endpoint.
 * Sends the enquiry to the Trust's mailbox via SMTP. Configure:
 *   SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS, (optional) CONTACT_TO, CONTACT_FROM
 * When SMTP is not configured the endpoint responds 503 so the UI can
 * offer the visitor a direct e-mail fallback instead of failing silently.
 */
export async function POST(request: Request) {
  let data: Partial<ContactPayload>;
  try {
    data = await request.json();
  } catch {
    return Response.json({ ok: false, error: "Invalid request." }, { status: 400 });
  }

  // Honeypot: bots fill hidden fields. Pretend success, send nothing.
  if (data.company) return Response.json({ ok: true });

  const errors = validateContact(data);
  if (Object.keys(errors).length > 0) {
    return Response.json({ ok: false, errors }, { status: 422 });
  }

  const { SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS, CONTACT_TO, CONTACT_FROM } = process.env;
  if (!SMTP_HOST || !SMTP_USER || !SMTP_PASS) {
    return Response.json(
      { ok: false, error: "not_configured", message: "Online form delivery is not set up yet." },
      { status: 503 },
    );
  }

  const port = Number(SMTP_PORT ?? 587);
  const transporter = nodemailer.createTransport({
    host: SMTP_HOST,
    port,
    secure: port === 465,
    auth: { user: SMTP_USER, pass: SMTP_PASS },
  });

  const clean = (s?: string) => (s ?? "").replace(/[\r\n]+/g, " ").trim();
  const lines = [
    `Name: ${clean(data.name)}`,
    `Mobile: ${clean(data.phone)}`,
    `E-mail: ${clean(data.email) || "-"}`,
    `Member number: ${clean(data.memberNumber) || "-"}`,
    `Subject: ${clean(data.subject)}`,
    "",
    (data.message ?? "").trim(),
  ];

  try {
    await transporter.sendMail({
      from: CONTACT_FROM ?? `"${site.shortName} Website" <${SMTP_USER}>`,
      to: CONTACT_TO ?? contact.email,
      replyTo: data.email ? clean(data.email) : undefined,
      subject: `[Website] ${clean(data.subject)} — ${clean(data.name)}`,
      text: lines.join("\n"),
    });
    return Response.json({ ok: true });
  } catch (err) {
    console.error("Contact form delivery failed", err);
    return Response.json({ ok: false, error: "send_failed" }, { status: 502 });
  }
}
