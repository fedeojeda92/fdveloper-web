"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslations, useLocale } from "next-intl";
import { useRouter, usePathname } from "next/navigation";
import { routing } from "@/src/i18n/routing";

const WHATSAPP_URL =
  "https://wa.me/5491159568286?text=Hola!%20Vi%20tu%20web%20y%20quiero%20consultar%20sobre%20un%20proyecto";

export default function Navbar() {
  const t = useTranslations("nav");
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [langOpen, setLangOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    { label: t("servicios"), href: "#servicios" },
    { label: t("portfolio"), href: "#portfolio" },
    { label: t("proceso"), href: "#proceso" },
    { label: t("planes"), href: "#precios" },
    { label: t("contacto"), href: "#faq" },
  ];

  const handleNavClick = (href: string) => {
    setIsOpen(false);
    const el = document.querySelector(href);
    el?.scrollIntoView({ behavior: "smooth" });
  };

  const switchLocale = (newLocale: string) => {
    setLangOpen(false);
    const segments = pathname.split("/");
    segments[1] = newLocale;
    router.push(segments.join("/"));
  };

  const locales = routing.locales;
  const localeLabels: Record<string, string> = { es: "ES", en: "EN" };
  const localeFlags: Record<string, string> = { es: "🇦🇷", en: "🇬🇧" };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#0A0A0A]/80 backdrop-blur-md border-b border-[#222222]"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a
            href={`/${locale}`}
            className="text-xl font-bold font-space tracking-tight"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
          >
            <span className="bg-gradient-to-r from-[#6C47FF] to-[#00D4FF] bg-clip-text text-transparent">
              FD
            </span>
            <span className="text-[#F5F5F5]">veloper</span>
          </a>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-8">
            {links.map((link) => (
              <button
                key={link.href}
                suppressHydrationWarning
                onClick={() => handleNavClick(link.href)}
                className="text-sm text-[#888888] hover:text-[#F5F5F5] transition-colors duration-200"
              >
                {link.label}
              </button>
            ))}

            {/* Language Switcher */}
            <div className="relative">
              <button
                suppressHydrationWarning
                onClick={() => setLangOpen(!langOpen)}
                className="flex items-center gap-1.5 text-sm text-[#888888] hover:text-[#F5F5F5] transition-colors duration-200 px-2 py-1 rounded-lg border border-[#222222] hover:border-[#6C47FF]/50"
                aria-label="Change language"
              >
                <span>{localeFlags[locale]}</span>
                <span>{localeLabels[locale]}</span>
                <svg
                  className={`w-3 h-3 transition-transform ${langOpen ? "rotate-180" : ""}`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <AnimatePresence>
                {langOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="absolute right-0 top-full mt-2 bg-[#1A1A1A] border border-[#222222] rounded-xl overflow-hidden shadow-lg min-w-[120px]"
                  >
                    {locales.map((loc) => (
                      <button
                        key={loc}
                        suppressHydrationWarning
                        onClick={() => switchLocale(loc)}
                        className={`w-full flex items-center gap-2 px-4 py-2.5 text-sm transition-colors ${
                          locale === loc
                            ? "bg-[#6C47FF]/10 text-[#6C47FF]"
                            : "text-[#888888] hover:bg-[#222222] hover:text-[#F5F5F5]"
                        }`}
                      >
                        <span>{localeFlags[loc]}</span>
                        <span>{localeLabels[loc]}</span>
                      </button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-[#6C47FF] to-[#00D4FF] text-white text-sm font-medium px-5 py-2 rounded-full hover:opacity-90 transition-opacity"
            >
              {t("hablemos")}
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            suppressHydrationWarning
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden flex flex-col gap-1.5 p-2"
            aria-label="Toggle menu"
          >
            <motion.span
              animate={isOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
              className="block w-5 h-0.5 bg-[#F5F5F5] origin-center"
            />
            <motion.span
              animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
              className="block w-5 h-0.5 bg-[#F5F5F5]"
            />
            <motion.span
              animate={isOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
              className="block w-5 h-0.5 bg-[#F5F5F5] origin-center"
            />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-[#0A0A0A]/95 backdrop-blur-md border-b border-[#222222] overflow-hidden"
          >
            <div className="px-4 py-4 flex flex-col gap-4">
              {links.map((link) => (
                <button
                  key={link.href}
                  suppressHydrationWarning
                  onClick={() => handleNavClick(link.href)}
                  className="text-left text-[#888888] hover:text-[#F5F5F5] transition-colors py-2"
                >
                  {link.label}
                </button>
              ))}

              {/* Mobile Language Switcher */}
              <div className="flex gap-2 pt-2 border-t border-[#222222]">
                {locales.map((loc) => (
                  <button
                    key={loc}
                    suppressHydrationWarning
                    onClick={() => switchLocale(loc)}
                    className={`flex items-center gap-1.5 px-3 py-2 rounded-lg text-sm transition-colors ${
                      locale === loc
                        ? "bg-[#6C47FF]/10 text-[#6C47FF] border border-[#6C47FF]/30"
                        : "text-[#888888] border border-[#222222] hover:border-[#6C47FF]/50"
                    }`}
                  >
                    <span>{localeFlags[loc]}</span>
                    <span>{localeLabels[loc]}</span>
                  </button>
                ))}
              </div>

              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-[#6C47FF] to-[#00D4FF] text-white text-center font-medium px-5 py-3 rounded-full mt-2"
              >
                {t("hablemos")}
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
