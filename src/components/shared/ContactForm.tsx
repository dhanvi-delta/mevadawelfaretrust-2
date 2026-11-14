"use client";

import { useState } from "react";
import { CircleAlert, CircleCheck, LoaderCircle, Mail, Send } from "lucide-react";
import { contactSubjects, validateContact, type ContactErrors, type ContactPayload } from "@/lib/contactValidation";
import { cn } from "@/lib/utils";

const initial: ContactPayload = { name: "", phone: "", email: "", memberNumber: "", subject: "", message: "", company: "" };

type Status = "idle" | "submitting" | "success" | "error" | "unavailable";

export function ContactForm({ email }: { email: string }) {
  const [values, setValues] = useState<ContactPayload>(initial);
  const [errors, setErrors] = useState<ContactErrors>({});
  const [touched, setTouched] = useState<Partial<Record<keyof ContactPayload, boolean>>>({});
  const [status, setStatus] = useState<Status>("idle");

  const set = (key: keyof ContactPayload, value: string) => {
    const next = { ...values, [key]: value };
    setValues(next);
    if (touched[key]) setErrors(validateContact(next));
  };
  const blur = (key: keyof ContactPayload) => {
    setTouched((t) => ({ ...t, [key]: true }));
    setErrors(validateContact(values));
  };

  const mailtoHref = `mailto:${email}?subject=${encodeURIComponent(`[Website] ${values.subject || "Enquiry"} — ${values.name}`)}&body=${encodeURIComponent(
    `Name: ${values.name}\nMobile: ${values.phone}\nE-mail: ${values.email}\nMember number: ${values.memberNumber}\n\n${values.message}`,
  )}`;

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const errs = validateContact(values);
    setErrors(errs);
    setTouched({ name: true, phone: true, email: true, memberNumber: true, subject: true, message: true });
    if (Object.keys(errs).length) {
      const first = Object.keys(errs)[0];
      document.getElementById(`cf-${first}`)?.focus();
      return;
    }
    setStatus("submitting");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      const json = await res.json().catch(() => ({}));
      if (res.ok && json.ok) {
        setStatus("success");
        setValues(initial);
        setTouched({});
      } else if (res.status === 422 && json.errors) {
        setErrors(json.errors);
        setStatus("idle");
      } else if (res.status === 503) {
        setStatus("unavailable");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="card animate-scale-in flex flex-col items-center p-10 text-center" role="status">
        <span className="grid size-16 place-items-center rounded-full bg-mint text-emerald">
          <CircleCheck className="size-9" aria-hidden="true" />
        </span>
        <h3 className="mt-5 text-2xl font-bold">Thank you — message sent</h3>
        <p className="mt-2 max-w-sm text-muted">The Trust office has received your enquiry and will contact you on the mobile number you provided.</p>
        <button type="button" onClick={() => setStatus("idle")} className="mt-6 rounded-full px-5 py-2.5 text-sm font-semibold text-brand-700 ring-1 ring-brand-200 hover:bg-brand-50">
          Send another message
        </button>
      </div>
    );
  }

  const field = (key: keyof ContactPayload) => ({
    id: `cf-${key}`,
    name: key,
    value: values[key] ?? "",
    onBlur: () => blur(key),
    "aria-invalid": touched[key] && errors[key] ? true : undefined,
    "aria-describedby": touched[key] && errors[key] ? `cf-${key}-error` : undefined,
    className: cn(
      "w-full rounded-xl border bg-white px-4 text-[0.95rem] text-ink transition placeholder:text-muted/60 focus:ring-4 focus:outline-none",
      touched[key] && errors[key] ? "border-red-400 focus:border-red-500 focus:ring-red-100" : "border-line focus:border-brand-400 focus:ring-brand-100",
    ),
  });

  const error = (key: keyof ContactPayload) =>
    touched[key] && errors[key] ? (
      <p id={`cf-${key}-error`} className="mt-1.5 flex items-center gap-1 text-sm text-red-700">
        <CircleAlert className="size-4" aria-hidden="true" />
        {errors[key]}
      </p>
    ) : null;

  const label = (key: keyof ContactPayload, text: string, required = false) => (
    <label htmlFor={`cf-${key}`} className="mb-1.5 block text-sm font-semibold text-ink">
      {text} {required ? <span className="text-red-600" aria-hidden="true">*</span> : <span className="font-normal text-muted">(optional)</span>}
    </label>
  );

  return (
    <form onSubmit={onSubmit} noValidate className="card p-6 sm:p-8" aria-labelledby="contact-form-title">
      <h2 id="contact-form-title" className="text-2xl font-bold">
        Send us a message
      </h2>
      <p className="mt-1 text-sm text-muted">
        Fields marked <span className="text-red-600">*</span> are required.
      </p>

      {(status === "error" || status === "unavailable") && (
        <div role="alert" className="mt-6 rounded-2xl bg-saffron-50 p-4 text-sm text-saffron-700 ring-1 ring-saffron-100">
          <p className="flex items-center gap-2 font-semibold">
            <CircleAlert className="size-5" aria-hidden="true" />
            {status === "unavailable" ? "Online form delivery is not available right now." : "Sorry, your message could not be sent."}
          </p>
          <p className="mt-1">You can send the same message directly by e-mail, or call the office.</p>
          <a href={mailtoHref} className="mt-3 inline-flex h-10 items-center gap-2 rounded-full bg-brand-700 px-4 font-semibold text-white hover:bg-brand-800">
            <Mail className="size-4" aria-hidden="true" /> Send via e-mail app
          </a>
        </div>
      )}

      <div className="mt-6 grid gap-5 sm:grid-cols-2">
        <div>
          {label("name", "Full name", true)}
          <input {...field("name")} onChange={(e) => set("name", e.target.value)} autoComplete="name" className={cn(field("name").className, "h-12")} />
          {error("name")}
        </div>
        <div>
          {label("phone", "Mobile number", true)}
          <input {...field("phone")} onChange={(e) => set("phone", e.target.value)} type="tel" inputMode="tel" autoComplete="tel" className={cn(field("phone").className, "h-12")} />
          {error("phone")}
        </div>
        <div>
          {label("email", "E-mail")}
          <input {...field("email")} onChange={(e) => set("email", e.target.value)} type="email" autoComplete="email" className={cn(field("email").className, "h-12")} />
          {error("email")}
        </div>
        <div>
          {label("memberNumber", "Member number (સભાસદ નંબર)")}
          <input {...field("memberNumber")} onChange={(e) => set("memberNumber", e.target.value)} inputMode="numeric" className={cn(field("memberNumber").className, "h-12")} />
          {error("memberNumber")}
        </div>
        <div className="sm:col-span-2">
          {label("subject", "Subject", true)}
          <select {...field("subject")} onChange={(e) => set("subject", e.target.value)} className={cn(field("subject").className, "h-12")}>
            <option value="">Choose a subject…</option>
            {contactSubjects.map((s) => (
              <option key={s} value={s}>
                {s}
              </option>
            ))}
          </select>
          {error("subject")}
        </div>
        <div className="sm:col-span-2">
          {label("message", "Message", true)}
          <textarea {...field("message")} onChange={(e) => set("message", e.target.value)} rows={5} className={cn(field("message").className, "resize-y py-3")} />
          {error("message")}
        </div>
        {/* Honeypot (hidden from people and assistive tech) */}
        <div className="absolute -left-[9999px]" aria-hidden="true">
          <label htmlFor="cf-company">Company</label>
          <input id="cf-company" tabIndex={-1} autoComplete="off" value={values.company} onChange={(e) => set("company", e.target.value)} />
        </div>
      </div>

      <button
        type="submit"
        disabled={status === "submitting"}
        className="mt-7 inline-flex h-12 w-full items-center justify-center gap-2 rounded-full bg-brand-700 px-6 font-semibold text-white shadow-soft transition hover:bg-brand-800 disabled:opacity-70 sm:w-auto"
      >
        {status === "submitting" ? (
          <>
            <LoaderCircle className="size-5 animate-spin" aria-hidden="true" /> Sending…
          </>
        ) : (
          <>
            <Send className="size-5" aria-hidden="true" /> Send message
          </>
        )}
      </button>
    </form>
  );
}
