"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

const WHATSAPP_URL =
  "https://wa.me/5491159568286?text=Hola!%20Vi%20tu%20web%20y%20quiero%20consultar%20sobre%20un%20proyecto";

const planIds = ["landing", "completo", "ia"] as const;

const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15 },
  },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function Precios() {
  const t = useTranslations("precios");

  return (
    <section id="precios" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5 }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl md:text-5xl font-bold font-space mb-4">
          {t("title")}
        </h2>
        <p className="text-[#888888] text-lg max-w-2xl mx-auto">
          {t("subtitle")}
        </p>
      </motion.div>

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="grid md:grid-cols-3 gap-8 mb-12"
      >
        {planIds.map((planId) => (
          <motion.div
            key={planId}
            variants={item}
            className={`relative bg-[#1A1A1A] rounded-2xl p-8 flex flex-col ${
              planId === "completo"
                ? "border-2 border-[#6C47FF] shadow-lg shadow-[#6C47FF]/10"
                : "border border-[#222222]"
            }`}
          >
            {planId === "completo" && (
              <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-to-r from-[#6C47FF] to-[#00D4FF] text-white text-xs font-bold px-4 py-1 rounded-full">
                {t(`plans.${planId}.badge`)}
              </span>
            )}

            <h3 className="text-xl font-bold font-space mb-2">
              {t(`plans.${planId}.titulo`)}
            </h3>
            <p className="text-sm text-[#888888] mb-6">
              {t(`plans.${planId}.descripcion`)}
            </p>

            <ul className="flex flex-col gap-3 mb-8 flex-1">
              {t.raw(`plans.${planId}.incluye`).map((feature: string, j: number) => (
                <li key={j} className="flex items-start gap-2 text-sm text-[#888888]">
                  <span className="text-[#6C47FF] mt-0.5">✓</span>
                  {feature}
                </li>
              ))}
            </ul>

            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className={`text-center py-3 rounded-full font-medium transition-all duration-200 ${
                planId === "completo"
                  ? "bg-gradient-to-r from-[#6C47FF] to-[#00D4FF] text-white hover:opacity-90"
                  : "border border-[#222222] text-[#F5F5F5] hover:border-[#6C47FF]/50"
              }`}
            >
              {t("consultar")}
            </a>
          </motion.div>
        ))}
      </motion.div>

      {/* Maintenance banner */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="bg-[#1A1A1A] border border-[#222222] rounded-2xl p-6 flex flex-col sm:flex-row items-center justify-between gap-4"
      >
        <p className="text-[#888888] text-sm">
          {t("mantenimiento.texto")}{" "}
          <span className="text-[#F5F5F5] font-medium">
            {t("mantenimiento.oferta")}
          </span>
        </p>
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="border border-[#222222] text-[#F5F5F5] px-5 py-2 rounded-full text-sm font-medium hover:border-[#6C47FF]/50 transition-colors whitespace-nowrap"
        >
          {t("consultar")}
        </a>
      </motion.div>
    </section>
  );
}
