import { HeartHandshake, Scale, UsersRound } from "lucide-react";
import { Reveal } from "@/components/shared/Reveal";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { ButtonLink } from "@/components/shared/ButtonLink";

/** Each card quotes the Trust's own published wording. */
const cards = [
  {
    icon: HeartHandshake,
    title: "Financial security for heirs",
    gu: "તેમના વારસદારોની આર્થિક સલામતી જળવાય તે હેતુસર આ સામાજીક સુરક્ષા યોજના શરૂ કરવામાં આવી છે.",
    tone: "bg-brand-700 text-white",
    iconTone: "bg-white/15 text-white",
    textTone: "text-brand-100",
  },
  {
    icon: UsersRound,
    title: "Every member is a worker of the Trust",
    gu: "દરેક સભાસદ આ ટ્રસ્ટનો કાર્યકર છે, આ યોજનામાં વઘુમાં વઘુ સભાસદો નોંઘાય અને આ યોજના ઉત્તરોત્તર પ્રગતિ કરે…",
    tone: "bg-white",
    iconTone: "bg-saffron-50 text-saffron-600",
    textTone: "text-muted",
  },
  {
    icon: Scale,
    title: "Collective, accountable decisions",
    gu: "આ યોજનામાં આખરી નિર્ણય ટ્રસ્ટની કારોબારી સમિતીનો રહેશે, જે સર્વેને બંઘનકર્તા રહેશે.",
    tone: "bg-white",
    iconTone: "bg-mint text-brand-700",
    textTone: "text-muted",
  },
];

export function MissionCards() {
  return (
    <section className="bg-mint/60 py-20 sm:py-24" aria-labelledby="mission-heading">
      <div className="container-page">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <SectionHeading id="mission-heading" eyebrow="Vision & Mission" title="What guides our work" />
          <ButtonLink href="/vision-mission" variant="secondary" className="self-start md:self-auto">
            Our purpose in full
          </ButtonLink>
        </div>
        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {cards.map((c, i) => (
            <Reveal key={c.title} delay={i * 90} className={`card group p-7 transition duration-300 hover:-translate-y-1 hover:shadow-lift ${c.tone}`}>
              <span className={`grid size-12 place-items-center rounded-2xl ${c.iconTone}`}>
                <c.icon className="size-6" aria-hidden="true" />
              </span>
              <h3 className={`mt-6 text-xl font-bold ${i === 0 ? "!text-white" : ""}`}>{c.title}</h3>
              <p lang="gu" className={`mt-3 text-[0.98rem] ${c.textTone}`}>
                “{c.gu}”
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
