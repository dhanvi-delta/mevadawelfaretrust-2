import Image from "next/image";
import { MapPin, Phone } from "lucide-react";
import type { OfficeBearer } from "@/types";
import { telHref } from "@/lib/utils";

export function OfficeBearerCard({ person, priority = false }: { person: OfficeBearer; priority?: boolean }) {
  const tel = telHref(person.phone);
  return (
    <article className="card group relative flex h-full flex-col items-center p-6 text-center transition-all duration-300 hover:-translate-y-2 hover:shadow-lift bg-gradient-to-br from-white via-white to-pale-teal/20 border border-line">
      {/* Photo frame with arch curve and decorative gold ring */}
      <div className="relative mb-4">
        <div
          aria-hidden="true"
          className="absolute -inset-1.5 rounded-t-[2.8rem] rounded-b-2xl bg-gradient-to-tr from-teal/20 via-gold/20 to-transparent transition-transform duration-300 group-hover:scale-105"
        />
        <div className="relative h-44 w-32 overflow-hidden rounded-t-[2.5rem] rounded-b-xl bg-pale-teal ring-4 ring-white shadow-soft">
          <Image
            src={person.photo}
            alt={`Portrait of ${person.name}, ${person.roleEn}`}
            width={160}
            height={210}
            priority={priority}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>
      </div>

      {/* Role badge */}
      <span className="inline-flex items-center rounded-full bg-pale-teal px-3 py-1 text-xs font-bold tracking-wider text-deep-teal uppercase ring-1 ring-teal/20">
        {person.roleEn}
      </span>

      {/* Person Name (Gujarati) */}
      <h3 lang="gu" className="mt-3 text-lg font-bold text-navy !leading-snug">
        {person.name}
      </h3>

      {/* Person Role (Gujarati) */}
      <p lang="gu" className="mt-1 text-xs font-semibold text-gold">
        {person.role}
      </p>

      {/* Village and tap-to-call button */}
      <div className="mt-4 flex w-full flex-col items-center gap-2 border-t border-line/80 pt-4 text-xs">
        <span lang="gu" className="inline-flex items-center gap-1.5 text-muted">
          <MapPin className="size-3.5 text-teal" aria-hidden="true" />
          <span>{person.village}</span>
        </span>

        {tel && (
          <a
            href={tel}
            lang="gu"
            className="inline-flex items-center gap-1.5 rounded-full bg-deep-teal/10 px-3 py-1.5 font-bold text-deep-teal transition-all duration-200 hover:bg-deep-teal hover:text-white"
          >
            <Phone className="size-3.5" aria-hidden="true" />
            <span>{person.phone}</span>
          </a>
        )}
      </div>
    </article>
  );
}
