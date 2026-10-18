import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import { notFound } from 'next/navigation';
import { DM_Sans, Plus_Jakarta_Sans } from 'next/font/google';
import { SiteAnalytics } from '@/components/SiteAnalytics';
import { HTML_LANG, LOCALES, isLocale } from '@/i18n/locales';
import { SITE_URL } from '@/site';
import '../globals.css';

const dmSans = DM_Sans({ subsets: ['latin'], weight: ['400', '500', '600'], variable: '--font-dm-sans' });
const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-jakarta',
});

export const metadata: Metadata = { metadataBase: new URL(SITE_URL) };

export const dynamicParams = false;

export function generateStaticParams() {
  return LOCALES.map(lang => ({ lang }));
}

export default async function LocaleLayout({ children, params }: { children: ReactNode; params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();

  return (
    <html lang={HTML_LANG[lang]} className={`${dmSans.variable} ${jakarta.variable}`}>
      <body>
        {children}
        <SiteAnalytics />
      </body>
    </html>
  );
}
