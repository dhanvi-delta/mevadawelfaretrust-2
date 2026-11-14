import Image from "next/image";
import { CheckCircle2, CalendarCheck } from "lucide-react";
import { ButtonLink } from "@/components/shared/ButtonLink";
import { Reveal } from "@/components/shared/Reveal";
import { purposeGu, site } from "@/data/content";

const points = [
  "Any man or woman of a Ghanghar Mevada Suthar family aged 18 to 50 can join",
  "₹50 contribution per member for each member's death; ₹40 reaches the heirs",
  "Contributions continue for 25 years — membership and benefits continue after",
  "Run by an elected executive committee; final decisions rest with the committee",
];

export function AboutPreview() {
  return (
    <section className="relative overflow-hidden bg-white py-20 sm:py-24 border-b border-line/60" aria-labelledby="about-heading">
      <div className="container-page grid items-center gap-12 lg:grid-cols-[1.1fr_1fr] lg:gap-14">
        {/* Left Column: Text + Gujarati Purpose Quote + 4 Points + CTAs */}
        <Reveal className="order-1">
          {/* Gold eyebrow with short gold dash */}
          <p className="inline-flex items-center gap-2 text-xs font-bold tracking-[0.16em] text-gold uppercase mb-3">
            <span className="h-0.5 w-5 rounded-full bg-gold" aria-hidden="true" />
            <span>About the Trust</span>
          </p>

          <h2 id="about-heading" className="text-3xl font-extrabold tracking-tight text-navy sm:text-4xl">
            A community standing together in difficult times
          </h2>

          <blockquote
            lang="gu"
            className="mt-6 rounded-2xl border-l-4 border-gold bg-pale-cream/60 p-5 text-[0.98rem] text-navy shadow-xs"
          >
            <p className="mb-1.5 text-xs font-bold tracking-wider text-saffron-700 uppercase">હેતુ</p>
            {purposeGu}
          </blockquote>

          {/* 4 key points as a teal-check list */}
          <ul className="mt-6 space-y-3">
            {points.map((p) => (
              <li key={p} className="flex gap-3 text-muted">
                <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-teal" aria-hidden="true" />
                <span className="text-[0.94rem] leading-relaxed">{p}</span>
              </li>
            ))}
          </ul>

          {/* Two CTAs: one filled teal pill, one outlined pill */}
          <div className="mt-8 flex flex-wrap gap-4">
            <ButtonLink href="/about" variant="primary" arrow>
              Read more about us
            </ButtonLink>
            <ButtonLink href="/trustees" variant="secondary">
              Meet the committee
            </ButtonLink>
          </div>
        </Reveal>

        {/* Right Column: Large Photo in asymmetric rounded frame with teal wave shape behind */}
        <Reveal className="relative order-2" delay={120}>
          {/* Faint leaf-branch outline at its left */}
          <div className="pointer-events-none absolute -top-8 -left-8 z-20 hidden text-teal/40 sm:block" aria-hidden="true">
            <svg width="64" height="64" viewBox="0 0 64 64" fill="none" stroke="currentColor">
              <path d="M8 56 C 8 32, 32 8, 56 8 C 56 32, 32 56, 8 56 Z" strokeWidth="2" />
              <path d="M8 56 L38 26" strokeWidth="1.75" />
              <path d="M22 42 Q 30 34 38 36" strokeWidth="1.5" />
            </svg>
          </div>

          {/* Large teal gradient wave shape behind it that bleeds off the right edge */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -top-10 -right-20 -bottom-10 w-[120%] -z-10 rounded-l-[140px] bg-gradient-to-r from-pale-teal/80 via-teal/15 to-transparent opacity-85"
          />

          {/* Asymmetric rounded photo frame (about 48px top-left, 140px bottom-right) */}
          <div className="relative overflow-hidden rounded-tl-[48px] rounded-br-[140px] rounded-tr-[32px] rounded-bl-[32px] border-4 border-white bg-pale-teal shadow-[0_16px_44px_rgba(7,54,74,0.12)]">
            <Image
              src="/gallery/photo-009.jpg"
              alt="Community members gathered for a General Assembly of the Trust"
              width={700}
              height={500}
              sizes="(min-width: 1024px) 45vw, 92vw"
              className="h-auto w-full object-cover transition-transform duration-700 hover:scale-105"
            />
          </div>

          {/* Registration highlight badge card */}
          <div className="absolute -bottom-6 -left-3 max-w-[15rem] rounded-2xl border border-line bg-white/95 p-4 shadow-lift backdrop-blur-md sm:-left-6">
            <div className="flex items-center gap-2">
              <span className="grid size-7 place-items-center rounded-lg bg-pale-cream text-saffron-700">
                <CalendarCheck className="size-4 text-gold" aria-hidden="true" />
              </span>
              <p className="text-xs font-bold tracking-wider text-saffron-700 uppercase">Registered</p>
            </div>
            <p className="mt-1.5 font-display text-2xl font-extrabold text-navy">31/07/2002</p>
            <p className="mt-0.5 text-xs text-muted">Reg. No. {site.registrationNo}</p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
