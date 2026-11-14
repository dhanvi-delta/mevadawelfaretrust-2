import Image from "next/image";
import { MapPin, Phone } from "lucide-react";
import type { OfficeBearer } from "@/types";
import { telHref } from "@/lib/utils";

export function OfficeBearerCard({ person, priority = false }: { person: OfficeBearer; priority?: boolean }) {
  const tel = telHref(person.phone);
  return (
    <article className="card group flex h-full flex-col items-center p-6 text-center transition duration-300 hover:-translate-y-1 hover:shadow-lift">
      <div className="relative">
        <div aria-hidden="true" className="absolute inset-0 translate-x-2 translate-y-2 rounded-[1.6rem] bg-saffron-100 transition group-hover:translate-x-3 group-hover:translate-y-3" />
        <div className="relative h-40 w-30 overflow-hidden rounded-[1.6rem] bg-mint ring-4 ring-white">
          <Image
            src={person.photo}
            alt={`Portrait of ${person.name}, ${person.roleEn}`}
            width={150}
            height={200}
            priority={priority}
            className="h-full w-full object-cover"
          />
        </div>
      </div>
      <p className="mt-6 inline-flex items-center gap-2 rounded-full bg-brand-50 px-3 py-1 text-xs font-bold tracking-wide text-brand-700 uppercase">
        {person.roleEn}
      </p>
      <h3 lang="gu" className="mt-3 text-lg !leading-snug font-bold">
        {person.name}
      </h3>
      <p lang="gu" className="text-sm text-saffron-700">
        {person.role}
      </p>
      <div className="mt-4 flex w-full flex-col items-center gap-1.5 border-t border-line pt-4 text-sm text-muted">
        <span lang="gu" className="inline-flex items-center gap-1.5">
          <MapPin className="size-4 text-brand-500" aria-hidden="true" />
          {person.village}
        </span>
        {tel && (
          <a href={tel} lang="gu" className="inline-flex items-center gap-1.5 font-medium text-brand-700 hover:underline">
            <Phone className="size-4" aria-hidden="true" />
            {person.phone}
          </a>
        )}
      </div>
    </article>
  );
}
