"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowUpRight, Search, User } from "lucide-react";
import { site } from "@/data/content";
import { cn } from "@/lib/utils";
import { Logo } from "./Logo";
import { MobileMenu } from "./MobileMenu";
import { Navigation } from "./Navigation";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 12);
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (totalScroll > 0) {
        setScrollProgress((window.scrollY / totalScroll) * 100);
      }
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 transition-all duration-300",
        scrolled
          ? "border-b border-line/90 bg-white/95 shadow-[0_4px_24px_rgba(7,54,74,0.06)] backdrop-blur-md"
          : "border-b border-transparent bg-white/80 backdrop-blur-sm",
      )}
    >
      {/* Subtle scroll progress bar */}
      <div
        className="absolute top-0 left-0 h-[2.5px] bg-gradient-to-r from-deep-teal via-teal to-gold transition-all duration-100 ease-out"
        style={{ width: `${scrollProgress}%` }}
        aria-hidden="true"
      />

      <a
        href="#main"
        className="sr-only z-[70] rounded-full bg-deep-teal px-4 py-2 text-white focus:not-sr-only focus:absolute focus:top-3 focus:left-3"
      >
        Skip to content
      </a>

      <div className="container-page flex h-[4.25rem] items-center justify-between gap-3">
        <Logo />

        <div className="flex items-center gap-2 lg:gap-3">
          <Navigation />

          {/* Quick search button from screenshot reference */}
          <Link
            href="/notices"
            aria-label="Search notices and schemes"
            title="Search notices"
            className="hidden size-9 items-center justify-center rounded-full bg-mist text-deep-teal transition-colors duration-150 hover:bg-pale-teal lg:inline-flex"
          >
            <Search className="size-4" aria-hidden="true" />
          </Link>

          {/* Dark navy pill button with user icon (existing CRM portal link) */}
          <a
            href={site.crmUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden h-9 items-center gap-1.5 rounded-full bg-navy px-3.5 text-xs font-semibold text-white shadow-sm transition hover:bg-deep-teal lg:inline-flex"
          >
            <User className="size-3.5 text-warm-gold" aria-hidden="true" />
            <span>Member Portal</span>
            <span className="sr-only"> (opens in a new tab)</span>
          </a>

          {/* Gold pill button (existing "Pay Online" link) */}
          <a
            href={site.crmUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-shimmer hidden h-9 items-center gap-1 rounded-full bg-gold px-4 text-xs font-bold text-navy shadow-[0_4px_16px_rgba(213,163,79,0.4)] transition hover:-translate-y-0.5 hover:bg-warm-gold sm:inline-flex"
          >
            <span>Pay Online</span>
            <ArrowUpRight className="size-3.5" aria-hidden="true" />
            <span className="sr-only"> (opens the Trust CRM portal in a new tab)</span>
          </a>

          <MobileMenu />
        </div>
      </div>
    </header>
  );
}
