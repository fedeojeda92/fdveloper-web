import { MetadataRoute } from 'next'
import { routing } from '@/src/i18n/routing'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.fdveloper.com'
  const entries: MetadataRoute.Sitemap = []

  const sections = ['', '#servicios', '#portfolio', '#precios']

  for (const locale of routing.locales) {
    for (const section of sections) {
      entries.push({
        url: `${baseUrl}/${locale}${section}`,
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: section === '' ? 1 : 0.8,
        alternates: {
          languages: Object.fromEntries(
            routing.locales.map((loc) => [loc, `${baseUrl}/${loc}${section}`])
          ),
        },
      })
    }
  }

  return entries
}
