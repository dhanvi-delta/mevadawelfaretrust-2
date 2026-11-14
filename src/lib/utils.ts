/** Join class names, skipping falsy values. */
export function cn(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}

const GU_DIGITS = "૦૧૨૩૪૫૬૭૮૯";

/** Convert Gujarati numerals to ASCII digits (e.g. "૭૧૫૩" → "7153"). */
export function guToAsciiDigits(value: string) {
  return value.replace(/[૦-૯]/g, (d) => String(GU_DIGITS.indexOf(d)));
}

/** Convert ASCII digits to Gujarati numerals. */
export function asciiToGuDigits(value: string | number) {
  return String(value).replace(/[0-9]/g, (d) => GU_DIGITS[Number(d)]);
}

/** Build a `tel:` href from a published (possibly Gujarati) phone string. */
export function telHref(phone: string) {
  const digits = guToAsciiDigits(phone).replace(/\D/g, "");
  if (!digits) return undefined;
  if (digits.length === 10) return `tel:+91${digits}`;
  if (digits.length === 11 && digits.startsWith("0")) return `tel:+91${digits.slice(1)}`;
  return `tel:${digits}`;
}

/** Case/diacritic-insensitive search that also understands Gujarati digits. */
export function matchesQuery(haystack: string, query: string) {
  const q = guToAsciiDigits(query).trim().toLowerCase();
  if (!q) return true;
  const h = guToAsciiDigits(haystack).toLowerCase();
  // Phone numbers are published with spaces ("98250 13096"); match them with or without.
  const compact = h.replace(/(\d)[\s.-]+(?=\d)/g, "$1");
  return q.split(/\s+/).every((part) => h.includes(part) || compact.includes(part.replace(/[\s.-]/g, "")));
}

export function formatINR(amount: number) {
  return new Intl.NumberFormat("en-IN", { style: "currency", currency: "INR", maximumFractionDigits: 0 }).format(amount);
}

export function isExternal(href: string) {
  return /^https?:\/\//.test(href);
}
