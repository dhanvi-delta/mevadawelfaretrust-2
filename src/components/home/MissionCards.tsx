import { HeartHandshake, Scale, UsersRound, Quote } from "lucide-react";
import { Reveal } from "@/components/shared/Reveal";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { ButtonLink } from "@/components/shared/ButtonLink";

/** Each card quotes the Trust's own published wording. */
const cards = [
  {
    icon: HeartHandshake,
    title: "Financial security for heirs",
    gu: "તેમના વારસદારોની આર્થિક સલામતી જળવાય તે હેતુસર આ સામાજીક સુરક્ષા યોજના શરૂ કરવામાં આવી છે.",
    bg: "bg-gradient-to-br from-white to-pale-teal/30 border-teal/20",
    iconTone: "bg-pale-teal text-deep-teal",
  },
  {
    icon: UsersRound,
    title: "Every member is a worker of the Trust",
    gu: "દરેક સભાસદ આ ટ્રસ્ટનો કાર્યકર છે, આ યોજનામાં વઘુમાં વઘુ સભાસદો નોંઘાય અને આ યોજના ઉત્તરોત્તર પ્રગતિ કરે…",
    bg: "bg-gradient-to-br from-white to-pale-cream/40 border-gold/25",
    iconTone: "bg-pale-cream text-saffron-700",
  },
  {
    icon: Scale,
    title: "Collective, accountable decisions",
    gu: "આ યોજનામાં આખરી નિર્ણય ટ્રસ્ટની કારોબારી સમિતીનો રહેશે, જે સર્વેને બંઘનકર્તા રહેશે.",
    bg: "bg-gradient-to-br from-white to-pale-blue/30 border-line",
    iconTone: "bg-pale-teal text-deep-teal",
  },
];

export function MissionCards() {
  return (
    <section className="relative overflow-hidden bg-mist/60 py-20 sm:py-24" aria-labelledby="mission-heading">
      <div className="container-page relative">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <SectionHeading
            id="mission-heading"
            eyebrow="Vision & Mission"
            title="What guides our work"
          />
          <ButtonLink href="/vision-mission" variant="secondary" className="self-start md:self-auto">
            Our purpose in full
          </ButtonLink>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {cards.map((c, i) => (
            <Reveal
              key={c.title}
              delay={i * 90}
              className={`card group relative flex flex-col justify-between p-7.5 transition-all duration-300 hover:-translate-y-2 hover:shadow-lift ${c.bg}`}
            >
              {/* Subtle quote water-mark */}
              <div className="pointer-events-none absolute right-4 top-4 text-navy/[0.04]" aria-hidden="true">
                <Quote className="size-16" />
              </div>

              <div>
                <span className={`grid size-13 place-items-center rounded-2xl transition-transform duration-300 group-hover:scale-110 ${c.iconTone}`}>
                  <c.icon className="size-6.5" aria-hidden="true" />
                </span>
                <h3 className="mt-6 font-display text-xl font-bold text-navy">{c.title}</h3>
                <p lang="gu" className="mt-3.5 text-[0.98rem] leading-relaxed text-muted">
                  “{c.gu}”
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-line/60 flex items-center justify-between">
                <span className="text-xs font-bold tracking-wider text-teal uppercase">Principle 0{i + 1}</span>
                <span className="h-1.5 w-1.5 rounded-full bg-gold" />
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
