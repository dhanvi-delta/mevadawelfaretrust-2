"use client";

import { useEffect, useRef, useState } from "react";
import { useInView } from "@/hooks/useInView";

interface CounterProps {
  value: number;
  format?: "number" | "plain";
  duration?: number;
}

/** Animated count-up for verified figures only. Final value is server-rendered for SEO/AT. */
export function Counter({ value, format = "number", duration = 1400 }: CounterProps) {
  const { ref, inView } = useInView<HTMLSpanElement>();
  const [display, setDisplay] = useState(value);
  const started = useRef(false);

  useEffect(() => {
    if (!inView || started.current) return;
    started.current = true;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const from = format === "plain" ? Math.max(0, value - 40) : 0;
    let raf = 0;
    const t0 = performance.now();
    const tick = (now: number) => {
      const p = Math.min(1, (now - t0) / duration);
      const eased = 1 - Math.pow(1 - p, 3);
      setDisplay(Math.round(from + (value - from) * eased));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, value, duration, format]);

  const text = format === "number" ? display.toLocaleString("en-IN") : String(display);
  const finalText = format === "number" ? value.toLocaleString("en-IN") : String(value);

  return (
    <span ref={ref}>
      <span className="sr-only">{finalText}</span>
      <span aria-hidden="true">{text}</span>
    </span>
  );
}
