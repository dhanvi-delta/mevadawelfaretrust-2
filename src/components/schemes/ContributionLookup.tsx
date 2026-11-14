"use client";

import { useId, useState } from "react";
import { ArrowUpRight, CircleAlert, CircleCheck, Hash } from "lucide-react";
import type { Notice } from "@/types";
import { formatINR, guToAsciiDigits } from "@/lib/utils";

interface Props {
  notices: Notice[];
  crmUrl: string;
}

/**
 * Looks up the contribution amount for a member number using the slab
 * tables published in each death-aid notice. Purely client-side.
 */
export function ContributionLookup({ notices, crmUrl }: Props) {
  const withTables = notices.filter((n) => n.table);
  const [noticeSlug, setNoticeSlug] = useState(withTables[0]?.slug ?? "");
  const [input, setInput] = useState("");
  const [result, setResult] = useState<
    | { kind: "found"; amount: number; amountLabel: string; range: string }
    | { kind: "not-found"; number: number }
    | { kind: "invalid" }
    | null
  >(null);
  const inputId = useId();
  const selectId = useId();
  const errorId = useId();

  const notice = withTables.find((n) => n.slug === noticeSlug);

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    const n = Number.parseInt(guToAsciiDigits(input).replace(/\D/g, ""), 10);
    if (!input.trim() || Number.isNaN(n) || n <= 0) {
      setResult({ kind: "invalid" });
      return;
    }
    const slab = notice?.table?.slabs.find((s) => n >= s.from && n <= s.to);
    setResult(slab ? { kind: "found", amount: slab.amount, amountLabel: slab.amountLabel, range: slab.rangeLabel } : { kind: "not-found", number: n });
  }

  return (
    <div className="card overflow-hidden">
      <div className="bg-gradient-to-br from-brand-700 to-brand-900 p-6 text-white sm:p-8">
        <p className="text-sm font-bold tracking-[0.14em] text-saffron-400 uppercase">Contribution lookup</p>
        <h2 className="mt-2 text-2xl font-bold !text-white">How much do I need to pay?</h2>
        <p className="mt-2 text-sm text-brand-100">
          Enter your member number (સભાસદ નંબર). The amount is read from the slab table of the selected notice.
        </p>
      </div>

      <form onSubmit={onSubmit} noValidate className="space-y-5 p-6 sm:p-8">
        <div>
          <label htmlFor={selectId} className="mb-2 block text-sm font-semibold text-ink">
            Notice period
          </label>
          <select
            id={selectId}
            value={noticeSlug}
            onChange={(e) => {
              setNoticeSlug(e.target.value);
              setResult(null);
            }}
            className="h-12 w-full rounded-xl border border-line bg-white px-4 text-[0.95rem] focus:border-brand-400 focus:ring-4 focus:ring-brand-100 focus:outline-none"
          >
            {withTables.map((n) => (
              <option key={n.slug} value={n.slug}>
                {n.period} — {n.dateLabel.split("·")[0].trim()}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor={inputId} className="mb-2 block text-sm font-semibold text-ink">
            Member number
          </label>
          <div className="flex flex-col gap-3 sm:flex-row">
            <div className="relative flex-1">
              <Hash className="pointer-events-none absolute top-1/2 left-4 size-5 -translate-y-1/2 text-brand-400" aria-hidden="true" />
              <input
                id={inputId}
                inputMode="numeric"
                autoComplete="off"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="e.g. 7160 or ૭૧૬૦"
                aria-invalid={result?.kind === "invalid"}
                aria-describedby={result?.kind === "invalid" ? errorId : undefined}
                className="h-12 w-full rounded-xl border border-line bg-white pr-4 pl-12 text-[0.95rem] focus:border-brand-400 focus:ring-4 focus:ring-brand-100 focus:outline-none aria-invalid:border-red-400"
              />
            </div>
            <button
              type="submit"
              className="h-12 rounded-xl bg-saffron-500 px-6 font-bold text-brand-900 transition hover:bg-saffron-400"
            >
              Check amount
            </button>
          </div>
        </div>

        <div aria-live="polite" className="min-h-[1px]">
          {result?.kind === "invalid" && (
            <p id={errorId} className="flex items-center gap-2 rounded-xl bg-red-50 p-4 text-sm text-red-800">
              <CircleAlert className="size-5 shrink-0" aria-hidden="true" />
              Please enter a valid member number.
            </p>
          )}
          {result?.kind === "found" && (
            <div className="animate-scale-in rounded-2xl bg-mint p-5 ring-1 ring-brand-200">
              <p className="flex items-center gap-2 text-sm font-semibold text-brand-700">
                <CircleCheck className="size-5" aria-hidden="true" />
                Member range <span lang="gu">{result.range}</span>
              </p>
              <p className="mt-2 font-display text-4xl font-extrabold text-brand-800">{formatINR(result.amount)}</p>
              <p lang="gu" className="text-sm text-muted">
                ફાળાની રકમ: {result.amountLabel}
              </p>
              {notice && <p className="mt-3 text-sm text-muted">{notice.dateLabel}. A late fee of ₹50 applies after the first due date.</p>}
              <a
                href={crmUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex h-10 items-center gap-1.5 rounded-full bg-brand-700 px-4 text-sm font-semibold text-white hover:bg-brand-800"
              >
                Pay online on CRM portal <ArrowUpRight className="size-4" aria-hidden="true" />
                <span className="sr-only"> (opens in a new tab)</span>
              </a>
            </div>
          )}
          {result?.kind === "not-found" && (
            <p className="flex items-start gap-2 rounded-xl bg-saffron-50 p-4 text-sm text-saffron-700">
              <CircleAlert className="mt-0.5 size-5 shrink-0" aria-hidden="true" />
              Member number {result.number} is not covered by the ranges in this notice. Please contact the Trust office
              or check the CRM portal for your account.
            </p>
          )}
        </div>
      </form>
    </div>
  );
}
