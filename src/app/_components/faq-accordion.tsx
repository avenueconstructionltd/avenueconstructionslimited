"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";

interface FAQItem {
  question: string;
  answer: string;
  category: string;
}

const FAQS: FAQItem[] = [
  {
    category: "Regulatory & Legal",
    question: "What statutory clearances & approvals are secured prior to ground-breaking?",
    answer:
      "Every Avenue development is 100% sanctioned under RAJUK municipal bylaws with official sub-zone clearance. Structural calculations and architectural blueprints are verified, stamped, and supervised by registered engineers from the Institution of Engineers, Bangladesh (IEB).",
  },
  {
    category: "Landowner Partnerships",
    question: "How does the Joint Venture landowner partnership model work?",
    answer:
      "We partner with freehold landowners in Gulshan, Banani, Baridhara, and Bashundhara through transparent, legally binding JV agreements. We maximize land value by creating single-unit architectural landmarks with high ceilings, private elevators, and bank-guaranteed delivery timelines.",
  },
  {
    category: "Engineering & Materials",
    question: "What structural specifications and raw materials are used?",
    answer:
      "We employ museum-grade structural inputs: 500W high-yield TMT steel (BSRM), 52.5N OPC cement (Holcim/Crown), fair-faced architectural concrete, double-glazed acoustic solar glass, European passenger elevators, and standby soundproof generator systems.",
  },
  {
    category: "Customization & Bespoke Design",
    question: "Can apartment owners customize their interior architectural layout?",
    answer:
      "Yes. During the early construction phase, our in-house architectural studio collaborates directly with unit owners to customize spatial layouts, sanitary fixtures, lighting automation, and kitchen cabinetry to their exact lifestyle requirements.",
  },
  {
    category: "Delivery & Timelines",
    question: "How does Avenue guarantee on-time project handover?",
    answer:
      "All projects are financed with dedicated escrow capital and disciplined milestone deployment. Handover dates are contractually guaranteed with transparent monthly progress audits and on-site engineering oversight.",
  },
];

export function FAQAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="relative z-10 w-full py-24 md:py-32 px-6 sm:px-8 md:px-12 bg-linen-cream text-graphite-ink">
      <div className="max-w-4xl mx-auto flex flex-col gap-12 md:gap-16">
        {/* Section Header (Fazora FAQ Style) */}
        <div className="flex flex-col items-center text-center gap-3">
          <span className="font-mono text-xs text-pebble uppercase tracking-[0.2em]">
            Client &amp; Partner Inquiries
          </span>
          <h2 className="font-serif text-[clamp(2.2rem,4.5vw,3.5rem)] leading-[1.1] tracking-[-0.015em] text-graphite-ink">
            Frequently Asked Questions.
          </h2>
          <p className="text-[15px] sm:text-[16px] text-pebble max-w-xl">
            Clear, transparent answers regarding statutory clearances, joint ventures, construction standards, and handover security.
          </p>
        </div>

        {/* Accordion Stack */}
        <div className="flex flex-col gap-3.5">
          {FAQS.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={faq.question}
                className="rounded-2xl border border-stone bg-paper-white overflow-hidden transition-all duration-300 shadow-2xs"
              >
                <button
                  onClick={() => toggle(index)}
                  className="w-full flex items-center justify-between p-6 sm:p-7 text-left font-serif text-lg sm:text-xl text-graphite-ink hover:text-charcoal transition-colors cursor-pointer gap-4"
                  aria-expanded={isOpen}
                >
                  <div className="flex items-center gap-3">
                    <span className="font-medium">{faq.question}</span>
                  </div>
                  <span
                    className={`flex size-8 shrink-0 items-center justify-center rounded-full border border-stone text-xs transition-transform duration-300 ${
                      isOpen ? "rotate-45 bg-obsidian text-paper-white" : "bg-linen-cream text-graphite-ink"
                    }`}
                  >
                    +
                  </span>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: [0.32, 0.72, 0, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 sm:px-7 pb-7 pt-1 border-t border-stone/50">
                        <div className="pl-0 sm:pl-10 flex flex-col gap-2">
                          <span className="font-mono text-[11px] uppercase tracking-wider text-champagne">
                            Category: {faq.category}
                          </span>
                          <p className="text-[15px] leading-[1.65] text-pebble font-normal">
                            {faq.answer}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
