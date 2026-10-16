import type { Metadata } from 'next';
import { HTML_LANG, LOCALES, type Locale } from './locales';
import { SITE_URL } from '@/site';

/** Canonical + hreflang alternates for a page that exists in every locale (path after /{lang}). */
export function localizedAlternates(lang: Locale, path = ''): Metadata['alternates'] {
  const languages: Record<string, string> = {};
  for (const locale of LOCALES) languages[HTML_LANG[locale]] = `${SITE_URL}/${locale}${path}`;
  languages['x-default'] = `${SITE_URL}/en${path}`;
  return { canonical: `${SITE_URL}/${lang}${path}`, languages };
}
