import type { NextConfig } from "next";

/**
 * Legacy URLs from the old ASP.NET / HTML website are permanently
 * redirected to their new equivalents so existing bookmarks, printed
 * letters and search results keep working.
 */
const legacyRedirects: Array<[string, string]> = [
  ["/index.aspx", "/"],
  ["/index.html", "/"],
  ["/AboutUs.html", "/about"],
  ["/MemberList.aspx", "/members"],
  ["/Executivegroup.html", "/trustees"],
  ["/CollectionCenter.html", "/collection-centers"],
  ["/gallery.html", "/gallery"],
  ["/ContactUs.html", "/contact"],
];

const nextConfig: NextConfig = {
  cacheComponents: true,
  partialPrefetching: true,
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
  images: {
    formats: ["image/avif", "image/webp"],
  },
  async redirects() {
    return legacyRedirects.map(([source, destination]) => ({
      source,
      destination,
      permanent: true,
    }));
  },
};

export default nextConfig;
