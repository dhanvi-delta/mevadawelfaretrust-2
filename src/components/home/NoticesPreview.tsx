import { ButtonLink } from "@/components/shared/ButtonLink";
import { NoticeCard } from "@/components/shared/NoticeCard";
import { Reveal } from "@/components/shared/Reveal";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { sortedNotices } from "@/data/notices";

export function NoticesPreview() {
  return (
    <section className="bg-sand/60 py-20 sm:py-24" aria-labelledby="notices-heading">
      <div className="container-page grid gap-12 lg:grid-cols-[0.8fr_2fr]">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <SectionHeading
            id="notices-heading"
            eyebrow="Notices & updates"
            title="Important announcements for members"
            description="Death-aid contribution notices are issued twice a year. Pay on time to keep your membership active."
          />
          <div className="mt-8 flex flex-wrap gap-3">
            <ButtonLink href="/notices">All notices</ButtonLink>
            <ButtonLink href="/death-members" variant="secondary">
              Check my amount
            </ButtonLink>
          </div>
        </div>
        <div className="grid gap-5 md:grid-cols-2">
          {sortedNotices.map((n, i) => (
            <Reveal key={n.slug} delay={i * 80} className={i === 0 ? "md:col-span-2" : undefined}>
              <NoticeCard notice={n} featured={n.isLatest} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
