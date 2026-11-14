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
    <section className="relative overflow-hidden py-20 sm:py-24" aria-labelledby="about-heading">
      {/* Decorative leaf outline */}
      <div className="pointer-events-none absolute top-12 left-8 text-teal/20" aria-hidden="true">
        <svg width="60" height="60" viewBox="0 0 60 60" fill="none" stroke="currentColor">
          <path d="M10 50 C 10 30, 30 10, 50 10 C 50 30, 30 50, 10 50 Z" strokeWidth="1.5" />
          <path d="M10 50 L35 25" strokeWidth="1.25" />
        </svg>
      </div>

      <div className="container-page grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        {/* Left Column: Text + Gujarati Purpose Quote + Points + CTA */}
        <Reveal className="order-1">
          <p className="eyebrow mb-3">About the Trust</p>
          <h2 id="about-heading" className="text-3xl font-extrabold tracking-tight text-navy sm:text-4xl">
            A community standing together in difficult times
          </h2>

          <blockquote
            lang="gu"
            className="mt-6 rounded-2xl border-l-4 border-gold bg-pale-cream/60 p-5 text-[0.98rem] text-navy shadow-sm"
          >
            <p className="mb-1.5 text-xs font-bold tracking-wider text-saffron-700 uppercase">હેતુ</p>
            {purposeGu}
          </blockquote>

          {/* Points list */}
          <ul className="mt-6 space-y-3">
            {points.map((p) => (
              <li key={p} className="flex gap-3 text-muted">
                <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-teal" aria-hidden="true" />
                <span className="text-[0.93rem] leading-relaxed">{p}</span>
              </li>
            ))}
          </ul>

          <div className="mt-8 flex flex-wrap gap-3.5">
            <ButtonLink href="/about" variant="primary" arrow>
              Read more about us
            </ButtonLink>
            <ButtonLink href="/trustees" variant="secondary">
              Meet the committee
            </ButtonLink>
          </div>
        </Reveal>

        {/* Right Column: Large Photo in organic asymmetric frame with teal wave shape behind */}
        <Reveal className="relative order-2" delay={120}>
          {/* Big teal wave shape bleeding off the edge */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -inset-4 -z-10 rounded-[3rem] bg-gradient-to-tr from-pale-teal via-mist to-transparent opacity-80"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-16 -bottom-10 size-72 rounded-full bg-teal/15 blur-3xl"
          />

          {/* Organic frame for photo */}
          <div className="relative overflow-hidden rounded-[2.5rem] border-4 border-white bg-pale-teal shadow-lift">
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
          <div className="absolute -bottom-6 -left-3 max-w-[15rem] rounded-2xl border border-line bg-white/95 p-4.5 shadow-lift backdrop-blur-md sm:-left-6">
            <div className="flex items-center gap-2">
              <span className="grid size-7 place-items-center rounded-lg bg-pale-cream text-saffron-700">
                <CalendarCheck className="size-4 text-gold" aria-hidden="true" />
              </span>
              <p className="text-xs font-bold tracking-wider text-saffron-700 uppercase">Registered</p>
            </div>
            <p className="mt-2 font-display text-2xl font-extrabold text-navy">31/07/2002</p>
            <p className="mt-1 text-xs text-muted">Reg. No. {site.registrationNo}</p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
