"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight, X, ZoomIn } from "lucide-react";
import type { GalleryImage } from "@/types";
import { FilterChips } from "@/components/shared/ListControls";

type Cat = GalleryImage["category"] | "all";

export function GalleryGrid({
  images,
  categories,
}: {
  images: GalleryImage[];
  categories: { id: Cat; label: string }[];
}) {
  const [cat, setCat] = useState<Cat>("all");
  const [active, setActive] = useState<number | null>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const lastTrigger = useRef<HTMLButtonElement | null>(null);

  const visible = cat === "all" ? images : images.filter((i) => i.category === cat);

  const close = useCallback(() => {
    setActive(null);
    lastTrigger.current?.focus();
  }, []);

  const step = useCallback(
    (dir: 1 | -1) =>
      setActive((i) => (i === null ? i : (i + dir + visible.length) % visible.length)),
    [visible.length],
  );

  useEffect(() => {
    if (active === null) return;
    closeRef.current?.focus();
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") step(1);
      if (e.key === "ArrowLeft") step(-1);
    };
    document.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      document.removeEventListener("keydown", onKey);
    };
  }, [active, close, step]);

  const current = active !== null ? visible[active] : null;

  return (
    <div>
      <FilterChips<Cat>
        label="Filter photos"
        value={cat}
        onChange={(v) => setCat(v)}
        options={categories.map((c) => ({
          ...c,
          count: c.id === "all" ? images.length : images.filter((i) => i.category === c.id).length,
        }))}
      />

      <ul className="mt-8 columns-1 gap-5 sm:columns-2 lg:columns-3 [&>li]:mb-5">
        {visible.map((img, i) => (
          <li key={img.src} className="break-inside-avoid">
            <button
              type="button"
              onClick={(e) => {
                lastTrigger.current = e.currentTarget;
                setActive(i);
              }}
              className="group relative block w-full overflow-hidden rounded-2xl border border-line bg-pale-teal/20 text-left shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-lift hover:ring-2 hover:ring-teal/30 focus:outline-none focus-visible:ring-2 focus-visible:ring-gold"
              aria-label={`View larger: ${img.alt}`}
            >
              <Image
                src={img.src}
                alt={img.alt}
                width={img.width}
                height={img.height}
                sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                className="h-auto w-full transition duration-700 group-hover:scale-105"
              />
              <span className="absolute inset-0 bg-gradient-to-t from-navy/80 via-navy/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-focus-visible:opacity-100" />
              <span className="absolute top-3.5 right-3.5 grid size-9 place-items-center rounded-full bg-white/95 text-deep-teal opacity-0 shadow-md transition-all duration-200 group-hover:opacity-100 group-hover:scale-110 group-focus-visible:opacity-100">
                <ZoomIn className="size-4.5" aria-hidden="true" />
              </span>
              <span
                lang="gu"
                className="absolute right-4 bottom-3.5 left-4 translate-y-1 text-xs font-semibold text-white opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100 line-clamp-2"
              >
                {img.caption}
              </span>
            </button>
          </li>
        ))}
      </ul>

      {current && active !== null && (
        <div
          className="fixed inset-0 z-[80] flex animate-fade-in flex-col bg-navy/95 backdrop-blur-md"
          role="dialog"
          aria-modal="true"
          aria-label="Photo viewer"
        >
          <div className="flex items-center justify-between gap-4 p-4 text-white sm:p-6">
            <p className="text-xs font-semibold tracking-wider text-pale-teal uppercase">
              Photo {active + 1} of {visible.length}
            </p>
            <button
              ref={closeRef}
              type="button"
              onClick={close}
              className="grid size-10 place-items-center rounded-full bg-white/10 text-white transition hover:bg-white/20"
            >
              <X className="size-5" aria-hidden="true" />
              <span className="sr-only">Close viewer</span>
            </button>
          </div>
          <div
            className="relative flex min-h-0 flex-1 items-center justify-center px-4 sm:px-20"
            onClick={(e) => e.target === e.currentTarget && close()}
          >
            <Image
              key={current.src}
              src={current.src}
              alt={current.alt}
              width={current.width}
              height={current.height}
              sizes="100vw"
              className="max-h-full w-auto animate-scale-in rounded-2xl object-contain shadow-2xl ring-1 ring-white/10"
              style={{ maxHeight: "calc(100dvh - 12rem)" }}
            />
            {visible.length > 1 && (
              <>
                <button
                  type="button"
                  onClick={() => step(-1)}
                  className="absolute top-1/2 left-3 grid size-11 -translate-y-1/2 place-items-center rounded-full bg-white/10 text-white backdrop-blur transition hover:bg-white/25 sm:left-6"
                >
                  <ChevronLeft className="size-6" aria-hidden="true" />
                  <span className="sr-only">Previous photo</span>
                </button>
                <button
                  type="button"
                  onClick={() => step(1)}
                  className="absolute top-1/2 right-3 grid size-11 -translate-y-1/2 place-items-center rounded-full bg-white/10 text-white backdrop-blur transition hover:bg-white/25 sm:right-6"
                >
                  <ChevronRight className="size-6" aria-hidden="true" />
                  <span className="sr-only">Next photo</span>
                </button>
              </>
            )}
          </div>
          <div className="p-4 text-center text-white sm:p-6">
            <p lang="gu" className="font-semibold text-base sm:text-lg">
              {current.caption}
            </p>
            <p className="mt-1 text-xs text-pale-teal/70">{current.alt}</p>
          </div>
        </div>
      )}
    </div>
  );
}
