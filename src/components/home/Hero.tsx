import Image from "next/image";
import Link from "next/link";
import { ChevronRight, HandCoins, MapPin, Users, BellRing } from "lucide-react";
import { ButtonLink } from "@/components/shared/ButtonLink";
import { site } from "@/data/content";
import { latestNotice } from "@/data/notices";

export function Hero() {
  return (
    <section className="relative bg-ivory border-b border-line/60">
      {/* Full-Bleed Photographic Hero Banner */}
      <div className="relative min-h-[580px] sm:min-h-[620px] lg:min-h-[660px] w-full overflow-hidden flex items-center bg-navy">
        {/* Real Community Gathering Background Image */}
        <Image
          src="/images/hero-community.jpg"
          alt="Trust dignitaries and community members gathered at the Trust assembly in Palanpur"
          fill
          priority
          sizes="100vw"
          className="object-cover object-[center_32%]"
        />

        {/* Left-to-right Dark Teal Gradient Overlay for Readability */}
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-r from-[#041c28]/95 via-[#07364A]/85 to-[#07364A]/30 sm:via-[#07364A]/80 lg:to-transparent"
        />

        {/* Vertical gradient to anchor the text and smoothly transition to the floating card */}
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-t from-[#07364A]/90 via-transparent to-black/30"
        />

        {/* Delicate leaf outline decoration in gold/teal */}
        <div className="pointer-events-none absolute top-6 right-8 hidden text-white/10 lg:block" aria-hidden="true">
          <svg width="150" height="150" viewBox="0 0 120 120" fill="none" stroke="currentColor">
            <path d="M15 105 C 15 65, 55 25, 105 25 C 105 65, 65 105, 15 105 Z" strokeWidth="2" />
            <path d="M15 105 L70 50" strokeWidth="1.75" />
            <path d="M38 82 Q 48 72 58 74" strokeWidth="1.5" />
            <path d="M52 68 Q 62 58 72 60" strokeWidth="1.5" />
          </svg>
        </div>

        {/* Text Overlay Container - Left Aligned with max 650px width */}
        <div className="container-page relative z-10 w-full pt-16 pb-24 sm:pt-20 sm:pb-28 lg:pt-24 lg:pb-32">
          <div className="max-w-[650px] animate-fade-up">
            {/* Small Gold Eyebrow Badge with Dash */}
            <p className="inline-flex items-center gap-2.5 text-xs font-bold tracking-[0.18em] text-warm-gold uppercase drop-shadow-sm">
              <span className="h-0.5 w-6 rounded-full bg-gold" aria-hidden="true" />
              <span>Registered public trust · Since {site.foundedYear}</span>
            </p>

            {/* Impactful Gujarati Trust Headline */}
            <h1
              lang="gu"
              className="mt-4 font-display text-3xl font-extrabold tracking-tight text-white drop-shadow-md sm:text-5xl lg:text-[3.5rem] !leading-[1.18]"
            >
              શ્રી મેવાડા સુથાર સમાજ <br />
              <span className="text-bright-teal">વેલફેર ટ્રસ્ટ</span>, પાલનપુર
            </h1>

            {/* Supporting Heading */}
            <p className="mt-4 text-base font-bold text-white/95 sm:text-[1.12rem] leading-snug drop-shadow-sm">
              Social security for every member family — support for heirs when a member passes away.
            </p>

            {/* Concise Purpose Description */}
            <p className="mt-3 text-sm text-white/85 sm:text-[1.02rem] leading-relaxed drop-shadow-sm">
              Through the{" "}
              <span lang="gu" className="font-semibold text-warm-gold">
                સામાજીક સુરક્ષા યોજના
              </span>
              , every registered member contributes when a fellow member passes away, so that the family left behind has
              financial security.
            </p>

            {/* Horizontal Pill CTA Buttons */}
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <ButtonLink
                href="/welfare-schemes"
                variant="primary"
                size="lg"
                arrow
                icon={<HandCoins className="size-5 text-warm-gold" aria-hidden="true" />}
              >
                Explore the Scheme
              </ButtonLink>
              <Link
                href="/about"
                className="inline-flex items-center justify-center rounded-full border-2 border-white/80 bg-white/10 px-6 py-3.5 text-sm font-bold text-white backdrop-blur-sm transition-all hover:border-white hover:bg-white/20 hover:text-white"
              >
                Know Our Trust
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Quick Card Overlapping Hero Bottom */}
      <div className="container-page relative z-30 -mt-12 sm:-mt-16 mb-4 sm:mb-8">
        <div className="rounded-[22px] border border-line bg-white p-5 shadow-[0_16px_40px_rgba(7,54,74,0.12)] sm:p-7">
          <dl className="grid grid-cols-1 divide-y divide-line sm:grid-cols-2 sm:divide-y-0 lg:grid-cols-4 lg:divide-x lg:divide-line">
            {/* Column 1: Eligible Age */}
            <div className="flex items-center justify-between gap-3 pt-4 first:pt-0 sm:pt-0 lg:px-5 lg:first:pl-0">
              <div className="flex flex-col items-start gap-2.5">
                <span className="grid size-10 place-items-center rounded-full bg-pale-teal text-deep-teal">
                  <Users className="size-5 text-teal" aria-hidden="true" />
                </span>
                <div>
                  <dd className="font-display text-[15px] font-bold text-navy">Eligible age 18–50</dd>
                  <dt className="text-[12.5px] text-muted">Years for membership</dt>
                </div>
              </div>
              <Link
                href="/welfare-schemes"
                aria-label="Scheme eligibility details"
                className="grid size-7 shrink-0 place-items-center rounded-full bg-deep-teal text-white transition hover:bg-navy"
              >
                <ChevronRight className="size-4" aria-hidden="true" />
              </Link>
            </div>

            {/* Column 2: Per death */}
            <div className="flex items-center justify-between gap-3 pt-4 sm:pt-0 lg:px-5">
              <div className="flex flex-col items-start gap-2.5">
                <span className="grid size-10 place-items-center rounded-full bg-pale-cream text-saffron-700">
                  <HandCoins className="size-5 text-gold" aria-hidden="true" />
                </span>
                <div>
                  <dd className="font-display text-[15px] font-bold text-navy">Per death ₹50</dd>
                  <dt className="text-[12.5px] text-muted">Contribution per member</dt>
                </div>
              </div>
              <Link
                href="/welfare-schemes"
                aria-label="Contribution rules"
                className="grid size-7 shrink-0 place-items-center rounded-full bg-deep-teal text-white transition hover:bg-navy"
              >
                <ChevronRight className="size-4" aria-hidden="true" />
              </Link>
            </div>

            {/* Column 3: Centres */}
            <div className="flex items-center justify-between gap-3 pt-4 sm:pt-0 lg:px-5">
              <div className="flex flex-col items-start gap-2.5">
                <span className="grid size-10 place-items-center rounded-full bg-pale-teal text-deep-teal">
                  <MapPin className="size-5 text-teal" aria-hidden="true" />
                </span>
                <div>
                  <dd className="font-display text-[15px] font-bold text-navy">Centres 25</dd>
                  <dt className="text-[12.5px] text-muted">Cities & villages</dt>
                </div>
              </div>
              <Link
                href="/collection-centers"
                aria-label="View 25 collection centres"
                className="grid size-7 shrink-0 place-items-center rounded-full bg-deep-teal text-white transition hover:bg-navy"
              >
                <ChevronRight className="size-4" aria-hidden="true" />
              </Link>
            </div>

            {/* Column 4: Latest Notice Link */}
            <div className="flex items-center justify-between gap-3 pt-4 sm:pt-0 lg:px-5 lg:last:pr-0">
              <div className="flex flex-col items-start gap-2.5 min-w-0">
                <span className="grid size-10 place-items-center rounded-full bg-pale-cream text-gold">
                  <BellRing className="size-5 text-saffron-700" aria-hidden="true" />
                </span>
                <div className="min-w-0">
                  <dd className="font-display text-[15px] font-bold text-navy">Latest notice</dd>
                  <dt lang="gu" className="truncate text-[12.5px] text-muted max-w-[150px]">
                    {latestNotice.title}
                  </dt>
                </div>
              </div>
              <Link
                href={`/notices/${latestNotice.slug}`}
                aria-label={`Read notice: ${latestNotice.title}`}
                className="grid size-7 shrink-0 place-items-center rounded-full bg-deep-teal text-white transition hover:bg-navy"
              >
                <ChevronRight className="size-4" aria-hidden="true" />
              </Link>
            </div>
          </dl>
        </div>
      </div>
    </section>
  );
}
