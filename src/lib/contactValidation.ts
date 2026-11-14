export interface ContactPayload {
  name: string;
  phone: string;
  email: string;
  memberNumber: string;
  subject: string;
  message: string;
  /** Honeypot — must stay empty */
  company?: string;
}

export type ContactErrors = Partial<Record<keyof ContactPayload, string>>;

export const contactSubjects = [
  "Membership enquiry",
  "Death-aid contribution / payment",
  "Death-aid claim",
  "Address / mobile number change",
  "Nominee (heir) change",
  "Other",
] as const;

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

export function validateContact(data: Partial<ContactPayload>): ContactErrors {
  const errors: ContactErrors = {};
  const name = (data.name ?? "").trim();
  const phone = (data.phone ?? "").replace(/[\s-]/g, "");
  const email = (data.email ?? "").trim();
  const message = (data.message ?? "").trim();

  if (name.length < 2) errors.name = "Please enter your full name.";
  else if (name.length > 100) errors.name = "Name is too long.";

  if (!/^(\+?91)?[6-9]\d{9}$|^0\d{9,11}$/.test(phone)) errors.phone = "Please enter a valid 10-digit mobile number.";

  if (email && !EMAIL_RE.test(email)) errors.email = "Please enter a valid e-mail address.";

  if ((data.memberNumber ?? "").trim() && !/^[0-9૦-૯]{1,6}$/.test((data.memberNumber ?? "").trim()))
    errors.memberNumber = "Member number should contain digits only.";

  if (!contactSubjects.includes((data.subject ?? "") as (typeof contactSubjects)[number])) errors.subject = "Please choose a subject.";

  if (message.length < 10) errors.message = "Please write a message of at least 10 characters.";
  else if (message.length > 2000) errors.message = "Message must be under 2000 characters.";

  return errors;
}
