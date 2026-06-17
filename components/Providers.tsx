'use client';

import {NextIntlClientProvider, hasLocale} from 'next-intl';
import {notFound} from 'next/navigation';
import {routing} from '@/src/i18n/routing';
import {useMemo} from 'react';

export function Providers({
  children,
  locale,
  messages,
}: {
  children: React.ReactNode;
  locale: string;
  messages: Record<string, unknown>;
}) {
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  return (
    <NextIntlClientProvider
      locale={locale}
      messages={messages}
      timeZone="America/Argentina/Buenos_Aires"
    >
      {children}
    </NextIntlClientProvider>
  );
}
