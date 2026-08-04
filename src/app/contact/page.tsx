import type { Metadata } from "next";
import { buildMetadata, canonicalUrl } from "@/services/seo";
import { breadcrumbListJsonLd } from "@/services/seo/structured-data";
import { ContactView } from "./_components/contact-view";

export const metadata: Metadata = buildMetadata({
  path: "/contact",
  title: "Contact Us & Private Consultations",
  description:
    "Schedule a private viewing or corporate consultation at Avenue Constructions Limited headquarters in Purana Paltan, Dhaka. Direct hotline: +880 1714 767 246.",
});

export default function ContactPage() {
  const breadcrumbLd = breadcrumbListJsonLd([
    { name: "Home", url: canonicalUrl("/") },
    { name: "Contact & Consultation", url: canonicalUrl("/contact") },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
        suppressHydrationWarning
      />
      <ContactView />
    </>
  );
}
