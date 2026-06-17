"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

const stepIds = ["step1", "step2", "step3", "step4"] as const;
const stepNumbers = ["01", "02", "03", "04"];
const stepIcons = ["💬", "📋", "⚙️", "🚀"];

const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.2 },
  },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function Proceso() {
  const t = useTranslations("proceso");

  return (
    <section id="proceso" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
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
        className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8"
      >
        {stepIds.map((stepId, i) => (
          <motion.div key={i} variants={item} className="relative">
            {/* Connector line (desktop only) */}
            {i < stepIds.length - 1 && (
              <div className="hidden lg:block absolute top-8 left-[60%] w-[calc(100%-20%)] h-px bg-gradient-to-r from-[#6C47FF]/40 to-[#00D4FF]/40" />
            )}

            <div className="relative z-10">
              <span className="text-6xl font-bold font-space bg-gradient-to-r from-[#6C47FF] to-[#00D4FF] bg-clip-text text-transparent opacity-20">
                {stepNumbers[i]}
              </span>
              <div className="text-2xl mb-2">{stepIcons[i]}</div>
              <h3 className="text-lg font-bold font-space mt-2 mb-2">
                {t(`steps.${stepId}.titulo`)}
              </h3>
              <p className="text-sm text-[#888888] leading-relaxed">
                {t(`steps.${stepId}.descripcion`)}
              </p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
