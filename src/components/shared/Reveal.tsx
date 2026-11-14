"use client";

import type { ElementType, HTMLAttributes, ReactNode } from "react";
import { useInView } from "@/hooks/useInView";
import { cn } from "@/lib/utils";

interface RevealProps extends HTMLAttributes<HTMLElement> {
  children: ReactNode;
  as?: ElementType;
  delay?: number;
}

/** Subtle fade-up on scroll. Respects prefers-reduced-motion via CSS. */
export function Reveal({ children, as: Tag = "div", delay = 0, className, style, ...rest }: RevealProps) {
  const { ref, inView } = useInView<HTMLElement>();
  return (
    <Tag
      ref={ref}
      data-visible={inView}
      className={cn("reveal", className)}
      style={delay ? ({ ...style, "--reveal-delay": `${delay}ms` } as React.CSSProperties) : style}
      {...rest}
    >
      {children}
    </Tag>
  );
}
