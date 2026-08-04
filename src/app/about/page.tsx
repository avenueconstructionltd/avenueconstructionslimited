import type { Metadata } from "next";
import { buildMetadata, canonicalUrl } from "@/services/seo";
import { breadcrumbListJsonLd } from "@/services/seo/structured-data";
import { AboutView } from "./_components/about-view";

export const metadata: Metadata = buildMetadata({
  path: "/about",
  title: "About Us | Legacy & Design Philosophy",
  description:
    "Discover Avenue Constructions Limited. Founded in Dhaka, we orchestrate architectural light, structural precision, and bespoke luxury residential developments.",
  ogImage: "/images/services/service_architecture.png",
});

export default function AboutPage() {
  const breadcrumbLd = breadcrumbListJsonLd([
    { name: "Home", url: canonicalUrl("/") },
    { name: "About Atelier", url: canonicalUrl("/about") },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
        suppressHydrationWarning
      />
      <AboutView />
    </>
  );
}
