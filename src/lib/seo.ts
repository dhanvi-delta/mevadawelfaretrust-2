import type { Metadata } from "next";
import { contact, site } from "@/data/content";

interface PageSeo {
  title: string;
  description: string;
  path: string;
  image?: string;
}

/** Consistent per-page metadata: title, description, canonical, OG & Twitter. */
export function pageMetadata({ title, description, path, image = "/gallery/photo-007.jpg" }: PageSeo): Metadata {
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      title: `${title} | ${site.shortName}`,
      description,
      url: path,
      siteName: site.name,
      locale: "en_IN",
      type: "website",
      images: [{ url: image, alt: site.name }],
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | ${site.shortName}`,
      description,
      images: [image],
    },
  };
}

export function organizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "NGO",
    name: site.name,
    alternateName: [site.nameGu, site.shortName],
    url: site.url,
    logo: `${site.url}/logo/logo.png`,
    description: site.description,
    foundingDate: "2002-07-31",
    identifier: site.registration,
    email: contact.email,
    telephone: "+91-2742-255733",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Gokul Fracture & Orthopaedic Hospital, Ramlila Maidan Road, Guru Nanak Chowk",
      addressLocality: "Palanpur",
      addressRegion: "Gujarat",
      addressCountry: "IN",
    },
    sameAs: [site.crmUrl],
  };
}

export function breadcrumbJsonLd(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: `${site.url}${item.path}`,
    })),
  };
}
