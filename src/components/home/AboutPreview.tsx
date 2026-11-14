import Image from "next/image";
import { CheckCircle2 } from "lucide-react";
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
    <section className="py-20 sm:py-24" aria-labelledby="about-heading">
      <div className="container-page grid items-center gap-14 lg:grid-cols-2">
        <Reveal className="relative order-2 lg:order-1">
          <div className="relative overflow-hidden rounded-[2rem] shadow-lift">
            <Image
              src="/gallery/photo-009.jpg"
              alt="Community members gathered for a General Assembly of the Trust"
              width={700}
              height={500}
              sizes="(min-width: 1024px) 45vw, 92vw"
              className="h-auto w-full"
            />
          </div>
          <div className="absolute -right-2 -bottom-6 max-w-[15rem] rounded-2xl bg-white p-5 shadow-lift ring-1 ring-line sm:-right-6">
            <p className="text-xs font-bold tracking-wider text-saffron-700 uppercase">Registered</p>
            <p className="mt-1 font-display text-2xl font-extrabold text-brand-800">31/07/2002</p>
            <p className="mt-1 text-xs text-muted">Reg. No. {site.registrationNo}</p>
          </div>
        </Reveal>

        <Reveal className="order-1 lg:order-2" delay={100}>
          <p className="eyebrow mb-3">About the Trust</p>
          <h2 id="about-heading" className="text-[1.75rem] font-bold sm:text-4xl">
            A community standing together in difficult times
          </h2>
          <blockquote lang="gu" className="mt-6 rounded-2xl border-l-4 border-saffron-500 bg-sand/70 p-5 text-[1.02rem] text-ink">
            <p className="mb-1 text-sm font-bold text-saffron-700">હેતુ</p>
            {purposeGu}
          </blockquote>
          <ul className="mt-7 space-y-3">
            {points.map((p) => (
              <li key={p} className="flex gap-3 text-muted">
                <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-emerald" aria-hidden="true" />
                <span>{p}</span>
              </li>
            ))}
          </ul>
          <div className="mt-8 flex flex-wrap gap-3">
            <ButtonLink href="/about">Read more about us</ButtonLink>
            <ButtonLink href="/trustees" variant="ghost">
              Meet the committee
            </ButtonLink>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
