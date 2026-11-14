import { ArrowUpRight, Mail, MapPin, Phone, UserRoundPen } from "lucide-react";
import { ContactForm } from "@/components/shared/ContactForm";
import { PageHero } from "@/components/shared/PageHero";
import { Reveal } from "@/components/shared/Reveal";
import { contact, site } from "@/data/content";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Contact Us",
  description:
    "Contact Shree Mevada Suthar Samaj Welfare Trust, Palanpur — office at Gokul Fracture & Orthopaedic Hospital, Guru Nanak Chowk. Phone 02742 255733, info@mevadawelfaretrust.com.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Contact Us"
        titleGu="સંપર્ક"
        breadcrumbs={[{ name: "Contact", path: "/contact" }]}
        description="Reach the Trust office for membership, contributions, claims or changes to your details."
      />

      <section className="relative overflow-hidden py-14 sm:py-16">
        <div className="container-page grid gap-8 lg:grid-cols-[1fr_1.3fr]">
          <div className="space-y-6">
            <Reveal className="card p-6 sm:p-8 bg-white border border-line shadow-soft">
              <h2 className="text-xl font-bold text-navy">Trust office</h2>
              <address className="mt-5 space-y-4 not-italic">
                <div className="flex gap-4">
                  <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-pale-teal text-deep-teal ring-1 ring-teal/20">
                    <MapPin className="size-5" aria-hidden="true" />
                  </span>
                  <div lang="gu" className="text-xs leading-relaxed">
                    <p className="font-bold text-navy text-sm">{contact.officeTitle}</p>
                    {contact.addressLines.map((l) => (
                      <p key={l} className="text-muted">
                        {l}
                      </p>
                    ))}
                  </div>
                </div>
                <a
                  href={contact.phoneHref}
                  className="flex items-center gap-4 rounded-xl transition hover:text-deep-teal"
                >
                  <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-pale-teal text-deep-teal ring-1 ring-teal/20">
                    <Phone className="size-5" aria-hidden="true" />
                  </span>
                  <span>
                    <span className="block text-[0.7rem] font-bold text-muted uppercase" lang="gu">
                      ફોન નં.
                    </span>
                    <span className="font-bold text-navy text-sm">{contact.phoneDisplayEn}</span>
                  </span>
                </a>
                <a
                  href={`mailto:${contact.email}`}
                  className="flex items-center gap-4 rounded-xl transition hover:text-deep-teal"
                >
                  <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-pale-teal text-deep-teal ring-1 ring-teal/20">
                    <Mail className="size-5" aria-hidden="true" />
                  </span>
                  <span className="min-w-0">
                    <span className="block text-[0.7rem] font-bold text-muted uppercase" lang="gu">
                      ઇ-મેલ
                    </span>
                    <span className="block font-bold break-all text-navy text-sm">{contact.email}</span>
                  </span>
                </a>
              </address>
            </Reveal>

            <Reveal delay={80} className="card p-6 sm:p-8 bg-white border border-line shadow-soft">
              <h2 className="flex items-center gap-2 text-lg font-bold text-navy">
                <UserRoundPen className="size-5 text-gold" aria-hidden="true" />
                <span lang="gu">સરનામામાં ફેરફાર માટે</span>
              </h2>
              <p className="mt-1 text-xs text-muted">For change of address</p>
              <ul className="mt-4 space-y-2.5">
                {contact.addressChangeContacts.map((c) => (
                  <li
                    key={c.tel}
                    className="flex flex-col gap-1 rounded-xl bg-mist p-3.5 ring-1 ring-line sm:flex-row sm:items-center sm:justify-between text-xs"
                  >
                    <span lang="gu" className="font-bold text-navy">
                      {c.name}
                    </span>
                    <a
                      href={`tel:${c.tel}`}
                      lang="gu"
                      className="font-bold text-deep-teal hover:text-teal hover:underline"
                    >
                      {c.phone}
                    </a>
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal delay={160} className="overflow-hidden rounded-2xl border border-line bg-white shadow-soft">
              <iframe
                src={contact.mapEmbedUrl}
                title="Map: Gokul Orthopaedic Hospital, Palanpur — Trust office"
                className="h-72 w-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
              <a
                href={contact.mapLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between bg-white px-5 py-3 text-xs font-bold text-deep-teal hover:bg-mist transition-colors"
              >
                <span>Open in Google Maps</span> <ArrowUpRight className="size-4" aria-hidden="true" />
                <span className="sr-only"> (opens in a new tab)</span>
              </a>
            </Reveal>
          </div>

          <Reveal delay={100}>
            <ContactForm email={contact.email} />
            <p className="mt-5 text-xs text-muted leading-relaxed">
              To pay your contribution or update details yourself, use the{" "}
              <a
                href={site.crmUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="font-bold text-deep-teal underline underline-offset-2 hover:text-teal"
              >
                Trust CRM portal
              </a>
              .
            </p>
          </Reveal>
        </div>
      </section>
    </>
  );
}
