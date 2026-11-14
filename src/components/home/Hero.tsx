import Image from "next/image";
import Link from "next/link";
import { ArrowRight, BellRing, ChevronRight, HandCoins, MapPin, ShieldCheck, Users } from "lucide-react";
import { ButtonLink } from "@/components/shared/ButtonLink";
import { site } from "@/data/content";
import { latestNotice } from "@/data/notices";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-mist/70 via-ivory to-ivory pt-8 pb-16 sm:pt-12 sm:pb-20 lg:pt-14 lg:pb-28">
      {/* Subtle background heritage motif and glow */}
      <div aria-hidden="true" className="bg-jali pointer-events-none absolute inset-0 opacity-30" />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-32 left-1/4 size-[32rem] rounded-full bg-pale-teal/60 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-40 right-[-10%] size-[28rem] rounded-full bg-warm-gold/15 blur-3xl"
      />

      <div className="container-page relative">
        {/* Split Hero Layout */}
        <div className="grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-12">
          {/* Left Column: Eyebrow, Headings, Intro, Pill CTAs, Dots */}
          <div className="animate-fade-up">
            <p className="inline-flex items-center gap-2 rounded-full bg-white/90 px-3.5 py-1.5 text-xs font-bold text-deep-teal shadow-soft ring-1 ring-line">
              <ShieldCheck className="size-4 text-teal" aria-hidden="true" />
              <span>Registered public trust · Since {site.foundedYear}</span>
            </p>

            <h1
              lang="gu"
              className="mt-6 font-display text-[2.2rem] font-extrabold tracking-tight text-navy sm:text-[3rem] lg:text-[3.35rem] !leading-[1.25]"
            >
              શ્રી મેવાડા સુથાર સમાજ{" "}
              <span className="text-teal">વેલફેર ટ્રસ્ટ</span>, પાલનપુર
            </h1>

            <p className="mt-5 max-w-xl text-lg font-bold text-navy sm:text-xl leading-snug">
              Social security for every member family — support for heirs when a member passes away.
            </p>

            <p className="mt-3.5 max-w-xl text-base text-muted sm:text-lg leading-relaxed">
              Through the{" "}
              <span lang="gu" className="font-semibold text-deep-teal">
                સામાજીક સુરક્ષા યોજના
              </span>
              , every registered member contributes when a fellow member passes away, so that the family left behind has
              financial security.
            </p>

            {/* Pill CTAs: One filled teal pill with arrow, one outlined pill */}
            <div className="mt-8 flex flex-wrap items-center gap-3.5">
              <ButtonLink
                href="/welfare-schemes"
                variant="primary"
                size="lg"
                arrow
                icon={<HandCoins className="size-5 text-warm-gold" aria-hidden="true" />}
              >
                Explore the Scheme
              </ButtonLink>
              <ButtonLink
                href="/about"
                variant="secondary"
                size="lg"
              >
                Know Our Trust
              </ButtonLink>
            </div>

            {/* 3 small carousel-style indicator dots (decorative only) */}
            <div className="mt-8 flex items-center gap-2" aria-hidden="true">
              <span className="h-2 w-7 rounded-full bg-deep-teal transition-all" />
              <span className="h-2 w-2 rounded-full bg-teal/30" />
              <span className="h-2 w-2 rounded-full bg-teal/30" />
            </div>
          </div>

          {/* Right Column: Hero Visual with curved edge, teal shape & organic shadow */}
          <div className="relative mx-auto w-full max-w-lg lg:max-w-none">
            {/* Teal curved backdrop halo & leaf decoration */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -inset-3 -z-10 rounded-[3rem] bg-gradient-to-tr from-pale-teal via-mist to-pale-cream/60 opacity-80"
            />
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -top-8 -right-6 size-48 rounded-full border-[10px] border-teal/15 opacity-60"
            />

            {/* Leaf outline decoration */}
            <div className="pointer-events-none absolute -top-6 -left-6 z-20 hidden text-teal/40 sm:block" aria-hidden="true">
              <svg width="44" height="44" viewBox="0 0 44 44" fill="none" stroke="currentColor">
                <path d="M6 38 C 6 22, 22 6, 38 6 C 38 22, 22 38, 6 38 Z" strokeWidth="1.75" />
                <path d="M6 38 L26 18" strokeWidth="1.5" />
              </svg>
            </div>

            {/* Primary Photo with curved left edge */}
            <div className="relative aspect-[4/3.2] w-full overflow-hidden rounded-[2.5rem] border-4 border-white bg-pale-teal shadow-lift lg:rounded-l-[4.5rem]">
              <Image
                src="/gallery/photo-007.jpg"
                alt="Trust dignitaries seated on stage at the 6th General Assembly of the Trust in 2013"
                fill
                priority
                sizes="(min-width: 1024px) 46vw, 92vw"
                className="object-cover transition-transform duration-700 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/50 via-transparent to-transparent" />
            </div>

            {/* Small overlapping secondary photo card */}
            <div className="absolute -bottom-6 -left-4 w-[42%] overflow-hidden rounded-2xl border-4 border-white bg-white shadow-lift sm:-left-6">
              <Image
                src="/gallery/photo-001.jpg"
                alt="Speaker at the podium carrying the Trust's hands logo"
                width={700}
                height={500}
                sizes="(min-width: 1024px) 18vw, 36vw"
                className="h-auto w-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* 4. Floating quick card overlapping hero bottom:
            white, 22px radius, soft shadow, 4 equal columns with vertical dividers,
            teal icon on top, bold title, small text, small round teal arrow */}
        <div className="relative z-20 mt-12 sm:mt-16">
          <div className="rounded-[1.4rem] border border-line bg-white/95 p-4 shadow-[0_12px_36px_rgba(7,54,74,0.08)] backdrop-blur-md sm:p-6 lg:p-7">
            <dl className="grid grid-cols-1 gap-6 divide-y divide-line sm:grid-cols-2 sm:divide-y-0 lg:grid-cols-4 lg:divide-x lg:divide-line">
              {/* Column 1: Eligible Age */}
              <div className="flex items-center justify-between gap-4 pt-4 first:pt-0 sm:pt-0 lg:px-4 lg:first:pl-0">
                <div className="flex items-center gap-3.5">
                  <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-pale-teal text-deep-teal">
                    <Users className="size-5" aria-hidden="true" />
                  </span>
                  <div>
                    <dt className="text-xs font-semibold text-muted">Eligible age</dt>
                    <dd className="font-display text-xl font-extrabold text-navy">18–50</dd>
                    <dd className="text-[0.78rem] text-muted">Years for membership</dd>
                  </div>
                </div>
                <Link
                  href="/welfare-schemes"
                  aria-label="Scheme eligibility details"
                  className="grid size-8 shrink-0 place-items-center rounded-full bg-mist text-deep-teal transition hover:bg-deep-teal hover:text-white"
                >
                  <ChevronRight className="size-4" aria-hidden="true" />
                </Link>
              </div>

              {/* Column 2: Per death */}
              <div className="flex items-center justify-between gap-4 pt-4 sm:pt-0 lg:px-4">
                <div className="flex items-center gap-3.5">
                  <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-pale-cream text-saffron-700">
                    <HandCoins className="size-5" aria-hidden="true" />
                  </span>
                  <div>
                    <dt className="text-xs font-semibold text-muted">Per death</dt>
                    <dd className="font-display text-xl font-extrabold text-navy">₹50</dd>
                    <dd className="text-[0.78rem] text-muted">Contribution per member</dd>
                  </div>
                </div>
                <Link
                  href="/welfare-schemes"
                  aria-label="Contribution rules"
                  className="grid size-8 shrink-0 place-items-center rounded-full bg-mist text-deep-teal transition hover:bg-deep-teal hover:text-white"
                >
                  <ChevronRight className="size-4" aria-hidden="true" />
                </Link>
              </div>

              {/* Column 3: Centres */}
              <div className="flex items-center justify-between gap-4 pt-4 sm:pt-0 lg:px-4">
                <div className="flex items-center gap-3.5">
                  <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-pale-teal text-deep-teal">
                    <MapPin className="size-5" aria-hidden="true" />
                  </span>
                  <div>
                    <dt className="text-xs font-semibold text-muted">Centres</dt>
                    <dd className="font-display text-xl font-extrabold text-navy">25</dd>
                    <dd className="text-[0.78rem] text-muted">Cities & villages</dd>
                  </div>
                </div>
                <Link
                  href="/collection-centers"
                  aria-label="View 25 collection centres"
                  className="grid size-8 shrink-0 place-items-center rounded-full bg-mist text-deep-teal transition hover:bg-deep-teal hover:text-white"
                >
                  <ChevronRight className="size-4" aria-hidden="true" />
                </Link>
              </div>

              {/* Column 4: Latest notice quick link */}
              <div className="flex items-center justify-between gap-4 pt-4 sm:pt-0 lg:px-4 lg:last:pr-0">
                <div className="flex items-center gap-3.5 min-w-0">
                  <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-pale-cream text-gold">
                    <BellRing className="size-5 text-saffron-700" aria-hidden="true" />
                  </span>
                  <div className="min-w-0">
                    <dt className="text-xs font-bold tracking-wider text-saffron-700 uppercase">Latest notice</dt>
                    <dd lang="gu" className="truncate font-display text-sm font-bold text-navy">
                      {latestNotice.title}
                    </dd>
                    <dd className="text-[0.75rem] text-muted">Read notice</dd>
                  </div>
                </div>
                <Link
                  href={`/notices/${latestNotice.slug}`}
                  aria-label={`Read notice: ${latestNotice.title}`}
                  className="grid size-8 shrink-0 place-items-center rounded-full bg-gold text-navy transition hover:bg-warm-gold"
                >
                  <ArrowRight className="size-4" aria-hidden="true" />
                </Link>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
}
