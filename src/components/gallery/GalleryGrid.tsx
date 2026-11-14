"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight, X, ZoomIn } from "lucide-react";
import type { GalleryImage } from "@/types";
import { FilterChips } from "@/components/shared/ListControls";

type Cat = GalleryImage["category"] | "all";

export function GalleryGrid({ images, categories }: { images: GalleryImage[]; categories: { id: Cat; label: string }[] }) {
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
    (dir: 1 | -1) => setActive((i) => (i === null ? i : (i + dir + visible.length) % visible.length)),
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
        options={categories.map((c) => ({ ...c, count: c.id === "all" ? images.length : images.filter((i) => i.category === c.id).length }))}
      />

      <ul className="mt-8 columns-1 gap-4 sm:columns-2 lg:columns-3 [&>li]:mb-4">
        {visible.map((img, i) => (
          <li key={img.src} className="break-inside-avoid">
            <button
              type="button"
              onClick={(e) => {
                lastTrigger.current = e.currentTarget;
                setActive(i);
              }}
              className="group relative block w-full overflow-hidden rounded-2xl bg-brand-100 text-left shadow-soft transition hover:shadow-lift"
              aria-label={`View larger: ${img.alt}`}
            >
              <Image
                src={img.src}
                alt={img.alt}
                width={img.width}
                height={img.height}
                sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                className="h-auto w-full transition duration-700 group-hover:scale-[1.04]"
              />
              <span className="absolute inset-0 bg-gradient-to-t from-brand-900/75 via-transparent to-transparent opacity-0 transition duration-300 group-hover:opacity-100 group-focus-visible:opacity-100" />
              <span className="absolute top-3 right-3 grid size-10 place-items-center rounded-full bg-white/90 text-brand-800 opacity-0 shadow transition group-hover:opacity-100 group-focus-visible:opacity-100">
                <ZoomIn className="size-5" aria-hidden="true" />
              </span>
              <span lang="gu" className="absolute right-4 bottom-3 left-4 translate-y-2 text-sm font-semibold text-white opacity-0 transition group-hover:translate-y-0 group-hover:opacity-100">
                {img.caption}
              </span>
            </button>
          </li>
        ))}
      </ul>

      {current && active !== null && (
        <div className="fixed inset-0 z-[80] flex animate-fade-in flex-col bg-brand-900/95 backdrop-blur" role="dialog" aria-modal="true" aria-label="Photo viewer">
          <div className="flex items-center justify-between gap-4 p-4 text-white sm:p-6">
            <p className="text-sm text-brand-200">
              {active + 1} / {visible.length}
            </p>
            <button
              ref={closeRef}
              type="button"
              onClick={close}
              className="grid size-11 place-items-center rounded-full bg-white/10 transition hover:bg-white/20"
            >
              <X className="size-6" aria-hidden="true" />
              <span className="sr-only">Close viewer</span>
            </button>
          </div>
          <div className="relative flex min-h-0 flex-1 items-center justify-center px-4 sm:px-20" onClick={(e) => e.target === e.currentTarget && close()}>
            <Image
              key={current.src}
              src={current.src}
              alt={current.alt}
              width={current.width}
              height={current.height}
              sizes="100vw"
              className="max-h-full w-auto animate-scale-in rounded-xl object-contain shadow-2xl"
              style={{ maxHeight: "calc(100dvh - 11rem)" }}
            />
            {visible.length > 1 && (
              <>
                <button
                  type="button"
                  onClick={() => step(-1)}
                  className="absolute top-1/2 left-2 grid size-12 -translate-y-1/2 place-items-center rounded-full bg-white/10 text-white transition hover:bg-white/25 sm:left-6"
                >
                  <ChevronLeft className="size-6" aria-hidden="true" />
                  <span className="sr-only">Previous photo</span>
                </button>
                <button
                  type="button"
                  onClick={() => step(1)}
                  className="absolute top-1/2 right-2 grid size-12 -translate-y-1/2 place-items-center rounded-full bg-white/10 text-white transition hover:bg-white/25 sm:right-6"
                >
                  <ChevronRight className="size-6" aria-hidden="true" />
                  <span className="sr-only">Next photo</span>
                </button>
              </>
            )}
          </div>
          <div className="p-4 text-center text-white sm:p-6">
            <p lang="gu" className="font-semibold">
              {current.caption}
            </p>
            <p className="mt-1 text-sm text-brand-200">{current.alt}</p>
          </div>
        </div>
      )}
    </div>
  );
}
