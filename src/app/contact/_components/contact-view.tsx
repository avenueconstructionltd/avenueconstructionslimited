"use client";

import { motion } from "motion/react";
import { Navbar } from "@/components/shared/navbar";
import { Footer } from "@/components/shared/footer";
import { ContactForm } from "@/app/_components/contact-form";
import { Phone, Mail, MapPin, Clock, MessageSquare, ShieldCheck, ArrowRight } from "lucide-react";

const QUICK_CONTACTS = [
  {
    icon: <Phone className="size-5 text-champagne" />,
    title: "Direct Hotlines",
    details: ["+880 1714 767 246", "+880 1581 742 235"],
    action: "tel:+8801714767246",
    actionLabel: "Call Concierge",
  },
  {
    icon: <MessageSquare className="size-5 text-champagne" />,
    title: "WhatsApp Advisory",
    details: ["Instant chat with senior real estate advisor", "Available 7 days a week"],
    action: "https://wa.me/8801714767246",
    actionLabel: "Chat on WhatsApp",
  },
  {
    icon: <Mail className="size-5 text-champagne" />,
    title: "Official Email",
    details: ["avenue902@gmail.com", "Response within 4 business hours"],
    action: "mailto:avenue902@gmail.com",
    actionLabel: "Send Email",
  },
];

const OFFICE_HOURS = [
  { days: "Saturday – Wednesday", hours: "09:30 AM – 06:30 PM", status: "Full Advisory Operations" },
  { days: "Thursday", hours: "09:30 AM – 04:00 PM", status: "Corporate Hours" },
  { days: "Friday", hours: "By Prior Appointment Only", status: "Site Viewings & Landowner Meets" },
];

const CONTACT_FAQS = [
  {
    question: "How do I schedule a private site viewing?",
    answer: "You can call our direct hotline at +880 1714 767 246 or submit the inquiry form below. Our private client team will arrange a dedicated vehicle and on-site engineering tour of your selected residence.",
  },
  {
    question: "Where is Avenue Constructions Limited's head office located?",
    answer: "Our corporate headquarters is located at Resourceful Paltan City, 51, 51/A (7th Floor), Purana Paltan, Dhaka-1000. Dedicated client parking is available on-site.",
  },
  {
    question: "Can landowners schedule an on-site plot valuation meeting?",
    answer: "Yes. Our land acquisition directors offer free, confidential topographical and FAR feasibility studies for plots in Bashundhara, Gulshan, Banani, Baridhara, and Aftabnagar.",
  },
];

export function ContactView() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-canvas pt-32 pb-24 z-10 relative">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 md:px-12 flex flex-col gap-24">
          {/* Header Block */}
          <div className="max-w-3xl flex flex-col gap-6">
            <motion.span
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-xs uppercase tracking-[0.25em] font-mono text-champagne font-semibold flex items-center gap-2"
            >
              <span className="size-1.5 rounded-full bg-champagne animate-pulse" />
              Get in Touch with Avenue
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.32, 0.72, 0, 1] }}
              className="font-serif text-4xl sm:text-6xl md:text-7xl tracking-tight leading-[1.02] text-graphite-ink font-medium"
            >
              Let&apos;s Discuss Your <br />
              <span className="italic font-light text-champagne">
                Next Landmark Home.
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-sm md:text-base leading-relaxed text-pebble max-w-[55ch] font-normal"
            >
              Whether you are looking to acquire a single-unit luxury apartment in Dhaka or partner with us for a landowner joint venture development, our senior leadership is ready to assist you.
            </motion.p>
          </div>

          {/* Quick Direct Connect Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {QUICK_CONTACTS.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-7 rounded-3xl border border-stone bg-linen-cream flex flex-col justify-between gap-6 shadow-2xs hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group"
              >
                <div className="flex flex-col gap-4">
                  <div className="size-12 rounded-2xl bg-paper-white border border-stone flex items-center justify-center group-hover:scale-105 transition-transform">
                    {item.icon}
                  </div>
                  <div className="flex flex-col gap-1">
                    <h3 className="font-serif text-xl font-medium text-graphite-ink">
                      {item.title}
                    </h3>
                    {item.details.map((d, i) => (
                      <p key={i} className="text-xs text-pebble font-mono">
                        {d}
                      </p>
                    ))}
                  </div>
                </div>

                <a
                  href={item.action}
                  target={item.action.startsWith("http") ? "_blank" : undefined}
                  rel={item.action.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="pill-btn inline-flex items-center justify-between px-5 py-2.5 text-xs font-mono border border-stone bg-paper-white text-graphite-ink hover:bg-obsidian hover:text-paper-white hover:border-obsidian transition-colors"
                >
                  <span>{item.actionLabel}</span>
                  <ArrowRight className="size-3.5" />
                </a>
              </motion.div>
            ))}
          </div>

          {/* Main Grid: Office Details & Interactive Form */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start border-t border-stone pt-16">
            {/* Left Column: Office Headquarters Info & Hours */}
            <div className="lg:col-span-5 flex flex-col gap-10">
              <div className="flex flex-col gap-3">
                <span className="font-mono text-xs text-champagne uppercase tracking-[0.2em] font-semibold">
                  Head Office
                </span>
                <h2 className="font-serif text-2xl sm:text-3xl text-graphite-ink font-medium">
                  Resourceful Paltan City
                </h2>
                <p className="text-sm text-pebble leading-relaxed">
                  51, 51/A (7th Floor), Purana Paltan, Dhaka-1000, Bangladesh.
                </p>
              </div>

              {/* Consultation Hours */}
              <div className="flex flex-col gap-4 p-6 rounded-3xl border border-stone bg-linen-cream">
                <div className="flex items-center gap-2 text-xs font-mono text-champagne uppercase tracking-wider font-semibold">
                  <Clock className="size-4" />
                  <span>Office &amp; Consultation Hours</span>
                </div>
                <div className="flex flex-col gap-3 text-xs">
                  {OFFICE_HOURS.map((h) => (
                    <div key={h.days} className="flex flex-col pb-2 border-b border-stone/60 last:border-b-0 last:pb-0">
                      <div className="flex justify-between items-center text-graphite-ink font-medium font-mono">
                        <span>{h.days}</span>
                        <span>{h.hours}</span>
                      </div>
                      <span className="text-[11px] text-pebble">{h.status}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Map Card */}
              <div className="flex flex-col gap-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono uppercase tracking-wider text-pebble flex items-center gap-1.5">
                    <MapPin className="size-3.5 text-champagne" />
                    Interactive Map Location
                  </span>
                  <a
                    href="https://maps.google.com/?q=Purana+Paltan+Dhaka"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-mono text-champagne hover:underline"
                  >
                    Open in Google Maps &rarr;
                  </a>
                </div>

                <div className="relative aspect-16/10 w-full rounded-3xl overflow-hidden border border-stone shadow-sm">
                  <iframe
                    title="Avenue Constructions Limited Head Office Map"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3652.417726588265!2d90.41031387602334!3d23.73248388947847!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b85be2fbf9e3%3A0xe5414f4e7d4d4aa9!2sPurana%20Paltan%2C%20Dhaka%201000!5e0!3m2!1sen!2sbd!4v1700000000000!5m2!1sen!2sbd"
                    className="w-full h-full border-0 grayscale contrast-[1.1] hover:grayscale-0 transition-all duration-500"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
              </div>
            </div>

            {/* Right Column: Embedded Form */}
            <div className="lg:col-span-7 w-full">
              <div className="flex flex-col gap-3 mb-6">
                <span className="font-mono text-xs text-champagne uppercase tracking-[0.2em] font-semibold">
                  Direct Private Consultation
                </span>
                <h2 className="font-serif text-2xl sm:text-3xl text-graphite-ink font-medium">
                  Send Your Inquiry Directly to Leadership
                </h2>
                <p className="text-xs text-pebble">
                  Fill out your specifications below. We will review your requirement and call you directly.
                </p>
              </div>

              <ContactForm embedded />
            </div>
          </div>

          {/* Frequently Asked Contact Questions */}
          <div className="flex flex-col gap-8 border-t border-stone pt-16">
            <div className="flex flex-col gap-2 max-w-xl">
              <span className="font-mono text-xs text-champagne uppercase tracking-[0.2em] font-semibold">
                Quick Answers
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl text-graphite-ink font-medium">
                Frequently Asked Consultation Questions
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {CONTACT_FAQS.map((faq) => (
                <div
                  key={faq.question}
                  className="p-6 rounded-3xl border border-stone bg-linen-cream flex flex-col gap-3"
                >
                  <h3 className="font-serif text-base text-graphite-ink font-medium leading-snug">
                    {faq.question}
                  </h3>
                  <p className="text-xs text-pebble leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Absolute Discretion Band (Dark Luxury Real Estate Bookend) */}
          <div className="relative overflow-hidden rounded-3xl sm:rounded-[36px] bg-obsidian text-paper-white p-8 sm:p-12 md:p-16 grid grid-cols-1 md:grid-cols-3 gap-10 items-center border border-white/10 shadow-2xl">
            <div className="glow-accent -top-20 -left-20 opacity-30" />

            <div className="md:col-span-2 flex flex-col gap-4 relative z-10">
              <span className="text-xs uppercase tracking-[0.25em] font-mono text-champagne font-semibold flex items-center gap-2">
                <ShieldCheck className="size-4 text-champagne" />
                Absolute Discretion &amp; Trust
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl leading-tight text-paper-white font-medium">
                Private viewings &amp; landowner consultations conducted with absolute confidentiality.
              </h2>
              <p className="text-xs sm:text-sm text-paper-white/70 leading-relaxed max-w-[55ch]">
                Every inquiry is handled under strict professional privacy. Our directors personally supervise all property viewings, technical due diligence, and legal contract discussions.
              </p>
            </div>

            <div className="flex flex-col gap-4 md:items-end relative z-10">
              <div className="flex flex-col gap-1 md:items-end">
                <span className="text-[10px] uppercase tracking-[0.22em] text-paper-white/50 font-mono">
                  Direct Phone Hotline
                </span>
                <a
                  href="tel:+8801714767246"
                  className="font-mono text-xl text-paper-white font-semibold hover:text-champagne transition-colors"
                >
                  +880 1714 767 246
                </a>
              </div>
              <div className="flex flex-col gap-1 md:items-end">
                <span className="text-[10px] uppercase tracking-[0.22em] text-paper-white/50 font-mono">
                  Corporate Email
                </span>
                <a
                  href="mailto:avenue902@gmail.com"
                  className="font-mono text-sm text-paper-white/90 hover:text-champagne transition-colors"
                >
                  avenue902@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
