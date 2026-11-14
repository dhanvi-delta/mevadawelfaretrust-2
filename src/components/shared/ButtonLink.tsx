import Link from "next/link";
import type { ReactNode } from "react";
import { ArrowUpRight } from "lucide-react";
import { cn, isExternal } from "@/lib/utils";

type Variant = "primary" | "secondary" | "ghost" | "accent" | "light";

const variants: Record<Variant, string> = {
  primary:
    "bg-brand-700 text-white shadow-[0_8px_20px_-8px_rgb(20_91_89/0.6)] hover:bg-brand-800 hover:-translate-y-0.5",
  accent:
    "bg-saffron-500 text-brand-900 shadow-[0_8px_20px_-8px_rgb(240_144_48/0.7)] hover:bg-saffron-400 hover:-translate-y-0.5",
  secondary: "bg-white text-brand-800 ring-1 ring-brand-200 hover:ring-brand-400 hover:bg-brand-50",
  ghost: "text-brand-700 hover:text-brand-900 hover:bg-brand-50",
  light: "bg-white/10 text-white ring-1 ring-white/30 hover:bg-white/20 backdrop-blur",
};

interface ButtonLinkProps {
  href: string;
  children: ReactNode;
  variant?: Variant;
  size?: "sm" | "md" | "lg";
  className?: string;
  icon?: ReactNode;
  /** Force external behaviour (new tab + ↗ icon) */
  external?: boolean;
  ariaLabel?: string;
}

export function ButtonLink({ href, children, variant = "primary", size = "md", className, icon, external, ariaLabel }: ButtonLinkProps) {
  const ext = external ?? isExternal(href);
  const sizes = {
    sm: "h-9 px-4 text-sm",
    md: "h-11 px-5 text-[0.95rem]",
    lg: "h-12 px-6 text-base",
  }[size];

  const classes = cn(
    "inline-flex items-center justify-center gap-2 rounded-full font-semibold transition-all duration-200 whitespace-nowrap",
    sizes,
    variants[variant],
    className,
  );

  const content = (
    <>
      {icon}
      <span>{children}</span>
      {ext && <ArrowUpRight aria-hidden="true" className="size-4 opacity-80" />}
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
