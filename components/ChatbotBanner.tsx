"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

export default function ChatbotBanner() {
  const t = useTranslations("chatbot");

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5 }}
        className="max-w-4xl mx-auto p-6 rounded-2xl bg-gradient-to-r from-[#6C47FF]/10 to-[#00D4FF]/10 border border-[#6C47FF]/20"
      >
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#6C47FF] to-[#00D4FF] flex items-center justify-center text-2xl flex-shrink-0">
              🤖
            </div>
            <div>
              <p className="text-white font-semibold text-lg">
                {t("title")}
              </p>
              <p className="text-[#888888] text-sm mt-1">
                {t("description")}
              </p>
            </div>
          </div>

          <a
            href="https://wa.me/5491159568286?text=Hola!%20Quiero%20saber%20m%C3%A1s%20sobre%20el%20chatbot%20con%20IA"
            target="_blank"
            rel="noopener noreferrer"
            className="whitespace-nowrap px-6 py-3 rounded-full bg-gradient-to-r from-[#6C47FF] to-[#00D4FF] text-white text-sm font-medium hover:opacity-90 transition-opacity flex-shrink-0"
          >
            {t("cta")}
          </a>
        </div>
      </motion.div>
    </section>
  );
}
