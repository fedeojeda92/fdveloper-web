import type {Metadata} from 'next';
import {hasLocale} from 'next-intl';
import {notFound} from 'next/navigation';
import {routing} from '@/src/i18n/routing';
import {Providers} from '@/components/Providers';
import ChatbaseScript from '@/components/ChatbaseScript';

export function generateStaticParams() {
  return routing.locales.map((locale) => ({locale}));
}

export async function generateMetadata(
  props: {params: Promise<{locale: string}>}
): Promise<Metadata> {
  const {locale} = await props.params;
  const messages = (await import(`../../messages/${locale}.json`)).default;
  const seo = messages.seo;

  const baseUrl = 'https://www.fdveloper.com';
  const alternateLanguages: Record<string, string> = {};
  for (const loc of routing.locales) {
    alternateLanguages[loc] = `${baseUrl}/${loc}`;
  }

  return {
    title: seo.title,
    description: seo.description,
    keywords: seo.keywords,
    verification: {
      google: 'jW5DmN0OEhPllxSLmBzgmbS0-BYGIo7ZszxUYO4vukU',
    },
    twitter: {
      card: 'summary_large_image',
    },
    openGraph: {
      title: seo.title,
      description: seo.ogDescription,
      type: 'website',
      locale: locale === 'es' ? 'es_AR' : 'en_US',
    },
    alternates: {
      canonical: `${baseUrl}/${locale}`,
      languages: alternateLanguages,
    },
  };
}

function SchemaOrg({locale}: {locale: string}) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'FDveloper',
    description:
      locale === 'es'
        ? 'Agencia de desarrollo web con IA integrada para negocios argentinos. Webs profesionales en 7 días.'
        : 'Web development agency with integrated AI for businesses. Professional websites in 7 days.',
    url: 'https://www.fdveloper.com',
    telephone: '+54-9-11-5956-8286',
    email: 'contacto.fdveloper@gmail.com',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Buenos Aires',
      addressRegion: 'Buenos Aires',
      addressCountry: 'AR',
    },
    areaServed: {
      '@type': 'GeoCircle',
      geoMidpoint: {
        '@type': 'GeoCoordinates',
        latitude: -34.6037,
        longitude: -58.3816,
      },
      geoRadius: '50000',
    },
    priceRange: '$$',
    openingHours: 'Mo-Fr 09:00-18:00',
    sameAs: [
      'https://www.instagram.com/fdveloper',
      'https://wa.me/5491159568286',
    ],
    serviceType: [
      'Desarrollo web',
      'Landing pages',
      'Sitios web con IA',
      'Chatbots',
      'Mantenimiento web',
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{__html: JSON.stringify(schema)}}
    />
  );
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{locale: string}>;
}) {
  const {locale} = await params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  const messages = (await import(`../../messages/${locale}.json`)).default;

  return (
    <Providers locale={locale} messages={messages}>
      <SchemaOrg locale={locale} />
      <ChatbaseScript />
      {children}
    </Providers>
  );
}
