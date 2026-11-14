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
    bg: "from-white to-pale-teal/35",
    iconTone: "from-bright-teal to-deep-teal",
  },
  {
    icon: UsersRound,
    title: "Every member is a worker of the Trust",
    gu: "દરેક સભાસદ આ ટ્રસ્ટનો કાર્યકર છે, આ યોજનામાં વઘુમાં વઘુ સભાસદો નોંઘાય અને આ યોજના ઉત્તરોત્તર પ્રગતિ કરે…",
    bg: "from-white to-pale-cream/45",
    iconTone: "from-warm-gold to-gold",
  },
  {
    icon: Scale,
    title: "Collective, accountable decisions",
    gu: "આ યોજનામાં આખરી નિર્ણય ટ્રસ્ટની કારોબારી સમિતીનો રહેશે, જે સર્વેને બંઘનકર્તા રહેશે.",
    bg: "from-white to-pale-blue/35",
    iconTone: "from-teal to-navy",
  },
];

export function MissionCards() {
  return (
    <section className="relative overflow-hidden bg-mist/80 py-20 sm:py-24 border-b border-line/60" aria-labelledby="mission-heading">
      <div className="container-page relative">
        {/* Centered Heading with '-- Title --' gold lines */}
        <SectionHeading
          id="mission-heading"
          align="center"
          flourish
          eyebrow="Vision & Mission"
          title="What guides our work"
          description="The core values and principles stated in the rules of the Social Security Scheme."
        />

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {cards.map((c, i) => (
            <Reveal
              key={c.title}
              delay={i * 90}
              className={`card group relative flex flex-col justify-between p-7.5 rounded-[20px] bg-gradient-to-br ${c.bg} border border-line shadow-[0_14px_40px_rgba(7,54,74,0.08)] transition-all duration-300 hover:-translate-y-2 hover:shadow-lift`}
            >
              {/* Subtle quote watermark */}
              <div className="pointer-events-none absolute right-4 top-4 text-navy/[0.04]" aria-hidden="true">
                <Quote className="size-16" />
              </div>

              <div>
                {/* Circular teal gradient icon */}
                <span className={`grid size-14 place-items-center rounded-full bg-gradient-to-br ${c.iconTone} text-white shadow-soft transition-transform duration-300 group-hover:scale-105 group-hover:rotate-[-4deg]`}>
                  <c.icon className="size-6.5" aria-hidden="true" />
                </span>

                <h3 className="mt-6 font-display text-lg font-bold text-navy">{c.title}</h3>
                <p lang="gu" className="mt-3 text-[0.95rem] leading-relaxed text-muted">
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

        <div className="mt-10 flex justify-center">
          <ButtonLink href="/vision-mission" variant="secondary" arrow>
            Our purpose in full
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}
