import { PageHero } from "@/components/shared/PageHero";
import { PrintButton } from "@/components/shared/PrintButton";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { CommitteeDirectory } from "@/components/trustees/CommitteeDirectory";
import { CommitteeTabs } from "@/components/trustees/CommitteeTabs";
import { site } from "@/data/content";
import { committeeGroups, committeeTerm, committeeTitleGu, photoCommitteeGroups } from "@/data/trustees";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Executive Committee & Trustees",
  description:
    "Office bearers, executive members, internal auditors and advisors of Shree Mevada Suthar Samaj Welfare Trust, Palanpur, with village and contact numbers.",
  path: "/trustees",
  image: "/gallery/photo-005.jpg",
});

export default function TrusteesPage() {
  return (
    <>
      <PageHero
        eyebrow="Trustees & management"
        title="Executive Committee"
        titleGu={`${committeeTitleGu} — ${site.nameGu}`}
        breadcrumbs={[
          { name: "About", path: "/about" },
          { name: "Executive Committee", path: "/trustees" },
        ]}
        description="The Trust is run by its executive committee. The committee's decision on the scheme is final and binding on all."
      >
        <PrintButton label="Print committee list" />
      </PageHero>

      <section className="relative overflow-hidden py-16 sm:py-20" aria-labelledby="bearers-heading">
        <div className="container-page">
          <SectionHeading
            id="bearers-heading"
            eyebrow={`Executive committee · ${committeeTerm.en}`}
            title="Leadership of the Trust"
            titleGu={`કારોબારી કમિટિ — ${committeeTerm.gu}`}
          />
          <div className="mt-10">
            <CommitteeTabs groups={photoCommitteeGroups} />
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-mist/60 py-16 sm:py-20" aria-labelledby="committee-heading">
        <div className="container-page">
          <SectionHeading
            id="committee-heading"
            eyebrow="Full committee"
            title="Members, auditors and advisors"
            description="Search by name, village or phone number. Gujarati and English digits both work."
            className="mb-10"
          />
          <CommitteeDirectory groups={committeeGroups} />
        </div>
      </section>
    </>
  );
}
