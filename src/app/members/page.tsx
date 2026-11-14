import { ArrowUpRight, Contact, FileSearch, MapPin, Phone, ReceiptText, RefreshCw, Search, UserRound } from "lucide-react";
import { ButtonLink } from "@/components/shared/ButtonLink";
import { PageHero } from "@/components/shared/PageHero";
import { Reveal } from "@/components/shared/Reveal";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { contact, memberUpdateMessageGu, site } from "@/data/content";
import { ruleSections } from "@/data/schemes";
import { asciiToGuDigits } from "@/lib/utils";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Member Information",
  description:
    "Information for members of Mevada Welfare Trust: search your member record, update address, mobile and e-mail, pay death-aid contribution online and get a digital receipt.",
  path: "/members",
});

const services = [
  { icon: Search, title: "Find your record", text: "Search by member number or name on the Trust's CRM software." },
  { icon: RefreshCw, title: "Update details", text: "Keep your latest address, mobile number and e-mail ID up to date." },
  { icon: ReceiptText, title: "Pay & get a receipt", text: "Pay the death-aid contribution online and receive a digital receipt." },
];

export default function MembersPage() {
  const responsibilities = ruleSections.find((s) => s.id === "responsibilities")!;
  return (
    <>
      <PageHero
        eyebrow="For members"
        title="Member Information"
        titleGu="Welfare Trust Member Detail"
        breadcrumbs={[
          { name: "Members", path: "/members" },
        ]}
        description="Look up your member record, keep your contact details current and pay contributions online."
      >
        <ButtonLink href={site.crmUrl} variant="accent" icon={<UserRound className="size-4.5 text-navy" aria-hidden="true" />}>
          Open member CRM portal
        </ButtonLink>
      </PageHero>

      <section className="relative overflow-hidden py-16 sm:py-20">
        <div className="container-page grid gap-10 lg:grid-cols-[1.25fr_1fr]">
          <Reveal className="card overflow-hidden bg-white border border-line shadow-soft">
            <div className="border-b border-line bg-pale-cream/70 px-6 py-4 sm:px-8">
              <p className="text-xs font-bold tracking-wider text-saffron-700 uppercase">Message from the Trust</p>
            </div>
            <div className="p-6 sm:p-8">
              <p lang="gu" className="text-lg font-bold text-navy">
                {memberUpdateMessageGu.salutation}
              </p>
              <p lang="gu" className="mt-3 text-xs leading-relaxed text-navy">
                {memberUpdateMessageGu.body}
              </p>
              <a
                href={site.crmUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 flex flex-col gap-1 rounded-2xl bg-pale-teal/60 p-5 ring-1 ring-teal/20 transition hover:ring-teal/50 hover:bg-pale-teal sm:flex-row sm:items-center sm:justify-between"
              >
                <span>
                  <span className="block font-bold text-navy text-sm">{memberUpdateMessageGu.linkLabel}</span>
                  <span className="text-xs break-all text-muted">{site.crmUrl}</span>
                </span>
                <span className="grid size-8 shrink-0 place-items-center rounded-full bg-deep-teal text-white">
                  <ArrowUpRight className="size-4" aria-hidden="true" />
                </span>
                <span className="sr-only"> (opens in a new tab)</span>
              </a>
              <p className="mt-6 text-xs text-muted italic leading-relaxed">{memberUpdateMessageGu.closing}</p>
            </div>
          </Reveal>

          <div className="space-y-5">
            {services.map((s, i) => (
              <Reveal
                key={s.title}
                delay={i * 80}
                className="card flex gap-4 p-5 bg-gradient-to-br from-white to-pale-teal/20 border border-line shadow-soft hover:-translate-y-1 hover:shadow-lift transition-all"
              >
                <span className="grid size-12 shrink-0 place-items-center rounded-2xl bg-deep-teal text-white shadow-soft">
                  <s.icon className="size-6" aria-hidden="true" />
                </span>
                <div>
                  <h3 className="font-bold text-navy text-sm">{s.title}</h3>
                  <p className="text-xs text-muted mt-1 leading-relaxed">{s.text}</p>
                </div>
              </Reveal>
            ))}
            <Reveal delay={240} className="rounded-2xl border border-line bg-white p-5 shadow-soft">
              <div className="flex gap-3">
                <FileSearch className="mt-0.5 size-5 shrink-0 text-teal" aria-hidden="true" />
                <div>
                  <h3 className="font-bold text-navy text-sm">Member list</h3>
                  <p className="mt-1 text-xs text-muted leading-relaxed">
                    The public member list from the old website is no longer available. Member search is provided on the
                    Trust&apos;s CRM portal using your member number or name.
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-mist/60 py-16 sm:py-20" aria-labelledby="address-change-heading">
        <div className="container-page grid gap-10 lg:grid-cols-2">
          <Reveal>
            <SectionHeading
              id="address-change-heading"
              eyebrow="Address change"
              title="Changed your address?"
              titleGu="સરનામામાં ફેરફાર માટે"
              description="Inform the Trust in writing, or contact one of the following:"
            />
            <ul className="mt-6 space-y-3">
              {contact.addressChangeContacts.map((c) => (
                <li key={c.tel}>
                  <a
                    href={`tel:${c.tel}`}
                    className="card flex items-center justify-between gap-4 p-4.5 bg-white border border-line shadow-soft transition hover:-translate-y-0.5 hover:shadow-lift"
                  >
                    <span className="flex items-center gap-3">
                      <span className="grid size-10 place-items-center rounded-xl bg-pale-teal text-deep-teal">
                        <Contact className="size-5" aria-hidden="true" />
                      </span>
                      <span lang="gu" className="font-bold text-navy text-sm">
                        {c.name}
                      </span>
                    </span>
                    <span lang="gu" className="inline-flex shrink-0 items-center gap-1.5 rounded-full bg-deep-teal/10 px-3 py-1 text-xs font-bold text-deep-teal hover:bg-deep-teal hover:text-white transition-colors">
                      <Phone className="size-3.5" aria-hidden="true" /> {c.phone}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={100} className="card p-6 sm:p-8 bg-white border border-line shadow-soft">
            <h2 className="text-xl font-bold text-navy">
              <span lang="gu">{responsibilities.title}</span>{" "}
              <span className="text-sm font-semibold text-muted">· {responsibilities.titleEn}</span>
            </h2>
            <ol lang="gu" className="mt-5 space-y-3">
              {responsibilities.points.map((p, i) => (
                <li key={i} className="flex gap-3 text-xs leading-relaxed text-navy">
                  <span className="font-bold text-deep-teal shrink-0">({asciiToGuDigits(i + 1)})</span>
                  <span>{p}</span>
                </li>
              ))}
            </ol>
          </Reveal>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="container-page grid gap-5 md:grid-cols-3">
          <ButtonLink href="/death-members" variant="secondary" size="lg">
            Check contribution amount
          </ButtonLink>
          <ButtonLink href="/collection-centers" variant="secondary" size="lg" icon={<MapPin className="size-4.5" aria-hidden="true" />}>
            Nearest collection centre
          </ButtonLink>
          <ButtonLink href="/notices" variant="secondary" size="lg">
            Latest notices
          </ButtonLink>
        </div>
      </section>
    </>
  );
}
