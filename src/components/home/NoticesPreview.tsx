import Link from "next/link";
import { ArrowRight, ArrowUpRight, Calendar, FileText } from "lucide-react";
import { ButtonLink } from "@/components/shared/ButtonLink";
import { Reveal } from "@/components/shared/Reveal";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { sortedNotices } from "@/data/notices";

export function NoticesPreview() {
  return (
    <section className="relative overflow-hidden bg-mist/80 py-20 sm:py-24 border-b border-line/60" aria-labelledby="notices-heading">
      <div className="container-page grid gap-12 lg:grid-cols-[0.85fr_1.4fr] lg:items-start">
        {/* Left Column: Heading, description, and action buttons */}
        <div className="lg:sticky lg:top-28 lg:self-start">
          <SectionHeading
            id="notices-heading"
            eyebrow="Notices & updates"
            title="Important announcements for members"
            description="Death-aid contribution notices are issued twice a year. Pay on time to keep your membership active."
          />
          <div className="mt-8 flex flex-wrap gap-3.5">
            <ButtonLink href="/notices" variant="primary" arrow>
              All notices
            </ButtonLink>
            <ButtonLink href="/death-members" variant="secondary">
              Check my amount
            </ButtonLink>
          </div>
        </div>

        {/* Right Column: Pale blue (#E8F2F9) rounded 22px panel with white rounded rows */}
        <Reveal delay={100}>
          <div className="rounded-[22px] border border-teal/15 bg-pale-blue p-6 sm:p-8 shadow-[0_14px_40px_rgba(7,54,74,0.08)]">
            <div className="mb-5 flex items-center justify-between border-b border-deep-teal/10 pb-4">
              <h3 className="font-display text-[20px] font-bold text-navy">
                Latest Updates &amp; Notices
              </h3>
              <Link
                href="/notices"
                className="inline-flex items-center gap-1 text-xs font-bold text-deep-teal hover:text-teal"
              >
                <span>View All</span>
                <ArrowRight className="size-3.5" aria-hidden="true" />
              </Link>
            </div>

            <div className="space-y-3">
              {sortedNotices.map((n) => (
                <article
                  key={n.slug}
                  className="group relative flex flex-col gap-3 rounded-[14px] border border-white/80 bg-white px-4 py-3.5 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md sm:flex-row sm:items-center sm:justify-between"
                >
                  <div className="flex items-center gap-3.5">
                    {/* Rounded date/icon block on the left */}
                    <div className="grid size-11 shrink-0 place-items-center rounded-xl bg-pale-teal text-center text-deep-teal">
                      <Calendar className="size-5 text-teal" aria-hidden="true" />
                    </div>

                    <div className="min-w-0">
                      <div className="flex items-center gap-2">
                        {n.isLatest && (
                          <span className="rounded-full bg-deep-teal px-2 py-0.5 text-[0.62rem] font-bold tracking-wider text-white uppercase">
                            Latest
                          </span>
                        )}
                        <span className="text-[11px] font-semibold text-muted">{n.dateLabel}</span>
                      </div>

                      <h4
                        lang={/[઀-૿]/.test(n.title) ? "gu" : undefined}
                        className="mt-0.5 text-[14px] font-bold text-navy group-hover:text-deep-teal transition-colors line-clamp-1"
                      >
                        <Link
                          href={`/notices/${n.slug}`}
                          className="after:absolute after:inset-0 after:rounded-[14px]"
                        >
                          {n.title}
                        </Link>
                      </h4>

                      <p className="text-[12px] text-muted line-clamp-1">{n.titleEn}</p>
                    </div>
                  </div>

                  {/* Teal download / open icon on the right */}
                  <span className="grid size-8 shrink-0 place-items-center self-end rounded-full bg-pale-teal text-deep-teal transition group-hover:bg-deep-teal group-hover:text-white sm:self-center">
                    {n.table ? (
                      <FileText className="size-4" aria-hidden="true" />
                    ) : (
                      <ArrowUpRight className="size-4" aria-hidden="true" />
                    )}
                  </span>
                </article>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
