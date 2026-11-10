"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import { MapPin, Phone, Mail, ArrowRight, ShieldCheck, Scale } from "lucide-react";

export function ManagingDirector() {
  return (
    <section
      id="managing-director"
      className="relative z-10 w-full py-20 sm:py-28 px-6 sm:px-8 md:px-12 bg-paper-white text-graphite-ink"
    >
      <div className="max-w-7xl mx-auto">
        {/* 2-Column Grid: Text on Left (7 cols), Photo on Right (5 cols) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column (7 Cols): Company Identity, Philosophy & Vision */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.32, 0.72, 0, 1] }}
            className="lg:col-span-7 flex flex-col gap-8 order-2 lg:order-1"
          >
            {/* Company Badge with Logo */}
            <div className="flex items-center gap-4">
              <div className="relative size-14 shrink-0 rounded-2xl overflow-hidden bg-linen-cream/50 p-2 shadow-2xs">
                <Image
                  src="/images/avenue-constructions-logo.webp"
                  alt="Avenue Constructions Limited Logo"
                  fill
                  sizes="56px"
                  className="object-contain"
                />
              </div>
              <div className="flex flex-col gap-0.5 min-w-0">
                <span className="text-xs uppercase tracking-wider text-champagne font-medium">
                  Corporate Leadership &amp; Governance
                </span>
                <h2 className="font-serif text-[clamp(1.5rem,2.5vw,2.4rem)] font-medium text-graphite-ink leading-tight">
                  Avenue Constructions Ltd.
                </h2>
                <p className="text-xs text-pebble font-mono">
                  Incorporated Under Companies Act, 1994 &nbsp;·&nbsp; TIN: 162947654103
                </p>
              </div>
            </div>

            {/* Managing Director Pull-Quote */}
            <blockquote className="font-serif italic text-lg sm:text-xl text-graphite-ink/90 leading-relaxed border-l-2 border-champagne pl-5 my-1">
              &ldquo;Real estate development is a sacred covenant of trust. We measure our legacy not only by architectural grace, but by the legal certainty, structural permanence, and absolute peace of mind we deliver to every family.&rdquo;
            </blockquote>

            {/* Executive Narrative */}
            <p className="text-[15px] sm:text-[16px] text-pebble leading-relaxed">
              Under the direct leadership of Md. Golam Rosul, Avenue Constructions Limited unites rigorous legal due diligence with high-end architectural craftsmanship. Backed by advanced academic legal discipline, our developments ensure <strong className="text-graphite-ink font-semibold">100% clear land titles, transparent joint ventures</strong>, and uncompromising adherence to statutory approvals across Dhaka&apos;s prime residential enclaves.
            </p>

            {/* 2 Strategic Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 pt-1">
              <div className="flex flex-col gap-3 p-5 sm:p-6 rounded-2xl bg-linen-cream border border-stone/90 shadow-[0_2px_8px_rgba(20,21,24,0.03)] hover:border-champagne/60 transition-colors">
                <div className="flex items-center gap-2.5">
                  <div className="size-8 rounded-xl bg-champagne/15 flex items-center justify-center shrink-0">
                    <Scale className="size-4 text-champagne-dark" />
                  </div>
                  <span className="font-mono text-xs uppercase tracking-wider font-semibold text-graphite-ink">
                    Legal &amp; Title Diligence
                  </span>
                </div>
                <p className="text-xs sm:text-[13px] text-pebble leading-relaxed">
                  Every parcel undergoes complete legal title scrutiny, ensuring transparent landowner partnerships and zero ownership ambiguity.
                </p>
              </div>

              <div className="flex flex-col gap-3 p-5 sm:p-6 rounded-2xl bg-linen-cream border border-stone/90 shadow-[0_2px_8px_rgba(20,21,24,0.03)] hover:border-champagne/60 transition-colors">
                <div className="flex items-center gap-2.5">
                  <div className="size-8 rounded-xl bg-champagne/15 flex items-center justify-center shrink-0">
                    <ShieldCheck className="size-4 text-champagne-dark" />
                  </div>
                  <span className="font-mono text-xs uppercase tracking-wider font-semibold text-graphite-ink">
                    100% RAJUK Compliance
                  </span>
                </div>
                <p className="text-xs sm:text-[13px] text-pebble leading-relaxed">
                  Full statutory permit adherence from soil testing and floor plan sanctions through to structural inspection and timely handover.
                </p>
              </div>
            </div>

            {/* Corporate Office & Direct Contact Line */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 pt-2">
              <div className="flex flex-col gap-1.5 text-xs text-pebble min-w-0">
                <div className="flex items-center gap-1.5 text-graphite-ink font-medium">
                  <MapPin className="size-3.5 text-champagne shrink-0" />
                  <span className="truncate">
                    Resourceful Paltan City (7th Floor), 51, 51/A, Purana Paltan, Dhaka-1000
                  </span>
                </div>
                <div className="flex flex-wrap items-center gap-3 text-xs pl-5 text-pebble font-mono">
                  <a
                    href="tel:+8801714767246"
                    className="hover:text-champagne transition-colors flex items-center gap-1"
                  >
                    <Phone className="size-3 text-champagne/80" />
                    +880 1714-767246
                  </a>
                  <span>·</span>
                  <a
                    href="mailto:grshanto@gmail.com"
                    className="hover:text-champagne transition-colors flex items-center gap-1"
                  >
                    <Mail className="size-3 text-champagne/80" />
                    grshanto@gmail.com
                  </a>
                </div>
              </div>

              <Link
                href="/contact"
                className="group pill-btn shrink-0 inline-flex items-center gap-2.5 px-6 py-3 text-xs font-mono uppercase tracking-wider bg-obsidian text-paper-white hover:bg-black transition-all shadow-xs"
              >
                <span>Direct Inquiry</span>
                <ArrowRight className="size-3.5 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </div>
          </motion.div>

          {/* Right Column (5 Cols): Managing Director Portrait & Credentials */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.32, 0.72, 0, 1] }}
            className="lg:col-span-5 flex flex-col gap-5 order-1 lg:order-2"
          >
            <div className="relative aspect-4/5 w-full rounded-3xl overflow-hidden bg-linen-cream shadow-sm">
              <Image
                src="/images/team/golam-rosul.webp"
                alt="Md. Golam Rosul - Managing Director, Avenue Constructions Ltd."
                fill
                sizes="(max-width: 1024px) 100vw, 480px"
                className="object-cover object-top transition-transform duration-700 ease-premium-in-out hover:scale-103"
                priority
              />
            </div>

            {/* Right-Aligned Identity & Educational Credentials */}
            <div className="flex flex-col gap-1 px-1">
              <h3 className="font-serif text-2xl sm:text-3xl font-medium text-graphite-ink">
                Md. Golam Rosul
              </h3>
              <p className="text-xs uppercase tracking-wider text-champagne font-medium">
                Managing Director · Avenue Constructions Ltd.
              </p>
              <p className="text-xs text-pebble pt-1 font-mono leading-relaxed">
                L.L.B. (Hon&apos;s), L.L.M. (Islamic University, Kushtia)
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
