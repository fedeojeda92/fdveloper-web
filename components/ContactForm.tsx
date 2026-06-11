'use client'

import { useState } from 'react'

const services = [
  'Landing Page ($250.000)',
  'Sitio Web Completo ($450.000)',
  'Con IA Integrada ($650.000)',
  'Mantenimiento Mensual ($60.000/mes)',
  'No sé todavía, quiero asesoramiento',
]

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    business: '',
    service: '',
    message: '',
  })
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    setStatus('loading')

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })
      if (res.ok) {
        setStatus('success')
        setFormData({ name: '', email: '', business: '', service: '', message: '' })
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  const inputClass =
    'w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:border-[#6C47FF] focus:bg-white/10 transition-all duration-200'

  return (
    <section id="contacto" className="py-24 px-4">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Contanos tu proyecto</h2>
          <p className="text-[#888888]">
            Completá el formulario y te respondemos en menos de 24 horas. O si preferís,{' '}
            <a
              href="https://wa.me/5491159568286"
              className="text-[#6C47FF] underline hover:text-[#00D4FF] transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              escribinos por WhatsApp
            </a>
            .
          </p>
        </div>

        <div className="bg-[#111111] backdrop-blur-sm border border-[#222222] rounded-2xl p-8 space-y-5">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div>
              <label className="block text-sm text-[#888888] mb-2">Nombre *</label>
              <input
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Tu nombre"
                className={inputClass}
              />
            </div>
            <div>
              <label className="block text-sm text-[#888888] mb-2">Email *</label>
              <input
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="tu@email.com"
                className={inputClass}
              />
            </div>
          </div>

          <div>
            <label className="block text-sm text-[#888888] mb-2">Nombre de tu negocio</label>
            <input
              name="business"
              value={formData.business}
              onChange={handleChange}
              placeholder="Ej: Panadería La Esquina"
              className={inputClass}
            />
          </div>

          <div>
            <label className="block text-sm text-[#888888] mb-2">¿Qué servicio te interesa?</label>
            <select
              name="service"
              value={formData.service}
              onChange={handleChange}
              className={inputClass}
            >
              <option value="" disabled>Seleccioná una opción</option>
              {services.map((s) => (
                <option key={s} value={s} className="bg-zinc-900">{s}</option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-sm text-[#888888] mb-2">Mensaje *</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Contanos un poco sobre tu negocio y qué necesitás..."
              rows={5}
              className={inputClass}
            />
          </div>

          {status === 'success' && (
            <div className="bg-green-500/10 border border-green-500/30 rounded-xl px-4 py-3 text-green-400 text-sm text-center">
              ¡Mensaje enviado! Te respondemos en menos de 24 horas.
            </div>
          )}

          {status === 'error' && (
            <div className="bg-red-500/10 border border-red-500/30 rounded-xl px-4 py-3 text-red-400 text-sm text-center">
              Algo salió mal. Escribinos directo por{' '}
              <a href="https://wa.me/5491159568286" className="underline">WhatsApp</a>.
            </div>
          )}

          <button
            onClick={handleSubmit}
            disabled={status === 'loading'}
            className="w-full bg-gradient-to-r from-[#6C47FF] to-[#00D4FF] hover:opacity-90 disabled:opacity-50 disabled:cursor-not-allowed text-white font-semibold py-4 rounded-xl transition-all duration-200 flex items-center justify-center gap-2"
          >
            {status === 'loading' ? (
              <>Enviando...</>
            ) : (
              'Enviar consulta'
            )}
          </button>

          <p className="text-center text-xs text-[#555555]">
            No spam. Tu info no se comparte con nadie.
          </p>
        </div>
      </div>
    </section>
  )
}
