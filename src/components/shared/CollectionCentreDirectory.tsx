"use client";

import { useMemo, useState } from "react";
import { MapPin, Phone, Store } from "lucide-react";
import type { CollectionCentre } from "@/types";
import { EmptyState, FilterChips, Pagination, SearchField } from "@/components/shared/ListControls";
import { usePagination } from "@/hooks/usePagination";
import { matchesQuery, telHref } from "@/lib/utils";

interface Props {
  centres: CollectionCentre[];
  cities: { en: string; gu: string; count: number }[];
  pageSize?: number;
}

export function CollectionCentreDirectory({ centres, cities, pageSize = 9 }: Props) {
  const [query, setQuery] = useState("");
  const [city, setCity] = useState("all");

  const filtered = useMemo(
    () =>
      centres.filter(
        (c) =>
          (city === "all" || c.cityEn === city) &&
          matchesQuery(`${c.city} ${c.cityEn} ${c.name} ${c.address} ${c.phone ?? ""}`, query),
      ),
    [centres, city, query],
  );

  const pager = usePagination(filtered, pageSize);

  const update = (fn: () => void) => {
    fn();
    pager.reset();
  };

  return (
    <div>
      <div className="no-print flex flex-col gap-4">
        <SearchField
          id="centre-search"
          label="Search collection centres"
          value={query}
          onChange={(v) => update(() => setQuery(v))}
          placeholder="Search by city, area, name or phone…"
          className="w-full lg:max-w-xl"
        />
        <FilterChips
          label="Filter by city"
          value={city}
          onChange={(v) => update(() => setCity(v))}
          options={[{ id: "all", label: "All cities", count: centres.length }, ...cities.map((c) => ({ id: c.en, label: c.en, count: c.count }))]}
        />
      </div>

      <div className="mt-8">
        {filtered.length === 0 ? (
          <EmptyState title="No collection centre found" onReset={() => update(() => { setQuery(""); setCity("all"); })}>
            Try another city or search in Gujarati, e.g. “અમદાવાદ”. You can also pay online through the CRM portal.
          </EmptyState>
        ) : (
          <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {pager.pageItems.map((c) => {
              const tel = c.phone ? telHref(c.phone) : undefined;
              return (
                <li key={`${c.cityEn}-${c.serial}`} className="card flex flex-col p-5 transition hover:-translate-y-0.5 hover:shadow-lift">
                  <div className="flex items-center justify-between gap-3">
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-mint px-3 py-1 text-xs font-bold text-brand-700">
                      <MapPin className="size-3.5" aria-hidden="true" />
                      {c.cityEn} · <span lang="gu">{c.city}</span>
                    </span>
                    <span lang="gu" className="text-xs font-semibold text-muted">
                      ક્રમ {c.serial}
                    </span>
                  </div>
                  <h3 lang="gu" className="mt-4 text-lg font-bold">
                    {c.name}
                  </h3>
                  <p lang="gu" className="mt-1 flex flex-1 gap-2 text-sm text-muted">
                    <Store className="mt-1 size-4 shrink-0 text-brand-400" aria-hidden="true" />
                    {c.address}
                  </p>
                  {c.phone && (
                    <div className="mt-4 border-t border-line pt-3">
                      {tel ? (
                        <a href={tel} lang="gu" className="inline-flex items-center gap-2 text-sm font-semibold text-brand-700 hover:underline">
                          <Phone className="size-4" aria-hidden="true" />
                          {c.phone}
                        </a>
                      ) : (
                        <span lang="gu" className="text-sm text-muted">
                          {c.phone}
                        </span>
                      )}
                    </div>
                  )}
                </li>
              );
            })}
          </ul>
        )}
        {filtered.length > 0 && (
          <Pagination
            page={pager.page}
            pageCount={pager.pageCount}
            onChange={pager.setPage}
            start={pager.start}
            end={pager.end}
            total={pager.total}
            noun="centres"
          />
        )}
      </div>
    </div>
  );
}
