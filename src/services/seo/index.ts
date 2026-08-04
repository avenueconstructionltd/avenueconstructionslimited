import type { Metadata } from "next";
import {
  SITE_URL,
  SITE_NAME,
  SITE_KEYWORDS,
  SITE_LOCALE,
  SITE_HANDLE,
  OG_IMAGE_PATH,
  OG_IMAGE_WIDTH,
  OG_IMAGE_HEIGHT,
} from "@/constants/seo";
import type { RouteDescriptor, SitemapEntry } from "@/types/seo";
import { PROPERTIES } from "@/lib/properties-constant";

export function canonicalUrl(path: string): string {
  const normalized = path.startsWith("/") ? path : `/${path}`;
  if (normalized === "/") return SITE_URL;
  const withoutTrailing = normalized.endsWith("/")
    ? normalized.slice(0, -1)
    : normalized;
  return `${SITE_URL}${withoutTrailing}`;
}

export function buildMetadata(route: RouteDescriptor): Metadata {
  const canonical = canonicalUrl(route.path);
  const ogImageUrl = canonicalUrl(route.ogImage ?? OG_IMAGE_PATH);
  const isIndexable = route.indexable ?? true;

  return {
    title: route.title,
    description: route.description,
    keywords: SITE_KEYWORDS,
    alternates: {
      canonical,
    },
    openGraph: {
      type: "website",
      locale: SITE_LOCALE,
      url: canonical,
      siteName: SITE_NAME,
      title: route.title,
      description: route.description,
      images: [
        {
          url: ogImageUrl,
          width: OG_IMAGE_WIDTH,
          height: OG_IMAGE_HEIGHT,
          alt: `${route.title} - ${SITE_NAME}`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      site: SITE_HANDLE,
      creator: SITE_HANDLE,
      title: route.title,
      description: route.description,
      images: [ogImageUrl],
    },
    robots: {
      index: isIndexable,
      follow: true,
      googleBot: {
        index: isIndexable,
        follow: true,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
  };
}

export const PRIMARY_ROUTES: Array<{
  path: string;
  changeFrequency: SitemapEntry["changeFrequency"];
  priority: number;
}> = [
  { path: "/", changeFrequency: "weekly", priority: 1.0 },
  { path: "/projects", changeFrequency: "weekly", priority: 0.9 },
  { path: "/about", changeFrequency: "monthly", priority: 0.8 },
  { path: "/services", changeFrequency: "monthly", priority: 0.8 },
  { path: "/landowner", changeFrequency: "weekly", priority: 0.85 },
  { path: "/contact", changeFrequency: "monthly", priority: 0.7 },
];

export function sitemapEntries(): SitemapEntry[] {
  const seen = new Set<string>();
  const entries: SitemapEntry[] = [];
  const add = (e: SitemapEntry) => {
    if (!seen.has(e.url)) {
      seen.add(e.url);
      entries.push(e);
    }
  };

  const today = new Date().toISOString().split("T")[0];

  for (const r of PRIMARY_ROUTES) {
    add({
      url: canonicalUrl(r.path),
      lastModified: today,
      changeFrequency: r.changeFrequency,
      priority: r.priority,
    });
  }

  for (const property of PROPERTIES) {
    add({
      url: canonicalUrl(`/projects/${property.slug}`),
      lastModified: today,
      changeFrequency: "weekly",
      priority: property.statusTag === "Completed" ? 0.8 : 0.85,
    });
  }

  return entries;
}
