import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Mail, MapPin, Phone } from "lucide-react";
import { contact, purposeGu, site } from "@/data/content";
import { footerMemberLinks, footerQuickLinks } from "@/data/navigation";
import type { NavLink } from "@/types";
import { cacheLife } from "next/cache";

async function currentYear() {
  "use cache";
  cacheLife("days");
  return new Date().getFullYear();
}

function FooterLinks({ title, links }: { title: string; links: NavLink[] }) {
  return (
    <div>
      <h2 className="text-xs font-bold tracking-[0.16em] text-warm-gold uppercase">{title}</h2>
      <ul className="mt-5 space-y-2.5">
        {links.map((link) => (
          <li key={link.href}>
            {link.external ? (
              <a
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-[0.92rem] text-pale-teal/85 transition-colors duration-150 hover:text-white"
              >
                {link.label}
                <ArrowUpRight className="size-3.5 text-warm-gold/80" aria-hidden="true" />
                <span className="sr-only"> (opens in a new tab)</span>
              </a>
            ) : (
              <Link
                href={link.href}
                className="text-[0.92rem] text-pale-teal/85 transition-colors duration-150 hover:text-white"
              >
                {link.label}
              </Link>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export async function Footer() {
  const year = await currentYear();
  return (
    <footer className="relative mt-auto overflow-hidden bg-gradient-to-b from-navy via-navy to-[#052b3b] text-white">
      {/* Decorative top wave transition with gold rule */}
      <div className="relative w-full overflow-hidden leading-none text-ivory">
        <svg
          className="relative block h-7 w-full sm:h-10"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <path
            d="M0,0 C150,90 400,110 600,60 C800,10 1050,40 1200,90 L1200,0 L0,0 Z"
            fill="currentColor"
          />
        </svg>
        <div className="h-[2px] w-full bg-gradient-to-r from-transparent via-gold to-transparent" aria-hidden="true" />
      </div>

      {/* Background glow and subtle jali pattern */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.03] [background-image:radial-gradient(white_1px,transparent_1px)] [background-size:24px_24px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-40 -left-40 size-96 rounded-full bg-teal/20 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 bottom-0 size-96 rounded-full bg-gold/10 blur-3xl"
      />

      <div className="container-page relative grid gap-12 pt-14 pb-16 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1.3fr] lg:gap-10">
        {/* Brand identity column */}
        <div>
          <div className="flex items-center gap-3.5">
            <span className="relative grid size-13 shrink-0 place-items-center rounded-full bg-white p-1 ring-2 ring-gold/50 shadow-soft">
              <Image src="/logo/logo.png" alt="" width={44} height={44} className="size-11 rounded-full object-contain" />
            </span>
            <div>
              <p className="font-display text-lg font-extrabold text-white">Mevada Welfare Trust</p>
              <p lang="gu" className="text-xs font-medium text-pale-teal">
                {site.nameGu}
              </p>
            </div>
          </div>
          <p lang="gu" className="mt-6 max-w-sm text-[0.92rem] leading-relaxed text-pale-teal/80">
            {purposeGu}
          </p>
          <p className="mt-5 inline-flex items-center gap-1.5 rounded-full bg-white/5 px-3 py-1.5 text-xs text-pale-teal ring-1 ring-white/10">
            <span className="h-1.5 w-1.5 rounded-full bg-warm-gold" aria-hidden="true" />
            <span>{site.registration}</span>
          </p>
        </div>

        {/* Links columns */}
        <FooterLinks title="The Trust" links={footerQuickLinks} />
        <FooterLinks title="Members" links={footerMemberLinks} />

        {/* Office details */}
        <div>
          <h2 className="text-xs font-bold tracking-[0.16em] text-warm-gold uppercase">Office</h2>
          <address className="mt-5 space-y-3.5 not-italic text-sm">
            <p className="flex gap-3 text-pale-teal/90">
              <MapPin className="mt-0.5 size-4.5 shrink-0 text-warm-gold" aria-hidden="true" />
              <span lang="gu" className="text-[0.92rem] leading-relaxed">
                {contact.addressLines.join(" ")}
              </span>
            </p>
            <a href={contact.phoneHref} className="flex items-center gap-3 text-pale-teal/90 transition-colors hover:text-white">
              <Phone className="size-4.5 shrink-0 text-warm-gold" aria-hidden="true" />
              <span className="font-medium">{contact.phoneDisplayEn}</span>
            </a>
            <a
              href={`mailto:${contact.email}`}
              className="flex items-center gap-3 break-all text-pale-teal/90 transition-colors hover:text-white"
            >
              <Mail className="size-4.5 shrink-0 text-warm-gold" aria-hidden="true" />
              <span>{contact.email}</span>
            </a>
          </address>
        </div>
      </div>

      {/* Decorative subtle heritage skyline line-art motif on the right */}
      <div className="pointer-events-none absolute right-4 bottom-14 hidden opacity-10 lg:block" aria-hidden="true">
        <svg width="220" height="70" viewBox="0 0 220 70" fill="none" stroke="currentColor">
          <path d="M10 70 L10 40 Q25 15 40 40 L40 70 M40 70 L40 30 Q60 5 80 30 L80 70 M80 70 L80 45 Q95 25 110 45 L110 70 M110 70 L110 35 Q135 10 160 35 L160 70 M160 70 L160 48 Q175 32 190 48 L190 70" strokeWidth="1.5" />
          <circle cx="60" cy="18" r="3" fill="currentColor" />
          <circle cx="135" cy="22" r="3" fill="currentColor" />
        </svg>
      </div>

      {/* Slim copyright bar */}
      <div className="relative border-t border-white/10 bg-black/20">
        <div className="container-page flex flex-col gap-2 py-4 text-xs text-pale-teal/70 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {site.name}. All rights reserved.
          </p>
          <p>
            Developed by{" "}
            <a
              href={site.developer.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-pale-teal underline underline-offset-2 transition-colors hover:text-white"
            >
              {site.developer.name}
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
