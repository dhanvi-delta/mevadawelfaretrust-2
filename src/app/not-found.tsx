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
    <section className="py-24 sm:py-32">
      <div className="container-page max-w-2xl text-center">
        <p className="font-display text-7xl font-extrabold text-brand-100">404</p>
        <h1 className="mt-4 text-3xl font-bold sm:text-4xl">Page not found</h1>
        <p className="mt-3 text-muted">The page you are looking for may have moved as part of our new website.</p>
        <div className="mt-8 flex justify-center">
          <ButtonLink href="/">Back to home</ButtonLink>
        </div>
        <ul className="mt-10 flex flex-wrap justify-center gap-3">
          {suggestions.map((s) => (
            <li key={s.href}>
              <Link href={s.href} className="inline-flex rounded-full bg-white px-4 py-2 text-sm font-semibold text-brand-700 ring-1 ring-line hover:bg-brand-50">
                {s.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
