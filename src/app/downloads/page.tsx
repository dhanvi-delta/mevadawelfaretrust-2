import { Info } from "lucide-react";
import { DocumentLibrary } from "@/components/downloads/DocumentLibrary";
import { PageHero } from "@/components/shared/PageHero";
import { documentCategories, documents } from "@/data/documents";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Downloads & Forms",
  description:
    "Scheme rules, contribution notices, collection-centre directory, committee list and member forms of Mevada Welfare Trust, Palanpur.",
  path: "/downloads",
});

export default function DownloadsPage() {
  return (
    <>
      <PageHero
        eyebrow="Resources"
        title="Downloads & Forms"
        titleGu="ફોર્મ તથા માહિતી"
        breadcrumbs={[{ name: "Downloads", path: "/downloads" }]}
        description="Printable rules, notices and directories, plus the forms members need. Use “Print / Save PDF” on any page to keep a copy."
      />
      <section className="py-14 sm:py-16">
        <div className="container-page">
          <DocumentLibrary documents={documents} categories={documentCategories} />
          <p className="mt-10 flex gap-3 rounded-2xl bg-sand/80 p-5 text-sm text-muted">
            <Info className="mt-0.5 size-5 shrink-0 text-brand-600" aria-hidden="true" />
            Application, claim and nominee-change forms are issued by the Trust office. Contact the office or your nearest
            collection centre to obtain them.
          </p>
        </div>
      </section>
    </>
  );
}
