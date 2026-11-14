import Image from "next/image";
import Link from "next/link";
import { ArrowRight, BellRing, HandCoins, ShieldCheck } from "lucide-react";
import { ButtonLink } from "@/components/shared/ButtonLink";
import { site } from "@/data/content";
import { latestNotice } from "@/data/notices";

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* Background shapes */}
      <div aria-hidden="true" className="absolute inset-0 -z-10 bg-gradient-to-br from-mint via-cream to-sand" />
      <div aria-hidden="true" className="bg-dots absolute top-0 left-0 -z-10 h-80 w-80 opacity-70 [mask-image:radial-gradient(circle,black,transparent_70%)]" />
      <div aria-hidden="true" className="absolute -top-32 right-[-10%] -z-10 size-[34rem] rounded-full bg-saffron-100/70 blur-3xl" />

      <div className="container-page grid items-center gap-12 pt-10 pb-16 sm:pt-14 lg:grid-cols-[1.05fr_1fr] lg:gap-14 lg:pt-20 lg:pb-24">
        <div className="animate-fade-up">
          <p className="inline-flex items-center gap-2 rounded-full bg-white/80 px-3 py-1.5 text-xs font-semibold text-brand-700 shadow-soft ring-1 ring-line">
            <ShieldCheck className="size-4 text-emerald" aria-hidden="true" />
            Registered public trust · Since {site.foundedYear}
          </p>

          <h1 lang="gu" className="mt-6 text-[2rem] !leading-[1.3] font-bold text-brand-800 sm:text-[2.6rem] lg:text-[2.9rem]">
            શ્રી મેવાડા સુથાર સમાજ <span className="text-saffron-600">વેલફેર ટ્રસ્ટ</span>, પાલનપુર
          </h1>

          <p className="mt-5 max-w-xl text-lg font-semibold text-ink sm:text-xl">
            Social security for every member family — support for heirs when a member passes away.
          </p>
          <p className="mt-3 max-w-xl text-base text-muted sm:text-lg">
            Through the <span lang="gu" className="font-semibold text-brand-700">સામાજીક સુરક્ષા યોજના</span>, every
            registered member contributes when a fellow member passes away, so that the family left behind has
            financial security.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <ButtonLink href="/welfare-schemes" size="lg" icon={<HandCoins className="size-5" aria-hidden="true" />}>
              Explore the Scheme
            </ButtonLink>
            <ButtonLink href="/about" variant="secondary" size="lg">
              Know Our Trust
            </ButtonLink>
          </div>

          <dl className="mt-10 grid max-w-lg grid-cols-3 gap-4 border-t border-line pt-6">
            <div>
              <dt className="text-xs font-medium text-muted">Eligible age</dt>
              <dd className="mt-1 font-display text-xl font-extrabold text-brand-800">18–50</dd>
            </div>
            <div>
              <dt className="text-xs font-medium text-muted">Per death</dt>
              <dd className="mt-1 font-display text-xl font-extrabold text-brand-800">₹50</dd>
            </div>
            <div>
              <dt className="text-xs font-medium text-muted">Centres</dt>
              <dd className="mt-1 font-display text-xl font-extrabold text-brand-800">25</dd>
            </div>
          </dl>
        </div>

        {/* Visual composition */}
        <div className="relative mx-auto w-full max-w-xl animate-fade-up [animation-delay:150ms] lg:max-w-none">
          <div className="relative aspect-[4/3.4] w-full">
            <div className="absolute inset-0 overflow-hidden rounded-[2rem] shadow-lift ring-1 ring-white">
              <Image
                src="/gallery/photo-007.jpg"
                alt="Trust dignitaries seated on stage at the 6th General Assembly of the Trust in 2013"
                fill
                priority
                sizes="(min-width: 1024px) 48vw, 92vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-900/45 via-transparent to-transparent" />
            </div>

            <div className="absolute -bottom-8 -left-3 w-[42%] overflow-hidden rounded-2xl border-4 border-white shadow-lift sm:-left-8">
              <Image
                src="/gallery/photo-001.jpg"
                alt="Speaker at the podium carrying the Trust's hands logo"
                width={700}
                height={500}
                sizes="(min-width: 1024px) 20vw, 40vw"
                className="h-auto w-full"
              />
            </div>

            <Link
              href={`/notices/${latestNotice.slug}`}
              className="group absolute -top-5 right-2 w-[min(17rem,72%)] rounded-2xl bg-white/95 p-4 shadow-lift ring-1 ring-line backdrop-blur transition hover:-translate-y-1 sm:-right-5"
            >
              <span className="flex items-center gap-2 text-xs font-bold tracking-wider text-saffron-700 uppercase">
                <BellRing className="size-4" aria-hidden="true" /> Latest notice
              </span>
              <span lang="gu" className="mt-1.5 line-clamp-2 block text-sm font-semibold text-ink">
                {latestNotice.title}
              </span>
              <span className="mt-2 inline-flex items-center gap-1 text-xs font-semibold text-brand-700">
                Read notice <ArrowRight className="size-3.5 transition group-hover:translate-x-0.5" aria-hidden="true" />
              </span>
            </Link>

            <div className="absolute right-4 bottom-4 hidden rounded-2xl bg-brand-800/90 px-4 py-3 text-white shadow-lift backdrop-blur sm:block">
              <p className="text-[0.7rem] tracking-wider text-brand-200 uppercase">Registration</p>
              <p className="text-sm font-semibold">{site.registrationNo}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
