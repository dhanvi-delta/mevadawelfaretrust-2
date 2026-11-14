import Link from "next/link";
import { ArrowRight, ArrowUpRight, HandHeart, Laptop, MapPinned, ShieldCheck } from "lucide-react";
import { Reveal } from "@/components/shared/Reveal";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { site } from "@/data/content";

const activities = [
  {
    icon: ShieldCheck,
    title: "Social Security Scheme",
    gu: "સામાજીક સુરક્ષા યોજના",
    text: "Membership with an age-based entry fee, and death-aid support paid to the heirs of a deceased member by account-payee cheque.",
    href: "/welfare-schemes",
    cta: "Scheme rules",
    gradient: "from-white to-pale-teal/30",
  },
  {
    icon: HandHeart,
    title: "Death-Aid Contribution",
    gu: "મૃત્યુ સહાય ફાળો",
    text: "Twice a year the Trust announces the contribution due from each member. Look up your amount using your member number.",
    href: "/death-members",
    cta: "Check your amount",
    gradient: "from-white to-pale-cream/40",
  },
  {
    icon: Laptop,
    title: "Online Payment & CRM",
    gu: "ઓનલાઇન પેમેંટ",
    text: "Pay your contribution online, receive a digital receipt and update your address, mobile number and e-mail.",
    href: site.crmUrl,
    cta: "Open the portal",
    external: true,
    gradient: "from-white to-pale-blue/30",
  },
  {
    icon: MapPinned,
    title: "Collection Centres",
    gu: "કલેકશન સેન્ટર",
    text: "Deposit contributions at any of the 25 authorised centres in Palanpur, Ahmedabad, Mumbai, Surat and more.",
    href: "/collection-centers",
    cta: "Find a centre",
    gradient: "from-white to-pale-teal/25",
  },
];

export function Activities() {
  return (
    <section className="relative overflow-hidden bg-white py-20 sm:py-24 border-b border-line/60" aria-labelledby="activities-heading">
      <div className="container-page relative">
        {/* Centered Section Heading with '-- Title --' gold lines */}
        <SectionHeading
          id="activities-heading"
          align="center"
          flourish
          eyebrow="Our welfare activities"
          title="How the Trust serves its members"
          description="Everything a member needs — from joining the scheme to paying contributions and claiming support."
        />

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {activities.map((a, i) => {
            const body = (
              <>
                {/* Faint decorative jali pattern in the card's right corner */}
                <div
                  className="pointer-events-none absolute -right-3 -bottom-3 size-24 opacity-10 transition-opacity group-hover:opacity-25"
                  aria-hidden="true"
                >
                  <svg viewBox="0 0 100 100" fill="none" stroke="#07596a">
                    <circle cx="50" cy="50" r="42" strokeWidth="2.5" />
                    <circle cx="50" cy="50" r="26" strokeWidth="2" strokeDasharray="4 4" />
                    <circle cx="50" cy="50" r="10" strokeWidth="2" />
                    <path d="M50 8 L50 92 M8 50 L92 50" strokeWidth="1.5" />
                  </svg>
                </div>

                {/* 62px circular teal gradient icon on the left that tilts on hover */}
                <span className="grid size-14 place-items-center rounded-full bg-gradient-to-br from-bright-teal via-teal to-deep-teal text-white shadow-[0_6px_18px_rgba(7,140,145,0.3)] transition-transform duration-300 group-hover:scale-105 group-hover:rotate-[-5deg]">
                  <a.icon className="size-6.5" aria-hidden="true" />
                </span>

                <h3 className="mt-5 font-display text-[1.12rem] font-bold text-navy">{a.title}</h3>
                <p lang="gu" className="mt-0.5 text-xs font-semibold text-teal">
                  {a.gu}
                </p>

                <p className="mt-3 flex-1 text-[0.88rem] leading-relaxed text-muted">{a.text}</p>

                {/* Teal 'Learn more' link with arrow that moves right on hover */}
                <span className="mt-6 inline-flex items-center gap-1.5 text-xs font-bold text-deep-teal transition-colors group-hover:text-teal">
                  <span>{a.cta}</span>
                  {a.external ? (
                    <ArrowUpRight className="size-3.5" aria-hidden="true" />
                  ) : (
                    <ArrowRight
                      className="size-3.5 transition-transform duration-200 group-hover:translate-x-1.5"
                      aria-hidden="true"
                    />
                  )}
                </span>
              </>
            );

            const cardClasses = `card group relative flex h-full flex-col p-6 rounded-[20px] bg-gradient-to-br ${a.gradient} border border-line shadow-[0_14px_40px_rgba(7,54,74,0.08)] transition-all duration-300 hover:-translate-y-2 hover:shadow-lift`;

            return (
              <Reveal key={a.title} delay={i * 80}>
                {a.external ? (
                  <a href={a.href} target="_blank" rel="noopener noreferrer" className={cardClasses}>
                    {body}
                    <span className="sr-only"> (opens in a new tab)</span>
                  </a>
                ) : (
                  <Link href={a.href} className={cardClasses}>
                    {body}
                  </Link>
                )}
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
