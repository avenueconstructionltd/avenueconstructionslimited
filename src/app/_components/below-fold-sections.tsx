"use client";

import dynamic from "next/dynamic";

const PropertiesSlider = dynamic(() =>
  import("./properties-slider").then((mod) => mod.PropertiesSlider),
);

const PinnedShowcase = dynamic(() =>
  import("./pinned-showcase").then((mod) => mod.PinnedShowcase),
);

const WhyChooseUs = dynamic(() =>
  import("./why-choose-us").then((mod) => mod.WhyChooseUs),
);

const Services = dynamic(() =>
  import("./services").then((mod) => mod.Services),
);

const Locations = dynamic(() =>
  import("./locations").then((mod) => mod.Locations),
);

const Team = dynamic(() =>
  import("./team").then((mod) => mod.Team),
);

const JointVenture = dynamic(() =>
  import("./joint-venture").then((mod) => mod.JointVenture),
);

const ArchitecturalJournal = dynamic(() =>
  import("./journal").then((mod) => mod.ArchitecturalJournal),
);

const CTABanner = dynamic(() =>
  import("./cta-banner").then((mod) => mod.CTABanner),
);

const FAQAccordion = dynamic(() =>
  import("./faq-accordion").then((mod) => mod.FAQAccordion),
);

const ContactForm = dynamic(() =>
  import("./contact-form").then((mod) => mod.ContactForm),
);

/**
 * Client boundary that lazily loads all below-fold sections.
 * SSR is kept ON so sections render in HTML immediately (scrollable).
 * JS chunks are still code-split and loaded lazily.
 */
export function BelowFoldSections() {
  return (
    <>
      <PropertiesSlider />
      <PinnedShowcase />
      <WhyChooseUs />
      <Services />
      <Locations />
      <Team />
      <JointVenture />
      <ArchitecturalJournal />
      <CTABanner />
      <FAQAccordion />
      <ContactForm />
    </>
  );
}
