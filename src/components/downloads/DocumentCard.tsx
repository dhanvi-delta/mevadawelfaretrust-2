import Link from "next/link";
import { ArrowRight, ArrowUpRight, Building2, Download, FileText, Globe, ScrollText } from "lucide-react";
import type { ResourceDocument } from "@/types";
import { cn } from "@/lib/utils";

const kindIcon = {
  page: ScrollText,
  office: Building2,
  external: Globe,
  file: FileText,
} as const;

export function DocumentCard({ doc }: { doc: ResourceDocument }) {
  const Icon = kindIcon[doc.kind];
  const isExternal = doc.kind === "external";
  const isFile = doc.kind === "file";
  const ActionIcon = isExternal ? ArrowUpRight : isFile ? Download : ArrowRight;

  const cls = "after:absolute after:inset-0 after:rounded-2xl";

  return (
    <article className="card group relative flex h-full flex-col p-6 transition-all duration-300 hover:-translate-y-2 hover:shadow-lift bg-gradient-to-br from-white to-pale-teal/20 border border-line">
      <div className="flex items-start justify-between gap-4">
        {/* Icon led */}
        <span
          className={cn(
            "grid size-12 shrink-0 place-items-center rounded-2xl transition-transform duration-300 group-hover:scale-105",
            doc.kind === "office"
              ? "bg-pale-cream text-saffron-700 ring-1 ring-gold/30"
              : "bg-pale-teal text-deep-teal ring-1 ring-teal/30",
          )}
        >
          <Icon className="size-6" aria-hidden="true" />
        </span>
        <span className="rounded-full bg-mist px-2.5 py-1 text-[0.72rem] font-bold text-deep-teal ring-1 ring-line">
          {doc.format}
        </span>
      </div>

      <h3 className="mt-5 text-[1.05rem] !leading-snug font-bold text-navy group-hover:text-deep-teal transition-colors">
        {isExternal ? (
          <a href={doc.href} target="_blank" rel="noopener noreferrer" className={cls}>
            {doc.title}
            <span className="sr-only"> (opens in a new tab)</span>
          </a>
        ) : isFile ? (
          <a href={doc.href} download className={cls}>
            {doc.title}
          </a>
        ) : (
          <Link href={doc.href} className={cls}>
            {doc.title}
          </Link>
        )}
      </h3>

      {doc.titleGu && (
        <p lang="gu" className="mt-1 text-xs font-semibold text-gold">
          {doc.titleGu}
        </p>
      )}

      <p className="mt-3 flex-1 text-xs leading-relaxed text-muted">{doc.description}</p>

      {/* Clear action pill button */}
      <div className="mt-6 border-t border-line/80 pt-4 flex items-center justify-between">
        <span className="inline-flex items-center gap-1.5 text-xs font-bold text-deep-teal group-hover:text-teal transition-colors">
          <span>{doc.actionLabel}</span>
          <ActionIcon className="size-3.5 transition-transform duration-200 group-hover:translate-x-1" aria-hidden="true" />
        </span>
        <span className="grid size-7 place-items-center rounded-full bg-mist text-deep-teal transition group-hover:bg-deep-teal group-hover:text-white">
          <ActionIcon className="size-3" aria-hidden="true" />
        </span>
      </div>
    </article>
  );
}
