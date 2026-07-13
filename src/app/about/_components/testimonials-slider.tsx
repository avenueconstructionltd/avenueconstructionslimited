"use client";

import { useRef } from "react";
import { Testimonial } from "@/lib/testimonials-constant";

export function TestimonialsSlider({
  testimonials,
}: {
  testimonials: Testimonial[];
}) {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (scrollRef.current) {
      // Scroll by roughly the width of one card + gap
      const itemWidth = scrollRef.current.firstElementChild?.clientWidth || 300;
      scrollRef.current.scrollBy({
        left: -(itemWidth + 24),
        behavior: "smooth",
      });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      const itemWidth = scrollRef.current.firstElementChild?.clientWidth || 300;
      scrollRef.current.scrollBy({ left: itemWidth + 24, behavior: "smooth" });
    }
  };

  return (
    <div className="flex flex-col gap-10 w-full relative group">
      {/* Slider Container with hidden scrollbar */}
      <div
        ref={scrollRef}
        className="flex gap-6 overflow-x-auto snap-x snap-mandatory scroll-smooth w-full pb-4"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        <style
          dangerouslySetInnerHTML={{
            __html: `
          .flex::-webkit-scrollbar { display: none; }
        `,
          }}
        />

        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="w-full md:w-[calc(50%-0.75rem)] lg:w-[calc(33.333%-1rem)] shrink-0 snap-start h-auto"
          >
            <div className="double-bezel-outer h-full">
              <div className="double-bezel-inner p-8 flex flex-col gap-6 min-h-[300px] justify-between h-full">
                <div className="flex flex-col gap-4">
                  {/* Stars */}
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="w-4 h-4 text-accent"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.964.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                          clipRule="evenodd"
                        />
                      </svg>
                    ))}
                  </div>

                  <p className="text-xs md:text-sm text-text-secondary leading-relaxed font-light italic">
                    {testimonial.text}
                  </p>
                </div>

                <div className="flex items-center gap-4 mt-6">
                  <div className="w-10 h-10 rounded-full bg-black/5 flex items-center justify-center shrink-0">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-5 h-5 text-accent"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
                      />
                    </svg>
                  </div>
                  <div className="flex flex-col">
                    <span className="font-serif font-bold text-sm uppercase tracking-wide text-text-primary">
                      {testimonial.name}
                    </span>
                    <span className="text-[10px] uppercase tracking-wider text-text-secondary mt-1">
                      {testimonial.subtitle}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Buttons */}
      <div className="flex items-center justify-center gap-4">
        <button
          onClick={scrollLeft}
          className="w-12 h-12 rounded-full border border-black/10 flex items-center justify-center text-text-primary hover:bg-accent hover:text-canvas hover:border-accent transition-all duration-300"
          aria-label="Previous testimonial"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-5 h-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 19.5L8.25 12l7.5-7.5"
            />
          </svg>
        </button>
        <button
          onClick={scrollRight}
          className="w-12 h-12 rounded-full border border-black/10 flex items-center justify-center text-text-primary hover:bg-accent hover:text-canvas hover:border-accent transition-all duration-300"
          aria-label="Next testimonial"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-5 h-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M8.25 4.5l7.5 7.5-7.5 7.5"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}
