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
      <h2 className="text-sm font-bold tracking-[0.14em] text-saffron-400 uppercase">{title}</h2>
      <ul className="mt-5 space-y-2.5">
        {links.map((link) => (
          <li key={link.href}>
            {link.external ? (
              <a
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-brand-100/90 transition hover:text-white"
              >
                {link.label}
                <ArrowUpRight className="size-3.5" aria-hidden="true" />
                <span className="sr-only"> (opens in a new tab)</span>
              </a>
            ) : (
              <Link href={link.href} className="text-brand-100/90 transition hover:text-white">
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
    <footer className="relative mt-auto overflow-hidden bg-brand-900 text-brand-100">
      <div aria-hidden="true" className="absolute -top-40 -left-40 size-96 rounded-full bg-brand-700/40 blur-3xl" />
      <div aria-hidden="true" className="absolute -right-32 -bottom-48 size-96 rounded-full bg-saffron-500/10 blur-3xl" />
      <div className="container-page relative grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1.3fr] lg:gap-10">
        <div>
          <div className="flex items-center gap-3">
            <span className="grid size-14 shrink-0 place-items-center rounded-2xl bg-white">
              <Image src="/logo/logo.png" alt="" width={44} height={44} className="size-11" />
            </span>
            <div>
              <p className="font-display text-lg font-extrabold text-white">Mevada Welfare Trust</p>
              <p lang="gu" className="text-sm text-brand-200">
                {site.nameGu}
              </p>
            </div>
          </div>
          <p lang="gu" className="mt-6 max-w-sm text-[0.93rem] text-brand-100/85">
            {purposeGu}
          </p>
          <p className="mt-5 inline-flex rounded-full bg-white/5 px-3 py-1.5 text-xs text-brand-200 ring-1 ring-white/10">
            {site.registration}
          </p>
        </div>

        <FooterLinks title="The Trust" links={footerQuickLinks} />
        <FooterLinks title="Members" links={footerMemberLinks} />

        <div>
          <h2 className="text-sm font-bold tracking-[0.14em] text-saffron-400 uppercase">Office</h2>
          <address className="mt-5 space-y-4 not-italic">
            <p className="flex gap-3">
              <MapPin className="mt-1 size-5 shrink-0 text-saffron-400" aria-hidden="true" />
              <span lang="gu" className="text-[0.93rem] text-brand-100/90">
                {contact.addressLines.join(" ")}
              </span>
            </p>
            <a href={contact.phoneHref} className="flex items-center gap-3 transition hover:text-white">
              <Phone className="size-5 shrink-0 text-saffron-400" aria-hidden="true" />
              <span>{contact.phoneDisplayEn}</span>
            </a>
            <a href={`mailto:${contact.email}`} className="flex items-center gap-3 break-all transition hover:text-white">
              <Mail className="size-5 shrink-0 text-saffron-400" aria-hidden="true" />
              <span>{contact.email}</span>
            </a>
          </address>
        </div>
      </div>

      <div className="relative border-t border-white/10">
        <div className="container-page flex flex-col gap-2 py-6 text-sm text-brand-200 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {site.name}. All rights reserved.
          </p>
          <p>
            Developed by{" "}
            <a href={site.developer.url} target="_blank" rel="noopener noreferrer" className="font-semibold text-white hover:text-saffron-400">
              {site.developer.name}
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
