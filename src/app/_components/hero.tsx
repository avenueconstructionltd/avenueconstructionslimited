"use client";

import { useRef, useEffect, useCallback } from "react";
import Link from "next/link";
import { useScroll, useMotionValueEvent } from "motion/react";

const TOTAL_FRAMES = 239;

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const imagesRef = useRef<HTMLImageElement[]>([]);
  const targetFrameRef = useRef<number>(0);
  const currentFrameRef = useRef<number>(0);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Render a specific frame to canvas
  const renderFrame = useCallback((index: number) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let img = imagesRef.current[index];

    // Fallback to nearest loaded frame if current frame is still fetching
    if (!img || !img.complete || img.naturalWidth === 0) {
      for (let offset = 1; offset < 25; offset++) {
        const prev = imagesRef.current[index - offset];
        if (prev?.complete && prev.naturalWidth > 0) {
          img = prev;
          break;
        }
        const next = imagesRef.current[index + offset];
        if (next?.complete && next.naturalWidth > 0) {
          img = next;
          break;
        }
      }
    }

    if (img && img.complete && img.naturalWidth > 0) {
      ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
    }
  }, []);

  // Preload all 239 frames progressively
  useEffect(() => {
    const images: HTMLImageElement[] = new Array(TOTAL_FRAMES);
    imagesRef.current = images;

    // Load first frame immediately for instant first paint
    const firstImg = new Image();
    firstImg.src = "/videos/frames/frame_000.webp";
    firstImg.onload = () => {
      images[0] = firstImg;
      renderFrame(0);
    };

    // Preload remaining frames in staged batches
    let cancelled = false;
    const loadBatch = (startIndex: number, batchSize: number) => {
      if (cancelled) return;
      const end = Math.min(startIndex + batchSize, TOTAL_FRAMES);

      for (let i = startIndex; i < end; i++) {
        if (i === 0) continue;
        const img = new Image();
        const frameNum = String(i).padStart(3, "0");
        img.src = `/videos/frames/frame_${frameNum}.webp`;
        img.onload = () => {
          images[i] = img;
        };
      }

      if (end < TOTAL_FRAMES) {
        setTimeout(() => loadBatch(end, batchSize), 25);
      }
    };

    loadBatch(1, 24);

    return () => {
      cancelled = true;
    };
  }, [renderFrame]);

  // Update target frame from scroll progress
  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const clamped = Math.min(Math.max(latest, 0), 1);
    targetFrameRef.current = Math.round(clamped * (TOTAL_FRAMES - 1));
  });

  // Smooth GPU animation loop (120fps responsive scrub)
  useEffect(() => {
    let animId: number;

    const loop = () => {
      const target = targetFrameRef.current;
      const current = currentFrameRef.current;
      const diff = target - current;

      if (Math.abs(diff) > 0.04) {
        const next = current + diff * 0.25;
        currentFrameRef.current = next;
        renderFrame(Math.round(next));
      }

      animId = requestAnimationFrame(loop);
    };

    animId = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(animId);
  }, [renderFrame]);

  return (
    <section
      ref={containerRef}
      className="relative z-10 w-full h-[320vh] sm:h-[350vh]"
      aria-label="Avenue Constructions Premier Single-Unit Architecture in Dhaka"
    >
      {/* Sticky Fullscreen Hero Viewport */}
      <div className="sticky top-0 h-screen w-full flex flex-col justify-end overflow-hidden pb-12 sm:pb-16 md:pb-20">
        {/* Hardware-Accelerated 1080p Canvas Image Sequence Layer */}
        <div className="absolute inset-0 z-0 bg-[#d8cfc5] overflow-hidden pointer-events-none">
          <canvas
            ref={canvasRef}
            width={1920}
            height={1080}
            className="absolute inset-0 w-full h-full object-cover object-center pointer-events-none select-none brightness-100 contrast-[1.01]"
          />
        </div>

        {/* Hero Editorial Composition — Always 100% Visible On Scroll */}
        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-10 lg:px-14 flex flex-col gap-6">
          <div className="max-w-3xl flex flex-col gap-4">
            {/* Editorial Eyebrow */}
            <span className="font-sans text-[12px] sm:text-[13px] tracking-[0.14em] text-pebble uppercase font-semibold">
              Dhaka Luxury Real Estate &middot; Single-Unit Residences
            </span>

            {/* Editorial Serif Display Headline */}
            <h1 className="font-editorial text-[clamp(3.2rem,6.8vw,5.6rem)] leading-[0.96] tracking-tight text-graphite-ink font-normal">
              Setting Standards in{" "}
              <span className="italic font-normal text-obsidian">
                Luxury Living.
              </span>
            </h1>

            {/* Editorial Description */}
            <p className="max-w-2xl text-[15px] sm:text-[16px] md:text-[17px] leading-[1.65] text-graphite-ink/85 font-normal pt-1">
              Avenue Constructions engineers single-unit residential sanctuaries across Bashundhara R/A, Gulshan, and Aftabnagar &mdash; delivering uncompromised architectural privacy and 100% RAJUK-sanctioned structural permanence.
            </p>

            {/* Refined Luxury CTAs */}
            <div className="flex flex-wrap items-center gap-4 pt-3">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-3.5 rounded-full bg-obsidian text-paper-white text-[13px] font-medium tracking-wide hover:bg-graphite-ink transition-all duration-300 shadow-xl active:scale-[0.98]"
              >
                Make An Appointment
              </Link>

              <Link
                href="#residences"
                className="group inline-flex items-center gap-2.5 px-6 py-3.5 rounded-full border border-stone/80 bg-paper-white/60 hover:bg-paper-white text-graphite-ink text-[13px] font-medium tracking-wide transition-all shadow-xs active:scale-[0.98]"
              >
                <span>Explore Residences</span>
                <span className="transition-transform duration-300 group-hover:translate-x-1">
                  &rarr;
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
