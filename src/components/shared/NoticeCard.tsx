import Link from "next/link";
import { ArrowUpRight, CalendarDays, FileText, HandHeart, UserCog } from "lucide-react";
import type { Notice } from "@/types";
import { cn } from "@/lib/utils";

const categoryMeta = {
  "death-aid": {
    label: "Death-aid contribution",
    icon: HandHeart,
    tone: "bg-pale-cream text-saffron-700 ring-1 ring-gold/30",
  },
  "member-update": {
    label: "Member update",
    icon: UserCog,
    tone: "bg-pale-teal text-deep-teal ring-1 ring-teal/30",
  },
} as const;

export function NoticeCard({ notice, featured = false }: { notice: Notice; featured?: boolean }) {
  const meta = categoryMeta[notice.category];
  const Icon = meta.icon;

  return (
    <article
      className={cn(
        "card group relative flex h-full flex-col p-6 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-lift sm:p-7 bg-gradient-to-br from-white to-pale-blue/20",
        featured && "ring-2 ring-gold/50 shadow-md",
      )}
    >
      <div className="flex flex-wrap items-center justify-between gap-2">
        <span className={cn("inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-bold", meta.tone)}>
          <Icon className="size-3.5" aria-hidden="true" />
          {meta.label}
        </span>
        {notice.isLatest && (
          <span className="rounded-full bg-deep-teal px-3 py-0.5 text-[0.7rem] font-bold tracking-wider text-white uppercase shadow-sm">
            Latest
          </span>
        )}
      </div>

      <h3
        lang={/[઀-૿]/.test(notice.title) ? "gu" : undefined}
        className="mt-4 text-lg font-bold !leading-snug text-navy group-hover:text-deep-teal transition-colors"
      >
        <Link
          href={`/notices/${notice.slug}`}
          className="after:absolute after:inset-0 after:rounded-2xl focus:outline-none"
        >
          {notice.title}
        </Link>
      </h3>

      <p className="mt-2 flex-1 text-[0.92rem] text-muted leading-relaxed">{notice.titleEn}</p>

      <div className="mt-6 flex items-center justify-between gap-4 border-t border-line/80 pt-4">
        <p className="inline-flex items-center gap-1.5 text-xs font-semibold text-muted">
          <CalendarDays className="size-3.5 text-teal" aria-hidden="true" />
          <span>{notice.dateLabel}</span>
        </p>

        <span className="grid size-8 place-items-center rounded-full bg-pale-teal text-deep-teal transition-transform group-hover:scale-110 group-hover:bg-deep-teal group-hover:text-white">
          {notice.table ? (
            <FileText className="size-4" aria-hidden="true" />
          ) : (
            <ArrowUpRight className="size-4" aria-hidden="true" />
          )}
        </span>
      </div>
    </article>
  );
}
