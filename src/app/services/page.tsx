import type { Metadata } from "next";
import { buildMetadata, canonicalUrl } from "@/services/seo";
import {
  serviceJsonLd,
  breadcrumbListJsonLd,
} from "@/services/seo/structured-data";
import { ServicesView } from "./_components/services-view";

export const metadata: Metadata = buildMetadata({
  path: "/services",
  title: "Real Estate Development & Architectural Services",
  description:
    "Architectural design, luxury residential construction, and joint venture land partnerships in Dhaka by Avenue Constructions Ltd.",
});

export default function ServicesPage() {
  const serviceLd = serviceJsonLd();
  const breadcrumbLd = breadcrumbListJsonLd([
    { name: "Home", url: canonicalUrl("/") },
    { name: "Atelier Capabilities", url: canonicalUrl("/services") },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceLd) }}
        suppressHydrationWarning
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
        suppressHydrationWarning
      />
      <ServicesView />
    </>
  );
}
