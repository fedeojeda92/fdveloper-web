'use client'

import { useState } from 'react'
import { useTranslations } from 'next-intl'

export default function ContactForm() {
  const t = useTranslations('contacto')
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

  const services = t.raw('services') as string[]

  return (
    <section id="contacto" className="py-24 px-4">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{t('title')}</h2>
          <p className="text-[#888888]">
            {t('subtitle')}{' '}
            <a
              href="https://wa.me/5491159568286"
              className="text-[#6C47FF] underline hover:text-[#00D4FF] transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              {t('whatsappLink')}
            </a>
            .
          </p>
        </div>

        <div className="bg-[#111111] backdrop-blur-sm border border-[#222222] rounded-2xl p-8 space-y-5" suppressHydrationWarning>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div>
              <label className="block text-sm text-[#888888] mb-2">{t('name')}</label>
              <input
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder={t('namePlaceholder')}
                className={inputClass}
                suppressHydrationWarning
              />
            </div>
            <div>
              <label className="block text-sm text-[#888888] mb-2">{t('email')}</label>
              <input
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="tu@email.com"
                className={inputClass}
                suppressHydrationWarning
              />
            </div>
          </div>

          <div>
            <label className="block text-sm text-[#888888] mb-2">{t('business')}</label>
            <input
              name="business"
              value={formData.business}
              onChange={handleChange}
              placeholder={t('businessPlaceholder')}
              className={inputClass}
              suppressHydrationWarning
            />
          </div>

          <div>
            <label className="block text-sm text-[#888888] mb-2">{t('service')}</label>
            <select
              name="service"
              value={formData.service}
              onChange={handleChange}
              className={inputClass}
              suppressHydrationWarning
            >
              <option value="" disabled>{t('servicePlaceholder')}</option>
              {services.map((s: string) => (
                <option key={s} value={s} className="bg-zinc-900">{s}</option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-sm text-[#888888] mb-2">{t('message')}</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder={t('messagePlaceholder')}
              rows={5}
              className={inputClass}
            />
          </div>

          {status === 'success' && (
            <div className="bg-green-500/10 border border-green-500/30 rounded-xl px-4 py-3 text-green-400 text-sm text-center">
              {t('success')}
            </div>
          )}

          {status === 'error' && (
            <div className="bg-red-500/10 border border-red-500/30 rounded-xl px-4 py-3 text-red-400 text-sm text-center">
              {t('error')}{' '}
              <a href="https://wa.me/5491159568286" className="underline">{t('whatsapp')}</a>.
            </div>
          )}

          <button
            onClick={handleSubmit}
            disabled={status === 'loading'}
            className="w-full bg-gradient-to-r from-[#6C47FF] to-[#00D4FF] hover:opacity-90 disabled:opacity-50 disabled:cursor-not-allowed text-white font-semibold py-4 rounded-xl transition-all duration-200 flex items-center justify-center gap-2"
            suppressHydrationWarning
          >
            {status === 'loading' ? (
              <>{t('sending')}</>
            ) : (
              t('send')
            )}
          </button>

          <p className="text-center text-xs text-[#555555]">
            {t('noSpam')}
          </p>
        </div>
      </div>
    </section>
  )
}
