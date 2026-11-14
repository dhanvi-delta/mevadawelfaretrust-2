"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { ArrowUpRight, ChevronDown, Mail, Menu, Phone, User, X } from "lucide-react";
import { mainNav } from "@/data/navigation";
import { contact, site } from "@/data/content";
import { cn } from "@/lib/utils";

export function MobileMenu() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [expanded, setExpanded] = useState<string | null>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) return;
    const trigger = triggerRef.current;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      document.removeEventListener("keydown", onKey);
      trigger?.focus();
    };
  }, [open]);

  const close = () => setOpen(false);

  return (
    <div className="xl:hidden">
      <button
        ref={triggerRef}
        type="button"
        onClick={() => setOpen(true)}
        aria-expanded={open}
        aria-controls="mobile-menu"
        className="grid size-10 place-items-center rounded-full bg-mist text-deep-teal ring-1 ring-line transition hover:bg-pale-teal"
      >
        <Menu className="size-5" aria-hidden="true" />
        <span className="sr-only">Open menu</span>
      </button>

      {open &&
        createPortal(
          <div className="fixed inset-0 z-[60]" role="dialog" aria-modal="true" aria-label="Site menu" id="mobile-menu">
            <div className="absolute inset-0 animate-fade-in bg-navy/60 backdrop-blur-sm" onClick={close} aria-hidden="true" />
            <div className="absolute inset-y-0 right-0 flex w-full max-w-sm animate-slide-in flex-col bg-ivory shadow-2xl">
              <div className="flex items-center justify-between border-b border-line bg-white px-5 py-4">
                <span className="font-display text-base font-extrabold text-navy">Menu</span>
                <button
                  ref={closeRef}
                  type="button"
                  onClick={close}
                  className="grid size-10 place-items-center rounded-full bg-mist text-navy ring-1 ring-line hover:bg-pale-teal"
                >
                  <X className="size-5" aria-hidden="true" />
                  <span className="sr-only">Close menu</span>
                </button>
              </div>

              <nav aria-label="Mobile" className="flex-1 overflow-y-auto px-4 py-4">
                <ul className="space-y-1">
                  {mainNav.map((item) => {
                    if (!item.children) {
                      const active = item.href === "/" ? pathname === "/" : pathname.startsWith(item.href!);
                      return (
                        <li key={item.label}>
                          <Link
                            href={item.href!}
                            onClick={close}
                            aria-current={active ? "page" : undefined}
                            className={cn(
                              "flex min-h-12 items-center rounded-xl px-4 text-base font-semibold transition-colors",
                              active ? "bg-deep-teal text-white shadow-sm" : "text-ink hover:bg-white",
                            )}
                          >
                            {item.label}
                          </Link>
                        </li>
                      );
                    }
                    const isOpen = expanded === item.label;
                    const groupId = `m-group-${item.label}`;
                    return (
                      <li key={item.label}>
                        <button
                          type="button"
                          aria-expanded={isOpen}
                          aria-controls={groupId}
                          onClick={() => setExpanded(isOpen ? null : item.label)}
                          className="flex min-h-12 w-full items-center justify-between rounded-xl px-4 text-base font-semibold text-ink hover:bg-white"
                        >
                          {item.label}
                          <ChevronDown
                            aria-hidden="true"
                            className={cn("size-5 text-deep-teal transition-transform", isOpen && "rotate-180")}
                          />
                        </button>
                        <ul id={groupId} hidden={!isOpen} className="mt-1 mb-2 ml-4 space-y-1 border-l-2 border-pale-teal pl-3">
                          {item.children.map((child) => {
                            const active = !child.external && pathname.startsWith(child.href);
                            const cls = cn(
                              "flex min-h-11 flex-col justify-center rounded-lg px-3 py-1.5",
                              active ? "bg-pale-teal font-semibold text-deep-teal" : "text-ink/85 hover:bg-white",
                            );
                            const inner = (
                              <>
                                <span className="flex items-center gap-1 text-[0.95rem] font-medium">
                                  {child.label}
                                  {child.external && <ArrowUpRight aria-hidden="true" className="size-3.5 text-gold" />}
                                </span>
                                {child.labelGu && (
                                  <span lang="gu" className="text-xs text-muted">
                                    {child.labelGu}
                                  </span>
                                )}
                              </>
                            );
                            return (
                              <li key={child.href}>
                                {child.external ? (
                                  <a href={child.href} target="_blank" rel="noopener noreferrer" className={cls} onClick={close}>
                                    {inner}
                                    <span className="sr-only"> (opens in a new tab)</span>
                                  </a>
                                ) : (
                                  <Link href={child.href} className={cls} onClick={close} aria-current={active ? "page" : undefined}>
                                    {inner}
                                  </Link>
                                )}
                              </li>
                            );
                          })}
                        </ul>
                      </li>
                    );
                  })}
                </ul>
              </nav>

              <div className="space-y-3 border-t border-line bg-white p-5">
                <a
                  href={site.crmUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-shimmer flex h-11 items-center justify-center gap-2 rounded-full bg-gold text-sm font-bold text-navy shadow-md transition hover:bg-warm-gold"
                >
                  Pay contribution online <ArrowUpRight className="size-4" aria-hidden="true" />
                  <span className="sr-only"> (opens in a new tab)</span>
                </a>
                <a
                  href={site.crmUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-10 items-center justify-center gap-2 rounded-full bg-navy text-xs font-semibold text-white transition hover:bg-deep-teal"
                >
                  <User className="size-3.5 text-warm-gold" aria-hidden="true" />
                  Member Portal (CRM)
                </a>
                <div className="flex flex-col gap-2 pt-2 text-xs text-muted">
                  <a href={contact.phoneHref} className="inline-flex items-center gap-2 hover:text-deep-teal">
                    <Phone className="size-3.5 text-deep-teal" aria-hidden="true" /> {contact.phoneDisplayEn}
                  </a>
                  <a href={`mailto:${contact.email}`} className="inline-flex items-center gap-2 break-all hover:text-deep-teal">
                    <Mail className="size-3.5 shrink-0 text-deep-teal" aria-hidden="true" /> {contact.email}
                  </a>
                </div>
              </div>
            </div>
          </div>,
          document.body,
        )}
    </div>
  );
}
