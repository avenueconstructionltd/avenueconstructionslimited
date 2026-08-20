"use client";

import { useState, type ChangeEvent, type FormEvent } from "react";
import { motion } from "motion/react";
import { Check } from "lucide-react";

interface FormFields {
  fullName: string;
  email: string;
  residence: string;
  message: string;
}

interface FormErrors {
  fullName?: string;
  email?: string;
  message?: string;
}

interface ContactFormProps {
  embedded?: boolean;
}

export function ContactForm({ embedded = false }: ContactFormProps) {
  const [fields, setFields] = useState<FormFields>({
    fullName: "",
    email: "",
    residence: "Avenue Ahsan Palace",
    message: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<
    "idle" | "submitting" | "success" | "error"
  >("idle");

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ) => {
    const { name, value } = e.target;
    if (
      name !== "fullName" &&
      name !== "email" &&
      name !== "residence" &&
      name !== "message"
    ) {
      return;
    }

    setFields((prev) => ({ ...prev, [name]: value }));
    if (name === "fullName" || name === "email" || name === "message") {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const validate = (): boolean => {
    const tempErrors: FormErrors = {};
    if (!fields.fullName.trim()) tempErrors.fullName = "Full name is required";
    if (!fields.email.trim()) {
      tempErrors.email = "Email address is required";
    } else if (!/\S+@\S+\.\S+/.test(fields.email)) {
      tempErrors.email = "Email address is invalid";
    }
    if (!fields.message.trim()) tempErrors.message = "Message cannot be empty";

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setStatus("submitting");

    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setStatus("success");
      setFields({
        fullName: "",
        email: "",
        residence: "Avenue Ahsan Palace",
        message: "",
      });
    } catch {
      setStatus("error");
    }
  };

  const formBox = (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.6, delay: 0.1, ease: [0.32, 0.72, 0, 1] }}
      className="double-bezel-outer-dark w-full"
    >
      <div className="double-bezel-inner-dark p-6 sm:p-10">
        {status === "success" ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            className="flex flex-col items-center justify-center text-center py-10"
          >
            <div className="size-12 rounded-full border border-white/10 bg-white/5 flex items-center justify-center text-champagne mb-5">
              <Check className="size-5" />
            </div>
            <h3 className="font-serif text-2xl text-paper-white font-medium">
              Inquiry Received
            </h3>
            <p className="text-sm text-paper-white/60 max-w-[32ch] leading-relaxed mt-2 font-normal">
              A private advisor from Avenue Constructions Ltd will contact you shortly.
            </p>
            <button
              onClick={() => setStatus("idle")}
              className="pill-btn mt-8 border border-white/15 bg-white/5 px-6 py-2.5 text-xs text-paper-white hover:bg-white/10 transition-colors"
            >
              Submit Another Inquiry
            </button>
          </motion.div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col gap-5">
            <div className="flex flex-col gap-1.5">
              <label
                htmlFor="fullName"
                className="text-xs uppercase tracking-wider font-mono font-medium text-paper-white/50"
              >
                Full Name
              </label>
              <input
                id="fullName"
                type="text"
                name="fullName"
                value={fields.fullName}
                onChange={handleChange}
                placeholder="e.g. Christopher Harrison"
                className="w-full px-4 py-3 rounded-full bg-white/5 border border-white/10 text-sm text-paper-white placeholder:text-paper-white/25 focus:outline-none focus:border-champagne/50 transition-colors"
              />
              {errors.fullName && (
                <span className="text-xs text-red-400 tracking-wide mt-0.5">
                  {errors.fullName}
                </span>
              )}
            </div>

            <div className="flex flex-col gap-1.5">
              <label
                htmlFor="email"
                className="text-xs uppercase tracking-wider font-mono font-medium text-paper-white/50"
              >
                Email Address
              </label>
              <input
                id="email"
                type="email"
                name="email"
                value={fields.email}
                onChange={handleChange}
                placeholder="e.g. christopher@harrison.com"
                className="w-full px-4 py-3 rounded-full bg-white/5 border border-white/10 text-sm text-paper-white placeholder:text-paper-white/25 focus:outline-none focus:border-champagne/50 transition-colors"
              />
              {errors.email && (
                <span className="text-xs text-red-400 tracking-wide mt-0.5">
                  {errors.email}
                </span>
              )}
            </div>

            <div className="flex flex-col gap-1.5">
              <label
                htmlFor="residence"
                className="text-xs uppercase tracking-wider font-mono font-medium text-paper-white/50"
              >
                Residence of Interest
              </label>
              <select
                id="residence"
                name="residence"
                value={fields.residence}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-full bg-white/5 border border-white/10 text-sm text-paper-white focus:outline-none focus:border-champagne/50 transition-colors cursor-pointer"
              >
                <option value="Avenue Ahsan Palace">Avenue Ahsan Palace</option>
                <option value="Avenue MD Heights">Avenue MD. Heights</option>
                <option value="Avenue Dream">Avenue Dream</option>
                <option value="Avenue Castle">Avenue Castle</option>
                <option value="Avenue Crest">Avenue Crest</option>
                <option value="Avenue Serenade">Avenue Serenade</option>
              </select>
            </div>

            <div className="flex flex-col gap-1.5">
              <label
                htmlFor="message"
                className="text-xs uppercase tracking-wider font-mono font-medium text-paper-white/50"
              >
                Inquiry Details
              </label>
              <textarea
                id="message"
                name="message"
                value={fields.message}
                onChange={handleChange}
                rows={4}
                placeholder="Share your acquisition schedule, unit size requirements, or consultation goals..."
                className="w-full p-4 rounded-2xl bg-white/5 border border-white/10 text-sm text-paper-white placeholder:text-paper-white/25 focus:outline-none focus:border-champagne/50 transition-colors resize-none"
              />
              {errors.message && (
                <span className="text-xs text-red-400 tracking-wide mt-0.5">
                  {errors.message}
                </span>
              )}
            </div>

            <div className="mt-2">
              <button
                type="submit"
                disabled={status === "submitting"}
                className="group pill-btn w-full inline-flex items-center justify-center gap-3 py-3.5 bg-champagne hover:bg-champagne-light text-obsidian text-sm font-medium active:scale-[0.98] transition-all disabled:opacity-50"
              >
                <span>
                  {status === "submitting"
                    ? "Submitting Inquiry..."
                    : "Submit Private Inquiry"}
                </span>
                <span className="flex size-6 items-center justify-center rounded-full bg-obsidian/20 text-obsidian text-xs transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-px group-hover:scale-105">
                  &rarr;
                </span>
              </button>
            </div>

            {status === "error" && (
              <div className="text-xs text-red-400 tracking-wide text-center mt-2">
                An error occurred. Please try again or call +880 1714 767 246.
              </div>
            )}
          </form>
        )}
      </div>
    </motion.div>
  );

  if (embedded) {
    return formBox;
  }

  return (
    <section
      id="contact"
      suppressHydrationWarning
      className="relative w-full py-24 md:py-32 px-4 sm:px-6 md:px-12 bg-obsidian text-paper-white overflow-hidden"
    >
      {/* Decorative glow */}
      <div className="glow-accent -top-25 -right-50" />

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.6, ease: [0.32, 0.72, 0, 1] }}
          className="lg:col-span-5 flex flex-col gap-6"
        >
          <span className="text-xs uppercase tracking-wider text-champagne font-mono font-medium">
            Private Consultation
          </span>
          <h2 className="font-serif text-[clamp(2.2rem,4.5vw,3.5rem)] leading-heading-lg tracking-[-0.01em] text-paper-white">
            Begin your journey.
          </h2>
          <p className="text-body leading-[1.6] text-paper-white/60 font-normal max-w-[34ch]">
            Contact our private client advisory team to schedule an exclusive architectural consultation or site viewing in Dhaka.
          </p>

          <div className="flex flex-col gap-2 pt-4 text-sm text-paper-white/50 border-t border-white/10 font-mono">
            <div>Hotline: <a href="tel:+8801714767246" className="text-paper-white font-medium hover:text-champagne transition-colors">+880 1714 767 246</a></div>
            <div>Direct: <a href="mailto:avenue902@gmail.com" className="text-paper-white font-medium hover:text-champagne transition-colors">avenue902@gmail.com</a></div>
          </div>
        </motion.div>

        <div className="lg:col-span-7 w-full">{formBox}</div>
      </div>
    </section>
  );
}
