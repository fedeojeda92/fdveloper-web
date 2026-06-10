"use client";

import { motion } from "framer-motion";

const WHATSAPP_URL =
  "https://wa.me/5491159568286?text=Hola!%20Vi%20tu%20web%20y%20quiero%20consultar%20sobre%20un%20proyecto";

export default function Hero() {
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
            ⚡ Disponible para nuevos proyectos
          </motion.span>

          {/* H1 */}
          <h1 className="text-5xl md:text-6xl font-bold leading-tight font-space">
            Webs profesionales
            <br />
            <span className="bg-gradient-to-r from-[#6C47FF] to-[#00D4FF] bg-clip-text text-transparent">
              con IA integrada.
            </span>
          </h1>

          {/* Description */}
          <p className="text-[#888888] text-lg max-w-lg leading-relaxed">
            Creamos tu sitio web a medida con tecnología moderna y
            herramientas de inteligencia artificial. Listo en 7 días,
            sin plantillas, sin excusas.
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap gap-4">
            <a
              href="#portfolio"
              className="bg-gradient-to-r from-[#6C47FF] to-[#00D4FF] text-white px-6 py-3 rounded-full font-medium hover:opacity-90 transition-opacity"
            >
              Ver proyectos
            </a>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="border border-[#222222] text-[#F5F5F5] px-6 py-3 rounded-full font-medium hover:border-[#6C47FF]/50 transition-colors"
            >
              Hablemos por WhatsApp
            </a>
          </div>

          {/* Stats */}
          <div className="flex items-center gap-6 mt-8 pt-8 border-t border-[#222222]">
            <div className="text-center">
              <p className="text-2xl font-bold text-white">2+</p>
              <p className="text-xs text-[#888888] mt-1">Proyectos<br/>entregados</p>
            </div>
            <div className="w-px h-10 bg-[#222222]"/>
            <div className="text-center">
              <p className="text-2xl font-bold text-white">7 días</p>
              <p className="text-xs text-[#888888] mt-1">Tiempo de<br/>entrega</p>
            </div>
            <div className="w-px h-10 bg-[#222222]"/>
            <div className="text-center">
              <p className="text-2xl font-bold text-white">100%</p>
              <p className="text-xs text-[#888888] mt-1">Clientes<br/>satisfechos</p>
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
              <span className="ml-4 text-xs text-[#888888]">fdveloper.dev</span>
            </div>

            {/* Code */}
            <div className="p-6 font-mono text-sm leading-relaxed">
              <p>
                <span className="text-[#888888]">&quot;// Tu nueva web&quot;</span>
              </p>
              <p>
                <span className="text-[#00D4FF]">const</span>
                <span className="text-[#F5F5F5]"> web </span>
                <span className="text-[#6C47FF]">=</span>
                <span className="text-[#F5F5F5]"> {"{"}</span>
              </p>
              <p className="pl-4">
                <span className="text-[#00D4FF]">velocidad</span>
                <span className="text-[#F5F5F5]">: </span>
                <span className="text-[#28C840]">&quot;⚡ 100/100&quot;</span>
                <span>,</span>
              </p>
              <p className="pl-4">
                <span className="text-[#00D4FF]">diseño</span>
                <span className="text-[#F5F5F5]">: </span>
                <span className="text-[#28C840]">&quot;✦ a medida&quot;</span>
                <span>,</span>
              </p>
              <p className="pl-4">
                <span className="text-[#00D4FF]">ia</span>
                <span className="text-[#F5F5F5]">: </span>
                <span className="text-[#28C840]">&quot;🤖 integrada&quot;</span>
                <span>,</span>
              </p>
              <p className="pl-4">
                <span className="text-[#00D4FF]">entrega</span>
                <span className="text-[#F5F5F5]">: </span>
                <span className="text-[#28C840]">&quot;📅 7 días&quot;</span>
                <span>,</span>
              </p>
              <p>
                <span className="text-[#F5F5F5]">{"}"}</span>
              </p>
              <p className="mt-2 flex items-center gap-2">
                <span className="text-[#888888]">// </span>
                <span className="text-[#28C840]">✓ Listo para producción</span>
                <span className="animate-pulse text-[#6C47FF]">|</span>
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
