import type { MetadataRoute } from 'next';
import { HTML_LANG, LOCALES } from '@/i18n/locales';
import { SITE_URL } from '@/site';

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = ['', '/legal'];
  return pages.flatMap(path =>
    LOCALES.map(lang => ({
      url: `${SITE_URL}/${lang}${path}`,
      alternates: {
        languages: Object.fromEntries(LOCALES.map(other => [HTML_LANG[other], `${SITE_URL}/${other}${path}`])),
      },
    })),
  );
}
