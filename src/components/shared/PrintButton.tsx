"use client";

import { Printer } from "lucide-react";
import { cn } from "@/lib/utils";

/** Opens the browser print dialog (also used to "Save as PDF"). */
export function PrintButton({ label = "Print / Save PDF", className }: { label?: string; className?: string }) {
  return (
    <button
      type="button"
      onClick={() => window.print()}
      className={cn(
        "no-print inline-flex h-11 items-center gap-2 rounded-full bg-white px-5 text-[0.95rem] font-semibold text-brand-800 ring-1 ring-brand-200 transition hover:bg-brand-50 hover:ring-brand-400",
        className,
      )}
    >
      <Printer className="size-4" aria-hidden="true" />
      {label}
    </button>
  );
}
