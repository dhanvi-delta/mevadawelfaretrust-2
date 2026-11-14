"use client";

import { useState } from "react";
import type { ResourceDocument } from "@/types";
import { DocumentCard } from "./DocumentCard";
import { EmptyState, FilterChips, SearchField } from "@/components/shared/ListControls";
import { matchesQuery } from "@/lib/utils";

type Cat = ResourceDocument["category"] | "all";

export function DocumentLibrary({ documents, categories }: { documents: ResourceDocument[]; categories: { id: Cat; label: string }[] }) {
  const [query, setQuery] = useState("");
  const [cat, setCat] = useState<Cat>("all");

  const filtered = documents.filter(
    (d) => (cat === "all" || d.category === cat) && matchesQuery(`${d.title} ${d.titleGu ?? ""} ${d.description} ${d.format}`, query),
  );

  return (
    <div>
      <div className="flex flex-col gap-4">
        <SearchField id="doc-search" label="Search documents and forms" value={query} onChange={setQuery} placeholder="Search forms, notices, rules…" className="w-full lg:max-w-xl" />
        <FilterChips<Cat>
          label="Filter by category"
          value={cat}
          onChange={setCat}
          options={categories.map((c) => ({
            ...c,
            count: c.id === "all" ? documents.length : documents.filter((d) => d.category === c.id).length,
          }))}
        />
      </div>
      <p className="sr-only" aria-live="polite">
        {filtered.length} resources found
      </p>
      <div className="mt-8">
        {filtered.length === 0 ? (
          <EmptyState title="No resources found" onReset={() => { setQuery(""); setCat("all"); }} />
        ) : (
          <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((d) => (
              <li key={d.id}>
                <DocumentCard doc={d} />
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
