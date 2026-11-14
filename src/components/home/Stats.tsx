import { Counter } from "@/components/shared/Counter";
import { verifiedStats } from "@/data/content";

export function Stats() {
  return (
    <section aria-labelledby="stats-heading" className="relative overflow-hidden bg-brand-800 py-16 text-white sm:py-20">
      <div aria-hidden="true" className="absolute inset-0 opacity-[0.07] [background-image:radial-gradient(white_1px,transparent_1px)] [background-size:20px_20px]" />
      <div aria-hidden="true" className="absolute -top-24 left-1/3 size-80 rounded-full bg-saffron-500/20 blur-3xl" />
      <div className="container-page relative">
        <div className="mb-10 flex flex-col justify-between gap-2 sm:flex-row sm:items-end">
          <h2 id="stats-heading" className="text-2xl font-bold !text-white sm:text-3xl">
            The Trust at a glance
          </h2>
          <p className="text-sm text-brand-200">Figures as published by the Trust</p>
        </div>
        <dl className="grid grid-cols-2 gap-px overflow-hidden rounded-3xl bg-white/10 lg:grid-cols-4">
          {verifiedStats.map((s) => (
            <div key={s.label} className="bg-brand-800/95 p-6 sm:p-8">
              <dt className="text-sm font-semibold text-saffron-400">{s.label}</dt>
              <dd className="mt-2 font-display text-4xl font-extrabold tracking-tight sm:text-5xl">
                <Counter value={s.value} format={s.format} />
              </dd>
              <dd className="mt-2 text-xs text-brand-200 sm:text-sm">{s.detail}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
