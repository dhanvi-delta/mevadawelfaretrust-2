import Image from "next/image";
import Link from "next/link";
import { site } from "@/data/content";
import { cn } from "@/lib/utils";

export function Logo({ className, tone = "dark" }: { className?: string; tone?: "dark" | "light" }) {
  return (
    <Link
      href="/"
      className={cn("group flex min-w-0 items-center gap-3.5", className)}
      aria-label={`${site.name} — Home`}
    >
      {/* Round logo 56px with gold ring */}
      <span className="relative grid size-14 shrink-0 place-items-center rounded-full bg-white p-1 ring-2 ring-gold/60 shadow-soft transition-transform duration-300 group-hover:scale-105 group-hover:ring-gold">
        <Image
          src="/logo/logo.png"
          alt=""
          width={48}
          height={48}
          priority
          className="size-11 rounded-full object-contain"
        />
      </span>

      <span className="flex min-w-0 flex-col leading-tight">
        <span
          className={cn(
            "truncate font-display text-[1.05rem] font-extrabold tracking-tight",
            tone === "dark" ? "text-navy" : "text-white",
          )}
        >
          Mevada Welfare Trust
        </span>
        <span className="flex items-center gap-1.5 mt-0.5">
          <span
            lang="gu"
            className={cn(
              "truncate text-[0.8rem] font-medium !leading-snug",
              tone === "dark" ? "text-deep-teal" : "text-pale-teal",
            )}
          >
            શ્રી મેવાડા સુથાર સમાજ
          </span>
          <span className="h-0.5 w-3 bg-gold/70" aria-hidden="true" />
          <span
            className={cn(
              "text-[0.72rem] font-semibold tracking-wider uppercase",
              tone === "dark" ? "text-muted" : "text-pale-teal/80",
            )}
          >
            Palanpur
          </span>
        </span>
      </span>
    </Link>
  );
}
