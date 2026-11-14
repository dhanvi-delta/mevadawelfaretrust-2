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
      <Search
        aria-hidden="true"
        className="pointer-events-none absolute top-1/2 left-4 size-5 -translate-y-1/2 text-teal"
      />
      <input
        id={id}
        type="search"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        autoComplete="off"
        className="h-12 w-full rounded-full border border-line bg-white pr-11 pl-12 text-[0.95rem] text-navy shadow-soft transition placeholder:text-muted/70 focus:border-teal focus:ring-4 focus:ring-pale-teal focus:outline-none [&::-webkit-search-cancel-button]:hidden"
      />
      {value && (
        <button
          type="button"
          onClick={() => onChange("")}
          className="absolute top-1/2 right-3 grid size-7 -translate-y-1/2 place-items-center rounded-full text-muted hover:bg-mist hover:text-navy transition"
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
              "inline-flex h-9 items-center gap-1.5 rounded-full px-4 text-xs font-bold transition-all duration-200 cursor-pointer",
              active
                ? "bg-deep-teal text-white shadow-sm"
                : "bg-white text-navy ring-1 ring-line hover:bg-pale-teal/60 hover:text-deep-teal",
            )}
          >
            <span>{opt.label}</span>
            {opt.count !== undefined && (
              <span
                className={cn(
                  "rounded-full px-1.5 py-0.2 text-[0.68rem] font-bold",
                  active ? "bg-white/20 text-white" : "bg-pale-teal text-deep-teal",
                )}
              >
                {opt.count}
              </span>
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
    <div className="no-print mt-8 flex flex-col items-center justify-between gap-3 sm:flex-row border-t border-line/80 pt-5">
      <p className="text-xs text-muted" aria-live="polite">
        Showing <strong className="text-navy font-bold">{start}</strong>–<strong className="text-navy font-bold">{end}</strong> of{" "}
        <strong className="text-navy font-bold">{total}</strong> {noun}
      </p>
      {pageCount > 1 && (
        <nav aria-label="Pagination" className="flex items-center gap-1.5">
          <button
            type="button"
            onClick={() => onChange(page - 1)}
            disabled={page === 1}
            className="grid size-9 place-items-center rounded-full bg-white text-navy ring-1 ring-line transition hover:bg-pale-teal disabled:cursor-not-allowed disabled:opacity-40"
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
                "grid size-9 place-items-center rounded-full text-xs font-bold transition-all",
                p === page
                  ? "bg-deep-teal text-white shadow-sm"
                  : "bg-white text-navy ring-1 ring-line hover:bg-pale-teal",
              )}
            >
              {p}
            </button>
          ))}
          <button
            type="button"
            onClick={() => onChange(page + 1)}
            disabled={page === pageCount}
            className="grid size-9 place-items-center rounded-full bg-white text-navy ring-1 ring-line transition hover:bg-pale-teal disabled:cursor-not-allowed disabled:opacity-40"
            aria-label="Next page"
          >
            <ChevronRight className="size-4" aria-hidden="true" />
          </button>
        </nav>
      )}
    </div>
  );
}

export function EmptyState({
  title,
  children,
  onReset,
}: {
  title: string;
  children?: ReactNode;
  onReset?: () => void;
}) {
  return (
    <div className="card flex flex-col items-center px-6 py-14 text-center bg-white" role="status">
      <span className="grid size-14 place-items-center rounded-2xl bg-pale-teal text-deep-teal">
        <SearchX className="size-7" aria-hidden="true" />
      </span>
      <h3 className="mt-4 text-lg font-bold text-navy">{title}</h3>
      {children && <div className="mt-1 max-w-md text-sm text-muted leading-relaxed">{children}</div>}
      {onReset && (
        <button
          type="button"
          onClick={onReset}
          className="mt-5 rounded-full px-4 py-2 text-xs font-bold text-deep-teal ring-1 ring-deep-teal/30 hover:bg-pale-teal transition"
        >
          Clear filters
        </button>
      )}
    </div>
  );
}
