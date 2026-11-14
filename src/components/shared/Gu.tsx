import type { ElementType, ReactNode } from "react";
import { cn } from "@/lib/utils";

/** Marks Gujarati text with lang="gu" for correct font, line-height and screen readers. */
export function Gu({ children, as: Tag = "span", className }: { children: ReactNode; as?: ElementType; className?: string }) {
  return (
    <Tag lang="gu" className={cn(className)}>
      {children}
    </Tag>
  );
}
