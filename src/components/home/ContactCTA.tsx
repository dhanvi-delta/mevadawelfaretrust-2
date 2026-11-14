import { Mail, MapPin, Phone } from "lucide-react";
import { ButtonLink } from "@/components/shared/ButtonLink";
import { Reveal } from "@/components/shared/Reveal";
import { contact, site } from "@/data/content";

export function ContactCTA() {
  return (
    <section className="relative overflow-hidden py-20 sm:py-24" aria-labelledby="cta-heading">
      <div className="container-page">
        <Reveal className="relative overflow-hidden rounded-[2.25rem] bg-gradient-to-br from-navy via-deep-teal to-[#052b3b] px-6 py-12 text-white shadow-lift sm:px-12 sm:py-16">
          {/* Subtle jali pattern & glows */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -top-20 -right-20 size-72 rounded-full bg-gold/15 blur-3xl"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -bottom-24 -left-10 size-72 rounded-full bg-bright-teal/15 blur-3xl"
          />

          <div className="relative grid gap-10 lg:grid-cols-[1.3fr_1fr] lg:items-center">
            {/* Left: Text and CTAs */}
            <div>
              <p className="text-xs font-bold tracking-[0.16em] text-warm-gold uppercase">Get in touch</p>
              <h2 id="cta-heading" className="mt-3 text-3xl font-extrabold !text-white sm:text-4xl leading-tight">
                Questions about membership or your contribution?
              </h2>
              <p className="mt-4 max-w-xl text-pale-teal/90 leading-relaxed text-[0.98rem]">
                Contact the Trust office, visit your nearest collection centre, or pay online through the CRM portal.
              </p>

              <div className="mt-8 flex flex-wrap gap-3.5">
                <ButtonLink href="/contact" variant="accent" size="lg">
                  Contact Us
                </ButtonLink>
                <ButtonLink href={site.crmUrl} variant="light" size="lg">
                  Pay Online
                </ButtonLink>
              </div>
            </div>

            {/* Right: Contact details list */}
            <ul className="space-y-3">
              <li>
                <a
                  href={contact.phoneHref}
                  className="flex items-center gap-4 rounded-2xl bg-white/10 p-4 ring-1 ring-white/15 transition-all hover:bg-white/15 hover:-translate-y-0.5"
                >
                  <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-white/15 text-warm-gold">
                    <Phone className="size-5" aria-hidden="true" />
                  </span>
                  <span>
                    <span className="block text-xs text-pale-teal">Office phone</span>
                    <span className="font-semibold text-white">{contact.phoneDisplayEn}</span>
                  </span>
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${contact.email}`}
                  className="flex items-center gap-4 rounded-2xl bg-white/10 p-4 ring-1 ring-white/15 transition-all hover:bg-white/15 hover:-translate-y-0.5"
                >
                  <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-white/15 text-warm-gold">
                    <Mail className="size-5" aria-hidden="true" />
                  </span>
                  <span className="min-w-0">
                    <span className="block text-xs text-pale-teal">E-mail</span>
                    <span className="block font-semibold break-all text-white">{contact.email}</span>
                  </span>
                </a>
              </li>
              <li className="flex items-center gap-4 rounded-2xl bg-white/10 p-4 ring-1 ring-white/15">
                <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-white/15 text-warm-gold">
                  <MapPin className="size-5" aria-hidden="true" />
                </span>
                <span>
                  <span className="block text-xs text-pale-teal">Office</span>
                  <span lang="gu" className="block text-xs font-semibold leading-relaxed text-white">
                    {contact.addressLines[0]} {contact.addressLines[1]}, {contact.addressLines[2]}
                  </span>
                </span>
              </li>
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
