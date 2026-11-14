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
  },
  {
    icon: HandHeart,
    title: "Death-Aid Contribution",
    gu: "મૃત્યુ સહાય ફાળો",
    text: "Twice a year the Trust announces the contribution due from each member. Look up your amount using your member number.",
    href: "/death-members",
    cta: "Check your amount",
  },
  {
    icon: Laptop,
    title: "Online Payment & CRM",
    gu: "ઓનલાઇન પેમેંટ",
    text: "Pay your contribution online, receive a digital receipt and update your address, mobile number and e-mail.",
    href: site.crmUrl,
    cta: "Open the portal",
    external: true,
  },
  {
    icon: MapPinned,
    title: "Collection Centres",
    gu: "કલેકશન સેન્ટર",
    text: "Deposit contributions at any of the 25 authorised centres in Palanpur, Ahmedabad, Mumbai, Surat and more.",
    href: "/collection-centers",
    cta: "Find a centre",
  },
];

export function Activities() {
  return (
    <section className="py-20 sm:py-24" aria-labelledby="activities-heading">
      <div className="container-page">
        <SectionHeading
          id="activities-heading"
          align="center"
          eyebrow="Our welfare activities"
          title="How the Trust serves its members"
          description="Everything a member needs — from joining the scheme to paying contributions and claiming support."
        />
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {activities.map((a, i) => {
            const body = (
              <>
                <span className="grid size-14 place-items-center rounded-2xl bg-gradient-to-br from-brand-600 to-brand-800 text-white shadow-soft transition duration-300 group-hover:scale-105 group-hover:rotate-[-4deg]">
                  <a.icon className="size-7" aria-hidden="true" />
                </span>
                <h3 className="mt-6 text-lg font-bold">{a.title}</h3>
                <p lang="gu" className="text-sm font-medium text-saffron-700">
                  {a.gu}
                </p>
                <p className="mt-3 flex-1 text-[0.95rem] text-muted">{a.text}</p>
                <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-bold text-brand-700">
                  {a.cta}
                  {a.external ? (
                    <ArrowUpRight className="size-4" aria-hidden="true" />
                  ) : (
                    <ArrowRight className="size-4 transition group-hover:translate-x-1" aria-hidden="true" />
                  )}
                </span>
              </>
            );
            const cls =
              "card group flex h-full flex-col p-6 transition duration-300 hover:-translate-y-1.5 hover:shadow-lift hover:ring-1 hover:ring-brand-200";
            return (
              <Reveal key={a.title} delay={i * 80}>
                {a.external ? (
                  <a href={a.href} target="_blank" rel="noopener noreferrer" className={cls}>
                    {body}
                    <span className="sr-only"> (opens in a new tab)</span>
                  </a>
                ) : (
                  <Link href={a.href} className={cls}>
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
