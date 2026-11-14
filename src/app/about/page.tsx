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
      <section className="py-16 sm:py-20">
        <div className="container-page grid gap-12 lg:grid-cols-[1.1fr_1fr] lg:items-center">
          <Reveal>
            <SectionHeading eyebrow="Who we are" title="Trust introduction" titleGu="હેતુ" />
            <p lang="gu" className="mt-6 text-lg text-ink">
              {purposeGu}
            </p>
            <dl className="mt-8 grid gap-4 sm:grid-cols-2">
              {[
                { icon: Landmark, label: "Registration", value: site.registration },
                { icon: BadgeCheck, label: "Scheme", value: "સામાજીક સુરક્ષા યોજના", gu: true },
                { icon: Building2, label: "Office", value: "ગુરૂનાનક ચોક, પાલનપુર", gu: true },
                { icon: Users, label: "Community", value: "ઘાનઘાર મેવાડા સુથાર સમાજ", gu: true },
              ].map((item) => (
                <div key={item.label} className="flex gap-3 rounded-2xl bg-white p-4 shadow-soft ring-1 ring-line/70">
                  <span className="grid size-10 shrink-0 place-items-center rounded-xl bg-mint text-brand-700">
                    <item.icon className="size-5" aria-hidden="true" />
                  </span>
                  <div>
                    <dt className="text-xs font-semibold tracking-wide text-muted uppercase">{item.label}</dt>
                    <dd lang={item.gu ? "gu" : undefined} className="font-semibold text-ink">
                      {item.value}
                    </dd>
                  </div>
                </div>
              ))}
            </dl>
          </Reveal>
          <Reveal delay={120} className="space-y-5">
            <div className="overflow-hidden rounded-[2rem] shadow-lift">
              <Image
                src="/gallery/photo-001.jpg"
                alt="A speaker at a Trust General Assembly, standing at a podium with the Trust's hands logo"
                width={700}
                height={500}
                sizes="(min-width: 1024px) 45vw, 92vw"
                className="h-auto w-full"
              />
            </div>
            <figure className="rounded-2xl bg-white p-3 shadow-soft ring-1 ring-line">
              <Image
                src="/images/letterhead.png"
                alt={`Official letterhead: ${site.nameGu}, ${contact.letterheadAddress}, ${site.registration}`}
                width={883}
                height={141}
                sizes="(min-width: 1024px) 40vw, 90vw"
                className="h-auto w-full"
              />
              <figcaption className="mt-2 px-1 text-xs text-muted">Official letterhead of the Trust</figcaption>
            </figure>
          </Reveal>
        </div>
      </section>

      {/* How it works */}
      <section className="bg-mint/60 py-16 sm:py-20" aria-labelledby="how-heading">
        <div className="container-page">
          <SectionHeading id="how-heading" align="center" eyebrow="How the scheme works" title="From joining to supporting a family" />
          <ol className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((s, i) => (
              <Reveal as="li" key={s.title} delay={i * 80} className="card relative p-6">
                <span className="absolute top-5 right-5 font-display text-4xl font-extrabold text-brand-100">0{i + 1}</span>
                <span className="grid size-12 place-items-center rounded-2xl bg-brand-700 text-white">
                  <s.icon className="size-6" aria-hidden="true" />
                </span>
                <h3 className="mt-5 text-lg font-bold">{s.title}</h3>
                <p className="mt-2 text-[0.95rem] text-muted">{s.text}</p>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      {/* Fees + application */}
      <section className="py-16 sm:py-20">
        <div className="container-page grid gap-12 lg:grid-cols-2">
          <Reveal>
            <SectionHeading eyebrow="Membership" title="Entry fee by age" titleGu="સભાસદની દાખલ ફી" />
            <p lang="gu" className="mt-4 text-muted">
              {feeIntroGu}
            </p>
            <div className="mt-6 overflow-x-auto rounded-2xl border border-line bg-white">
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
                        <span lang="gu" className="block font-medium">{f.age}</span>
                        <span className="text-xs text-muted">{f.ageEn}</span>
                      </td>
                      <td lang="gu" className="text-right font-bold text-brand-700">
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
            <div lang="gu" className="prose-gu mt-6 space-y-4 text-ink">
              {applicationNotesGu.map((p) => (
                <p key={p.slice(0, 24)}>{p}</p>
              ))}
            </div>
            <div className="mt-8 flex flex-wrap gap-3">
              <ButtonLink href="/welfare-schemes">Read all scheme rules</ButtonLink>
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
