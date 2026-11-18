"use client";

import { useRef, useState, type KeyboardEvent } from "react";
import type { PhotoCommitteeGroup } from "@/types";
import { OfficeBearerCard } from "@/components/trustees/OfficeBearerCard";
import { cn } from "@/lib/utils";

const ALL = "all";

function GroupHeading({ group, printOnly = false }: { group: PhotoCommitteeGroup; printOnly?: boolean }) {
  return (
    <h3
      className={cn(
        "mb-6 flex-wrap items-baseline gap-x-2.5 border-b border-line pb-2.5 text-xl font-bold text-navy",
        printOnly ? "hidden print:flex" : "flex",
      )}
    >
      <span lang="gu">{group.title}</span>
      <span className="text-xs font-bold tracking-wide text-teal uppercase">{group.titleEn}</span>
      <span className="ml-auto self-center rounded-full bg-pale-teal px-2.5 py-0.5 text-xs font-bold text-deep-teal print:hidden">
        {group.members.length}
      </span>
    </h3>
  );
}

function MemberGrid({ group, priorityCount = 0 }: { group: PhotoCommitteeGroup; priorityCount?: number }) {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {group.members.map((p, i) => (
        <OfficeBearerCard key={p.slug} person={p} priority={i < priorityCount} />
      ))}
    </div>
  );
}

/**
 * One tab per committee group, plus an "All Committee" tab (the default) that lists every
 * group one after another, so visitors can either browse everyone or jump to a single group.
 */
export function CommitteeTabs({ groups }: { groups: PhotoCommitteeGroup[] }) {
  const tabs = [
    {
      id: ALL,
      title: "સંપૂર્ણ કમિટી",
      titleEn: "All Committee",
      count: groups.reduce((n, g) => n + g.members.length, 0),
    },
    ...groups.map((g) => ({ id: g.id, title: g.title, titleEn: g.titleEn, count: g.members.length })),
  ];
  const [active, setActive] = useState(ALL);
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);

  function onKeyDown(e: KeyboardEvent<HTMLButtonElement>, index: number) {
    let next = -1;
    if (e.key === "ArrowRight") next = (index + 1) % tabs.length;
    else if (e.key === "ArrowLeft") next = (index - 1 + tabs.length) % tabs.length;
    else if (e.key === "Home") next = 0;
    else if (e.key === "End") next = tabs.length - 1;
    if (next < 0) return;
    e.preventDefault();
    setActive(tabs[next].id);
    tabRefs.current[next]?.focus();
  }

  return (
    <div>
      <div
        role="tablist"
        aria-label="Committee groups"
        className="no-print -mx-4 flex snap-x gap-2.5 overflow-x-auto px-4 pb-2 sm:mx-0 sm:flex-wrap sm:overflow-visible sm:px-0 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {tabs.map((t, i) => {
          const selected = t.id === active;
          return (
            <button
              key={t.id}
              ref={(el) => {
                tabRefs.current[i] = el;
              }}
              type="button"
              role="tab"
              id={`tab-${t.id}`}
              aria-selected={selected}
              aria-controls={`panel-${t.id}`}
              tabIndex={selected ? 0 : -1}
              onClick={() => setActive(t.id)}
              onKeyDown={(e) => onKeyDown(e, i)}
              className={cn(
                "flex shrink-0 snap-start items-center gap-2.5 rounded-2xl border px-4 py-2.5 text-left transition-all focus-visible:ring-4 focus-visible:ring-pale-teal focus-visible:outline-none",
                selected
                  ? "border-deep-teal bg-deep-teal text-white shadow-soft"
                  : "border-line bg-white text-navy hover:border-teal hover:bg-pale-teal/40",
              )}
            >
              <span className="flex flex-col leading-tight">
                <span lang="gu" className="text-[0.95rem] font-bold">
                  {t.title}
                </span>
                <span
                  className={cn(
                    "text-[0.68rem] font-bold tracking-wide uppercase",
                    selected ? "text-white/75" : "text-teal",
                  )}
                >
                  {t.titleEn}
                </span>
              </span>
              <span
                className={cn(
                  "grid min-w-7 place-items-center rounded-full px-2 py-0.5 text-xs font-bold",
                  selected ? "bg-white/20 text-white" : "bg-pale-teal text-deep-teal",
                )}
              >
                {t.count}
              </span>
            </button>
          );
        })}
      </div>

      {/* All Committee — every group with its heading. Skipped on print, where the group panels below are all shown. */}
      <div
        role="tabpanel"
        id={`panel-${ALL}`}
        aria-labelledby={`tab-${ALL}`}
        tabIndex={0}
        className={cn("mt-8 space-y-12 focus-visible:outline-none print:hidden", active === ALL ? "block" : "hidden")}
      >
        {groups.map((g, gi) => (
          <section key={g.id} aria-label={g.titleEn}>
            <GroupHeading group={g} />
            <MemberGrid group={g} priorityCount={gi === 0 ? 4 : 0} />
          </section>
        ))}
      </div>

      {groups.map((g) => (
        <div
          key={g.id}
          role="tabpanel"
          id={`panel-${g.id}`}
          aria-labelledby={`tab-${g.id}`}
          tabIndex={0}
          className={cn("mt-8 focus-visible:outline-none print:mt-10 print:block", g.id === active ? "block" : "hidden")}
        >
          {/* Group heading — shown on print, where every group is listed */}
          <GroupHeading group={g} printOnly />
          <MemberGrid group={g} />
        </div>
      ))}
    </div>
  );
}
