import { Compass, HandHeart, Info, Scale, Sprout, UsersRound } from "lucide-react";
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
  },
  {
    icon: UsersRound,
    title: "Shared responsibility",
    quote: responsibilities.points[2],
  },
  {
    icon: Sprout,
    title: "Moral duty of every member",
    quote: responsibilities.points[1],
  },
  {
    icon: Compass,
    title: "Voluntary membership",
    quote: cancellation.points[2],
  },
  {
    icon: Scale,
    title: "Accountable governance",
    quote: finalDecisionGu,
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

      <section className="py-16 sm:py-20">
        <div className="container-page">
          <Reveal className="relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-brand-700 to-brand-900 p-8 text-white shadow-lift sm:p-12">
            <div aria-hidden="true" className="absolute -top-16 -right-16 size-64 rounded-full bg-saffron-500/25 blur-3xl" />
            <p className="relative text-sm font-bold tracking-[0.14em] text-saffron-400 uppercase">Mission · હેતુ</p>
            <blockquote lang="gu" className="relative mt-4 max-w-4xl text-xl !leading-relaxed font-semibold sm:text-2xl lg:text-[1.7rem]">
              “{purposeGu}”
            </blockquote>
            <p className="relative mt-6 text-sm text-brand-200">— From the rules of the સામાજીક સુરક્ષા યોજના</p>
          </Reveal>
        </div>
      </section>

      <section className="bg-mint/60 py-16 sm:py-20" aria-labelledby="values-heading">
        <div className="container-page">
          <SectionHeading
            id="values-heading"
            eyebrow="Core values"
            title="Principles written into our rules"
            description="Each principle below is quoted directly from the scheme rules published by the Trust."
          />
          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {values.map((v, i) => (
              <Reveal key={v.title} delay={(i % 3) * 80} className="card flex flex-col p-7">
                <span className="grid size-12 place-items-center rounded-2xl bg-saffron-50 text-saffron-600">
                  <v.icon className="size-6" aria-hidden="true" />
                </span>
                <h3 className="mt-5 text-lg font-bold">{v.title}</h3>
                <p lang="gu" className="mt-3 text-[0.97rem] text-muted">
                  “{v.quote}”
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="container-page">
          <Reveal className="flex flex-col gap-6 rounded-3xl border-2 border-dashed border-brand-200 bg-white p-7 sm:flex-row sm:items-center sm:p-10">
            <span className="grid size-14 shrink-0 place-items-center rounded-2xl bg-mint text-brand-700">
              <Info className="size-7" aria-hidden="true" />
            </span>
            <div className="flex-1">
              <h2 className="text-xl font-bold">Formal vision statement</h2>
              <p className="mt-2 text-muted">
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
