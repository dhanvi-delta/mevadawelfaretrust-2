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
}

export function SectionHeading({ eyebrow, title, titleGu, description, align = "left", className, as: H = "h2", id }: SectionHeadingProps) {
  return (
    <div className={cn("max-w-2xl", align === "center" && "mx-auto text-center", className)}>
      {eyebrow && <p className={cn("eyebrow mb-3", align === "center" && "justify-center")}>{eyebrow}</p>}
      <H id={id} className="text-[1.75rem] leading-tight font-bold sm:text-4xl">
        {title}
      </H>
      {titleGu && (
        <p lang="gu" className="mt-2 text-lg font-medium text-brand-600">
          {titleGu}
        </p>
      )}
      {description && <div className="mt-4 text-base text-muted sm:text-lg">{description}</div>}
    </div>
  );
}
