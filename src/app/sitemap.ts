import type { MetadataRoute } from "next";
import { sitemapEntries } from "@/services/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  const entries = sitemapEntries();
  return entries.map((entry) => ({
    url: entry.url,
    lastModified: entry.lastModified
      ? new Date(entry.lastModified)
      : new Date(),
    changeFrequency:
      entry.changeFrequency as MetadataRoute.Sitemap[0]["changeFrequency"],
    priority: entry.priority,
  }));
}
