"use client";

import { useEffect, useState } from "react";
import { BadgeCheck, Mail, MapPin, Phone } from "lucide-react";
import { contact, site } from "@/data/content";

export function TopBar() {
  const [textSize, setTextSize] = useState<"sm" | "md" | "lg">("md");

  useEffect(() => {
    try {
      const saved = localStorage.getItem("mewada-text-size") as "sm" | "md" | "lg" | null;
      if (saved && (saved === "sm" || saved === "md" || saved === "lg")) {
        document.documentElement.classList.remove("text-size-sm", "text-size-md", "text-size-lg");
        document.documentElement.classList.add(`text-size-${saved}`);
      }
    } catch {}
  }, []);

  const changeTextSize = (size: "sm" | "md" | "lg") => {
    setTextSize(size);
    document.documentElement.classList.remove("text-size-sm", "text-size-md", "text-size-lg");
    document.documentElement.classList.add(`text-size-${size}`);
    try {
      localStorage.setItem("mewada-text-size", size);
    } catch {}
  };

  return (
    <div className="no-print hidden border-b border-white/10 bg-deep-teal text-[0.78rem] text-pale-teal md:block">
      <div className="container-page flex h-9 items-center justify-between gap-4">
        {/* Left: Contact links */}
        <div className="flex items-center gap-5">
          <a
            href={contact.phoneHref}
            className="inline-flex items-center gap-1.5 transition-colors duration-150 hover:text-white"
          >
            <Phone className="size-3 text-warm-gold" aria-hidden="true" />
            <span>{contact.phoneDisplayEn}</span>
          </a>
          <span className="text-white/20" aria-hidden="true">|</span>
          <a
            href={`mailto:${contact.email}`}
            className="inline-flex items-center gap-1.5 transition-colors duration-150 hover:text-white"
          >
            <Mail className="size-3 text-warm-gold" aria-hidden="true" />
            <span>{contact.email}</span>
          </a>
        </div>

        {/* Right: Registration & Senior accessibility text controls */}
        <div className="flex items-center gap-5">
          <p className="inline-flex items-center gap-1.5 text-pale-teal/90">
            <BadgeCheck className="size-3.5 text-warm-gold" aria-hidden="true" />
            <span>Registered Trust · {site.registration}</span>
          </p>

          <span className="text-white/20" aria-hidden="true">|</span>

          <span className="inline-flex items-center gap-1 text-pale-teal/90">
            <MapPin className="size-3 text-warm-gold" aria-hidden="true" />
            <span>Palanpur</span>
          </span>

          <span className="text-white/20" aria-hidden="true">|</span>

          {/* Senior friendly text-size switcher */}
          <div className="inline-flex items-center gap-1 rounded-full bg-navy/40 px-2 py-0.5 ring-1 ring-white/10" aria-label="Text size adjustments">
            <span className="mr-1 text-[0.7rem] text-pale-teal/70 font-medium">Text</span>
            <button
              type="button"
              onClick={() => changeTextSize("sm")}
              className={`rounded px-1 text-[0.7rem] font-bold transition ${
                textSize === "sm" ? "bg-warm-gold text-navy" : "text-white/80 hover:text-white"
              }`}
              title="Standard text size"
            >
              A-
            </button>
            <button
              type="button"
              onClick={() => changeTextSize("md")}
              className={`rounded px-1 text-[0.75rem] font-bold transition ${
                textSize === "md" ? "bg-warm-gold text-navy" : "text-white/80 hover:text-white"
              }`}
              title="Medium text size"
            >
              A
            </button>
            <button
              type="button"
              onClick={() => changeTextSize("lg")}
              className={`rounded px-1 text-[0.82rem] font-bold transition ${
                textSize === "lg" ? "bg-warm-gold text-navy" : "text-white/80 hover:text-white"
              }`}
              title="Large text size for readability"
            >
              A+
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
