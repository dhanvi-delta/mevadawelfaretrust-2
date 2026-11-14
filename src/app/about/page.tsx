import Image from "next/image";
import { BadgeCheck, Building2, FileSignature, HandCoins, HeartHandshake, Landmark, UserPlus, Users } from "lucide-react";
import { ButtonLink } from "@/components/shared/ButtonLink";
import { PageHero } from "@/components/shared/PageHero";
import { Reveal } from "@/components/shared/Reveal";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { contact, purposeGu, site } from "@/data/content";
import { applicationNotesGu, feeIntroGu, membershipFees } from "@/data/schemes";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "About the Trust",
  description:
    "About Shree Mevada Suthar Samaj Welfare Trust, Palanpur — registered on 31/07/2002 (Reg. No. F/1779, B.K.), running the Samajik Suraksha Yojana for the Ghanghar Mevada Suthar community.",
  path: "/about",
});

const steps = [
  { icon: UserPlus, title: "Apply", text: "Fill the prescribed form, pay the age-based entry fee and get it signed by an executive member." },
  { icon: FileSignature, title: "Get a member number", text: "After verification, the Trust allots a member number. Death-aid benefits start after this." },
  { icon: HandCoins, title: "Contribute", text: "Pay ₹50 for every member's death, as announced twice a year, at a centre or online." },
  { icon: HeartHandshake, title: "Family is supported", text: "On a member's passing, the heirs receive the death-aid amount by account-payee cheque." },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About us"
        title="About the Trust"
        titleGu={site.nameGu}
        breadcrumbs={[{ name: "About", path: "/about" }]}
        description="A community welfare trust of the Mevada Suthar Samaj, Palanpur, created so that no member's family faces a loss alone."
      />

      {/* Identity + letterhead */}
      <section className="relative overflow-hidden py-16 sm:py-20">
        <div className="container-page grid gap-12 lg:grid-cols-[1.1fr_1fr] lg:items-center">
          <Reveal>
            <SectionHeading eyebrow="Who we are" title="Trust introduction" titleGu="હેતુ" />
            <p lang="gu" className="mt-6 text-lg leading-relaxed text-navy font-medium">
              {purposeGu}
            </p>
            <dl className="mt-8 grid gap-4 sm:grid-cols-2">
              {[
                { icon: Landmark, label: "Registration", value: site.registration },
                { icon: BadgeCheck, label: "Scheme", value: "સામાજીક સુરક્ષા યોજના", gu: true },
                { icon: Building2, label: "Office", value: "ગુરૂનાનક ચોક, પાલનપુર", gu: true },
                { icon: Users, label: "Community", value: "ઘાનઘાર મેવાડા સુથાર સમાજ", gu: true },
              ].map((item) => (
                <div
                  key={item.label}
                  className="card flex gap-3.5 rounded-2xl bg-gradient-to-br from-white to-pale-teal/15 p-4.5 shadow-soft border border-line"
                >
                  <span className="grid size-10 shrink-0 place-items-center rounded-xl bg-pale-teal text-deep-teal ring-1 ring-teal/20">
                    <item.icon className="size-5" aria-hidden="true" />
                  </span>
                  <div>
                    <dt className="text-[0.72rem] font-bold tracking-wider text-muted uppercase">{item.label}</dt>
                    <dd lang={item.gu ? "gu" : undefined} className="font-bold text-navy text-sm mt-0.5">
                      {item.value}
                    </dd>
                  </div>
                </div>
              ))}
            </dl>
          </Reveal>
          <Reveal delay={120} className="space-y-5">
            <div className="relative overflow-hidden rounded-[2.5rem] border-4 border-white bg-pale-teal shadow-lift">
              <Image
                src="/gallery/photo-001.jpg"
                alt="A speaker at a Trust General Assembly, standing at a podium with the Trust's hands logo"
                width={700}
                height={500}
                sizes="(min-width: 1024px) 45vw, 92vw"
                className="h-auto w-full object-cover transition-transform duration-700 hover:scale-105"
              />
            </div>
            <figure className="card rounded-2xl bg-white p-4 shadow-soft border border-line">
              <Image
                src="/images/letterhead.png"
                alt={`Official letterhead: ${site.nameGu}, ${contact.letterheadAddress}, ${site.registration}`}
                width={883}
                height={141}
                sizes="(min-width: 1024px) 40vw, 90vw"
                className="h-auto w-full"
              />
              <figcaption className="mt-2.5 px-1 text-xs text-muted flex items-center justify-between">
                <span>Official letterhead of the Trust</span>
                <span className="text-[0.7rem] font-bold text-teal uppercase tracking-wider">Reg. F/1779</span>
              </figcaption>
            </figure>
          </Reveal>
        </div>
      </section>

      {/* How it works */}
      <section className="relative overflow-hidden bg-mist/60 py-16 sm:py-20" aria-labelledby="how-heading">
        <div className="container-page relative">
          <SectionHeading
            id="how-heading"
            align="center"
            eyebrow="How the scheme works"
            title="From joining to supporting a family"
          />
          <ol className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((s, i) => (
              <Reveal
                as="li"
                key={s.title}
                delay={i * 80}
                className="card relative flex flex-col p-6.5 bg-gradient-to-br from-white to-pale-teal/20 border border-line shadow-soft hover:-translate-y-2 hover:shadow-lift transition-all duration-300"
              >
                <span className="absolute top-4 right-5 font-display text-4xl font-extrabold text-teal/15">
                  0{i + 1}
                </span>
                <span className="grid size-12 place-items-center rounded-2xl bg-gradient-to-br from-teal to-deep-teal text-white shadow-soft">
                  <s.icon className="size-6" aria-hidden="true" />
                </span>
                <h3 className="mt-5 font-display text-lg font-bold text-navy">{s.title}</h3>
                <p className="mt-2 text-xs leading-relaxed text-muted flex-1">{s.text}</p>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      {/* Fees + application */}
      <section className="relative overflow-hidden py-16 sm:py-20">
        <div className="container-page grid gap-12 lg:grid-cols-2">
          <Reveal>
            <SectionHeading eyebrow="Membership" title="Entry fee by age" titleGu="સભાસદની દાખલ ફી" />
            <p lang="gu" className="mt-4 text-xs text-muted leading-relaxed">
              {feeIntroGu}
            </p>
            <div className="mt-6 overflow-x-auto rounded-2xl border border-line bg-white shadow-soft">
              <table className="table-clean">
                <thead>
                  <tr>
                    <th scope="col" lang="gu">વય મર્યાદા</th>
                    <th scope="col" lang="gu" className="!text-right">ભરવાની થતી સભાસદ ફી</th>
                  </tr>
                </thead>
                <tbody>
                  {membershipFees.map((f) => (
                    <tr key={f.age}>
                      <td>
                        <span lang="gu" className="block font-bold text-navy">{f.age}</span>
                        <span className="text-xs text-muted">{f.ageEn}</span>
                      </td>
                      <td lang="gu" className="text-right font-extrabold text-deep-teal">
                        {f.fee}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Reveal>
          <Reveal delay={100}>
            <SectionHeading eyebrow="Application" title="Joining the scheme" titleGu="અરજી ૫ત્રક" />
            <div lang="gu" className="prose-gu mt-6 space-y-4 text-xs leading-relaxed text-navy">
              {applicationNotesGu.map((p) => (
                <p key={p.slice(0, 24)} className="rounded-xl bg-pale-cream/40 p-3.5 border border-gold/20">
                  {p}
                </p>
              ))}
            </div>
            <div className="mt-8 flex flex-wrap gap-3.5">
              <ButtonLink href="/welfare-schemes" variant="primary" arrow>
                Read all scheme rules
              </ButtonLink>
              <ButtonLink href="/contact" variant="secondary">
                Contact the office
              </ButtonLink>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
