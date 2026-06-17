"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

const WHATSAPP_URL =
  "https://wa.me/5491159568286?text=Hola!%20Vi%20tu%20web%20y%20quiero%20consultar%20sobre%20un%20servicio";

const serviceIds = ["landing", "sitio-completo", "ia", "mantenimiento"] as const;

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

const icons: Record<string, string> = {
  landing: "🚀",
  "sitio-completo": "🌐",
  ia: "🤖",
  mantenimiento: "🔧",
};

export default function Servicios() {
  const t = useTranslations("servicios");

  return (
    <section id="servicios" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
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
        className="grid sm:grid-cols-2 gap-6"
      >
        {serviceIds.map((id) => (
          <motion.div
            key={id}
            variants={item}
            className="bg-[#1A1A1A] border border-[#222222] rounded-2xl p-6 hover:border-[#6C47FF]/50 hover:shadow-lg hover:shadow-[#6C47FF]/5 transition-all duration-300 flex flex-col"
          >
            <div className="text-3xl mb-4">{icons[id]}</div>
            <h3 className="text-xl font-bold font-space mb-3">
              {t(`items.${id}.titulo`)}
            </h3>
            <p className="text-[#888888] text-sm leading-relaxed mb-6 flex-1">
              {t(`items.${id}.descripcion`)}
            </p>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block text-center py-3 rounded-full font-medium border border-[#6C47FF]/30 bg-[#6C47FF]/10 text-[#6C47FF] hover:bg-[#6C47FF] hover:text-white hover:border-[#6C47FF] transition-all duration-200"
            >
              {t(`items.${id}.cta`)}
            </a>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
