import Link from "next/link";
import type { ReactNode } from "react";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { cn, isExternal } from "@/lib/utils";

type Variant = "primary" | "secondary" | "ghost" | "accent" | "light" | "outline";

const variants: Record<Variant, string> = {
  // Filled teal pill CTA with hover lift & shadow
  primary:
    "bg-deep-teal text-white shadow-[0_4px_16px_rgba(7,89,106,0.3)] hover:bg-navy hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(7,54,74,0.25)]",
  // Gold pill CTA with shimmer
  accent:
    "btn-shimmer bg-gold text-navy font-bold shadow-[0_4px_16px_rgba(213,163,79,0.4)] hover:bg-warm-gold hover:-translate-y-0.5",
  // Outlined pill CTA
  secondary:
    "border border-deep-teal/30 bg-white/90 text-deep-teal hover:border-deep-teal hover:bg-pale-teal hover:-translate-y-0.5",
  outline:
    "border-2 border-deep-teal bg-transparent text-deep-teal hover:bg-deep-teal hover:text-white hover:-translate-y-0.5",
  ghost:
    "text-deep-teal hover:bg-pale-teal/70 hover:text-navy",
  light:
    "bg-white/15 text-white ring-1 ring-white/30 backdrop-blur hover:bg-white/25 hover:-translate-y-0.5",
};

interface ButtonLinkProps {
  href: string;
  children: ReactNode;
  variant?: Variant;
  size?: "sm" | "md" | "lg";
  className?: string;
  icon?: ReactNode;
  arrow?: boolean;
  /** Force external behaviour (new tab + ↗ icon) */
  external?: boolean;
  ariaLabel?: string;
}

export function ButtonLink({
  href,
  children,
  variant = "primary",
  size = "md",
  className,
  icon,
  arrow,
  external,
  ariaLabel,
}: ButtonLinkProps) {
  const ext = external ?? isExternal(href);
  const sizes = {
    sm: "h-9 px-4 text-xs font-semibold",
    md: "h-11 px-5 text-sm font-semibold",
    lg: "h-12 px-6.5 text-[0.95rem] font-bold",
  }[size];

  const classes = cn(
    "inline-flex items-center justify-center gap-2 rounded-full font-sans transition-all duration-200 whitespace-nowrap cursor-pointer",
    sizes,
    variants[variant],
    className,
  );

  const content = (
    <>
      {icon}
      <span>{children}</span>
      {ext ? (
        <ArrowUpRight aria-hidden="true" className="size-4 shrink-0 opacity-80" />
      ) : arrow ? (
        <ArrowRight aria-hidden="true" className="size-4 shrink-0 transition-transform duration-200 group-hover:translate-x-1" />
      ) : null}
      {ext && <span className="sr-only"> (opens in a new tab)</span>}
    </>
  );

  if (ext || href.startsWith("tel:") || href.startsWith("mailto:")) {
    return (
      <a
        href={href}
        className={classes}
        aria-label={ariaLabel}
        {...(ext ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      >
        {content}
      </a>
    );
  }

  return (
    <Link href={href} className={classes} aria-label={ariaLabel}>
      {content}
    </Link>
  );
}
