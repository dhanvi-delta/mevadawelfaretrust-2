import { Mail, MapPin, Phone } from "lucide-react";
import { ButtonLink } from "@/components/shared/ButtonLink";
import { Reveal } from "@/components/shared/Reveal";
import { contact, site } from "@/data/content";

export function ContactCTA() {
  return (
    <section className="py-20 sm:py-24" aria-labelledby="cta-heading">
      <div className="container-page">
        <Reveal className="relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-brand-700 via-brand-800 to-brand-900 px-6 py-12 text-white shadow-lift sm:px-12 sm:py-16">
          <div aria-hidden="true" className="absolute -top-20 -right-20 size-72 rounded-full bg-saffron-500/25 blur-3xl" />
          <div aria-hidden="true" className="absolute -bottom-24 -left-10 size-72 rounded-full bg-emerald/25 blur-3xl" />
          <div className="relative grid gap-10 lg:grid-cols-[1.3fr_1fr] lg:items-center">
            <div>
              <p className="text-sm font-bold tracking-[0.14em] text-saffron-400 uppercase">Get in touch</p>
              <h2 id="cta-heading" className="mt-3 text-3xl font-bold !text-white sm:text-4xl">
                Questions about membership or your contribution?
              </h2>
              <p className="mt-4 max-w-xl text-brand-100">
                Contact the Trust office, visit your nearest collection centre, or pay online through the CRM portal.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <ButtonLink href="/contact" variant="accent" size="lg">
                  Contact Us
                </ButtonLink>
                <ButtonLink href={site.crmUrl} variant="light" size="lg">
                  Pay Online
                </ButtonLink>
              </div>
            </div>
            <ul className="space-y-3">
              <li>
                <a href={contact.phoneHref} className="flex items-center gap-4 rounded-2xl bg-white/10 p-4 ring-1 ring-white/15 transition hover:bg-white/15">
                  <span className="grid size-11 place-items-center rounded-xl bg-white/15">
                    <Phone className="size-5" aria-hidden="true" />
                  </span>
                  <span>
                    <span className="block text-xs text-brand-200">Office phone</span>
                    <span className="font-semibold">{contact.phoneDisplayEn}</span>
                  </span>
                </a>
              </li>
              <li>
                <a href={`mailto:${contact.email}`} className="flex items-center gap-4 rounded-2xl bg-white/10 p-4 ring-1 ring-white/15 transition hover:bg-white/15">
                  <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-white/15">
                    <Mail className="size-5" aria-hidden="true" />
                  </span>
                  <span className="min-w-0">
                    <span className="block text-xs text-brand-200">E-mail</span>
                    <span className="block font-semibold break-all">{contact.email}</span>
                  </span>
                </a>
              </li>
              <li className="flex items-center gap-4 rounded-2xl bg-white/10 p-4 ring-1 ring-white/15">
                <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-white/15">
                  <MapPin className="size-5" aria-hidden="true" />
                </span>
                <span>
                  <span className="block text-xs text-brand-200">Office</span>
                  <span lang="gu" className="block text-sm font-semibold">
                    ગુરૂનાનક ચોક, પાલનપુર
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
