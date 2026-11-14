"use client";

import { useMemo, useState } from "react";
import { MapPin, Phone } from "lucide-react";
import type { CommitteeGroup } from "@/types";
import { EmptyState, FilterChips, SearchField } from "@/components/shared/ListControls";
import { matchesQuery, telHref } from "@/lib/utils";

export function CommitteeDirectory({ groups }: { groups: CommitteeGroup[] }) {
  const [query, setQuery] = useState("");
  const [group, setGroup] = useState<string>("all");

  const filtered = useMemo(
    () =>
      groups
        .filter((g) => group === "all" || g.id === group)
        .map((g) => ({
          ...g,
          members: g.members.filter((m) => matchesQuery(`${m.name} ${m.village} ${m.phone}`, query)),
        }))
        .filter((g) => g.members.length > 0),
    [groups, group, query],
  );

  const total = filtered.reduce((n, g) => n + g.members.length, 0);
  const options = [
    { id: "all", label: "All", count: groups.reduce((n, g) => n + g.members.length, 0) },
    ...groups.map((g) => ({ id: g.id, label: g.titleEn, count: g.members.length })),
  ];

  return (
    <div>
      <div className="no-print flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
        <SearchField
          id="committee-search"
          label="Search committee by name, village or phone"
          value={query}
          onChange={setQuery}
          placeholder="Search by name, village or phone…"
          className="w-full lg:max-w-md"
        />
        <FilterChips label="Filter by group" options={options} value={group} onChange={setGroup} />
      </div>
      <p className="sr-only" aria-live="polite">
        {total} people found
      </p>

      <div className="mt-8 space-y-10">
        {filtered.length === 0 && (
          <EmptyState title="No matching committee members" onReset={() => { setQuery(""); setGroup("all"); }}>
            Try a different spelling or search in Gujarati (e.g. “પાલનપુર”).
          </EmptyState>
        )}

        {filtered.map((g) => (
          <section key={g.id} aria-labelledby={`grp-${g.id}`}>
            <div className="mb-4 flex items-baseline justify-between gap-4">
              <h3 id={`grp-${g.id}`} className="text-xl font-bold">
                <span lang="gu">{g.title}</span>
                <span className="ml-2 text-sm font-medium text-muted">{g.titleEn}</span>
              </h3>
              <span className="text-sm text-muted">{g.members.length}</span>
            </div>

            {/* Desktop / tablet table */}
            <div className="hidden overflow-hidden rounded-2xl border border-line bg-white sm:block">
              <table className="table-clean">
                <thead>
                  <tr>
                    <th scope="col" className="w-20" lang="gu">ક્રમ</th>
                    <th scope="col" lang="gu">નામ</th>
                    <th scope="col" lang="gu">ગામ</th>
                    <th scope="col" lang="gu">મોબાઇલ નંબર</th>
                  </tr>
                </thead>
                <tbody lang="gu">
                  {g.members.map((m) => {
                    const tel = telHref(m.phone);
                    return (
                      <tr key={`${g.id}-${m.serial}`}>
                        <td className="text-muted">{m.serial}</td>
                        <td className="font-semibold">{m.name}</td>
                        <td>{m.village}</td>
                        <td>
                          {tel ? (
                            <a href={tel} className="font-medium text-brand-700 hover:underline">
                              {m.phone}
                            </a>
                          ) : (
                            <span className="text-muted">{m.phone}</span>
                          )}
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>

            {/* Mobile cards */}
            <ul className="space-y-3 sm:hidden" lang="gu">
              {g.members.map((m) => {
                const tel = telHref(m.phone);
                return (
                  <li key={`${g.id}-${m.serial}-m`} className="card flex items-start gap-4 p-4">
                    <span className="grid size-9 shrink-0 place-items-center rounded-xl bg-mint text-sm font-bold text-brand-700">{m.serial}</span>
                    <div className="min-w-0">
                      <p className="font-semibold">{m.name}</p>
                      <p className="mt-0.5 inline-flex items-center gap-1 text-sm text-muted">
                        <MapPin className="size-3.5" aria-hidden="true" /> {m.village}
                      </p>
                      {tel && (
                        <a href={tel} className="mt-1 flex items-center gap-1 text-sm font-medium text-brand-700">
                          <Phone className="size-3.5" aria-hidden="true" /> {m.phone}
                        </a>
                      )}
                    </div>
                  </li>
                );
              })}
            </ul>
          </section>
        ))}
      </div>
    </div>
  );
}
