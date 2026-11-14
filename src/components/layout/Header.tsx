"use client";

import { useEffect, useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { site } from "@/data/content";
import { cn } from "@/lib/utils";
import { Logo } from "./Logo";
import { MobileMenu } from "./MobileMenu";
import { Navigation } from "./Navigation";

export function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 transition-[background-color,box-shadow,border-color] duration-300",
        scrolled
          ? "border-b border-line/80 bg-white/90 shadow-[0_6px_24px_-16px_rgb(16_71_74/0.35)] backdrop-blur-md"
          : "border-b border-transparent bg-cream/80 backdrop-blur-sm",
      )}
    >
      <a
        href="#main"
        className="sr-only z-[70] rounded-full bg-brand-800 px-4 py-2 text-white focus:not-sr-only focus:absolute focus:top-3 focus:left-3"
      >
        Skip to content
      </a>
      <div className="container-page flex h-[4.5rem] items-center justify-between gap-4">
        <Logo />
        <div className="flex items-center gap-2">
          <Navigation />
          <a
            href={site.crmUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="ml-2 hidden h-10 items-center gap-1.5 rounded-full bg-saffron-500 px-4 text-sm font-bold text-brand-900 shadow-[0_8px_20px_-10px_rgb(240_144_48/0.9)] transition hover:-translate-y-0.5 hover:bg-saffron-400 sm:inline-flex"
          >
            Pay Online
            <ArrowUpRight className="size-4" aria-hidden="true" />
            <span className="sr-only"> (opens the Trust CRM portal in a new tab)</span>
          </a>
          <MobileMenu />
        </div>
      </div>
    </header>
  );
}
