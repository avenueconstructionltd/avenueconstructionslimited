"use client";

import { motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import { Navbar } from "@/components/shared/navbar";
import { Footer } from "@/components/shared/footer";
import { SERVICES } from "@/lib/services-constant";
import { ArrowRight } from "lucide-react";

const PROCESS_STEPS = [
  {
    step: "01",
    title: "Client & Site Consultation",
    description:
      "We host an introductory briefing at our Dhaka headquarters in Purana Paltan to align on your timeline, spatial requirements, and luxury lifestyle preferences.",
  },
  {
    step: "02",
    title: "Architectural & Solar Drafting",
    description:
      "Our architects draft massing models, cross-ventilation diagrams, and sun-path alignments ensuring full-floor natural light throughout the year.",
  },
  {
    step: "03",
    title: "Vetted Materials & Engineering",
    description:
      "We procure high-yield 60-grade BSRM 500W rebar, Holcim/Crown cement, and stone chips casting with rigorous IEB structural testing.",
  },
  {
    step: "04",
    title: "Milestone Handover & Stewardship",
    description:
      "Dedicated escrow-backed execution ensures precision 1mm tolerances on exposed finishes and guaranteed on-schedule apartment delivery.",
  },
];

const SERVICE_SCOPE: Record<string, string> = {
  architecture: "Single-unit floor layouts, solar path studies, 360° daylight ventilation, custom interior casework.",
  development: "General contracting, fair-faced concrete, IEB-certified structural execution, European lift installations.",
  advisory: "Direct freehold plot acquisition, confidential viewings, title deed verification, RAJUK approvals.",
  investment: "Landowner joint venture structuring, revenue share agreements, high-yield asset preservation.",
};

const SERVICE_LEAD: Record<string, string> = {
  architecture: "Avenue Architectural Design Studio",
  development: "IEB Structural Engineering Directorate",
  advisory: "Commercial Land & Legal Advisory Wing",
  investment: "Avenue Private Client Directorate",
};

export function ServicesView() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-canvas pt-32 pb-24 z-10 relative text-graphite-ink">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 md:px-12 flex flex-col gap-28">
          {/* Header Block */}
          <div className="max-w-3xl flex flex-col gap-6">
            <motion.span
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-xs uppercase tracking-[0.25em] font-mono text-champagne font-semibold flex items-center gap-2"
            >
              <span className="size-1.5 rounded-full bg-champagne animate-pulse" />
              Our Services &amp; Capabilities
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.32, 0.72, 0, 1] }}
              className="font-serif text-4xl sm:text-6xl md:text-7xl tracking-tight leading-[1.02] text-graphite-ink font-medium"
            >
              Comprehensive <br />
              <span className="italic font-light text-champagne">
                Real Estate Craftsmanship.
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.15 }}
              className="text-sm md:text-base leading-relaxed text-pebble max-w-[52ch] font-normal"
            >
              From initial architectural drafting and RAJUK municipal sanctioning to IEB-certified construction and landowner joint-venture advisory, we deliver end-to-end luxury solutions in Dhaka.
            </motion.p>
          </div>

          {/* Capabilities Grid */}
          <div className="flex flex-col gap-24 border-t border-stone pt-20">
            {SERVICES.map((service, index) => {
              const isEven = index % 2 === 0;
              return (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.8, ease: [0.32, 0.72, 0, 1] }}
                  className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center"
                >
                  {/* Image side */}
                  <div
                    className={`lg:col-span-6 w-full aspect-16/10 rounded-3xl overflow-hidden double-bezel-outer ${
                      isEven ? "" : "lg:order-2"
                    }`}
                  >
                    <div className="double-bezel-inner relative w-full h-full bg-stone">
                      <Image
                        src={service.imageUrl}
                        alt={service.title}
                        fill
                        className="object-cover brightness-95"
                      />
                    </div>
                  </div>

                  {/* Text side */}
                  <div
                    className={`lg:col-span-6 flex flex-col gap-6 ${
                      isEven ? "" : "lg:order-1"
                    }`}
                  >
                    <span className="font-mono text-xs text-champagne font-semibold tracking-wider">
                      [{service.number}] &middot; Discipline
                    </span>
                    <h2 className="font-serif text-3xl sm:text-4xl text-graphite-ink font-medium">
                      {service.title}
                    </h2>
                    <p className="text-sm text-pebble leading-relaxed">
                      {service.description}
                    </p>

                    {/* Details list */}
                    <div className="border-t border-stone pt-6 grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div className="flex flex-col gap-1.5">
                        <h3 className="text-xs uppercase tracking-wider font-mono text-champagne font-semibold">
                          Scope of Work
                        </h3>
                        <p className="text-xs text-pebble leading-relaxed">
                          {SERVICE_SCOPE[service.id]}
                        </p>
                      </div>
                      <div className="flex flex-col gap-1.5">
                        <h3 className="text-xs uppercase tracking-wider font-mono text-champagne font-semibold">
                          Supervisory Division
                        </h3>
                        <p className="text-xs text-graphite-ink font-medium">
                          {SERVICE_LEAD[service.id]}
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* 4-Step Execution Flow */}
          <div className="border-t border-stone pt-20 flex flex-col gap-12">
            <div className="max-w-2xl flex flex-col gap-3">
              <span className="text-xs uppercase tracking-[0.25em] font-mono text-champagne font-semibold">
                Execution Methodology
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl text-graphite-ink font-medium">
                Our Four-Stage Project Journey
              </h2>
              <p className="text-xs sm:text-sm text-pebble leading-relaxed">
                Every project follows strict milestone discipline from blueprint conception to final key handover.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {PROCESS_STEPS.map((step, index) => (
                <motion.div
                  key={step.step}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.08,
                    ease: [0.32, 0.72, 0, 1],
                  }}
                  className="p-6 rounded-3xl border border-stone bg-linen-cream flex flex-col justify-between gap-6 shadow-2xs hover:shadow-md transition-shadow"
                >
                  <span className="font-mono text-base text-champagne font-semibold">
                    {step.step}
                  </span>
                  <div className="flex flex-col gap-2">
                    <h3 className="font-serif text-lg text-graphite-ink font-medium">
                      {step.title}
                    </h3>
                    <p className="text-xs text-pebble leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Bottom Consultation CTA */}
          <div className="rounded-3xl sm:rounded-4xl bg-obsidian text-paper-white p-8 sm:p-12 md:p-16 flex flex-col md:flex-row items-center justify-between gap-8 border border-white/10 shadow-2xl relative overflow-hidden">
            <div className="glow-accent -top-30 -right-30 opacity-30" />
            <div className="flex flex-col gap-3 max-w-xl relative z-10">
              <span className="text-xs uppercase tracking-[0.25em] font-mono text-champagne font-semibold">
                Have a Land or Construction Requirement?
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl text-paper-white font-medium">
                Schedule a Direct Technical Consultation
              </h2>
              <p className="text-xs sm:text-sm text-paper-white/70">
                Discuss FAR calculations, RAJUK clearance schedules, or single-unit architectural customization with our directors.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 relative z-10 shrink-0">
              <Link
                href="/contact"
                className="pill-btn inline-flex items-center justify-center gap-2 px-7 py-3.5 text-xs font-mono uppercase tracking-wider bg-champagne text-obsidian font-semibold hover:bg-champagne-light transition-all shadow-md"
              >
                <span>Inquire Online</span>
                <ArrowRight className="size-4" />
              </Link>
              <a
                href="tel:+8801714767246"
                className="pill-btn inline-flex items-center justify-center px-6 py-3.5 text-xs font-mono uppercase tracking-wider border border-white/20 text-paper-white hover:bg-white/10 transition-colors"
              >
                Call +880 1714 767 246
              </a>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
