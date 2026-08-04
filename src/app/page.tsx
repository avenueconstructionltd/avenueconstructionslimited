import { Navbar } from "@/components/shared/navbar";
import { Hero } from "./_components/hero";
import { About } from "./_components/about";
import { PropertiesSlider } from "./_components/properties-slider";
import { Locations } from "./_components/locations";
import { Services } from "./_components/services";
import { Team } from "./_components/team";
import { Credentials } from "./_components/credentials";
import { JointVenture } from "./_components/joint-venture";
import { ContactForm } from "./_components/contact-form";
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
        className="min-h-screen bg-canvas z-10 relative"
        suppressHydrationWarning
      >
        <Hero />
        <About />
        <PropertiesSlider />
        <Locations />
        <Services />
        <Team />
        <Credentials />
        <JointVenture />
        <ContactForm />
      </main>

      <Footer />
    </>
  );
}
