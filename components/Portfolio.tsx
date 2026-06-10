"use client";

import { motion } from "framer-motion";
import { proyectos } from "@/data/proyectos";
import Image from "next/image";

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

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5 }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl md:text-5xl font-bold font-space mb-4">
          Proyectos reales
        </h2>
        <p className="text-[#888888] text-lg max-w-2xl mx-auto">
          Cada proyecto es único. Estos son algunos de los negocios que ya
          confían en FDveloper.
        </p>
      </motion.div>

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="grid md:grid-cols-2 gap-8"
      >
        {proyectos.map((p) => (
          <motion.a
            key={p.id}
            variants={item}
            href={p.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group block bg-[#1A1A1A] border border-[#222222] rounded-2xl overflow-hidden hover:border-[#6C47FF]/50 transition-all duration-300"
          >
            {/* Image / placeholder */}
            <div className="relative h-56 w-full overflow-hidden">
              <Image
                src={p.imagen}
                alt={p.nombre}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.style.display = "none";
                }}
              />
              {/* Fallback gradient */}
              <div
                className="absolute inset-0 opacity-40"
                style={{
                  background: `linear-gradient(135deg, ${p.color}44, ${p.color}11)`,
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A] to-transparent" />
            </div>

            {/* Content */}
            <div className="p-6">
              <p className="text-xs text-[#888888] mb-1">{p.categoria}</p>
              <h3 className="text-xl font-bold font-space mb-2">{p.nombre}</h3>
              <p className="text-sm text-[#888888] leading-relaxed mb-4">
                {p.descripcion}
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {p.tecnologias.map((t) => (
                  <span
                    key={t}
                    className="text-xs px-2 py-1 rounded-full bg-[#222222] text-[#888888]"
                  >
                    {t}
                  </span>
                ))}
              </div>
              <span className="text-sm text-[#6C47FF] font-medium group-hover:text-[#00D4FF] transition-colors">
                Ver proyecto →
              </span>
            </div>
          </motion.a>
        ))}
      </motion.div>
    </section>
  );
}
