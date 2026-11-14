import Link from "next/link";
import { ArrowRight, Heart, Mail, MapPin, Phone } from "lucide-react";
import { Reveal } from "@/components/shared/Reveal";
import { contact, site } from "@/data/content";

export function ContactCTA() {
  return (
    <section className="relative overflow-hidden bg-ivory py-14 sm:py-20 lg:py-24" aria-labelledby="cta-heading">
      <div className="mx-auto w-full max-w-[1280px] px-4 sm:px-6 lg:px-8">
        <Reveal className="relative overflow-hidden rounded-[28px] sm:rounded-[32px] bg-gradient-to-br from-navy via-navy to-[#052b3b] p-8 sm:p-10 lg:p-12 text-white shadow-2xl shadow-navy/35 border border-white/10">
          {/* Subtle decorative glowing background details matching footer theme */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -top-24 -right-24 size-80 rounded-full bg-teal/20 blur-3xl"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -bottom-24 -left-24 size-80 rounded-full bg-gold/15 blur-3xl"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 opacity-[0.035] [background-image:radial-gradient(white_1px,transparent_1px)] [background-size:24px_24px]"
          />

          <div className="relative grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-12 lg:gap-8 xl:gap-10 items-center">
            {/* LEFT COLUMN: Small label, Main Heading, Description (md: col-span-2, lg: col-span-5) */}
            <div className="md:col-span-2 lg:col-span-5">
              <span className="inline-flex items-center gap-2 text-xs font-bold tracking-[0.18em] text-warm-gold uppercase">
                <span className="h-0.5 w-5 rounded-full bg-gold" aria-hidden="true" />
                GET IN TOUCH
              </span>
              <h2
                id="cta-heading"
                className="mt-3 font-display text-2xl font-extrabold tracking-tight text-white sm:text-3xl lg:text-[2.25rem] leading-[1.2]"
              >
                Let&apos;s Stay Connected.
              </h2>
              <p className="mt-3.5 text-sm sm:text-[0.95rem] leading-relaxed text-pale-teal/90 max-w-lg">
                Have questions about membership, welfare schemes, or contributions? We&apos;re here to help you.
              </p>
            </div>

            {/* MIDDLE COLUMN: Three compact contact items (md: col-span-1, lg: col-span-4) */}
            <div className="flex flex-col gap-3 md:col-span-1 lg:col-span-4 w-full">
              {/* Phone item */}
              <a
                href={contact.phoneHref}
                aria-label={`Call Trust office at ${contact.phoneDisplayEn}`}
                className="group flex items-center gap-3.5 rounded-2xl bg-white/[0.07] p-3.5 ring-1 ring-white/10 backdrop-blur-xs transition-all duration-200 hover:bg-white/[0.13] hover:ring-white/20 hover:translate-x-1"
              >
                <span className="grid size-9 shrink-0 place-items-center rounded-full bg-white/10 text-warm-gold transition-colors group-hover:bg-warm-gold group-hover:text-navy">
                  <Phone className="size-4" aria-hidden="true" />
                </span>
                <div className="min-w-0 flex-1">
                  <span className="block text-[11px] font-medium text-pale-teal/80">Office Phone</span>
                  <span className="block text-sm font-semibold text-white tracking-wide">{contact.phoneDisplayEn}</span>
                </div>
              </a>

              {/* Email item */}
              <a
                href={`mailto:${contact.email}`}
                aria-label={`Send email to ${contact.email}`}
                className="group flex items-center gap-3.5 rounded-2xl bg-white/[0.07] p-3.5 ring-1 ring-white/10 backdrop-blur-xs transition-all duration-200 hover:bg-white/[0.13] hover:ring-white/20 hover:translate-x-1"
              >
                <span className="grid size-9 shrink-0 place-items-center rounded-full bg-white/10 text-warm-gold transition-colors group-hover:bg-warm-gold group-hover:text-navy">
                  <Mail className="size-4" aria-hidden="true" />
                </span>
                <div className="min-w-0 flex-1">
                  <span className="block text-[11px] font-medium text-pale-teal/80">E-mail</span>
                  <span className="block text-sm font-semibold text-white truncate">{contact.email}</span>
                </div>
              </a>

              {/* Office address item */}
              <div className="flex items-center gap-3.5 rounded-2xl bg-white/[0.07] p-3.5 ring-1 ring-white/10 backdrop-blur-xs">
                <span className="grid size-9 shrink-0 place-items-center rounded-full bg-white/10 text-warm-gold">
                  <MapPin className="size-4" aria-hidden="true" />
                </span>
                <div className="min-w-0 flex-1">
                  <span className="block text-[11px] font-medium text-pale-teal/80">Office Address</span>
                  <span lang="gu" className="block text-xs sm:text-[13px] font-medium text-white/95 leading-snug">
                    {contact.addressLines.join(" ")}
                  </span>
                </div>
              </div>
            </div>

            {/* RIGHT COLUMN: Two CTA Buttons (md: col-span-1, lg: col-span-3) */}
            <div className="flex flex-col gap-3.5 md:col-span-1 lg:col-span-3 justify-center w-full">
              {/* Primary CTA: Contact Our Team */}
              <Link
                href="/contact"
                className="group inline-flex items-center justify-center gap-2.5 rounded-full border border-white/25 bg-transparent px-6 py-3.5 text-sm sm:text-[0.95rem] font-semibold text-white transition-all duration-200 hover:bg-white/10 hover:border-white/50 hover:-translate-y-0.5 w-full text-center cursor-pointer shadow-xs"
              >
                <span>Contact Our Team</span>
                <ArrowRight
                  className="size-4 shrink-0 transition-transform duration-200 group-hover:translate-x-1"
                  aria-hidden="true"
                />
              </Link>

              {/* Secondary CTA: Make a Contribution */}
              <a
                href={site.crmUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center gap-2.5 rounded-full bg-gold px-6 py-3.5 text-sm sm:text-[0.95rem] font-bold text-navy shadow-lg shadow-gold/25 transition-all duration-200 hover:bg-warm-gold hover:shadow-gold/40 hover:-translate-y-0.5 w-full text-center cursor-pointer"
              >
                <Heart
                  className="size-4.5 shrink-0 fill-navy text-navy transition-transform duration-200 group-hover:scale-110"
                  aria-hidden="true"
                />
                <span>Make a Contribution</span>
                <span className="sr-only"> (opens in a new tab)</span>
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
