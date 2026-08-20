import type { Metadata } from "next";
import { Navbar } from "@/components/shared/navbar";
import { Footer } from "@/components/shared/footer";
import { LandownerForm } from "./_components/landowner-form";
import { buildMetadata, canonicalUrl } from "@/services/seo";
import { breadcrumbListJsonLd } from "@/services/seo/structured-data";
import { ShieldCheck, TrendingUp, Sparkles, Building2 } from "lucide-react";

export const metadata: Metadata = buildMetadata({
  path: "/landowner",
  title: "Landowner Partnerships & Joint Ventures | Avenue Constructions",
  description:
    "Partner with Avenue Constructions Limited. Enter a high-yield joint venture to transform your freehold plot in Gulshan, Banani, Baridhara, or Bashundhara into a landmark single-unit residential tower.",
});

const CO_DEV_STAGES = [
  {
    step: "01",
    title: "Confidential Land Survey & FAR Feasibility",
    description:
      "We perform digital topographic surveys, sub-soil quality tests, and calculate optimal Floor Area Ratio (FAR) to maximize sellable volume and landowner share.",
  },
  {
    step: "02",
    title: "Architectural Conception & Layout Agreement",
    description:
      "Our architects draft customized single-unit floor layouts with private lift lobbies, 360° natural sunlight, and dedicated owner-reserved penthouses or duplex suites.",
  },
  {
    step: "03",
    title: "100% RAJUK Sanction & Municipal Clearances",
    description:
      "We manage the entire municipal approval lifecycle—securing official RAJUK building sanction permits, sub-zone clearances, and utility authorizations with zero hassle for you.",
  },
  {
    step: "04",
    title: "Guaranteed Milestone Construction & Handover",
    description:
      "Built with 60-grade BSRM steel, Holcim cement, and dedicated escrow funding. Contractually guaranteed handover dates with monthly engineering progress reports.",
  },
];

const TRUST_METRICS = [
  { icon: <TrendingUp className="size-5 text-champagne" />, title: "Maximized Equity Ratio", desc: "Transparent landowner ratio tailored to plot location and market potential." },
  { icon: <ShieldCheck className="size-5 text-champagne" />, title: "100% Legal Protection", desc: "Registered tripartite agreement with dedicated escrow bank security." },
  { icon: <Building2 className="size-5 text-champagne" />, title: "Bespoke Architecture", desc: "Exclusive single-unit towers that elevate family prestige in your neighborhood." },
  { icon: <Sparkles className="size-5 text-champagne" />, title: "On-Time Delivery Guarantee", desc: "Strict penalty-backed completion milestones with IEB engineering oversight." },
];

export default function LandownerPage() {
  const breadcrumbLd = breadcrumbListJsonLd([
    { name: "Home", url: canonicalUrl("/") },
    { name: "Landowner Partnership", url: canonicalUrl("/landowner") },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
        suppressHydrationWarning
      />
      <Navbar />

      <main className="min-h-screen bg-canvas pt-32 pb-24 z-10 relative text-graphite-ink">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 md:px-12 flex flex-col gap-24">
          {/* Hero Header block */}
          <header className="flex flex-col gap-6 max-w-3xl">
            <span className="text-xs uppercase tracking-[0.25em] font-mono text-champagne font-semibold flex items-center gap-2">
              <span className="size-1.5 rounded-full bg-champagne animate-pulse" />
              Landowner Joint Venture Advisory
            </span>
            <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl tracking-tight leading-[1.02] text-graphite-ink font-medium">
              Transform Your Land <br />
              <span className="italic font-light text-champagne">
                Into a Landmark Asset.
              </span>
            </h1>
            <p className="text-sm md:text-base leading-relaxed text-pebble font-normal max-w-2xl">
              Own freehold land in Bashundhara R/A, Gulshan, Banani, Baridhara, or Aftabnagar? Partner with Avenue Constructions Ltd to develop an iconic single-unit residential tower that honors your family legacy while maximizing generational financial return.
            </p>
          </header>

          {/* 4 Trust Metrics */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {TRUST_METRICS.map((metric) => (
              <div
                key={metric.title}
                className="p-6 rounded-3xl border border-stone bg-linen-cream flex flex-col gap-4 shadow-2xs hover:shadow-md transition-shadow"
              >
                <div className="size-10 rounded-2xl bg-paper-white border border-stone flex items-center justify-center">
                  {metric.icon}
                </div>
                <div className="flex flex-col gap-1">
                  <h3 className="font-serif text-lg font-medium text-graphite-ink">
                    {metric.title}
                  </h3>
                  <p className="text-xs text-pebble leading-relaxed">
                    {metric.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Form + Explainer Grid */}
          <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start border-t border-stone pt-16">
            {/* Explainer Block */}
            <div className="lg:col-span-6 flex flex-col gap-10">
              <div className="flex flex-col gap-3">
                <span className="text-xs uppercase tracking-[0.2em] font-mono text-champagne font-semibold">
                  The Joint Venture Process
                </span>
                <h2 className="font-serif text-3xl sm:text-4xl text-graphite-ink font-medium">
                  Four Structured Stages of Development
                </h2>
                <p className="text-xs sm:text-sm text-pebble leading-relaxed">
                  We manage the complete complexity—from RAJUK municipal sanction to structural handover—with total legal clarity.
                </p>
              </div>

              <div className="flex flex-col gap-6">
                {CO_DEV_STAGES.map((stage) => (
                  <div
                    key={stage.step}
                    className="p-6 rounded-3xl border border-stone bg-paper-white flex flex-col gap-2 shadow-2xs"
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-sm text-champagne font-semibold">
                        [{stage.step}] &middot; Phase
                      </span>
                    </div>
                    <h3 className="font-serif text-xl font-medium text-graphite-ink">
                      {stage.title}
                    </h3>
                    <p className="text-xs text-pebble leading-relaxed">
                      {stage.description}
                    </p>
                  </div>
                ))}
              </div>

              {/* Direct Hotline Card */}
              <div className="p-6 rounded-3xl bg-linen-cream border border-stone flex flex-col gap-3">
                <span className="text-xs font-mono uppercase tracking-wider text-champagne font-semibold">
                  Prefer a Confidential Discussion?
                </span>
                <p className="text-xs text-pebble">
                  Call our Managing Director directly for an initial discussion on your plot:
                </p>
                <div className="flex items-center gap-4 pt-1">
                  <a
                    href="tel:+8801714767246"
                    className="font-mono text-base text-graphite-ink font-semibold hover:text-champagne transition-colors"
                  >
                    +880 1714 767 246
                  </a>
                </div>
              </div>
            </div>

            {/* Interactive Form Block */}
            <div className="lg:col-span-6 w-full double-bezel-outer">
              <div className="double-bezel-inner p-6 sm:p-10 bg-paper-white flex flex-col gap-6">
                <div className="flex flex-col gap-1">
                  <span className="text-xs uppercase tracking-wider font-mono text-champagne font-semibold">
                    Confidential Submission
                  </span>
                  <h3 className="font-serif text-2xl font-medium text-graphite-ink">
                    Submit Your Land Details
                  </h3>
                  <p className="text-xs text-pebble">
                    Provide your plot location and size. We will prepare an initial FAR assessment within 48 hours.
                  </p>
                </div>
                <div className="border-t border-stone pt-6">
                  <LandownerForm />
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </>
  );
}
