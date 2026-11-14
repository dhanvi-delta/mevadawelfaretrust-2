import type { Metadata, Viewport } from "next";
import { Noto_Sans_Gujarati, Plus_Jakarta_Sans } from "next/font/google";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { TopBar } from "@/components/layout/TopBar";
import { JsonLd } from "@/components/shared/JsonLd";
import { site } from "@/data/content";
import { organizationJsonLd } from "@/lib/seo";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  display: "swap",
});

const gujarati = Noto_Sans_Gujarati({
  subsets: ["gujarati"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-gujarati",
  display: "swap",
});

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
  themeColor: "#145b59",
  colorScheme: "light",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${jakarta.variable} ${gujarati.variable}`}>
      <body className="flex min-h-dvh flex-col">
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
