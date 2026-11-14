import { ButtonLink } from "@/components/shared/ButtonLink";
import { Reveal } from "@/components/shared/Reveal";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { OfficeBearerCard } from "@/components/trustees/OfficeBearerCard";
import { committeeTitleGu, officeBearers } from "@/data/trustees";

export function TrusteesPreview() {
  return (
    <section className="relative overflow-hidden bg-white py-20 sm:py-24 border-b border-line/60" aria-labelledby="trustees-heading">
      <div className="container-page relative">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <SectionHeading
            id="trustees-heading"
            eyebrow="Trustees & management"
            title="Office bearers of the Trust"
            titleGu={committeeTitleGu}
          />
          <ButtonLink href="/trustees" variant="secondary" className="self-start md:self-auto">
            Full executive committee
          </ButtonLink>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {officeBearers.map((p, i) => (
            <Reveal key={p.slug} delay={(i % 3) * 80}>
              <OfficeBearerCard person={p} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
