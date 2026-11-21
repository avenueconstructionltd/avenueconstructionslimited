import type { Metadata } from "next";
import { buildMetadata, canonicalUrl } from "@/services/seo";
import { breadcrumbListJsonLd } from "@/services/seo/structured-data";
import { AboutView } from "./_components/about-view";

export const metadata: Metadata = buildMetadata({
  path: "/about",
  title: "About Our Architectural Atelier in Dhaka",
  description:
    "Learn about Avenue Constructions Ltd, our IEB-certified architectural engineering philosophy, and track record in luxury residential development in Dhaka.",
  ogImage: "/images/extracted/Ahshan Palace-2_page1_Im10.webp",
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
