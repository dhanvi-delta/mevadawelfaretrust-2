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
          <a key={i} href={part} target="_blank" rel="noopener noreferrer" className="font-semibold break-all text-deep-teal underline">
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

      <section className="relative overflow-hidden py-12 sm:py-16">
        <div className="container-page max-w-4xl">
          <article className="card overflow-hidden bg-white border border-line shadow-soft">
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
              <div className="flex flex-wrap gap-3 text-xs">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-pale-teal px-3 py-1 font-bold text-deep-teal ring-1 ring-teal/20">
                  <CalendarDays className="size-3.5 text-teal" aria-hidden="true" /> {notice.dateLabel}
                </span>
                {notice.deceasedCount !== undefined && (
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-pale-cream px-3 py-1 font-bold text-saffron-700 ring-1 ring-gold/30">
                    <Users className="size-3.5 text-gold" aria-hidden="true" /> {notice.deceasedCount} members deceased · {notice.period}
                  </span>
                )}
              </div>

              <h2 lang={isGu ? "gu" : undefined} className="mt-6 text-2xl font-extrabold text-navy sm:text-3xl leading-snug">
                {notice.title}
              </h2>

              <div lang="gu" className="prose-gu mt-6 text-xs leading-relaxed text-navy space-y-3">
                {notice.salutation && <p className="font-bold text-navy text-sm">{notice.salutation}</p>}
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
                <div lang="gu" className="mt-10 grid gap-6 border-t border-line/80 pt-6 sm:grid-cols-2">
                  {notice.signatories.map((s) => (
                    <p key={s.name}>
                      <span className="block font-bold text-navy text-sm">{s.name}</span>
                      <span className="text-xs text-muted">{s.role}</span>
                    </p>
                  ))}
                </div>
              )}

              {notice.link && (
                <a
                  href={notice.link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-shimmer no-print mt-8 inline-flex h-11 items-center gap-2 rounded-full bg-gold px-6 text-xs font-bold text-navy shadow-md transition hover:bg-warm-gold hover:-translate-y-0.5"
                >
                  <span lang={/[઀-૿]/.test(notice.link.label) ? "gu" : undefined}>{notice.link.label}</span>
                  <ArrowUpRight className="size-4" aria-hidden="true" />
                  <span className="sr-only"> (opens in a new tab)</span>
                </a>
              )}
            </div>
          </article>

          <div className="no-print mt-8 flex flex-wrap items-center justify-between gap-4 text-xs font-bold">
            <Link href="/notices" className="inline-flex items-center gap-2 text-deep-teal hover:text-navy hover:underline">
              <ArrowLeft className="size-4" aria-hidden="true" /> All notices
            </Link>
            {notice.deceasedCount !== undefined && (
              <Link href="/death-members" className="inline-flex items-center gap-2 text-deep-teal hover:text-navy hover:underline">
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
