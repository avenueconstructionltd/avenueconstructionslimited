"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import { MapPin, ArrowRight } from "lucide-react";

export function ConsultantPartner() {
  return (
    <section
      id="consultant"
      className="relative z-10 w-full py-20 sm:py-28 px-6 sm:px-8 md:px-12 bg-linen-cream/40 text-graphite-ink"
    >
      <div className="max-w-7xl mx-auto">
        {/* 2-Column Editorial Showcase (Clean & Focused) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-18 items-start">
          {/* Left Column (5 Cols): Lead Consultant Portrait & Credentials */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.32, 0.72, 0, 1] }}
            className="lg:col-span-5 flex flex-col gap-4"
          >
            <div className="relative aspect-4/5 w-full rounded-3xl overflow-hidden bg-linen-cream shadow-sm">
              <Image
                src="/images/consultant/engr-maruf-ahmed.jpg"
                alt="Engr. Maruf Ahmed - Company Main Consultant"
                fill
                sizes="(max-width: 1024px) 100vw, 480px"
                className="object-cover object-top transition-transform duration-700 ease-premium-in-out hover:scale-103"
                priority
              />
            </div>

            {/* Clean Left-Aligned Consultant Details */}
            <div className="flex flex-col gap-1 px-1">
              <h3 className="font-serif text-2xl font-medium text-graphite-ink">
                Engr. Maruf Ahmed
              </h3>
              <p className="text-xs uppercase tracking-wider text-champagne-dark font-medium">
                Company Main Consultant
              </p>
              <p className="text-xs text-pebble pt-0.5">
                IEB Fellow F-09092 &nbsp;·&nbsp; RAJUK Reg. No. DMINB/CE-0123
              </p>
            </div>
          </motion.div>

          {/* Right Column (7 Cols): Firm Identity, Narrative, Metrics & Office */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.32, 0.72, 0, 1] }}
            className="lg:col-span-7 flex flex-col gap-8 lg:gap-10"
          >
            {/* 1. Firm Brand Identity */}
            <div className="flex items-center gap-4">
              <div className="relative size-16 shrink-0 rounded-2xl overflow-hidden bg-paper-white p-2 shadow-2xs">
                <Image
                  src="/images/consultant/design-aids-logo.png"
                  alt="Design Aids & Consultants Ltd Logo"
                  fill
                  sizes="64px"
                  className="object-contain"
                />
              </div>
              <div className="flex flex-col gap-0.5 min-w-0">
                <span className="text-xs uppercase tracking-wider text-champagne-dark font-medium">
                  Appointed Engineering Consultant Firm
                </span>
                <h2 className="font-serif text-[clamp(1.35rem,2.3vw,2.25rem)] font-medium text-graphite-ink leading-tight sm:whitespace-nowrap">
                  Design Aids &amp; Consultants Ltd.
                </h2>
                <p className="text-xs text-pebble">
                  ECPS &amp; IEB Registered Architectural &amp; Structural Engineering Practice
                </p>
              </div>
            </div>

            {/* 2. Supervision Protocol Narrative */}
            <p className="text-[16px] sm:text-[17px] text-pebble leading-relaxed">
              Under the direct leadership of Engr. Maruf Ahmed, a qualified structural engineering team visits Avenue construction sites <strong className="text-graphite-ink font-semibold">3 to 4 days every week</strong>. From soil load testing and deep piling to 60-grade 500W rebar casting, all structural phases strictly adhere to the latest Bangladesh National Building Code (BNBC) seismic and high-velocity wind resilience standards.
            </p>

            {/* 3. Three Key Metrics (Pure Typography) */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
              <div className="flex flex-col gap-1">
                <span className="font-serif text-3xl sm:text-4xl font-medium text-graphite-ink">
                  3–4 Days
                </span>
                <span className="text-sm text-graphite-ink font-medium">
                  Weekly Site Visits
                </span>
                <span className="text-xs text-pebble leading-snug">
                  4–5 specialized site engineers inspecting execution
                </span>
              </div>
              <div className="flex flex-col gap-1">
                <span className="font-serif text-3xl sm:text-4xl font-medium text-graphite-ink">
                  BNBC Code
                </span>
                <span className="text-sm text-graphite-ink font-medium">
                  Seismic Building Safety
                </span>
                <span className="text-xs text-pebble leading-snug">
                  Engineered for earthquake &amp; wind-load thresholds
                </span>
              </div>
              <div className="flex flex-col gap-1">
                <span className="font-serif text-3xl sm:text-4xl font-medium text-graphite-ink">
                  60-Grade
                </span>
                <span className="text-sm text-graphite-ink font-medium">
                  500W Steel Casting
                </span>
                <span className="text-xs text-pebble leading-snug">
                  Direct laboratory certified material testing
                </span>
              </div>
            </div>

            {/* 4. Corporate Office & Direct Action */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 pt-2">
              <div className="flex flex-col gap-1 text-xs text-pebble min-w-0">
                <div className="flex items-center gap-1.5 text-graphite-ink font-medium">
                  <MapPin className="size-3.5 text-champagne shrink-0" />
                  <span className="truncate">
                    Eastern Porshi (3rd Floor), House 74, Road 8, Block C, Niketan, Gulshan-1
                  </span>
                </div>
                <div className="flex items-center gap-3 text-xs pl-5 text-pebble">
                  <span>+88 0171 3456052</span>
                  <span>·</span>
                  <span>designaidsltd@gmail.com</span>
                </div>
              </div>

              <Link
                href="/contact"
                className="group pill-btn shrink-0 inline-flex items-center gap-2.5 px-6 py-3 text-xs uppercase tracking-wider bg-obsidian text-paper-white hover:bg-black transition-all shadow-xs"
              >
                <span>Consult Our Engineers</span>
                <ArrowRight className="size-3.5 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
