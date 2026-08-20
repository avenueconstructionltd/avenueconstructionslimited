"use client";

import Link from "next/link";
import { Logo } from "./logo";

const FOOTER_NAV = [
  { label: "Projects", href: "/projects" },
  { label: "About Us", href: "/about" },
  { label: "Partnership", href: "/landowner" },
  { label: "Services", href: "/services" },
  { label: "Contact", href: "/contact" },
];

const FOOTER_CAPABILITIES = [
  { label: "Architectural Design", href: "/services" },
  { label: "Luxury Construction", href: "/services" },
  { label: "Land Partnership", href: "/landowner" },
  { label: "Quality Assurance", href: "/services" },
  { label: "Property Management", href: "/services" },
];

const FOOTER_CORRIDORS = [
  "Gulshan",
  "Banani",
  "Baridhara Diplomatic",
  "Bashundhara R/A",
  "Aftabnagar",
  "Rampura",
];

const SOCIAL_LINKS = [
  {
    label: "Facebook",
    href: "https://facebook.com",
    icon: (
      <svg className="size-4 fill-current" viewBox="0 0 24 24">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com",
    icon: (
      <svg className="size-4 fill-current" viewBox="0 0 24 24">
        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
      </svg>
    ),
  },
  {
    label: "WhatsApp",
    href: "https://wa.me/8801714767246",
    icon: (
      <svg className="size-4 fill-current" viewBox="0 0 24 24">
        <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
      </svg>
    ),
  },
  {
    label: "X",
    href: "https://x.com",
    icon: (
      <svg className="size-4 fill-current" viewBox="0 0 24 24">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
];

export function Footer() {
  const currentYear = 2026;

  return (
    <footer
      suppressHydrationWarning
      className="w-full bg-obsidian text-paper-white py-16 md:py-24 px-6 md:px-12 z-10"
    >
      <div className="max-w-7xl mx-auto flex flex-col gap-14">
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8 items-start">
          {/* Brand Column */}
          <div className="md:col-span-4 flex flex-col gap-6">
            <Logo />
            <p className="text-paper-white/50 text-sm leading-relaxed max-w-[36ch]">
              Avenue Constructions Ltd crafts premier single-unit residential landmarks and joint venture developments across Dhaka&apos;s most distinguished enclaves.
            </p>
            {/* Social links */}
            <div className="flex items-center gap-2.5 pt-1">
              {SOCIAL_LINKS.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  title={social.label}
                  className="size-9 rounded-full border border-white/10 bg-white/5 flex items-center justify-center text-paper-white/40 hover:text-champagne hover:border-champagne/30 transition-colors"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div className="md:col-span-2">
            <h3 className="text-champagne font-mono text-xs uppercase tracking-widest font-semibold mb-5">
              Navigation
            </h3>
            <ul className="flex flex-col gap-3">
              {FOOTER_NAV.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-paper-white/50 hover:text-paper-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Capabilities */}
          <div className="md:col-span-3">
            <h3 className="text-champagne font-mono text-xs uppercase tracking-widest font-semibold mb-5">
              Capabilities
            </h3>
            <ul className="flex flex-col gap-3">
              {FOOTER_CAPABILITIES.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-paper-white/50 hover:text-paper-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Corporate Suite */}
          <div className="md:col-span-3 flex flex-col gap-4">
            <h3 className="text-champagne font-mono text-xs uppercase tracking-widest font-semibold">
              Corporate Suite
            </h3>
            <div className="flex flex-col gap-1 text-sm text-paper-white/50 leading-relaxed">
              <p className="font-medium text-paper-white">Avenue Constructions Ltd</p>
              <p>Resourceful Paltan City</p>
              <p>51, 51/A (7th Floor), Purana Paltan, Dhaka-1000</p>
            </div>
            <div className="flex flex-col gap-1 text-sm text-paper-white/50 pt-2">
              <a
                href="mailto:avenue902@gmail.com"
                className="hover:text-champagne transition-colors"
              >
                avenue902@gmail.com
              </a>
              <a
                href="tel:+8801714767246"
                className="text-paper-white font-medium hover:text-champagne transition-colors pt-1"
              >
                +880 1714 767 246
              </a>
            </div>
          </div>
        </div>

        {/* Prime Corridors Strip */}
        <div className="pt-6 flex items-center gap-3 flex-wrap">
          <span className="text-xs uppercase font-mono tracking-widest text-champagne font-semibold mr-2">
            Prime Corridors:
          </span>
          {FOOTER_CORRIDORS.map((corridor) => (
            <span
              key={corridor}
              className="text-xs text-paper-white/70 border border-white/10 bg-white/5 px-3.5 py-1.5 rounded-xl font-mono"
            >
              {corridor}
            </span>
          ))}
        </div>

        {/* Horizontal divider */}
        <div className="w-full h-px bg-white/10" />

        {/* Bottom Copyright */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-paper-white/40">
          <span>
            &copy; {currentYear} Avenue Constructions Ltd. All rights reserved.
          </span>
          <span className="font-mono">
            Purana Paltan &middot; Dhaka &middot; Bangladesh
          </span>
        </div>
      </div>
    </footer>
  );
}
