import type { LucideIcon } from "lucide-react";

export interface NavLink {
  label: string;
  /** Optional Gujarati label shown as a secondary line */
  labelGu?: string;
  href: string;
  description?: string;
  external?: boolean;
  icon?: LucideIcon;
}

export interface NavItem extends Partial<NavLink> {
  label: string;
  children?: NavLink[];
}

export interface OfficeBearer {
  slug: string;
  role: string; // Gujarati designation
  roleEn: string;
  name: string; // Gujarati full name
  village: string;
  phone: string; // as published, Gujarati digits
  photo: string;
}

export interface PhotoCommitteeGroup {
  id: string;
  title: string; // Gujarati
  titleEn: string;
  members: OfficeBearer[];
}

export interface CommitteeMember {
  serial: string; // original serial number (Gujarati digits)
  name: string;
  village: string;
  phone: string; // "-" when not published
}

export interface CommitteeGroup {
  id: string;
  title: string; // Gujarati
  titleEn: string;
  members: CommitteeMember[];
}

export interface CollectionCentre {
  city: string; // Gujarati
  cityEn: string;
  serial: string;
  name: string;
  address: string;
  phone?: string;
}

export interface ContributionSlab {
  serial?: string;
  rangeLabel: string; // as printed in original notice
  from: number;
  to: number;
  amountLabel: string; // as printed
  amount: number;
}

export interface Notice {
  slug: string;
  title: string; // Gujarati
  titleEn: string;
  /** ISO date used for sorting (the due date stated in the notice) */
  date: string;
  dateLabel: string;
  period: string;
  category: "death-aid" | "member-update";
  salutation?: string;
  body: string[];
  table?: {
    caption?: string;
    hasSerial: boolean;
    slabs: ContributionSlab[];
  };
  deceasedCount?: number;
  signatories?: { name: string; role: string }[];
  link?: { label: string; href: string };
  isLatest?: boolean;
}

export interface GalleryImage {
  src: string;
  width: number;
  height: number;
  alt: string;
  caption: string;
  category: "year-2025" | "year-2022" | "year-2016" | "assembly" | "committee" | "activities";
}

export interface ResourceDocument {
  id: string;
  title: string;
  titleGu?: string;
  description: string;
  category: "forms" | "notices" | "scheme" | "directories" | "portal";
  /** How the visitor obtains it */
  kind: "page" | "office" | "external" | "file";
  format: string;
  href: string;
  actionLabel: string;
}

export interface RuleSection {
  id: string;
  title: string; // Gujarati
  titleEn: string;
  intro?: string;
  points: string[];
}
