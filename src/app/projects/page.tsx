import type { Metadata } from "next";
import { buildMetadata, canonicalUrl } from "@/services/seo";
import { breadcrumbListJsonLd } from "@/services/seo/structured-data";
import { ProjectsView } from "./_components/projects-view";

export const metadata: Metadata = buildMetadata({
  path: "/projects",
  title: "Portfolio Archive | Luxury Estates & Residences in Dhaka",
  description:
    "Explore signature luxury residential developments by Avenue Constructions Limited in Dhaka, Bangladesh. Browse completed and upcoming boutique towers in Bashundhara, Gulshan, Banani, and Aftabnagar.",
  ogImage: "/images/properties/project_image_8.jpeg",
});

export default function ProjectsPage() {
  const breadcrumbLd = breadcrumbListJsonLd([
    { name: "Home", url: canonicalUrl("/") },
    { name: "Signature Estates", url: canonicalUrl("/projects") },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
        suppressHydrationWarning
      />
      <ProjectsView />
    </>
  );
}
