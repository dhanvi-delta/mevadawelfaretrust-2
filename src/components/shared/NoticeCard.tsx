import Link from "next/link";
import { ArrowRight, CalendarDays, HandHeart, UserCog } from "lucide-react";
import type { Notice } from "@/types";
import { cn } from "@/lib/utils";

const categoryMeta = {
  "death-aid": { label: "Death-aid contribution", icon: HandHeart, tone: "bg-saffron-50 text-saffron-700" },
  "member-update": { label: "Member update", icon: UserCog, tone: "bg-mint text-brand-700" },
} as const;

export function NoticeCard({ notice, featured = false }: { notice: Notice; featured?: boolean }) {
  const meta = categoryMeta[notice.category];
  const Icon = meta.icon;
  return (
    <article
      className={cn(
        "card group relative flex h-full flex-col p-6 transition duration-300 hover:-translate-y-1 hover:shadow-lift sm:p-7",
        featured && "ring-2 ring-saffron-400/60",
      )}
    >
      <div className="flex flex-wrap items-center gap-2">
        <span className={cn("inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-bold", meta.tone)}>
          <Icon className="size-3.5" aria-hidden="true" />
          {meta.label}
        </span>
        {notice.isLatest && (
          <span className="rounded-full bg-brand-700 px-2.5 py-1 text-[0.7rem] font-bold tracking-wider text-white uppercase">Latest</span>
        )}
      </div>
      <h3 lang={/[઀-૿]/.test(notice.title) ? "gu" : undefined} className="mt-4 text-lg !leading-snug font-bold">
        <Link href={`/notices/${notice.slug}`} className="after:absolute after:inset-0 after:rounded-[1.25rem] hover:text-brand-700">
          {notice.title}
        </Link>
      </h3>
      <p className="mt-2 flex-1 text-[0.95rem] text-muted">{notice.titleEn}</p>
      <div className="mt-6 flex items-center justify-between gap-4 border-t border-line pt-4">
        <p className="inline-flex items-center gap-1.5 text-xs font-medium text-muted">
          <CalendarDays className="size-4 text-brand-500" aria-hidden="true" />
          {notice.dateLabel}
        </p>
        <ArrowRight className="size-5 shrink-0 text-brand-600 transition group-hover:translate-x-1" aria-hidden="true" />
      </div>
    </article>
  );
}
