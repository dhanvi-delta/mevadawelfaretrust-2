import Image from "next/image";
import Link from "next/link";
import { ChevronRight, HandCoins, MapPin, Users, BellRing } from "lucide-react";
import { site } from "@/data/content";
import { latestNotice } from "@/data/notices";

export function Hero() {
  return (
    <section className="relative bg-ivory border-b border-line/60">
      {/* One continuous hero: text on navy, fading into the group photo below */}
      <div className="relative overflow-hidden bg-navy">
        <div className="container-page relative z-10 pt-7 pb-6 text-center sm:pt-9 sm:pb-8 lg:pt-8 lg:pb-4 animate-fade-up">
          <p className="inline-flex items-center gap-2.5 text-xs font-bold tracking-[0.18em] text-warm-gold uppercase sm:text-sm">
            <span className="h-0.5 w-6 rounded-full bg-gold" aria-hidden="true" />
            <span>Registered public trust · Since {site.foundedYear}</span>
            <span className="h-0.5 w-6 rounded-full bg-gold" aria-hidden="true" />
          </p>
          <h1
            lang="gu"
            className="mx-auto mt-3 font-hero text-[2.6rem] font-extrabold text-white drop-shadow-[0_3px_14px_rgba(0,0,0,0.4)] sm:text-[3.8rem] lg:whitespace-nowrap lg:text-[min(4.6vw,4.5rem)] !leading-[1.15]"
          >
            શ્રી મેવાડા સુથાર સમાજ <br className="lg:hidden" />
            <span className="text-bright-teal">વેલફેર ટ્રસ્ટ</span>, પાલનપુર
          </h1>
        </div>

        {/* Committee group photo — its canopy slides under the text; faces stay clear */}
        <figure className="relative" style={{ marginTop: "-11%" }}>
          <Image
            src="/images/hero-group-2025.jpg"
            alt="Trust office bearers, trustees and committee members standing together at the General Assembly 2025 in Palanpur"
            width={2400}
            height={1163}
            priority
            sizes="100vw"
            className="block h-auto w-full"
          />
          {/* Top-to-bottom gradient: solid navy behind the text, fully clear before the first row of heads (~39%) */}
          <div
            aria-hidden="true"
            className="absolute inset-x-0 -top-px bottom-0"
            style={{
              background:
                "linear-gradient(to bottom, var(--color-navy) 0%, rgba(7,54,74,0.96) 13%, rgba(7,54,74,0.75) 21%, rgba(7,54,74,0.3) 29%, rgba(7,54,74,0) 35%)",
            }}
          />
          <figcaption lang="gu" className="absolute right-6 bottom-20 hidden rounded-full bg-black/45 px-3 py-1 text-xs font-semibold text-white lg:block">
            કારોબારી કમિટિ — સાધારણ સભા ૨૦૨૫
          </figcaption>
        </figure>
      </div>

      {/* Floating Quick Card Overlapping Hero Bottom */}
      <div className="container-page relative z-30 mt-5 sm:-mt-10 lg:-mt-12 mb-4 sm:mb-8">
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
