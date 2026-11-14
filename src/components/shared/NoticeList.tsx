"use client";

import { useMemo, useState } from "react";
import type { Notice } from "@/types";
import { EmptyState, FilterChips, SearchField } from "@/components/shared/ListControls";
import { NoticeCard } from "@/components/shared/NoticeCard";
import { matchesQuery } from "@/lib/utils";

type Cat = "all" | Notice["category"];

export function NoticeList({ notices }: { notices: Notice[] }) {
  const [query, setQuery] = useState("");
  const [cat, setCat] = useState<Cat>("all");
  const [year, setYear] = useState("all");

  const years = useMemo(() => Array.from(new Set(notices.map((n) => n.date.slice(0, 4)))).sort().reverse(), [notices]);

  const filtered = notices.filter(
    (n) =>
      (cat === "all" || n.category === cat) &&
      (year === "all" || n.date.startsWith(year)) &&
      matchesQuery(`${n.title} ${n.titleEn} ${n.period} ${n.body.join(" ")}`, query),
  );

  const reset = () => {
    setQuery("");
    setCat("all");
    setYear("all");
  };

  return (
    <div>
      <div className="no-print flex flex-col gap-4">
        <SearchField id="notice-search" label="Search notices" value={query} onChange={setQuery} placeholder="Search notices (English or ગુજરાતી)…" className="w-full lg:max-w-xl" />
        <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
          <FilterChips<Cat>
            label="Filter by type"
            value={cat}
            onChange={setCat}
            options={[
              { id: "all", label: "All notices", count: notices.length },
              { id: "death-aid", label: "Death-aid contribution", count: notices.filter((n) => n.category === "death-aid").length },
              { id: "member-update", label: "Member updates", count: notices.filter((n) => n.category === "member-update").length },
            ]}
          />
          <div className="flex items-center gap-2">
            <label htmlFor="notice-year" className="text-sm font-medium text-muted">
              Year
            </label>
            <select
              id="notice-year"
              value={year}
              onChange={(e) => setYear(e.target.value)}
              className="h-9 rounded-full border border-line bg-white px-3 text-sm focus:border-brand-400 focus:ring-4 focus:ring-brand-100 focus:outline-none"
            >
              <option value="all">All years</option>
              {years.map((y) => (
                <option key={y} value={y}>
                  {y}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>
      <p className="sr-only" aria-live="polite">
        {filtered.length} notices found
      </p>
      <div className="mt-8">
        {filtered.length === 0 ? (
          <EmptyState title="No notices match your search" onReset={reset} />
        ) : (
          <ul className="grid gap-5 md:grid-cols-2">
            {filtered.map((n) => (
              <li key={n.slug}>
                <NoticeCard notice={n} featured={n.isLatest} />
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
