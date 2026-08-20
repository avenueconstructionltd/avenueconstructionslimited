"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence, useMotionValueEvent, useScroll } from "motion/react";
import { Logo } from "./logo";

interface NavLink {
  label: string;
  href: string;
}

const NAV_LINKS: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "Projects", href: "/projects" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Partnership", href: "/landowner" },
  { label: "Contact", href: "/contact" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 40);
  });

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <>
      {/* Floating Pill Nav — scroll-aware frosted glass */}
      <motion.nav
        animate={{
          backgroundColor: scrolled ? "rgba(252, 252, 252, 0.92)" : "rgba(252, 252, 252, 0.75)",
          boxShadow: scrolled
            ? "0 8px 32px rgba(50,48,47,0.1), 0 1px 0 rgba(226,223,218,0.6)"
            : "0 8px 32px rgba(50,48,47,0.04)",
        }}
        transition={{ duration: 0.4, ease: [0.32, 0.72, 0, 1] }}
        className="fixed top-5 md:top-6 left-1/2 -translate-x-1/2 z-50 flex w-[calc(100%-1.5rem)] max-w-5xl items-center justify-between rounded-full backdrop-blur-xl px-4 py-2.5 md:px-6 md:py-3 ring-1 ring-stone/60"
      >
        {/* Brand Logo */}
        <Logo />

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex items-center gap-6 lg:gap-8">
          {NAV_LINKS.map((link) => {
            const isActive =
              pathname === link.href || (pathname === "/" && link.href === "/");
            return (
              <Link
                key={link.label}
                href={link.href}
                className={`relative text-[13px] lg:text-caption font-normal transition-colors duration-200 tracking-[-0.01em] ${
                  isActive
                    ? "text-graphite-ink font-medium"
                    : "text-pebble hover:text-graphite-ink"
                }`}
              >
                {link.label}
                {isActive && (
                  <motion.span
                    layoutId="nav-active-dot"
                    className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 size-1 rounded-full bg-champagne"
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}
              </Link>
            );
          })}
        </div>

        {/* Right CTA Actions */}
        <div className="hidden md:flex items-center gap-3">
          <Link
            href="/contact"
            className="pill-btn inline-flex items-center justify-center px-4 py-2 text-xs font-normal border border-stone text-graphite-ink hover:border-graphite-ink hover:bg-fog-veil transition-colors"
          >
            Get in Touch
          </Link>
          <Link
            href="/projects"
            className="group pill-btn inline-flex items-center gap-2.5 pl-4 pr-2 py-1.5 text-xs font-normal bg-charcoal text-paper-white hover:bg-graphite-ink active:scale-[0.98] transition-all"
          >
            <span>View Projects</span>
            <span className="flex size-6 items-center justify-center rounded-full bg-paper-white/15 text-[11px] transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-px group-hover:scale-105">
              &rarr;
            </span>
          </Link>
        </div>

        {/* Mobile Hamburger */}
        <button
          onClick={toggleMenu}
          className="flex size-10 items-center justify-center rounded-full border border-stone text-graphite-ink hover:bg-fog-veil md:hidden transition-colors"
          aria-label="Toggle navigation menu"
          aria-expanded={isOpen}
        >
          <div className="flex flex-col gap-1 w-4 items-end">
            <span
              className={`h-0.5 w-4 bg-graphite-ink transition-transform duration-300 ${
                isOpen ? "rotate-45 translate-y-1.5" : ""
              }`}
            />
            <span
              className={`h-0.5 w-3 bg-graphite-ink transition-opacity duration-300 ${
                isOpen ? "opacity-0" : "opacity-100"
              }`}
            />
            <span
              className={`h-0.5 w-4 bg-graphite-ink transition-transform duration-300 ${
                isOpen ? "-rotate-45 -translate-y-1.5" : ""
              }`}
            />
          </div>
        </button>
      </motion.nav>

      {/* Mobile Screen Takeover Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: "-100%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "-100%" }}
            transition={{ duration: 0.5, ease: [0.32, 0.72, 0, 1] }}
            className="fixed inset-0 z-40 bg-linen-cream flex flex-col justify-center px-8 py-16 md:hidden"
          >
            <div className="flex flex-col gap-6 items-center">
              {NAV_LINKS.map((link, index) => (
                <motion.div
                  key={link.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    delay: 0.05 + index * 0.05,
                    duration: 0.4,
                  }}
                >
                  <Link
                    href={link.href}
                    onClick={closeMenu}
                    className="font-serif text-3xl text-graphite-ink hover:text-charcoal transition-colors"
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}

              <div className="pt-8 w-full max-w-xs flex flex-col gap-3">
                <Link
                  href="/projects"
                  onClick={closeMenu}
                  className="pill-btn w-full text-center py-3.5 bg-charcoal text-paper-white text-sm font-normal"
                >
                  View All Projects
                </Link>
                <Link
                  href="/contact"
                  onClick={closeMenu}
                  className="pill-btn w-full text-center py-3.5 border border-stone bg-paper-white text-graphite-ink text-sm font-normal"
                >
                  Get in Touch
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
