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
        <ButtonLink href={site.crmUrl} variant="accent" icon={<UserRound className="size-5" aria-hidden="true" />}>
          Open member CRM portal
        </ButtonLink>
      </PageHero>

      <section className="py-16 sm:py-20">
        <div className="container-page grid gap-10 lg:grid-cols-[1.25fr_1fr]">
          <Reveal className="card overflow-hidden">
            <div className="border-b border-line bg-sand/70 px-6 py-4 sm:px-8">
              <p className="text-sm font-bold text-ink">Message from the Trust</p>
            </div>
            <div className="p-6 sm:p-8">
              <p lang="gu" className="text-lg font-semibold text-brand-800">
                {memberUpdateMessageGu.salutation}
              </p>
              <p lang="gu" className="mt-3 text-[1.05rem]">
                {memberUpdateMessageGu.body}
              </p>
              <a
                href={site.crmUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 flex flex-col gap-1 rounded-2xl bg-mint p-5 ring-1 ring-brand-100 transition hover:ring-brand-300 sm:flex-row sm:items-center sm:justify-between"
              >
                <span>
                  <span className="block font-bold text-brand-800">{memberUpdateMessageGu.linkLabel}</span>
                  <span className="text-sm break-all text-muted">{site.crmUrl}</span>
                </span>
                <ArrowUpRight className="size-5 text-brand-700" aria-hidden="true" />
                <span className="sr-only"> (opens in a new tab)</span>
              </a>
              <p className="mt-6 text-sm text-muted italic">{memberUpdateMessageGu.closing}</p>
            </div>
          </Reveal>

          <div className="space-y-5">
            {services.map((s, i) => (
              <Reveal key={s.title} delay={i * 80} className="card flex gap-4 p-5">
                <span className="grid size-12 shrink-0 place-items-center rounded-2xl bg-brand-700 text-white">
                  <s.icon className="size-6" aria-hidden="true" />
                </span>
                <div>
                  <h3 className="font-bold">{s.title}</h3>
                  <p className="text-sm text-muted">{s.text}</p>
                </div>
              </Reveal>
            ))}
            <Reveal delay={240} className="rounded-2xl border-2 border-dashed border-brand-200 bg-white p-5">
              <div className="flex gap-3">
                <FileSearch className="mt-0.5 size-5 shrink-0 text-brand-600" aria-hidden="true" />
                <div>
                  <h3 className="font-bold">Member list</h3>
                  <p className="mt-1 text-sm text-muted">
                    The public member list from the old website is no longer available. Member search is provided on the
                    Trust&apos;s CRM portal using your member number or name.
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="bg-mint/60 py-16 sm:py-20" aria-labelledby="address-change-heading">
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
                  <a href={`tel:${c.tel}`} className="card flex items-center justify-between gap-4 p-4 transition hover:shadow-lift">
                    <span className="flex items-center gap-3">
                      <span className="grid size-10 place-items-center rounded-xl bg-mint text-brand-700">
                        <Contact className="size-5" aria-hidden="true" />
                      </span>
                      <span lang="gu" className="font-semibold">
                        {c.name}
                      </span>
                    </span>
                    <span lang="gu" className="inline-flex shrink-0 items-center gap-1.5 text-sm font-bold text-brand-700">
                      <Phone className="size-4" aria-hidden="true" /> {c.phone}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={100} className="card p-6 sm:p-8">
            <h2 className="text-xl font-bold">
              <span lang="gu">{responsibilities.title}</span>{" "}
              <span className="text-base font-medium text-muted">· {responsibilities.titleEn}</span>
            </h2>
            <ol lang="gu" className="mt-5 space-y-3">
              {responsibilities.points.map((p, i) => (
                <li key={i} className="flex gap-3 text-[0.97rem]">
                  <span className="font-bold text-brand-600">({asciiToGuDigits(i + 1)})</span>
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
          <ButtonLink href="/collection-centers" variant="secondary" size="lg" icon={<MapPin className="size-5" aria-hidden="true" />}>
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
