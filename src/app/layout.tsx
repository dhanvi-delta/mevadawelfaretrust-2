import type { Metadata, Viewport } from "next";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { TopBar } from "@/components/layout/TopBar";
import { JsonLd } from "@/components/shared/JsonLd";
import { site } from "@/data/content";
import { organizationJsonLd } from "@/lib/seo";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} | Social Security Scheme`,
    template: `%s | ${site.shortName}`,
  },
  description: site.description,
  applicationName: site.shortName,
  keywords: [
    "Mevada Welfare Trust",
    "Shree Mevada Suthar Samaj Welfare Trust",
    "Palanpur",
    "Mevada Suthar Samaj",
    "સામાજીક સુરક્ષા યોજના",
    "મૃત્યુ સહાય ફાળો",
    "Social Security Scheme",
    "Death aid contribution",
  ],
  authors: [{ name: site.name }],
  creator: site.developer.name,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "/",
    siteName: site.name,
    title: site.name,
    description: site.description,
    images: [{ url: "/gallery/photo-007.jpg", width: 1784, height: 1180, alt: site.name }],
  },
  twitter: {
    card: "summary_large_image",
    title: site.name,
    description: site.description,
    images: ["/gallery/photo-007.jpg"],
  },
  robots: { index: true, follow: true },
  formatDetection: { telephone: true, email: true, address: false },
};

export const viewport: Viewport = {
  themeColor: "#07596a",
  colorScheme: "light",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="font-sans" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        {/* eslint-disable-next-line @next/next/no-page-custom-font */}
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Baloo+Bhai+2:wght@700;800&family=Noto+Sans+Gujarati:wght@400;500;600;700&family=Playfair+Display:ital,wght@1,600;1,700&family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap"
        />
      </head>
      <body
        suppressHydrationWarning
        className="flex min-h-dvh flex-col bg-ivory text-ink antialiased selection:bg-warm-gold/30 selection:text-navy"
      >
        <JsonLd data={organizationJsonLd()} />
        <TopBar />
        <Header />
        <main id="main" className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
