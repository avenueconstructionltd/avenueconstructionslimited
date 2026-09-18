import Link from "next/link";
import { HeroBackground } from "./hero-background";

export function Hero() {
  return (
    <section className="relative z-10 w-full min-h-dvh flex flex-col justify-end overflow-hidden text-paper-white pb-12 sm:pb-16 md:pb-20">
      {/* Parallax Background Image */}
      <HeroBackground />

      {/* Deeper gradient for text contrast */}
      <div className="absolute inset-x-0 bottom-0 h-3/4 bg-linear-to-t from-black/90 via-black/50 to-transparent pointer-events-none z-1" />
      <div className="absolute inset-x-0 top-0 h-1/4 bg-linear-to-b from-black/30 to-transparent pointer-events-none z-1" />

      {/* Hero Content: Pure static HTML for instant LCP First Paint */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-8 md:px-12 flex flex-col gap-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-end">
          {/* Left Column: Bold Headline */}
          <div className="lg:col-span-7 flex flex-col gap-3">
            <span className="font-mono text-xs uppercase tracking-[0.25em] text-champagne font-semibold drop-shadow-sm">
              Dhaka Luxury Real Estate &middot; Single-Unit Residences
            </span>
            <h1 className="font-serif text-[clamp(2.8rem,6vw,5.2rem)] leading-[0.98] tracking-[-0.02em] text-paper-white font-medium drop-shadow-md">
              Setting Standards in Luxury Living.
            </h1>
          </div>

          {/* Right Column: Summary + CTAs */}
          <div className="lg:col-span-5 flex flex-col gap-5 lg:pl-4">
            <p className="text-[15px] sm:text-[16px] leading-[1.65] text-paper-white/95 font-normal drop-shadow-sm">
              Avenue Constructions Ltd engineers single-unit luxury residential landmarks in Bashundhara R/A, Gulshan, and Aftabnagar &mdash; delivering 100% RAJUK-sanctioned architectural privacy.
            </p>

            <div className="flex flex-wrap items-center gap-3 pt-1">
              <Link
                href="/contact"
                className="group pill-btn inline-flex items-center gap-3 pl-6 pr-2.5 py-3 text-xs uppercase font-mono tracking-wider bg-paper-white text-graphite-ink hover:bg-linen-cream transition-all shadow-xl active:scale-[0.98]"
              >
                <span>Make An Appointment</span>
                <span className="flex size-6 items-center justify-center rounded-full bg-obsidian text-paper-white text-[11px] transition-transform duration-300 group-hover:translate-x-0.5">
                  &rarr;
                </span>
              </Link>
              <Link
                href="#residences"
                className="pill-btn inline-flex items-center justify-center px-6 py-3 text-xs uppercase font-mono tracking-wider border border-paper-white/60 bg-black/20 text-paper-white hover:bg-paper-white hover:text-graphite-ink active:scale-[0.98] transition-all backdrop-blur-md"
              >
                Explore Residences
              </Link>
            </div>
          </div>
        </div>

        {/* Scroll Down Indicator */}
        <div className="hidden md:flex flex-col items-center gap-2 pt-8">
          <span className="text-[10px] font-mono uppercase tracking-[0.3em] text-paper-white/50">
            Scroll
          </span>
          <div className="scroll-indicator flex flex-col items-center">
            <div className="w-px h-8 bg-linear-to-b from-paper-white/60 to-transparent" />
          </div>
        </div>
      </div>
    </section>
  );
}
