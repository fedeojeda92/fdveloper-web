"use client";

import { motion } from "framer-motion";

const pasos = [
  {
    numero: "01",
    titulo: "Consulta gratuita",
    descripcion:
      "Me contás qué necesitás por WhatsApp. Sin formularios, sin reuniones innecesarias. Respondo el mismo día.",
    icono: "💬",
  },
  {
    numero: "02",
    titulo: "Propuesta y precio",
    descripcion:
      "En 24hs te mando la propuesta con el detalle del proyecto y el precio final. Sin costos ocultos.",
    icono: "📋",
  },
  {
    numero: "03",
    titulo: "Desarrollo",
    descripcion:
      "Arrancamos. Te muestro avances durante el proceso para que puedas dar feedback en tiempo real.",
    icono: "⚙️",
  },
  {
    numero: "04",
    titulo: "Entrega y deploy",
    descripcion:
      "Tu web online en Vercel con dominio configurado. Listo en 7 días desde el inicio.",
    icono: "🚀",
  },
];

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
          ¿Cómo trabajamos?
        </h2>
        <p className="text-[#888888] text-lg max-w-2xl mx-auto">
          Un proceso simple, transparente y sin sorpresas.
        </p>
      </motion.div>

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8"
      >
        {pasos.map((paso, i) => (
          <motion.div key={i} variants={item} className="relative">
            {/* Connector line (desktop only) */}
            {i < pasos.length - 1 && (
              <div className="hidden lg:block absolute top-8 left-[60%] w-[calc(100%-20%)] h-px bg-gradient-to-r from-[#6C47FF]/40 to-[#00D4FF]/40" />
            )}

            <div className="relative z-10">
              <span className="text-6xl font-bold font-space bg-gradient-to-r from-[#6C47FF] to-[#00D4FF] bg-clip-text text-transparent opacity-20">
                {paso.numero}
              </span>
              <div className="text-2xl mb-2">{paso.icono}</div>
              <h3 className="text-lg font-bold font-space mt-2 mb-2">
                {paso.titulo}
              </h3>
              <p className="text-sm text-[#888888] leading-relaxed">
                {paso.descripcion}
              </p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
