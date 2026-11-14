import { Compass, HandHeart, Info, Scale, Sprout, UsersRound, Quote } from "lucide-react";
import { ButtonLink } from "@/components/shared/ButtonLink";
import { PageHero } from "@/components/shared/PageHero";
import { Reveal } from "@/components/shared/Reveal";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { contact, purposeGu } from "@/data/content";
import { finalDecisionGu, ruleSections } from "@/data/schemes";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Vision & Mission",
  description:
    "The purpose of the Mevada Welfare Trust's Social Security Scheme — financial security for the heirs of members — and the principles stated in its rules.",
  path: "/vision-mission",
});

const responsibilities = ruleSections.find((s) => s.id === "responsibilities")!;
const cancellation = ruleSections.find((s) => s.id === "cancellation")!;

/** Core values drawn word-for-word from the published rules. */
const values = [
  {
    icon: HandHeart,
    title: "Support in times of loss",
    quote: purposeGu,
    bg: "from-white to-pale-teal/25",
  },
  {
    icon: UsersRound,
    title: "Shared responsibility",
    quote: responsibilities.points[2],
    bg: "from-white to-pale-cream/35",
  },
  {
    icon: Sprout,
    title: "Moral duty of every member",
    quote: responsibilities.points[1],
    bg: "from-white to-pale-blue/25",
  },
  {
    icon: Compass,
    title: "Voluntary membership",
    quote: cancellation.points[2],
    bg: "from-white to-pale-teal/20",
  },
  {
    icon: Scale,
    title: "Accountable governance",
    quote: finalDecisionGu,
    bg: "from-white to-pale-cream/30",
  },
];

export default function VisionMissionPage() {
  return (
    <>
      <PageHero
        eyebrow="Vision & Mission"
        title="Our purpose"
        titleGu="હેતુ"
        breadcrumbs={[
          { name: "About", path: "/about" },
          { name: "Vision & Mission", path: "/vision-mission" },
        ]}
        description="Why the Trust exists, in its own words."
      />

      {/* Main Mission banner */}
      <section className="relative overflow-hidden py-16 sm:py-20">
        <div className="container-page">
          <Reveal className="relative overflow-hidden rounded-[2.25rem] bg-gradient-to-br from-navy via-deep-teal to-[#052b3b] p-8 text-white shadow-lift sm:p-12">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -top-16 -right-16 size-64 rounded-full bg-gold/20 blur-3xl"
            />
            <div className="pointer-events-none absolute right-6 top-6 text-white/5" aria-hidden="true">
              <Quote className="size-24" />
            </div>

            <p className="relative text-xs font-bold tracking-[0.16em] text-warm-gold uppercase">Mission · હેતુ</p>
            <blockquote lang="gu" className="relative mt-4 max-w-4xl text-xl !leading-relaxed font-bold sm:text-2xl lg:text-[1.75rem] text-white">
              “{purposeGu}”
            </blockquote>
            <p className="relative mt-6 text-xs text-pale-teal/80">— From the rules of the સામાજીક સુરક્ષા યોજના</p>
          </Reveal>
        </div>
      </section>

      {/* Core values */}
      <section className="relative overflow-hidden bg-mist/60 py-16 sm:py-20" aria-labelledby="values-heading">
        <div className="container-page relative">
          <SectionHeading
            id="values-heading"
            eyebrow="Core values"
            title="Principles written into our rules"
            description="Each principle below is quoted directly from the scheme rules published by the Trust."
          />
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {values.map((v, i) => (
              <Reveal
                key={v.title}
                delay={(i % 3) * 80}
                className={`card flex flex-col justify-between p-7 bg-gradient-to-br ${v.bg} border border-line shadow-soft hover:-translate-y-2 hover:shadow-lift transition-all duration-300`}
              >
                <div>
                  <span className="grid size-12 place-items-center rounded-2xl bg-pale-teal text-deep-teal ring-1 ring-teal/20">
                    <v.icon className="size-6" aria-hidden="true" />
                  </span>
                  <h3 className="mt-5 font-display text-lg font-bold text-navy">{v.title}</h3>
                  <p lang="gu" className="mt-3 text-xs leading-relaxed text-muted">
                    “{v.quote}”
                  </p>
                </div>
                <div className="mt-6 pt-3.5 border-t border-line/60 flex items-center justify-between text-[0.7rem] font-bold text-teal tracking-wider uppercase">
                  <span>Trust Principle</span>
                  <span className="h-1.5 w-1.5 rounded-full bg-gold" />
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Formal statement placeholder note */}
      <section className="relative overflow-hidden py-16 sm:py-20">
        <div className="container-page">
          <Reveal className="flex flex-col gap-6 rounded-3xl border border-line bg-white p-7 shadow-soft sm:flex-row sm:items-center sm:p-10">
            <span className="grid size-14 shrink-0 place-items-center rounded-2xl bg-pale-teal text-deep-teal">
              <Info className="size-7" aria-hidden="true" />
            </span>
            <div className="flex-1">
              <h2 className="text-xl font-bold text-navy">Formal vision statement</h2>
              <p className="mt-2 text-xs leading-relaxed text-muted">
                The Trust has not yet published a separate vision statement. This space is reserved for it — the
                official wording will appear here once provided by the executive committee.
              </p>
            </div>
            <ButtonLink href={`mailto:${contact.email}`} variant="secondary">
              Contact the Trust
            </ButtonLink>
          </Reveal>
        </div>
      </section>
    </>
  );
}
