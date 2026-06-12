"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const preguntas = [
  {
    q: "¿En serio en 7 días?",
    a: "Sí, para landing pages y sitios de hasta 5 secciones. Proyectos más complejos pueden tomar 2-3 semanas, te lo aclaro en la propuesta.",
  },
  {
    q: "¿Qué necesito tener listo para arrancar?",
    a: "Los textos de tu negocio, tu logo si tenés, y las fotos que querés usar. Si no tenés fotos, usamos imágenes profesionales gratuitas o generamos con IA.",
  },
  {
    q: "¿Incluye hosting y dominio?",
    a: "El deploy en Vercel es gratis y lo incluyo. El dominio (.com.ar cuesta ~$3.000/año en NIC.ar) lo registrás vos o te ayudo con eso.",
  },
  {
    q: "¿Puedo pedir cambios después de la entrega?",
    a: "Sí, incluyo hasta 2 rondas de correcciones sin costo adicional dentro de los primeros 7 días de entrega.",
  },
  {
    q: "¿Hacés tiendas online con pagos?",
    a: "Sí, integro MercadoPago. Eso se cotiza aparte según el nivel de complejidad del proyecto.",
  },
  {
    q: "¿Por qué FDveloper?",
    a: "Porque trabajás directamente conmigo, sin intermediarios. Sabés quién hace tu web, podés hablarme por WhatsApp en cualquier momento, y el precio es mucho más accesible sin perder calidad.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="py-24 px-4 sm:px-6 lg:px-8 max-w-3xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5 }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl md:text-5xl font-bold font-space mb-4">
          Preguntas frecuentes
        </h2>
      </motion.div>

      <div className="flex flex-col gap-3">
        {preguntas.map((p, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.05 }}
            className="bg-[#1A1A1A] border border-[#222222] rounded-xl overflow-hidden"
          >
            <button
              onClick={() => setOpenIndex(openIndex === i ? null : i)}
              className="w-full flex items-center justify-between p-5 text-left"
              suppressHydrationWarning
            >
              <span className="font-medium font-space text-[#F5F5F5] pr-4">
                {p.q}
              </span>
              <motion.span
                animate={{ rotate: openIndex === i ? 45 : 0 }}
                transition={{ duration: 0.2 }}
                className="text-[#6C47FF] text-xl flex-shrink-0"
              >
                +
              </motion.span>
            </button>
            <AnimatePresence>
              {openIndex === i && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <p className="px-5 pb-5 text-sm text-[#888888] leading-relaxed">
                    {p.a}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
