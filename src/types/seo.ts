export type SchemaType =
  | "Person"
  | "Organization"
  | "RealEstateAgent"
  | "WebSite"
  | "WebPage"
  | "RealEstateListing"
  | "SingleFamilyResidence"
  | "ApartmentComplex"
  | "Service"
  | "ContactPage"
  | "AboutPage"
  | "BreadcrumbList"
  | "FAQPage";

export interface RouteDescriptor {
  path: string;
  title: string;
  description: string;
  ogImage?: string;
  indexable?: boolean;
}

export interface SitemapEntry {
  url: string;
  lastModified?: string;
  changeFrequency?:
    "always" | "hourly" | "daily" | "weekly" | "monthly" | "yearly" | "never";
  priority?: number;
}

export interface RobotsConfig {
  rules: Array<{
    userAgent: string;
    allow?: string[];
    disallow?: string[];
  }>;
  sitemap: string;
  host?: string;
}

export interface JsonLd {
  "@context": "https://schema.org";
  "@type": SchemaType | SchemaType[];
  [key: string]: unknown;
}
