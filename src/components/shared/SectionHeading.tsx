import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  eyebrow?: string;
  title: ReactNode;
  titleGu?: string;
  description?: ReactNode;
  align?: "left" | "center";
  className?: string;
  as?: "h1" | "h2" | "h3";
  id?: string;
  flourish?: boolean;
}

export function SectionHeading({
  eyebrow,
  title,
  titleGu,
  description,
  align = "left",
  className,
  as: H = "h2",
  id,
  flourish = false,
}: SectionHeadingProps) {
  return (
    <div className={cn("max-w-2xl", align === "center" && "mx-auto text-center", className)}>
      {eyebrow && (
        <p className={cn("eyebrow mb-3", align === "center" && "justify-center")}>
          {eyebrow}
        </p>
      )}

      {flourish ? (
        <div className="flex justify-center">
          <H
            id={id}
            className="flourish-heading text-[1.85rem] font-extrabold tracking-tight text-navy sm:text-[2.35rem]"
          >
            {title}
          </H>
        </div>
      ) : (
        <H
          id={id}
          className="text-[1.85rem] leading-[1.25] font-extrabold tracking-tight text-navy sm:text-[2.35rem]"
        >
          {title}
        </H>
      )}

      {titleGu && (
        <p
          lang="gu"
          className={cn(
            "mt-2 text-lg font-semibold text-teal",
            align === "center" && "text-center",
          )}
        >
          {titleGu}
        </p>
      )}

      {description && (
        <div
          className={cn(
            "mt-3.5 text-base text-muted sm:text-lg leading-relaxed",
            align === "center" && "mx-auto max-w-xl",
          )}
        >
          {description}
        </div>
      )}
    </div>
  );
}
