import { Navbar } from "@/components/shared/navbar";
import { Hero } from "./_components/hero";
import { About } from "./_components/about";
import { BelowFoldSections } from "./_components/below-fold-sections";
import { Footer } from "@/components/shared/footer";
import {
  realEstateAgentJsonLd,
  websiteJsonLd,
} from "@/services/seo/structured-data";

export default function Home() {
  const agentLd = realEstateAgentJsonLd();
  const siteLd = websiteJsonLd();

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(agentLd) }}
        suppressHydrationWarning
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(siteLd) }}
        suppressHydrationWarning
      />

      <Navbar />

      <main
        className="min-h-screen bg-paper-white text-graphite-ink z-10 relative"
        suppressHydrationWarning
      >
        <Hero />
        <About />
        <BelowFoldSections />
      </main>

      <Footer />
    </>
  );
}
