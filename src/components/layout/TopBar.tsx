import { BadgeCheck, Mail, Phone } from "lucide-react";
import { contact, site } from "@/data/content";

export function TopBar() {
  return (
    <div className="no-print hidden bg-brand-900 text-[0.8rem] text-brand-100 md:block">
      <div className="container-page flex h-10 items-center justify-between gap-6">
        <div className="flex items-center gap-6">
          <a href={contact.phoneHref} className="inline-flex items-center gap-2 transition hover:text-white">
            <Phone className="size-3.5 text-saffron-400" aria-hidden="true" />
            <span>{contact.phoneDisplayEn}</span>
          </a>
          <a href={`mailto:${contact.email}`} className="inline-flex items-center gap-2 transition hover:text-white">
            <Mail className="size-3.5 text-saffron-400" aria-hidden="true" />
            <span>{contact.email}</span>
          </a>
        </div>
        <p className="inline-flex items-center gap-2">
          <BadgeCheck className="size-3.5 text-saffron-400" aria-hidden="true" />
          <span>Registered Trust · {site.registration}</span>
        </p>
      </div>
    </div>
  );
}
