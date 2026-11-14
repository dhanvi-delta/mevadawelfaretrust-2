import Link from "next/link";
import { ArrowRight, Ban, BadgeIndianRupee, Gavel, HandCoins, HeartHandshake, ListChecks, ScrollText, UserCheck } from "lucide-react";
import { ButtonLink } from "@/components/shared/ButtonLink";
import { PageHero } from "@/components/shared/PageHero";
import { PrintButton } from "@/components/shared/PrintButton";
import { Reveal } from "@/components/shared/Reveal";
import { site } from "@/data/content";
import { latestNotice } from "@/data/notices";
import { applicationNotesGu, feeIntroGu, finalDecisionGu, membershipFees, ruleSections, scheme, schemeHighlights } from "@/data/schemes";
import { asciiToGuDigits } from "@/lib/utils";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Social Security Scheme (Samajik Suraksha Yojana)",
  description:
    "Complete rules of the Mevada Welfare Trust Social Security Scheme: eligibility (18–50 years), entry fees, ₹50 death-aid contribution, benefits to heirs, member responsibilities and cancellation.",
  path: "/welfare-schemes",
});

const sectionIcons: Record<string, typeof UserCheck> = {
  eligibility: UserCheck,
  contribution: HandCoins,
  benefit: HeartHandshake,
  responsibilities: ListChecks,
  cancellation: Ban,
};

const toc = [
  { id: "purpose", label: "Purpose", gu: "હેતુ" },
  { id: "eligibility", label: "Eligibility", gu: "સભાસદની યોગ્યતા" },
  { id: "entry-fee", label: "Entry fee", gu: "સભાસદની દાખલ ફી" },
  { id: "contribution", label: "Contribution", gu: "મૃત્યુ સહાય ફાળો" },
  { id: "benefit", label: "Benefit to heirs", gu: "મળવા પાત્ર રકમ" },
  { id: "responsibilities", label: "Responsibilities", gu: "સભાસદની જવાબદારી" },
  { id: "cancellation", label: "Cancellation", gu: "સભ્યપદ રદ" },
  { id: "application", label: "Application & final decision", gu: "અરજી" },
];

export default function WelfareSchemesPage() {
  const ordered = ["eligibility", "contribution", "benefit", "responsibilities", "cancellation"];
  return (
    <>
      <PageHero
        eyebrow="Welfare scheme"
        title={scheme.nameEn}
        titleGu={scheme.nameGu}
        breadcrumbs={[{ name: "Welfare Scheme", path: "/welfare-schemes" }]}
        description={scheme.summaryEn}
      >
        <ButtonLink href="/death-members" icon={<BadgeIndianRupee className="size-5" aria-hidden="true" />}>
          Check my contribution
        </ButtonLink>
        <PrintButton label="Print rules" />
      </PageHero>

      {/* Highlights */}
      <section className="border-b border-line/70 bg-white">
        <div className="container-page grid grid-cols-2 gap-px py-2 lg:grid-cols-4">
          {schemeHighlights.map((h) => (
            <div key={h.label} className="px-2 py-6 sm:px-6">
              <p className="text-xs font-semibold tracking-wide text-muted uppercase">{h.label}</p>
              <p className="mt-1 font-display text-2xl font-extrabold text-brand-800 sm:text-3xl">{h.value}</p>
              <p className="mt-1 text-xs text-muted">{h.note}</p>
            </div>
          ))}
        </div>
      </section>

      <div className="container-page grid gap-10 py-14 sm:py-16 lg:grid-cols-[16rem_1fr] lg:gap-14">
        {/* Table of contents */}
        <aside className="no-print min-w-0 lg:sticky lg:top-28 lg:self-start" aria-label="On this page">
          <p className="mb-3 text-xs font-bold tracking-[0.14em] text-saffron-700 uppercase">On this page</p>
          <nav>
            <ol className="flex gap-2 overflow-x-auto pb-2 lg:flex-col lg:gap-1 lg:overflow-visible lg:pb-0">
              {toc.map((t) => (
                <li key={t.id} className="shrink-0">
                  <a
                    href={`#${t.id}`}
                    className="block rounded-xl px-3 py-2 text-sm whitespace-nowrap text-ink/80 ring-1 ring-line transition hover:bg-white hover:text-brand-800 lg:whitespace-normal lg:ring-0"
                  >
                    <span className="font-semibold">{t.label}</span>
                    <span lang="gu" className="hidden text-xs text-muted lg:block">
                      {t.gu}
                    </span>
                  </a>
                </li>
              ))}
            </ol>
          </nav>
          <div className="mt-8 hidden rounded-2xl bg-sand p-5 lg:block">
            <p className="text-sm font-bold text-ink">Latest notice</p>
            <p lang="gu" className="mt-1 text-sm text-muted">
              {latestNotice.title}
            </p>
            <Link href={`/notices/${latestNotice.slug}`} className="mt-3 inline-flex items-center gap-1 text-sm font-bold text-brand-700">
              Read <ArrowRight className="size-4" aria-hidden="true" />
            </Link>
          </div>
        </aside>

        <div className="min-w-0 space-y-8">
          <Reveal as="section" className="card p-6 sm:p-8" aria-labelledby="purpose">
            <div className="flex items-center gap-3">
              <span className="grid size-11 place-items-center rounded-xl bg-saffron-50 text-saffron-600">
                <ScrollText className="size-5" aria-hidden="true" />
              </span>
              <h2 id="purpose" className="text-xl font-bold sm:text-2xl">
                <span lang="gu">હેતુ</span> <span className="text-base font-medium text-muted">· Purpose</span>
              </h2>
            </div>
            <p lang="gu" className="mt-5 text-[1.05rem]">
              {scheme.purposeGu}
            </p>
          </Reveal>

          {ordered.map((id) => {
            const section = ruleSections.find((s) => s.id === id)!;
            const Icon = sectionIcons[id];
            return (
              <div key={id} className="space-y-8">
                <Reveal as="section" className="card p-6 sm:p-8" aria-labelledby={id}>
                  <div className="flex items-start gap-3">
                    <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-mint text-brand-700">
                      <Icon className="size-5" aria-hidden="true" />
                    </span>
                    <h2 id={id} className="text-xl font-bold sm:text-2xl">
                      <span lang="gu">{section.title}</span>{" "}
                      <span className="block text-base font-medium text-muted sm:inline">· {section.titleEn}</span>
                    </h2>
                  </div>
                  <ol lang="gu" className="mt-6 space-y-4">
                    {section.points.map((p, i) => (
                      <li key={i} className="flex gap-4">
                        <span className="grid size-8 shrink-0 place-items-center rounded-full bg-brand-50 text-sm font-bold text-brand-700">
                          {asciiToGuDigits(i + 1)}
                        </span>
                        <p className="pt-0.5 text-[1.02rem]">{p}</p>
                      </li>
                    ))}
                  </ol>
                </Reveal>

                {id === "eligibility" && (
                  <Reveal as="section" className="card p-6 sm:p-8" aria-labelledby="entry-fee">
                    <div className="flex items-center gap-3">
                      <span className="grid size-11 place-items-center rounded-xl bg-mint text-brand-700">
                        <BadgeIndianRupee className="size-5" aria-hidden="true" />
                      </span>
                      <h2 id="entry-fee" className="text-xl font-bold sm:text-2xl">
                        <span lang="gu">સભાસદની દાખલ ફી</span> <span className="text-base font-medium text-muted">· Entry fee</span>
                      </h2>
                    </div>
                    <p lang="gu" className="mt-4 text-muted">
                      {feeIntroGu}
                    </p>
                    <div className="mt-5 grid gap-3 sm:grid-cols-2">
                      {membershipFees.map((f) => (
                        <div key={f.age} className="flex items-center justify-between gap-4 rounded-2xl bg-cream p-4 ring-1 ring-line">
                          <div>
                            <p lang="gu" className="text-sm font-medium">
                              {f.age}
                            </p>
                            <p className="text-xs text-muted">{f.ageEn}</p>
                          </div>
                          <p lang="gu" className="shrink-0 text-lg font-extrabold text-brand-700">
                            {f.fee}
                          </p>
                        </div>
                      ))}
                    </div>
                  </Reveal>
                )}
              </div>
            );
          })}

          <Reveal as="section" className="card p-6 sm:p-8" aria-labelledby="application">
            <div className="flex items-center gap-3">
              <span className="grid size-11 place-items-center rounded-xl bg-mint text-brand-700">
                <Gavel className="size-5" aria-hidden="true" />
              </span>
              <h2 id="application" className="text-xl font-bold sm:text-2xl">
                Application &amp; final decision
              </h2>
            </div>
            <div lang="gu" className="prose-gu mt-5 text-[1.02rem]">
              {applicationNotesGu.map((p) => (
                <p key={p.slice(0, 30)}>{p}</p>
              ))}
            </div>
            <p lang="gu" className="mt-6 rounded-2xl border-l-4 border-saffron-500 bg-saffron-50 p-5 font-bold text-ink">
              {finalDecisionGu}
            </p>
          </Reveal>

          <div className="no-print grid gap-4 sm:grid-cols-3">
            <ButtonLink href="/downloads" variant="secondary">
              Forms &amp; resources
            </ButtonLink>
            <ButtonLink href="/collection-centers" variant="secondary">
              Collection centres
            </ButtonLink>
            <ButtonLink href={site.crmUrl} variant="accent">
              Pay online
            </ButtonLink>
          </div>
        </div>
      </div>
    </>
  );
}
