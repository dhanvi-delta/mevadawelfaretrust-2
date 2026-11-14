import { BellRing } from "lucide-react";
import { NoticeList } from "@/components/shared/NoticeList";
import { PageHero } from "@/components/shared/PageHero";
import { sortedNotices } from "@/data/notices";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Notices & Updates",
  description:
    "Official notices of Mevada Welfare Trust — death-aid contribution announcements, due dates, late-fee terms and member updates.",
  path: "/notices",
});

export default function NoticesPage() {
  return (
    <>
      <PageHero
        eyebrow="Announcements"
        title="Notices & Updates"
        titleGu="સૂચનાઓ"
        breadcrumbs={[{ name: "Notices", path: "/notices" }]}
        description="Death-aid contribution notices are issued every six months. Members who do not pay by the final date lose membership as per the scheme rules."
      />
      <section className="py-14 sm:py-16">
        <div className="container-page">
          <p className="mb-8 flex items-center gap-2 text-sm text-muted">
            <BellRing className="size-4 text-saffron-600" aria-hidden="true" />
            All notices published by the Trust on its website are listed here.
          </p>
          <NoticeList notices={sortedNotices} />
        </div>
      </section>
    </>
  );
}
