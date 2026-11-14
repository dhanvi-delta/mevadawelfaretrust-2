import type { MetadataRoute } from "next";
import { site } from "@/data/content";
import { notices } from "@/data/notices";

const routes: { path: string; priority: number; changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"] }[] = [
  { path: "/", priority: 1, changeFrequency: "weekly" },
  { path: "/about", priority: 0.8, changeFrequency: "yearly" },
  { path: "/vision-mission", priority: 0.6, changeFrequency: "yearly" },
  { path: "/trustees", priority: 0.7, changeFrequency: "yearly" },
  { path: "/welfare-schemes", priority: 0.9, changeFrequency: "yearly" },
  { path: "/members", priority: 0.8, changeFrequency: "monthly" },
  { path: "/death-members", priority: 0.8, changeFrequency: "monthly" },
  { path: "/collection-centers", priority: 0.8, changeFrequency: "yearly" },
  { path: "/notices", priority: 0.9, changeFrequency: "monthly" },
  { path: "/downloads", priority: 0.7, changeFrequency: "monthly" },
  { path: "/gallery", priority: 0.5, changeFrequency: "yearly" },
  { path: "/contact", priority: 0.7, changeFrequency: "yearly" },
];

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    ...routes.map((r) => ({
      url: `${site.url}${r.path}`,
      changeFrequency: r.changeFrequency,
      priority: r.priority,
    })),
    ...notices.map((n) => ({
      url: `${site.url}/notices/${n.slug}`,
      lastModified: n.date,
      changeFrequency: "yearly" as const,
      priority: 0.6,
    })),
  ];
}
