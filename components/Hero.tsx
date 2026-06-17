"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

const WHATSAPP_URL =
  "https://wa.me/5491159568286?text=Hola!%20Vi%20tu%20web%20y%20quiero%20consultar%20sobre%20un%20proyecto";

export default function Hero() {
  const t = useTranslations("hero");

  return (
    <section className="min-h-screen flex items-center py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center w-full">
        {/* Left column */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col gap-6"
        >
          {/* Badge */}
          <motion.span
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#6C47FF]/30 bg-[#6C47FF]/10 text-[#6C47FF] text-xs w-fit"
          >
            ⚡ {t("badge")}
          </motion.span>

          {/* H1 */}
          <h1 className="text-5xl md:text-6xl font-bold leading-tight font-space">
            {t("title1")}
            <br />
            <span className="bg-gradient-to-r from-[#6C47FF] to-[#00D4FF] bg-clip-text text-transparent">
              {t("title2")}
            </span>
          </h1>

          {/* Description */}
          <p className="text-[#888888] text-lg max-w-lg leading-relaxed">
            {t("description")}
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap gap-4">
            <a
              href="#portfolio"
              className="bg-gradient-to-r from-[#6C47FF] to-[#00D4FF] text-white px-6 py-3 rounded-full font-medium hover:opacity-90 transition-opacity"
            >
              {t("ctaProjects")}
            </a>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="border border-[#222222] text-[#F5F5F5] px-6 py-3 rounded-full font-medium hover:border-[#6C47FF]/50 transition-colors"
            >
              {t("ctaWhatsApp")}
            </a>
          </div>

          <p className="text-sm text-[#888888] opacity-60 mt-2">
            {t("orEmail")}{" "}
            <a
              href="mailto:contacto.fdveloper@gmail.com"
              className="underline hover:opacity-100 transition-opacity"
            >
              contacto.fdveloper@gmail.com
            </a>
          </p>

          {/* Stats */}
          <div className="flex items-center gap-6 mt-8 pt-8 border-t border-[#222222]">
            <div className="text-center">
              <p className="text-2xl font-bold text-white">2+</p>
              <p className="text-xs text-[#888888] mt-1 whitespace-pre-line">{t("statsProjects")}</p>
            </div>
            <div className="w-px h-10 bg-[#222222]"/>
            <div className="text-center">
              <p className="text-2xl font-bold text-white">7 days</p>
              <p className="text-xs text-[#888888] mt-1 whitespace-pre-line">{t("statsTime")}</p>
            </div>
            <div className="w-px h-10 bg-[#222222]"/>
            <div className="text-center">
              <p className="text-2xl font-bold text-white">100%</p>
              <p className="text-xs text-[#888888] mt-1 whitespace-pre-line">{t("statsClients")}</p>
            </div>
          </div>
        </motion.div>

        {/* Right column — Code window */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="hidden lg:block"
        >
          <div className="bg-[#1A1A1A] rounded-2xl border border-[#222222] overflow-hidden shadow-2xl shadow-[#6C47FF]/10">
            {/* Title bar */}
            <div className="flex items-center gap-2 px-4 py-3 border-b border-[#222222]">
              <div className="w-3 h-3 rounded-full bg-[#FF5F57]" />
              <div className="w-3 h-3 rounded-full bg-[#FEBC2E]" />
              <div className="w-3 h-3 rounded-full bg-[#28C840]" />
              <span className="ml-4 text-xs text-[#888888]">fdveloper.com</span>
            </div>

            {/* Code */}
            <div className="p-6 font-mono text-sm leading-relaxed">
              <p>
                <span className="text-[#888888]">&quot;// {t("codeComment")}&quot;</span>
              </p>
              <p>
                <span className="text-[#00D4FF]">const</span>
                <span className="text-[#F5F5F5]"> web </span>
                <span className="text-[#6C47FF]">=</span>
                <span className="text-[#F5F5F5]"> {"{"}</span>
              </p>
              <p className="pl-4">
                <span className="text-[#00D4FF]">{t("codeSpeed")}</span>
                <span className="text-[#F5F5F5]">: </span>
                <span className="text-[#28C840]">&quot;{t("codeSpeedVal")}&quot;</span>
                <span>,</span>
              </p>
              <p className="pl-4">
                <span className="text-[#00D4FF]">{t("codeDesign")}</span>
                <span className="text-[#F5F5F5]">: </span>
                <span className="text-[#28C840]">&quot;{t("codeDesignVal")}&quot;</span>
                <span>,</span>
              </p>
              <p className="pl-4">
                <span className="text-[#00D4FF]">{t("codeAI")}</span>
                <span className="text-[#F5F5F5]">: </span>
                <span className="text-[#28C840]">&quot;{t("codeAIVal")}&quot;</span>
                <span>,</span>
              </p>
              <p className="pl-4">
                <span className="text-[#00D4FF]">{t("codeDelivery")}</span>
                <span className="text-[#F5F5F5]">: </span>
                <span className="text-[#28C840]">&quot;{t("codeDeliveryVal")}&quot;</span>
                <span>,</span>
              </p>
              <p>
                <span className="text-[#F5F5F5]">{"}"}</span>
              </p>
              <p className="mt-2 flex items-center gap-2">
                <span className="text-[#888888]">// </span>
                <span className="text-[#28C840]">{t("codeReady")}</span>
                <span className="animate-pulse text-[#6C47FF]">|</span>
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
