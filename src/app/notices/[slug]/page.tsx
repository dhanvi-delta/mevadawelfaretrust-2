import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight, CalendarDays, Users } from "lucide-react";
import { ContributionTable } from "@/components/shared/ContributionTable";
import { PageHero } from "@/components/shared/PageHero";
import { PrintButton } from "@/components/shared/PrintButton";
import { site } from "@/data/content";
import { getNotice, notices } from "@/data/notices";
import { asciiToGuDigits } from "@/lib/utils";
import { pageMetadata } from "@/lib/seo";

export function generateStaticParams() {
  return notices.map((n) => ({ slug: n.slug }));
}

export async function generateMetadata({ params }: PageProps<"/notices/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const notice = getNotice(slug);
  if (!notice) return { title: "Notice not found" };
  return pageMetadata({
    title: notice.titleEn,
    description: `${notice.titleEn}. ${notice.dateLabel}.`,
    path: `/notices/${notice.slug}`,
  });
}

/** Renders text, turning the CRM URL inside Gujarati notices into a working link. */
function Linkify({ text }: { text: string }) {
  const parts = text.split(/(https?:\/\/[^\s]+)/g);
  return (
    <>
      {parts.map((part, i) =>
        /^https?:\/\//.test(part) ? (
          <a key={i} href={part} target="_blank" rel="noopener noreferrer" className="font-semibold break-all text-brand-700 underline">
            {part}
          </a>
        ) : (
          part
        ),
      )}
    </>
  );
}

export default async function NoticePage({ params }: PageProps<"/notices/[slug]">) {
  const { slug } = await params;
  const notice = getNotice(slug);
  if (!notice) notFound();

  const isGu = /[઀-૿]/.test(notice.title);

  return (
    <>
      <PageHero
        eyebrow={notice.category === "death-aid" ? "Death-aid contribution notice" : "Member update"}
        title={notice.titleEn}
        breadcrumbs={[
          { name: "Notices", path: "/notices" },
          { name: notice.period, path: `/notices/${notice.slug}` },
        ]}
      >
        <PrintButton label="Print / Save notice" />
      </PageHero>

      <section className="py-12 sm:py-16">
        <div className="container-page max-w-4xl">
          <article className="card overflow-hidden">
            <div className="border-b border-line bg-white p-4 sm:p-6">
              <Image
                src="/images/letterhead.png"
                alt={`Letterhead of ${site.name}`}
                width={883}
                height={141}
                sizes="(min-width: 896px) 830px, 92vw"
                className="h-auto w-full"
              />
            </div>
            <div className="p-6 sm:p-10">
              <div className="flex flex-wrap gap-3 text-sm">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-mint px-3 py-1 font-semibold text-brand-700">
                  <CalendarDays className="size-4" aria-hidden="true" /> {notice.dateLabel}
                </span>
                {notice.deceasedCount !== undefined && (
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-saffron-50 px-3 py-1 font-semibold text-saffron-700">
                    <Users className="size-4" aria-hidden="true" /> {notice.deceasedCount} members deceased · {notice.period}
                  </span>
                )}
              </div>

              <h2 lang={isGu ? "gu" : undefined} className="mt-6 text-2xl font-bold text-brand-800 sm:text-3xl">
                {notice.title}
              </h2>

              <div lang="gu" className="prose-gu mt-6 text-[1.05rem]">
                {notice.salutation && <p className="font-semibold">{notice.salutation}</p>}
                {notice.body.map((p, i) => (
                  <p key={i}>
                    <Linkify text={p} />
                  </p>
                ))}
              </div>

              {notice.table && (
                <div className="mt-8">
                  <ContributionTable table={notice.table} />
                </div>
              )}

              {notice.signatories && (
                <div lang="gu" className="mt-10 grid gap-6 border-t border-line pt-6 sm:grid-cols-2">
                  {notice.signatories.map((s) => (
                    <p key={s.name}>
                      <span className="block font-semibold">{s.name}</span>
                      <span className="text-muted">{s.role}</span>
                    </p>
                  ))}
                </div>
              )}

              {notice.link && (
                <a
                  href={notice.link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="no-print mt-8 inline-flex h-12 items-center gap-2 rounded-full bg-saffron-500 px-6 font-bold text-brand-900 transition hover:bg-saffron-400"
                >
                  <span lang={/[઀-૿]/.test(notice.link.label) ? "gu" : undefined}>{notice.link.label}</span>
                  <ArrowUpRight className="size-4" aria-hidden="true" />
                  <span className="sr-only"> (opens in a new tab)</span>
                </a>
              )}
            </div>
          </article>

          <div className="no-print mt-8 flex flex-wrap items-center justify-between gap-4">
            <Link href="/notices" className="inline-flex items-center gap-2 font-semibold text-brand-700 hover:underline">
              <ArrowLeft className="size-4" aria-hidden="true" /> All notices
            </Link>
            {notice.deceasedCount !== undefined && (
              <Link href="/death-members" className="inline-flex items-center gap-2 font-semibold text-brand-700 hover:underline">
                Look up your amount by member number
              </Link>
            )}
          </div>
          {notice.deceasedCount !== undefined && (
            <p className="sr-only" lang="gu">
              કુલ {asciiToGuDigits(notice.deceasedCount)} સભાસદો
            </p>
          )}
        </div>
      </section>
    </>
  );
}
