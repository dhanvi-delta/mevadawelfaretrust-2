import { ButtonLink } from "@/components/shared/ButtonLink";
import { Reveal } from "@/components/shared/Reveal";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { DocumentCard } from "@/components/downloads/DocumentCard";
import { documents } from "@/data/documents";

const featured = ["scheme-rules", "notice-june-2022", "claim-form", "crm-portal"];

export function ResourcesPreview() {
  const items = featured.map((id) => documents.find((d) => d.id === id)!).filter(Boolean);
  return (
    <section className="py-20 sm:py-24" aria-labelledby="resources-heading">
      <div className="container-page">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <SectionHeading
            id="resources-heading"
            eyebrow="Downloads & resources"
            title="Forms, rules and important documents"
          />
          <ButtonLink href="/downloads" variant="secondary" className="self-start md:self-auto">
            View all resources
          </ButtonLink>
        </div>
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((doc, i) => (
            <Reveal key={doc.id} delay={i * 70}>
              <DocumentCard doc={doc} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
