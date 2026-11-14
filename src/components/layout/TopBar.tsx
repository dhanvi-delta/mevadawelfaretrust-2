"use client";

import { BadgeCheck, Mail, Phone } from "lucide-react";
import { contact, site } from "@/data/content";

export function TopBar() {
  return (
    <div className="no-print hidden border-b border-white/10 bg-deep-teal text-[0.76rem] text-pale-teal md:block">
      <div className="container-page flex h-9 items-center justify-between gap-4">
        {/* Left: Contact links */}
        <div className="flex items-center gap-5">
          <a
            href={contact.phoneHref}
            className="inline-flex items-center gap-1.5 transition-colors duration-150 hover:text-white"
          >
            <Phone className="size-3 text-warm-gold" aria-hidden="true" />
            <span>{contact.phoneDisplayEn}</span>
          </a>
          <span className="text-white/20" aria-hidden="true">|</span>
          <a
            href={`mailto:${contact.email}`}
            className="inline-flex items-center gap-1.5 transition-colors duration-150 hover:text-white"
          >
            <Mail className="size-3 text-warm-gold" aria-hidden="true" />
            <span>{contact.email}</span>
          </a>
        </div>

        {/* Right: Registration text */}
        <div className="flex items-center gap-4">
          <p className="inline-flex items-center gap-1.5 text-pale-teal/90">
            <BadgeCheck className="size-3.5 text-warm-gold" aria-hidden="true" />
            <span>Registered Trust · {site.registration}</span>
          </p>
        </div>
      </div>
    </div>
  );
}
