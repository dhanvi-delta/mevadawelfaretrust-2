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

  const action = (
    <span className="inline-flex items-center gap-1.5 text-sm font-bold text-brand-700">
      {doc.actionLabel}
      <ActionIcon className="size-4 transition group-hover:translate-x-0.5" aria-hidden="true" />
    </span>
  );

  const cls = "after:absolute after:inset-0 after:rounded-[1.25rem]";

  return (
    <article className="card group relative flex h-full flex-col p-6 transition duration-300 hover:-translate-y-1 hover:shadow-lift">
      <div className="flex items-start justify-between gap-4">
        <span
          className={cn(
            "grid size-12 shrink-0 place-items-center rounded-2xl",
            doc.kind === "office" ? "bg-saffron-50 text-saffron-700" : "bg-mint text-brand-700",
          )}
        >
          <Icon className="size-6" aria-hidden="true" />
        </span>
        <span className="rounded-full bg-cream px-2.5 py-1 text-[0.72rem] font-semibold text-muted ring-1 ring-line">{doc.format}</span>
      </div>
      <h3 className="mt-5 text-[1.05rem] !leading-snug font-bold">
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
        <p lang="gu" className="text-sm text-saffron-700">
          {doc.titleGu}
        </p>
      )}
      <p className="mt-3 flex-1 text-sm text-muted">{doc.description}</p>
      <div className="mt-5 border-t border-line pt-4">{action}</div>
    </article>
  );
}
