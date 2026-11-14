"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { ChevronDown } from "lucide-react";
import { mainNav } from "@/data/navigation";
import { cn } from "@/lib/utils";

function isActive(pathname: string, href?: string) {
  if (!href || href.startsWith("http")) return false;
  return href === "/" ? pathname === "/" : pathname === href || pathname.startsWith(`${href}/`);
}

/** Desktop navigation with filled teal pill for active link, small text (13px), and accessible dropdowns. */
export function Navigation() {
  const pathname = usePathname();
  const [open, setOpen] = useState<number | null>(null);
  const navRef = useRef<HTMLElement>(null);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(null);
    };
    const onClick = (e: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(e.target as Node)) setOpen(null);
    };
    document.addEventListener("keydown", onKey);
    document.addEventListener("mousedown", onClick);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("mousedown", onClick);
    };
  }, []);

  const scheduleClose = () => {
    closeTimer.current = setTimeout(() => setOpen(null), 140);
  };
  const cancelClose = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
  };

  return (
    <nav ref={navRef} aria-label="Main" className="hidden xl:block">
      <ul className="flex items-center gap-1.5">
        {mainNav.map((item, i) => {
          if (!item.children) {
            const active = isActive(pathname, item.href);
            return (
              <li key={item.label}>
                <Link
                  href={item.href!}
                  aria-current={active ? "page" : undefined}
                  className={cn(
                    "relative inline-flex h-8 items-center rounded-full px-3.5 text-[13px] font-semibold whitespace-nowrap transition-all duration-200",
                    active
                      ? "bg-deep-teal text-white shadow-sm"
                      : "text-navy/80 hover:bg-pale-teal/70 hover:text-deep-teal",
                  )}
                >
                  {item.label}
                </Link>
              </li>
            );
          }

          const groupActive = item.children.some((c) => isActive(pathname, c.href));
          const expanded = open === i;
          const menuId = `nav-menu-${i}`;
          return (
            <li
              key={item.label}
              className="relative"
              onMouseEnter={() => {
                cancelClose();
                setOpen(i);
              }}
              onMouseLeave={scheduleClose}
              onBlur={(e) => {
                if (!e.currentTarget.contains(e.relatedTarget as Node)) setOpen(null);
              }}
            >
              <button
                type="button"
                aria-expanded={expanded}
                aria-controls={menuId}
                onClick={() => setOpen(expanded ? null : i)}
                onKeyDown={(e) => {
                  if (e.key === "ArrowDown") {
                    e.preventDefault();
                    setOpen(i);
                    setTimeout(() => document.querySelector<HTMLAnchorElement>(`#${menuId} a`)?.focus(), 30);
                  }
                }}
                className={cn(
                  "inline-flex h-8 items-center gap-1 rounded-full px-3.5 text-[13px] font-semibold whitespace-nowrap transition-all duration-200 cursor-pointer",
                  groupActive || expanded
                    ? "bg-deep-teal text-white shadow-sm"
                    : "text-navy/80 hover:bg-pale-teal/70 hover:text-deep-teal",
                )}
              >
                {item.label}
                <ChevronDown
                  aria-hidden="true"
                  className={cn("size-3.5 transition-transform duration-200", expanded && "rotate-180")}
                />
              </button>

              {expanded && (
                <div
                  id={menuId}
                  className="absolute top-full left-0 z-50 mt-2 min-w-[13.5rem] overflow-hidden rounded-2xl border border-line bg-white/95 p-1.5 shadow-lift backdrop-blur-md transition-all duration-200"
                >
                  <ul className="space-y-0.5">
                    {item.children.map((sub) => {
                      const subActive = isActive(pathname, sub.href);
                      return (
                        <li key={sub.label}>
                          <Link
                            href={sub.href}
                            aria-current={subActive ? "page" : undefined}
                            onClick={() => setOpen(null)}
                            className={cn(
                              "flex items-center justify-between rounded-xl px-3.5 py-2 text-[13px] font-medium transition-colors",
                              subActive
                                ? "bg-pale-teal text-deep-teal font-semibold"
                                : "text-navy/80 hover:bg-mist hover:text-deep-teal",
                            )}
                          >
                            <span>{sub.label}</span>
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              )}
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
