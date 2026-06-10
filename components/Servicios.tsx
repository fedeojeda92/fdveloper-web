"use client";

import { motion } from "framer-motion";
import { servicios } from "@/data/servicios";

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

export default function Servicios() {
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
          ¿Qué hacemos?
        </h2>
        <p className="text-[#888888] text-lg max-w-2xl mx-auto">
          Todo lo que tu negocio necesita para estar online y crecer.
        </p>
      </motion.div>

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="grid sm:grid-cols-2 gap-6"
      >
        {servicios.map((s) => (
          <motion.div
            key={s.id}
            variants={item}
            className="bg-[#1A1A1A] border border-[#222222] rounded-2xl p-6 hover:border-[#6C47FF]/50 hover:shadow-lg hover:shadow-[#6C47FF]/5 transition-all duration-300"
          >
            <div className="text-3xl mb-4">{s.icono}</div>
            <h3 className="text-xl font-bold font-space mb-2">{s.titulo}</h3>
            <p className="text-[#888888] text-sm leading-relaxed mb-4">
              {s.descripcion}
            </p>
            <span className="inline-block text-xs font-medium px-3 py-1 rounded-full border border-[#6C47FF]/30 bg-[#6C47FF]/10 text-[#6C47FF]">
              {s.badge}
            </span>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
