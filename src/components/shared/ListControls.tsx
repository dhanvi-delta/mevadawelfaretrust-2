"use client";

import { ChevronLeft, ChevronRight, Search, SearchX, X } from "lucide-react";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export function SearchField({
  id,
  label,
  value,
  onChange,
  placeholder,
  className,
}: {
  id: string;
  label: string;
  value: string;
  onChange: (v: string) => void;
  placeholder?: string;
  className?: string;
}) {
  return (
    <div className={cn("relative", className)}>
      <label htmlFor={id} className="sr-only">
        {label}
      </label>
      <Search aria-hidden="true" className="pointer-events-none absolute top-1/2 left-4 size-5 -translate-y-1/2 text-brand-500" />
      <input
        id={id}
        type="search"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        autoComplete="off"
        className="h-12 w-full rounded-full border border-line bg-white pr-11 pl-12 text-[0.95rem] text-ink shadow-soft transition placeholder:text-muted/70 focus:border-brand-400 focus:ring-4 focus:ring-brand-100 focus:outline-none [&::-webkit-search-cancel-button]:hidden"
      />
      {value && (
        <button
          type="button"
          onClick={() => onChange("")}
          className="absolute top-1/2 right-3 grid size-7 -translate-y-1/2 place-items-center rounded-full text-muted hover:bg-brand-50 hover:text-brand-800"
          aria-label="Clear search"
        >
          <X className="size-4" aria-hidden="true" />
        </button>
      )}
    </div>
  );
}

export function FilterChips<T extends string>({
  options,
  value,
  onChange,
  label,
}: {
  options: { id: T; label: string; count?: number }[];
  value: T;
  onChange: (v: T) => void;
  label: string;
}) {
  return (
    <div role="group" aria-label={label} className="flex flex-wrap gap-2">
      {options.map((opt) => {
        const active = opt.id === value;
        return (
          <button
            key={opt.id}
            type="button"
            aria-pressed={active}
            onClick={() => onChange(opt.id)}
            className={cn(
              "inline-flex h-9 items-center gap-1.5 rounded-full px-4 text-sm font-medium transition",
              active
                ? "bg-brand-700 text-white shadow-soft"
                : "bg-white text-brand-800 ring-1 ring-line hover:bg-brand-50 hover:ring-brand-200",
            )}
          >
            {opt.label}
            {opt.count !== undefined && (
              <span className={cn("rounded-full px-1.5 text-xs", active ? "bg-white/20" : "bg-mint text-brand-700")}>{opt.count}</span>
            )}
          </button>
        );
      })}
    </div>
  );
}

export function Pagination({
  page,
  pageCount,
  onChange,
  start,
  end,
  total,
  noun = "results",
}: {
  page: number;
  pageCount: number;
  onChange: (p: number) => void;
  start: number;
  end: number;
  total: number;
  noun?: string;
}) {
  return (
    <div className="no-print mt-6 flex flex-col items-center justify-between gap-3 sm:flex-row">
      <p className="text-sm text-muted" aria-live="polite">
        Showing <strong className="text-ink">{start}</strong>–<strong className="text-ink">{end}</strong> of{" "}
        <strong className="text-ink">{total}</strong> {noun}
      </p>
      {pageCount > 1 && (
        <nav aria-label="Pagination" className="flex items-center gap-1">
          <button
            type="button"
            onClick={() => onChange(page - 1)}
            disabled={page === 1}
            className="grid size-10 place-items-center rounded-full text-brand-800 ring-1 ring-line transition hover:bg-brand-50 disabled:cursor-not-allowed disabled:opacity-40"
            aria-label="Previous page"
          >
            <ChevronLeft className="size-4" aria-hidden="true" />
          </button>
          {Array.from({ length: pageCount }, (_, i) => i + 1).map((p) => (
            <button
              key={p}
              type="button"
              onClick={() => onChange(p)}
              aria-current={p === page ? "page" : undefined}
              aria-label={`Page ${p}`}
              className={cn(
                "grid size-10 place-items-center rounded-full text-sm font-semibold transition",
                p === page ? "bg-brand-700 text-white" : "text-brand-800 hover:bg-brand-50",
              )}
            >
              {p}
            </button>
          ))}
          <button
            type="button"
            onClick={() => onChange(page + 1)}
            disabled={page === pageCount}
            className="grid size-10 place-items-center rounded-full text-brand-800 ring-1 ring-line transition hover:bg-brand-50 disabled:cursor-not-allowed disabled:opacity-40"
            aria-label="Next page"
          >
            <ChevronRight className="size-4" aria-hidden="true" />
          </button>
        </nav>
      )}
    </div>
  );
}

export function EmptyState({ title, children, onReset }: { title: string; children?: ReactNode; onReset?: () => void }) {
  return (
    <div className="card flex flex-col items-center px-6 py-14 text-center" role="status">
      <span className="grid size-14 place-items-center rounded-2xl bg-mint text-brand-600">
        <SearchX className="size-7" aria-hidden="true" />
      </span>
      <h3 className="mt-4 text-lg font-bold">{title}</h3>
      {children && <div className="mt-1 max-w-md text-sm text-muted">{children}</div>}
      {onReset && (
        <button
          type="button"
          onClick={onReset}
          className="mt-5 rounded-full px-4 py-2 text-sm font-semibold text-brand-700 ring-1 ring-brand-200 hover:bg-brand-50"
        >
          Clear filters
        </button>
      )}
    </div>
  );
}
