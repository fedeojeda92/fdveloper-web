"use client";

import { motion } from "framer-motion";

const WHATSAPP_URL =
  "https://wa.me/5491159568286?text=Hola!%20Vi%20tu%20web%20y%20quiero%20consultar%20sobre%20un%20proyecto";

const planes = [
  {
    titulo: "Landing Page",
    precio: "desde $250.000",
    destacado: false,
    incluye: [
      "Diseño a medida",
      "Mobile responsive",
      "SEO básico",
      "CTA a WhatsApp",
      "Deploy en Vercel",
      "Entrega en 7 días",
    ],
  },
  {
    titulo: "Sitio Completo",
    precio: "desde $450.000",
    destacado: true,
    badge: "MÁS ELEGIDO",
    incluye: [
      "Todo lo de Landing",
      "Múltiples páginas",
      "Catálogo o blog",
      "Formulario de contacto",
      "Google Analytics",
      "SEO avanzado",
    ],
  },
  {
    titulo: "Con IA",
    precio: "desde $650.000",
    destacado: false,
    incluye: [
      "Todo lo de Sitio Completo",
      "Chatbot integrado",
      "Asistente virtual",
      "Automatizaciones",
      "Integración con WhatsApp",
      "Soporte prioritario",
    ],
  },
];

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
          Precios claros
        </h2>
        <p className="text-[#888888] text-lg max-w-2xl mx-auto">
          Sin sorpresas ni costos ocultos. Sabés exactamente qué pagás desde
          el primer día.
        </p>
      </motion.div>

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="grid md:grid-cols-3 gap-8 mb-12"
      >
        {planes.map((plan, i) => (
          <motion.div
            key={i}
            variants={item}
            className={`relative bg-[#1A1A1A] rounded-2xl p-8 flex flex-col ${
              plan.destacado
                ? "border-2 border-[#6C47FF] shadow-lg shadow-[#6C47FF]/10"
                : "border border-[#222222]"
            }`}
          >
            {plan.badge && (
              <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-to-r from-[#6C47FF] to-[#00D4FF] text-white text-xs font-bold px-4 py-1 rounded-full">
                {plan.badge}
              </span>
            )}

            <h3 className="text-xl font-bold font-space mb-2">
              {plan.titulo}
            </h3>
            <p className="text-3xl font-bold font-space mb-6">
              {plan.precio}
            </p>

            <ul className="flex flex-col gap-3 mb-8 flex-1">
              {plan.incluye.map((item, j) => (
                <li key={j} className="flex items-start gap-2 text-sm text-[#888888]">
                  <span className="text-[#6C47FF] mt-0.5">✓</span>
                  {item}
                </li>
              ))}
            </ul>

            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className={`text-center py-3 rounded-full font-medium transition-all duration-200 ${
                plan.destacado
                  ? "bg-gradient-to-r from-[#6C47FF] to-[#00D4FF] text-white hover:opacity-90"
                  : "border border-[#222222] text-[#F5F5F5] hover:border-[#6C47FF]/50"
              }`}
            >
              Consultar
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
          ¿Ya tenés tu web?{" "}
          <span className="text-[#F5F5F5] font-medium">
            Mantenimiento mensual desde $60.000/mes
          </span>
        </p>
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="border border-[#222222] text-[#F5F5F5] px-5 py-2 rounded-full text-sm font-medium hover:border-[#6C47FF]/50 transition-colors whitespace-nowrap"
        >
          Consultar
        </a>
      </motion.div>
    </section>
  );
}
