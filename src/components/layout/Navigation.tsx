"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { ArrowUpRight, ChevronDown } from "lucide-react";
import { mainNav } from "@/data/navigation";
import { cn } from "@/lib/utils";

function isActive(pathname: string, href?: string) {
  if (!href || href.startsWith("http")) return false;
  return href === "/" ? pathname === "/" : pathname === href || pathname.startsWith(`${href}/`);
}

/** Desktop navigation with accessible hover/click/keyboard dropdowns. */
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
      <ul className="flex items-center gap-0.5">
        {mainNav.map((item, i) => {
          if (!item.children) {
            const active = isActive(pathname, item.href);
            return (
              <li key={item.label}>
                <Link
                  href={item.href!}
                  aria-current={active ? "page" : undefined}
                  className={cn(
                    "relative inline-flex h-10 items-center rounded-full px-3 text-[0.9rem] font-semibold whitespace-nowrap transition-colors 2xl:px-3.5",
                    active ? "bg-brand-50 text-brand-800" : "text-ink/80 hover:bg-brand-50/70 hover:text-brand-800",
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
                  "inline-flex h-10 items-center gap-1 rounded-full px-3 text-[0.9rem] font-semibold whitespace-nowrap transition-colors 2xl:px-3.5",
                  groupActive || expanded ? "bg-brand-50 text-brand-800" : "text-ink/80 hover:bg-brand-50/70 hover:text-brand-800",
                )}
              >
                {item.label}
                <ChevronDown aria-hidden="true" className={cn("size-4 transition-transform duration-200", expanded && "rotate-180")} />
              </button>

              <div
                id={menuId}
                hidden={!expanded}
                className="absolute top-full left-1/2 z-50 w-[22rem] -translate-x-1/2 pt-3"
              >
                <ul className="animate-scale-in origin-top rounded-2xl bg-white p-2 shadow-lift ring-1 ring-line">
                  {item.children.map((child) => {
                    const Icon = child.icon;
                    const active = isActive(pathname, child.href);
                    const inner = (
                      <>
                        {Icon && (
                          <span
                            className={cn(
                              "grid size-10 shrink-0 place-items-center rounded-xl transition-colors",
                              active ? "bg-brand-700 text-white" : "bg-mint text-brand-700 group-hover:bg-brand-700 group-hover:text-white",
                            )}
                          >
                            <Icon className="size-5" aria-hidden="true" />
                          </span>
                        )}
                        <span className="min-w-0">
                          <span className="flex items-center gap-1 text-[0.92rem] font-semibold text-ink">
                            {child.label}
                            {child.external && <ArrowUpRight aria-hidden="true" className="size-3.5 text-saffron-600" />}
                          </span>
                          {child.description && <span className="block text-[0.8rem] leading-snug text-muted">{child.description}</span>}
                        </span>
                      </>
                    );
                    const cls = cn("group flex items-start gap-3 rounded-xl p-2.5 transition-colors hover:bg-cream", active && "bg-cream");
                    return (
                      <li key={child.href}>
                        {child.external ? (
                          <a href={child.href} target="_blank" rel="noopener noreferrer" className={cls} onClick={() => setOpen(null)}>
                            {inner}
                            <span className="sr-only"> (opens in a new tab)</span>
                          </a>
                        ) : (
                          <Link href={child.href} className={cls} aria-current={active ? "page" : undefined} onClick={() => setOpen(null)}>
                            {inner}
                          </Link>
                        )}
                      </li>
                    );
                  })}
                </ul>
              </div>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
