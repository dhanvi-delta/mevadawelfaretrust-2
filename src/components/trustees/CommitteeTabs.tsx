"use client";

import { useRef, useState, type KeyboardEvent } from "react";
import type { PhotoCommitteeGroup } from "@/types";
import { OfficeBearerCard } from "@/components/trustees/OfficeBearerCard";
import { cn } from "@/lib/utils";

/** One tab per committee group, so visitors don't scroll past every member to reach a group. */
export function CommitteeTabs({ groups }: { groups: PhotoCommitteeGroup[] }) {
  const [active, setActive] = useState(groups[0]?.id);
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);

  function onKeyDown(e: KeyboardEvent<HTMLButtonElement>, index: number) {
    let next = -1;
    if (e.key === "ArrowRight") next = (index + 1) % groups.length;
    else if (e.key === "ArrowLeft") next = (index - 1 + groups.length) % groups.length;
    else if (e.key === "Home") next = 0;
    else if (e.key === "End") next = groups.length - 1;
    if (next < 0) return;
    e.preventDefault();
    setActive(groups[next].id);
    tabRefs.current[next]?.focus();
  }

  return (
    <div>
      <div
        role="tablist"
        aria-label="Committee groups"
        className="no-print -mx-4 flex snap-x gap-2.5 overflow-x-auto px-4 pb-2 sm:mx-0 sm:flex-wrap sm:overflow-visible sm:px-0 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {groups.map((g, i) => {
          const selected = g.id === active;
          return (
            <button
              key={g.id}
              ref={(el) => {
                tabRefs.current[i] = el;
              }}
              type="button"
              role="tab"
              id={`tab-${g.id}`}
              aria-selected={selected}
              aria-controls={`panel-${g.id}`}
              tabIndex={selected ? 0 : -1}
              onClick={() => setActive(g.id)}
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
                  {g.title}
                </span>
                <span
                  className={cn(
                    "text-[0.68rem] font-bold tracking-wide uppercase",
                    selected ? "text-white/75" : "text-teal",
                  )}
                >
                  {g.titleEn}
                </span>
              </span>
              <span
                className={cn(
                  "grid min-w-7 place-items-center rounded-full px-2 py-0.5 text-xs font-bold",
                  selected ? "bg-white/20 text-white" : "bg-pale-teal text-deep-teal",
                )}
              >
                {g.members.length}
              </span>
            </button>
          );
        })}
      </div>

      {groups.map((g, gi) => {
        const selected = g.id === active;
        return (
          <div
            key={g.id}
            role="tabpanel"
            id={`panel-${g.id}`}
            aria-labelledby={`tab-${g.id}`}
            tabIndex={0}
            className={cn("mt-8 focus-visible:outline-none print:mt-10 print:block", selected ? "block" : "hidden")}
          >
            {/* Group heading — shown on print, where every group is listed */}
            <h3 className="mb-6 hidden border-b border-line pb-2.5 text-xl font-bold text-navy print:block">
              <span lang="gu">{g.title}</span>
              <span className="ml-2.5 text-xs font-bold tracking-wide text-teal uppercase">{g.titleEn}</span>
            </h3>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {g.members.map((p, i) => (
                <OfficeBearerCard key={p.slug} person={p} priority={gi === 0 && i < 4} />
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
}
