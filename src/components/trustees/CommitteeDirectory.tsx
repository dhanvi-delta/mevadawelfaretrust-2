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
            <div className="mb-4 flex items-baseline justify-between gap-4 border-b border-line pb-2.5">
              <h3 id={`grp-${g.id}`} className="text-xl font-bold text-navy">
                <span lang="gu">{g.title}</span>
                <span className="ml-2.5 text-xs font-bold text-teal tracking-wide uppercase">{g.titleEn}</span>
              </h3>
              <span className="rounded-full bg-pale-teal px-2.5 py-0.5 text-xs font-bold text-deep-teal">
                {g.members.length} members
              </span>
            </div>

            {/* Desktop / tablet table */}
            <div className="hidden overflow-hidden rounded-2xl border border-line bg-white shadow-soft sm:block">
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
                        <td className="text-muted font-mono text-xs">{m.serial}</td>
                        <td className="font-bold text-navy">{m.name}</td>
                        <td className="text-muted">{m.village}</td>
                        <td>
                          {tel ? (
                            <a
                              href={tel}
                              className="inline-flex items-center gap-1.5 font-bold text-deep-teal hover:text-teal hover:underline"
                            >
                              <Phone className="size-3.5 text-teal" aria-hidden="true" />
                              <span>{m.phone}</span>
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
                  <li key={`${g.id}-${m.serial}-m`} className="card flex items-start gap-4 p-4 bg-white border border-line shadow-soft">
                    <span className="grid size-9 shrink-0 place-items-center rounded-xl bg-pale-teal text-xs font-bold text-deep-teal">
                      {m.serial}
                    </span>
                    <div className="min-w-0 flex-1">
                      <p className="font-bold text-navy">{m.name}</p>
                      <p className="mt-1 inline-flex items-center gap-1 text-xs text-muted">
                        <MapPin className="size-3.5 text-teal" aria-hidden="true" /> {m.village}
                      </p>
                      {tel && (
                        <div className="mt-2">
                          <a
                            href={tel}
                            className="inline-flex items-center gap-1.5 rounded-full bg-deep-teal/10 px-3 py-1 text-xs font-bold text-deep-teal hover:bg-deep-teal hover:text-white transition-colors"
                          >
                            <Phone className="size-3.5" aria-hidden="true" /> {m.phone}
                          </a>
                        </div>
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
