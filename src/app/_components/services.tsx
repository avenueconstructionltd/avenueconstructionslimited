"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "motion/react";
import { SERVICES } from "@/lib/services-constant";

const SERVICE_DELIVERABLES: string[][] = [
  ["Massing Models", "Solar Studies", "Site Orientation", "Material Schedules"],
  ["Master Contracting", "Exposed Concrete", "1mm Tolerances", "Stonemasonry"],
  [
    "Off-Market Acquisitions",
    "Viewing Coordination",
    "Asset Trusts",
    "Confidentiality",
  ],
  ["Valuations", "Tenancy Strategy", "Restoration", "Joint Ventures"],
];

export function Services() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section
      id="services"
      suppressHydrationWarning
      className="relative w-full py-24 md:py-32 px-4 sm:px-6 md:px-12 bg-linen-cream text-graphite-ink"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        {/* Left Column (Sticky Editorial Header) */}
        <div className="lg:col-span-5 lg:sticky lg:top-28 flex flex-col gap-6">
          <div className="flex flex-col gap-3">
            <span className="text-xs uppercase tracking-wider text-pebble font-mono font-medium">
              Capabilities &amp; Craftsmanship
            </span>
            <h2 className="font-serif text-[clamp(2.2rem,4.5vw,3.5rem)] leading-heading-lg tracking-[-0.01em] text-graphite-ink">
              Bespoke solutions for collectors.
            </h2>
            <p className="text-body leading-[1.6] text-pebble font-normal max-w-[36ch] pt-1">
              From architectural massing and solar orientation to structural execution and asset stewardship.
            </p>
          </div>

          {/* Active Service Preview Frame */}
          <div className="double-bezel-outer mt-4 w-full max-w-sm hidden lg:block">
            <div className="double-bezel-inner relative aspect-4/3 w-full overflow-hidden bg-paper-white">
              <AnimatePresence mode="wait">
                <motion.div
                  key={SERVICES[activeTab].id}
                  initial={{ opacity: 0, scale: 1.04 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  transition={{ duration: 0.4, ease: [0.32, 0.72, 0, 1] }}
                  className="w-full h-full absolute inset-0"
                >
                  <Image
                    src={SERVICES[activeTab].imageUrl}
                    alt={SERVICES[activeTab].title}
                    fill
                    sizes="384px"
                    className="object-cover brightness-90"
                  />
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>

        {/* Right Column (Interactive List) */}
        <div className="lg:col-span-7 flex flex-col border-t border-stone">
          {SERVICES.map((service, index) => {
            const isActive = activeTab === index;
            return (
              <motion.div
                key={service.id}
                onMouseEnter={() => setActiveTab(index)}
                onClick={() => setActiveTab(index)}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.05,
                  ease: [0.32, 0.72, 0, 1],
                }}
                className={`py-7 border-b border-stone cursor-pointer group flex flex-col gap-3 transition-colors ${
                  isActive ? "bg-paper-white/60 -mx-4 px-4 sm:-mx-6 sm:px-6 rounded-2xl" : ""
                }`}
              >
                {/* Title & Arrow */}
                <div className="flex justify-between items-center">
                  <h3 className="font-serif text-2xl sm:text-3xl text-graphite-ink font-medium group-hover:text-charcoal transition-colors">
                    {service.title}
                  </h3>
                  <motion.span
                    animate={{ x: isActive ? 4 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="text-sm text-pebble group-hover:text-graphite-ink transition-colors"
                  >
                    &rarr;
                  </motion.span>
                </div>

                {/* Mobile Preview Frame */}
                <div
                  className={`relative aspect-video w-full rounded-2xl overflow-hidden mt-2 lg:hidden ${
                    isActive ? "block" : "hidden"
                  }`}
                >
                  <Image
                    src={service.imageUrl}
                    alt={service.title}
                    fill
                    sizes="100vw"
                    className="object-cover"
                  />
                </div>

                {/* Description */}
                <p className="text-[15px] text-pebble leading-relaxed max-w-[54ch] font-normal">
                  {service.description}
                </p>

                {/* Deliverables tags — smooth reveal */}
                <AnimatePresence>
                  {isActive && (
                    <motion.div
                      initial={{ opacity: 0, y: -8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -8 }}
                      transition={{ duration: 0.25, ease: [0.32, 0.72, 0, 1] }}
                      className="flex flex-wrap gap-2 pt-2"
                    >
                      {SERVICE_DELIVERABLES[index].map((item) => (
                        <span
                          key={item}
                          className="inline-flex items-center text-xs text-graphite-ink border border-stone bg-paper-white px-3 py-1 rounded-md shadow-2xs font-mono"
                        >
                          {item}
                        </span>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
