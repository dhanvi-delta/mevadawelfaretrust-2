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

      <section className="py-14 sm:py-16">
        <div className="container-page grid gap-8 lg:grid-cols-[1fr_1.3fr]">
          <div className="space-y-5">
            <Reveal className="card p-6 sm:p-8">
              <h2 className="text-xl font-bold">Trust office</h2>
              <address className="mt-5 space-y-5 not-italic">
                <div className="flex gap-4">
                  <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-mint text-brand-700">
                    <MapPin className="size-5" aria-hidden="true" />
                  </span>
                  <div lang="gu">
                    <p className="font-semibold">{contact.officeTitle}</p>
                    {contact.addressLines.map((l) => (
                      <p key={l} className="text-muted">
                        {l}
                      </p>
                    ))}
                  </div>
                </div>
                <a href={contact.phoneHref} className="flex items-center gap-4 rounded-xl transition hover:text-brand-700">
                  <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-mint text-brand-700">
                    <Phone className="size-5" aria-hidden="true" />
                  </span>
                  <span>
                    <span className="block text-xs text-muted" lang="gu">
                      ફોન નં.
                    </span>
                    <span className="font-semibold">{contact.phoneDisplayEn}</span>
                  </span>
                </a>
                <a href={`mailto:${contact.email}`} className="flex items-center gap-4 rounded-xl transition hover:text-brand-700">
                  <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-mint text-brand-700">
                    <Mail className="size-5" aria-hidden="true" />
                  </span>
                  <span className="min-w-0">
                    <span className="block text-xs text-muted" lang="gu">
                      ઇ-મેલ
                    </span>
                    <span className="block font-semibold break-all">{contact.email}</span>
                  </span>
                </a>
              </address>
            </Reveal>

            <Reveal delay={80} className="card p-6 sm:p-8">
              <h2 className="flex items-center gap-2 text-xl font-bold">
                <UserRoundPen className="size-5 text-saffron-600" aria-hidden="true" />
                <span lang="gu">સરનામામાં ફેરફાર માટે</span>
              </h2>
              <p className="mt-1 text-sm text-muted">For change of address</p>
              <ul className="mt-5 space-y-3">
                {contact.addressChangeContacts.map((c) => (
                  <li key={c.tel} className="flex flex-col gap-1 rounded-xl bg-cream p-4 ring-1 ring-line sm:flex-row sm:items-center sm:justify-between">
                    <span lang="gu" className="font-medium">
                      {c.name}
                    </span>
                    <a href={`tel:${c.tel}`} lang="gu" className="font-bold text-brand-700 hover:underline">
                      {c.phone}
                    </a>
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal delay={160} className="overflow-hidden rounded-[1.25rem] shadow-soft ring-1 ring-line">
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
                className="flex items-center justify-between bg-white px-5 py-3 text-sm font-semibold text-brand-700 hover:bg-brand-50"
              >
                Open in Google Maps <ArrowUpRight className="size-4" aria-hidden="true" />
                <span className="sr-only"> (opens in a new tab)</span>
              </a>
            </Reveal>
          </div>

          <Reveal delay={100}>
            <ContactForm email={contact.email} />
            <p className="mt-5 text-sm text-muted">
              To pay your contribution or update details yourself, use the{" "}
              <a href={site.crmUrl} target="_blank" rel="noopener noreferrer" className="font-semibold text-brand-700 underline">
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
