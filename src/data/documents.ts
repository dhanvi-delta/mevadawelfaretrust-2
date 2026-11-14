import type { ResourceDocument } from "@/types";
import { site } from "./content";

/**
 * Resources library.
 * The original website did not publish any PDF downloads. Forms referred
 * to in the scheme rules (application, claim, nominee change) are issued
 * by the Trust office. To publish a PDF later: put it in /public/documents
 * and add an entry with kind "file" and href "/documents/<name>.pdf".
 */
export const documents: ResourceDocument[] = [
  {
    id: "scheme-rules",
    title: "Social Security Scheme — Rules",
    titleGu: "સામાજીક સુરક્ષા યોજના — નિયમો",
    description: "Complete rules: eligibility, entry fees, contribution, benefits, responsibilities and cancellation.",
    category: "scheme",
    kind: "page",
    format: "Web page · printable",
    href: "/welfare-schemes",
    actionLabel: "View & print",
  },
  {
    id: "notice-june-2022",
    title: "Death-aid contribution notice — June 2022",
    titleGu: "જુન-૨૦૨૨ સુઘીના મૃત્યુ સહાય ફાળાની રકમ",
    description: "Contribution amounts by member-number range, due dates and late-fee terms.",
    category: "notices",
    kind: "page",
    format: "Notice · printable",
    href: "/notices/death-aid-contribution-june-2022",
    actionLabel: "Open notice",
  },
  {
    id: "notice-june-2020",
    title: "Death-aid contribution notice — June 2020",
    titleGu: "જુન-૨૦૨૦ સુધીના મૃત્યુ સહાય ફાળાની રકમ",
    description: "Contribution amounts by member-number range for January–June 2020.",
    category: "notices",
    kind: "page",
    format: "Notice · printable",
    href: "/notices/death-aid-contribution-june-2020",
    actionLabel: "Open notice",
  },
  {
    id: "collection-centres",
    title: "Collection centre directory",
    titleGu: "કલેકશન સેન્ટર",
    description: "All 25 authorised collection centres with names and addresses, city-wise.",
    category: "directories",
    kind: "page",
    format: "Directory · printable",
    href: "/collection-centers",
    actionLabel: "View directory",
  },
  {
    id: "executive-committee",
    title: "Executive committee list",
    titleGu: "કારોબારી સમીતી",
    description: "Office bearers, executive members, internal auditors and advisors with contact numbers.",
    category: "directories",
    kind: "page",
    format: "Directory · printable",
    href: "/trustees",
    actionLabel: "View list",
  },
  {
    id: "application-form",
    title: "Membership application form",
    titleGu: "સામાજીક સુરક્ષા યોજના — નિયત અરજી ફોર્મ",
    description: "Prescribed application form (requires the signature of a Trust executive member for identification).",
    category: "forms",
    kind: "office",
    format: "Available at Trust office",
    href: "/contact",
    actionLabel: "Contact office",
  },
  {
    id: "claim-form",
    title: "Death-aid claim form",
    titleGu: "કલેઇમ ફોર્મ",
    description: "To be submitted by heirs with the death certificate and the member-number certificate.",
    category: "forms",
    kind: "office",
    format: "Available at Trust office",
    href: "/contact",
    actionLabel: "Contact office",
  },
  {
    id: "nominee-change-form",
    title: "Nominee / heir change application",
    titleGu: "વારસદારોના નામમાં ફેરફાર — નિયત અરજી ૫ત્રક",
    description: "For members who wish to change the names of their heirs during their lifetime.",
    category: "forms",
    kind: "office",
    format: "Available at Trust office",
    href: "/contact",
    actionLabel: "Contact office",
  },
  {
    id: "crm-portal",
    title: "Online payment & member CRM portal",
    titleGu: "ઓનલાઇન પેમેંટ",
    description: "Pay death-aid contribution online, get a digital receipt and update address, mobile and e-mail.",
    category: "portal",
    kind: "external",
    format: "External portal",
    href: site.crmUrl,
    actionLabel: "Open portal",
  },
];

export const documentCategories: { id: ResourceDocument["category"] | "all"; label: string }[] = [
  { id: "all", label: "All" },
  { id: "scheme", label: "Scheme rules" },
  { id: "notices", label: "Notices" },
  { id: "forms", label: "Forms" },
  { id: "directories", label: "Directories" },
  { id: "portal", label: "Online portal" },
];
