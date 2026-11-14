import Image from "next/image";
import Link from "next/link";
import { site } from "@/data/content";
import { cn } from "@/lib/utils";

export function Logo({ className, tone = "dark" }: { className?: string; tone?: "dark" | "light" }) {
  return (
    <Link href="/" className={cn("group flex min-w-0 items-center gap-3", className)} aria-label={`${site.name} — Home`}>
      <span className="grid size-12 shrink-0 place-items-center rounded-2xl bg-white shadow-soft ring-1 ring-line transition group-hover:shadow-lift">
        <Image src="/logo/logo.png" alt="" width={40} height={40} priority className="size-10" />
      </span>
      <span className="flex min-w-0 flex-col leading-tight">
        <span
          className={cn(
            "truncate font-display text-[1.02rem] font-extrabold tracking-tight",
            tone === "dark" ? "text-brand-800" : "text-white",
          )}
        >
          Mevada Welfare Trust
        </span>
        <span lang="gu" className={cn("truncate text-[0.78rem] !leading-snug", tone === "dark" ? "text-muted" : "text-brand-100")}>
          શ્રી મેવાડા સુથાર સમાજ, પાલનપુર
        </span>
      </span>
    </Link>
  );
}
