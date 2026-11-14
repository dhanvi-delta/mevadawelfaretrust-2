import Link from "next/link";
import { ArrowRight, FileText, Info } from "lucide-react";
import { ContributionTable } from "@/components/shared/ContributionTable";
import { PageHero } from "@/components/shared/PageHero";
import { Reveal } from "@/components/shared/Reveal";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { ContributionLookup } from "@/components/schemes/ContributionLookup";
import { site } from "@/data/content";
import { deathAidNotices } from "@/data/notices";
import { ruleSections } from "@/data/schemes";
import { asciiToGuDigits } from "@/lib/utils";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Death Aid & Member Contributions",
  description:
    "Death-aid (મૃત્યુ સહાય) records of Mevada Welfare Trust: number of deceased members per period, contribution amounts by member number, and how heirs claim support.",
  path: "/death-members",
});

export default function DeathMembersPage() {
  const benefit = ruleSections.find((s) => s.id === "benefit")!;
  return (
    <>
      <PageHero
        eyebrow="Death aid"
        title="Death Aid & Contributions"
        titleGu="મૃત્યુ સહાય ફાળો"
        breadcrumbs={[
          { name: "Members", path: "/members" },
          { name: "Death Aid", path: "/death-members" },
        ]}
        description="Records of members who passed away in each notice period, the contribution due from every member, and how families claim support."
      />

      <section className="relative overflow-hidden py-16 sm:py-20">
        <div className="container-page grid gap-10 lg:grid-cols-[1fr_1.1fr] [&>*]:min-w-0">
          <Reveal>
            <ContributionLookup notices={deathAidNotices} crmUrl={site.crmUrl} />
          </Reveal>

          <Reveal delay={100}>
            <SectionHeading eyebrow="Death-aid records" title="Deceased members by period" titleGu="સભાસદોના અવસાનની વિગત" />
            <div className="mt-6 overflow-x-auto rounded-2xl border border-line bg-white shadow-soft">
              <table className="table-clean min-w-[30rem]">
                <thead>
                  <tr>
                    <th scope="col">Period</th>
                    <th scope="col" className="!text-right">
                      Members deceased
                    </th>
                    <th scope="col">Due date</th>
                    <th scope="col">
                      <span className="sr-only">Notice</span>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {deathAidNotices.map((n) => (
                    <tr key={n.slug}>
                      <td className="font-bold text-navy text-xs sm:text-sm">{n.period}</td>
                      <td className="text-right">
                        <span lang="gu" className="font-display text-lg font-extrabold text-deep-teal">
                          {asciiToGuDigits(n.deceasedCount ?? 0)}
                        </span>
                        <span className="ml-1 text-xs text-muted">({n.deceasedCount})</span>
                      </td>
                      <td className="text-xs text-muted">{n.dateLabel.split("·")[0].replace("Due by", "").trim()}</td>
                      <td>
                        <Link
                          href={`/notices/${n.slug}`}
                          className="inline-flex items-center gap-1 text-xs font-bold whitespace-nowrap text-deep-teal hover:text-teal hover:underline"
                        >
                          Notice <ArrowRight className="size-3.5" aria-hidden="true" />
                        </Link>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="mt-4 flex gap-2.5 rounded-2xl bg-pale-cream/60 p-4 text-xs text-muted border border-gold/25">
              <Info className="mt-0.5 size-4 shrink-0 text-gold" aria-hidden="true" />
              <span>
                The Trust publishes the number of deceased members in each contribution notice. A name-wise list is not
                published online — please contact the Trust office for details.
              </span>
            </p>
          </Reveal>
        </div>
      </section>

      <section className="relative overflow-hidden bg-mist/60 py-16 sm:py-20" aria-labelledby="slabs-heading">
        <div className="container-page">
          <SectionHeading
            id="slabs-heading"
            eyebrow="Contribution tables"
            title="Amount payable by member number"
            description="Members who joined later pay only for deaths after their joining date, so the amount differs by member-number range."
          />
          <div className="mt-10 grid gap-6 lg:grid-cols-2 [&>*]:min-w-0">
            {deathAidNotices.map((n) =>
              n.table ? (
                <Reveal key={n.slug} className="card p-5 sm:p-6 bg-white border border-line shadow-soft">
                  <div className="mb-4 flex items-start justify-between gap-4 border-b border-line pb-3">
                    <div>
                      <h3 className="text-base font-bold text-navy">{n.period}</h3>
                      <p className="text-xs text-muted">{n.dateLabel}</p>
                    </div>
                    <Link
                      href={`/notices/${n.slug}`}
                      className="inline-flex shrink-0 items-center gap-1 text-xs font-bold text-deep-teal hover:text-teal hover:underline"
                    >
                      <FileText className="size-3.5" aria-hidden="true" /> Full notice
                    </Link>
                  </div>
                  <ContributionTable table={n.table} />
                </Reveal>
              ) : null,
            )}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden py-16 sm:py-20" aria-labelledby="claim-heading">
        <div className="container-page">
          <Reveal className="card p-6 sm:p-10 bg-white border border-line shadow-soft">
            <h2 id="claim-heading" className="text-2xl font-bold sm:text-3xl text-navy">
              <span lang="gu">{benefit.title}</span>
            </h2>
            <p className="mt-1 text-xs text-muted">{benefit.titleEn} — how heirs claim support</p>
            <ol lang="gu" className="mt-8 grid gap-4 md:grid-cols-2">
              {benefit.points.map((p, i) => (
                <li key={i} className="flex gap-4 rounded-2xl bg-pale-teal/30 p-4.5 border border-teal/15">
                  <span className="grid size-8 shrink-0 place-items-center rounded-full bg-deep-teal text-xs font-bold text-white">
                    {asciiToGuDigits(i + 1)}
                  </span>
                  <p className="text-xs leading-relaxed text-navy pt-1">{p}</p>
                </li>
              ))}
            </ol>
          </Reveal>
        </div>
      </section>
    </>
  );
}
