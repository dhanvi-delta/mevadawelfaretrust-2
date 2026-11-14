import { Award, Building, Calendar, Users } from "lucide-react";
import { Counter } from "@/components/shared/Counter";
import { verifiedStats } from "@/data/content";

const statIcons = [Calendar, Users, Building, Award];

export function Stats() {
  return (
    <section aria-labelledby="stats-heading" className="relative overflow-hidden bg-pale-teal/25 py-16 sm:py-20 border-b border-line/60">
      <div className="container-page">
        <div className="mb-8 flex flex-col justify-between gap-2 sm:flex-row sm:items-end">
          <div>
            <p className="inline-flex items-center gap-2 text-xs font-bold tracking-[0.16em] text-gold uppercase mb-1">
              <span className="h-0.5 w-4 rounded-full bg-gold" aria-hidden="true" />
              <span>Trust at a glance</span>
            </p>
            <h2 id="stats-heading" className="text-2xl font-bold text-navy sm:text-3xl">
              The Trust at a glance
            </h2>
          </div>
          <p className="text-xs font-semibold text-muted">Figures as published by the Trust</p>
        </div>

        {/* White floating-style stat card row: 4 columns, vertical dividers, soft shadow */}
        <div className="rounded-[22px] border border-line bg-white p-6 shadow-[0_14px_40px_rgba(7,54,74,0.08)] sm:p-8">
          <dl className="grid grid-cols-1 divide-y divide-line sm:grid-cols-2 sm:divide-y-0 lg:grid-cols-4 lg:divide-x lg:divide-line">
            {verifiedStats.map((s, idx) => {
              const Icon = statIcons[idx % statIcons.length];
              return (
                <div
                  key={s.label}
                  className="flex flex-col justify-between pt-6 first:pt-0 sm:pt-0 lg:px-6 lg:first:pl-0"
                >
                  <div className="flex items-center justify-between">
                    <dt className="text-xs font-bold tracking-wider text-teal uppercase">{s.label}</dt>
                    <span className="grid size-9 place-items-center rounded-full bg-pale-teal text-deep-teal">
                      <Icon className="size-4.5 text-teal" aria-hidden="true" />
                    </span>
                  </div>
                  <dd className="mt-4 font-display text-4xl font-extrabold tracking-tight text-navy sm:text-5xl">
                    <Counter value={s.value} format={s.format} />
                  </dd>
                  <dd className="mt-2 text-xs leading-relaxed text-muted">{s.detail}</dd>
                </div>
              );
            })}
          </dl>
        </div>
      </div>
    </section>
  );
}
