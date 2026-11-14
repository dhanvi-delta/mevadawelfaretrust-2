import Link from "next/link";
import type { ReactNode } from "react";
import { ChevronRight } from "lucide-react";
import { breadcrumbJsonLd } from "@/lib/seo";
import { JsonLd } from "./JsonLd";

interface PageHeroProps {
  title: string;
  titleGu?: string;
  description?: ReactNode;
  breadcrumbs: { name: string; path: string }[];
  eyebrow?: string;
  children?: ReactNode;
  aside?: ReactNode;
}

/** Inner-page header with breadcrumbs, bilingual title and optional side slot. */
export function PageHero({ title, titleGu, description, breadcrumbs, eyebrow, children, aside }: PageHeroProps) {
  const trail = [{ name: "Home", path: "/" }, ...breadcrumbs];
  return (
    <section className="relative overflow-hidden border-b border-line/70 bg-gradient-to-b from-mint/70 via-cream to-cream">
      <JsonLd data={breadcrumbJsonLd(trail)} />
      <div aria-hidden="true" className="bg-dots absolute inset-y-0 right-0 hidden w-1/2 opacity-60 [mask-image:linear-gradient(to_left,black,transparent)] md:block" />
      <div aria-hidden="true" className="absolute -top-24 -right-24 size-72 rounded-full bg-saffron-100/60 blur-3xl" />
      <div className="container-page relative py-12 sm:py-16 lg:py-20">
        <nav aria-label="Breadcrumb" className="no-print mb-6">
          <ol className="flex flex-wrap items-center gap-1 text-sm text-muted">
            {trail.map((crumb, i) => {
              const last = i === trail.length - 1;
              return (
                <li key={crumb.path} className="flex items-center gap-1">
                  {last ? (
                    <span aria-current="page" className="font-medium text-brand-800">
                      {crumb.name}
                    </span>
                  ) : (
                    <>
                      <Link href={crumb.path} className="rounded hover:text-brand-700 hover:underline">
                        {crumb.name}
                      </Link>
                      <ChevronRight aria-hidden="true" className="size-3.5 opacity-60" />
                    </>
                  )}
                </li>
              );
            })}
          </ol>
        </nav>
        <div className={aside ? "grid items-end gap-10 lg:grid-cols-[1fr_auto]" : undefined}>
          <div className="max-w-3xl animate-fade-up">
            {eyebrow && <p className="eyebrow mb-4">{eyebrow}</p>}
            <h1 className="text-[2rem] leading-tight font-extrabold sm:text-5xl">{title}</h1>
            {titleGu && (
              <p lang="gu" className="mt-3 text-xl font-semibold text-brand-600 sm:text-2xl">
                {titleGu}
              </p>
            )}
            {description && <div className="mt-5 max-w-2xl text-base text-muted sm:text-lg">{description}</div>}
            {children && <div className="mt-8 flex flex-wrap gap-3">{children}</div>}
          </div>
          {aside}
        </div>
      </div>
    </section>
  );
}
