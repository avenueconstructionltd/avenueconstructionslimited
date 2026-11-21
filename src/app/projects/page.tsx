import type { Metadata } from "next";
import { buildMetadata, canonicalUrl } from "@/services/seo";
import { breadcrumbListJsonLd } from "@/services/seo/structured-data";
import { ProjectsView } from "./_components/projects-view";

export const metadata: Metadata = buildMetadata({
  path: "/projects",
  title: "Luxury Residential Projects in Dhaka",
  description:
    "Explore ongoing and ready luxury apartment projects by Avenue Constructions Ltd in Bashundhara R/A, Gulshan, and prime residential zones in Dhaka.",
  ogImage: "/images/projects/avenue-md-heights/avenue-md-heights-project.webp",
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
