import { ArrowRight, Building, Calendar, Users, Award } from "lucide-react";
import { Counter } from "@/components/shared/Counter";
import { verifiedStats } from "@/data/content";

const statIcons = [Calendar, Users, Building, Award];

export function Stats() {
  return (
    <section aria-labelledby="stats-heading" className="py-14 sm:py-20">
      <div className="container-page">
        {/* Dark teal capsule banner: rounded pill, navy to teal gradient, subtle pattern and glow */}
        <div className="relative overflow-hidden rounded-[2.25rem] bg-gradient-to-r from-navy via-deep-teal to-[#07596a] p-8 text-white shadow-lift sm:p-10 lg:p-12">
          {/* Subtle jali pattern & background glow */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 opacity-5 [background-image:radial-gradient(white_1px,transparent_1px)] [background-size:20px_20px]"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -top-24 left-1/4 size-72 rounded-full bg-gold/15 blur-3xl"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -bottom-24 right-1/4 size-72 rounded-full bg-bright-teal/15 blur-3xl"
          />

          <div className="relative grid items-center gap-8 lg:grid-cols-[1.1fr_auto_2.2fr_auto] lg:gap-8">
            {/* Left: Playfair italic gold heading */}
            <div>
              <p className="text-xs font-bold tracking-[0.16em] text-pale-teal uppercase">
                Trust at a glance
              </p>
              <h2
                id="stats-heading"
                className="mt-2 font-playfair text-2xl font-bold italic tracking-normal text-warm-gold sm:text-3xl lg:text-[2.1rem]"
              >
                The Trust at a glance
              </h2>
              <p className="mt-2 text-xs text-pale-teal/80">Figures as published by the Trust</p>
            </div>

            {/* Vertical divider */}
            <div className="hidden h-24 w-px bg-white/15 lg:block" aria-hidden="true" />

            {/* Middle: Icon stats with Counter */}
            <dl className="grid grid-cols-2 gap-6 sm:grid-cols-4 lg:gap-4">
              {verifiedStats.map((s, idx) => {
                const Icon = statIcons[idx % statIcons.length];
                return (
                  <div key={s.label} className="flex flex-col">
                    <span className="mb-2 grid size-8 place-items-center rounded-lg bg-white/10 text-warm-gold">
                      <Icon className="size-4" aria-hidden="true" />
                    </span>
                    <dd className="font-display text-2xl font-extrabold tracking-tight text-white sm:text-3xl">
                      <Counter value={s.value} format={s.format} />
                    </dd>
                    <dt className="mt-1 text-xs font-semibold text-pale-teal">{s.label}</dt>
                    <dd className="mt-0.5 text-[0.72rem] text-pale-teal/65 leading-tight">{s.detail}</dd>
                  </div>
                );
              })}
            </dl>

            {/* Right: Gold pill CTA */}
            <div className="pt-4 lg:pt-0">
              <a
                href="/welfare-schemes"
                className="btn-shimmer inline-flex items-center gap-2 rounded-full bg-gold px-5 py-3 text-xs font-bold text-navy shadow-md transition hover:-translate-y-0.5 hover:bg-warm-gold whitespace-nowrap"
              >
                <span>View Scheme</span>
                <ArrowRight className="size-3.5" aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
