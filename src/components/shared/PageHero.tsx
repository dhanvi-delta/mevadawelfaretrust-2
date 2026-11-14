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

/** Inner-page slim teal banner with breadcrumbs, bilingual title and subtle heritage pattern. */
export function PageHero({
  title,
  titleGu,
  description,
  breadcrumbs,
  eyebrow,
  children,
  aside,
}: PageHeroProps) {
  const trail = [{ name: "Home", path: "/" }, ...breadcrumbs];
  return (
    <section className="relative overflow-hidden border-b border-line bg-gradient-to-br from-pale-teal/70 via-mist/50 to-ivory py-10 sm:py-14">
      <JsonLd data={breadcrumbJsonLd(trail)} />

      {/* Background subtle jali pattern & soft glow */}
      <div aria-hidden="true" className="bg-jali pointer-events-none absolute inset-0 opacity-40" />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-24 right-0 size-80 rounded-full bg-teal/10 blur-3xl"
      />

      <div className="container-page relative">
        <nav aria-label="Breadcrumb" className="no-print mb-4">
          <ol className="flex flex-wrap items-center gap-1.5 text-xs font-medium text-muted">
            {trail.map((crumb, i) => {
              const last = i === trail.length - 1;
              return (
                <li key={crumb.path} className="flex items-center gap-1.5">
                  {last ? (
                    <span aria-current="page" className="font-semibold text-deep-teal">
                      {crumb.name}
                    </span>
                  ) : (
                    <>
                      <Link
                        href={crumb.path}
                        className="transition-colors hover:text-navy hover:underline"
                      >
                        {crumb.name}
                      </Link>
                      <ChevronRight aria-hidden="true" className="size-3 text-gold/70" />
                    </>
                  )}
                </li>
              );
            })}
          </ol>
        </nav>

        <div className={aside ? "grid items-end gap-8 lg:grid-cols-[1fr_auto]" : undefined}>
          <div className="max-w-3xl animate-fade-up">
            {eyebrow && <p className="eyebrow mb-2.5">{eyebrow}</p>}

            <h1 className="text-2xl font-extrabold tracking-tight text-navy sm:text-4xl lg:text-[2.65rem]">
              {title}
            </h1>

            {titleGu && (
              <p lang="gu" className="mt-2 text-lg font-semibold text-teal sm:text-xl">
                {titleGu}
              </p>
            )}

            {description && (
              <div className="mt-3 text-base text-muted sm:text-lg leading-relaxed">
                {description}
              </div>
            )}

            {children && <div className="mt-6 flex flex-wrap gap-3">{children}</div>}
          </div>

          {aside && <div className="mt-4 lg:mt-0 animate-fade-up [animation-delay:100ms]">{aside}</div>}
        </div>
      </div>
    </section>
  );
}
