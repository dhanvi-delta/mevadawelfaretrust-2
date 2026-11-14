import Link from "next/link";
import { ButtonLink } from "@/components/shared/ButtonLink";

const suggestions = [
  { href: "/welfare-schemes", label: "Social Security Scheme" },
  { href: "/notices", label: "Notices & Updates" },
  { href: "/collection-centers", label: "Collection Centres" },
  { href: "/contact", label: "Contact Us" },
];

export default function NotFound() {
  return (
    <section className="relative overflow-hidden py-24 sm:py-32">
      <div aria-hidden="true" className="bg-jali pointer-events-none absolute inset-0 opacity-20" />
      <div className="container-page relative max-w-2xl text-center">
        <p className="font-display text-8xl font-extrabold tracking-tight text-pale-teal">404</p>
        <h1 className="mt-4 text-3xl font-extrabold text-navy sm:text-4xl">Page not found</h1>
        <p className="mt-3 text-sm text-muted">The page you are looking for may have moved as part of our new website.</p>
        <div className="mt-8 flex justify-center">
          <ButtonLink href="/" variant="primary" arrow>
            Back to home
          </ButtonLink>
        </div>
        <ul className="mt-10 flex flex-wrap justify-center gap-2.5">
          {suggestions.map((s) => (
            <li key={s.href}>
              <Link
                href={s.href}
                className="inline-flex rounded-full bg-white px-4 py-2 text-xs font-bold text-deep-teal ring-1 ring-line shadow-xs hover:bg-pale-teal transition"
              >
                {s.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
