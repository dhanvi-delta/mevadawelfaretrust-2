import {
  BadgeIndianRupee,
  Building2,
  Compass,
  HandHeart,
  Info,
  MapPin,
  UserRound,
  Users,
} from "lucide-react";
import type { NavItem, NavLink } from "@/types";
import { site } from "./content";

export const mainNav: NavItem[] = [
  { label: "Home", href: "/" },
  {
    label: "About",
    children: [
      { label: "About the Trust", labelGu: "ટ્રસ્ટ વિશે", href: "/about", description: "Purpose, registration and how the scheme works", icon: Info },
      { label: "Vision & Mission", labelGu: "હેતુ", href: "/vision-mission", description: "Why the social security scheme exists", icon: Compass },
      { label: "Executive Committee", labelGu: "કારોબારી સમીતી", href: "/trustees", description: "Office bearers, members, auditors and advisors", icon: Users },
    ],
  },
  { label: "Welfare Scheme", href: "/welfare-schemes" },
  {
    label: "Members",
    children: [
      { label: "Member Information", labelGu: "સભાસદ માહિતી", href: "/members", description: "Update your details and find your member services", icon: UserRound },
      { label: "Death Aid & Contributions", labelGu: "મૃત્યુ સહાય ફાળો", href: "/death-members", description: "Contribution lookup by member number", icon: HandHeart },
      { label: "Collection Centres", labelGu: "કલેકશન સેન્ટર", href: "/collection-centers", description: "25 centres across 12 cities", icon: MapPin },
      { label: "Collection Chart", labelGu: "ઓનલાઇન પેમેંટ", href: site.crmUrl, description: "Online payment on the Trust CRM portal", icon: BadgeIndianRupee, external: true },
    ],
  },
  { label: "Notices", href: "/notices" },
  { label: "Downloads", href: "/downloads" },
  { label: "Gallery", href: "/gallery" },
  { label: "Contact", href: "/contact" },
];

export const footerQuickLinks: NavLink[] = [
  { label: "About the Trust", href: "/about" },
  { label: "Vision & Mission", href: "/vision-mission" },
  { label: "Executive Committee", href: "/trustees" },
  { label: "Social Security Scheme", href: "/welfare-schemes" },
  { label: "Gallery", href: "/gallery" },
  { label: "Contact Us", href: "/contact" },
];

export const footerMemberLinks: NavLink[] = [
  { label: "Member Information", href: "/members" },
  { label: "Death Aid & Contributions", href: "/death-members" },
  { label: "Collection Centres", href: "/collection-centers" },
  { label: "Notices & Updates", href: "/notices" },
  { label: "Downloads & Forms", href: "/downloads" },
  { label: "Pay Online (CRM)", href: site.crmUrl, external: true },
];

export const officeIcon = Building2;
