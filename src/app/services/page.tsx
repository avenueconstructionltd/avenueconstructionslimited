import type { Metadata } from "next";
import { buildMetadata, canonicalUrl } from "@/services/seo";
import {
  serviceJsonLd,
  breadcrumbListJsonLd,
} from "@/services/seo/structured-data";
import { ServicesView } from "./_components/services-view";

export const metadata: Metadata = buildMetadata({
  path: "/services",
  title: "Services & Atelier Capabilities",
  description:
    "Explore real estate services by Avenue Constructions Limited: Architectural Design, Luxury Residential Development, Landowner Joint Ventures, and Real Estate Asset Management.",
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
