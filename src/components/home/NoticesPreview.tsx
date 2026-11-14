import Link from "next/link";
import { ArrowRight, ArrowUpRight, Calendar, FileText } from "lucide-react";
import { ButtonLink } from "@/components/shared/ButtonLink";
import { Reveal } from "@/components/shared/Reveal";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { sortedNotices } from "@/data/notices";

export function NoticesPreview() {
  return (
    <section className="relative overflow-hidden bg-mist/50 py-20 sm:py-24" aria-labelledby="notices-heading">
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

        {/* Right Column: Pale blue rounded panel with white rounded rows */}
        <Reveal delay={100}>
          <div className="rounded-[2rem] border border-line bg-pale-blue/50 p-5 sm:p-7 shadow-soft">
            <div className="mb-5 flex items-center justify-between border-b border-deep-teal/10 pb-4">
              <span className="text-xs font-bold tracking-wider text-deep-teal uppercase">
                Latest Announcements
              </span>
              <Link
                href="/notices"
                className="inline-flex items-center gap-1 text-xs font-bold text-deep-teal hover:text-teal"
              >
                <span>View all</span>
                <ArrowRight className="size-3.5" aria-hidden="true" />
              </Link>
            </div>

            <div className="space-y-3.5">
              {sortedNotices.map((n) => (
                <article
                  key={n.slug}
                  className="group relative flex flex-col gap-3 rounded-2xl border border-line/80 bg-white p-5 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-lift sm:flex-row sm:items-center sm:justify-between"
                >
                  <div className="flex items-start gap-4">
                    {/* Small date block on the left */}
                    <div className="grid size-12 shrink-0 place-items-center rounded-xl bg-pale-teal text-center text-deep-teal">
                      <Calendar className="size-5" aria-hidden="true" />
                    </div>

                    <div>
                      <div className="flex items-center gap-2">
                        {n.isLatest && (
                          <span className="rounded-full bg-deep-teal px-2 py-0.5 text-[0.65rem] font-bold tracking-wider text-white uppercase">
                            Latest
                          </span>
                        )}
                        <span className="text-xs text-muted font-medium">{n.dateLabel}</span>
                      </div>

                      <h3
                        lang={/[઀-૿]/.test(n.title) ? "gu" : undefined}
                        className="mt-1 text-[0.98rem] font-bold text-navy group-hover:text-deep-teal transition-colors"
                      >
                        <Link
                          href={`/notices/${n.slug}`}
                          className="after:absolute after:inset-0 after:rounded-2xl"
                        >
                          {n.title}
                        </Link>
                      </h3>

                      <p className="mt-0.5 text-xs text-muted line-clamp-1">{n.titleEn}</p>
                    </div>
                  </div>

                  {/* Teal download / open icon on the right */}
                  <span className="grid size-9 shrink-0 place-items-center self-end rounded-full bg-mist text-deep-teal transition group-hover:bg-deep-teal group-hover:text-white sm:self-center">
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
