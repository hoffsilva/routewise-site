export const LOCALES = ['en', 'pt', 'fr', 'es'] as const;
export type Locale = (typeof LOCALES)[number];
export const DEFAULT_LOCALE: Locale = 'en';

/** Cookie the language switcher sets; the proxy reads it to pick the language for "/" and old URLs. */
export const LOCALE_COOKIE = 'routewise-site-lang';

export const HTML_LANG: Record<Locale, string> = {
  en: 'en',
  pt: 'pt-BR',
  fr: 'fr-CA',
  es: 'es',
};

export function isLocale(value: string | null | undefined): value is Locale {
  return !!value && (LOCALES as readonly string[]).includes(value);
}

/** Maps any language tag ("pt-BR", "fr_CA", "es-419") to a supported locale. */
export function matchLocale(raw: string | null | undefined): Locale | null {
  if (!raw) return null;
  const code = raw.trim().replace(/_/g, '-').toLowerCase().split('-')[0];
  return isLocale(code) ? code : null;
}

/** Locales from an Accept-Language header, best first (q-values honored). */
function acceptedLocales(header: string | null | undefined): Locale[] {
  if (!header) return [];
  return header
    .split(',')
    .map(part => {
      const [tag = '', ...params] = part.trim().split(';');
      const q = params.map(p => p.trim()).find(p => p.startsWith('q='));
      return { locale: matchLocale(tag), q: q ? Number(q.slice(2)) || 0 : 1 };
    })
    .filter((entry): entry is { locale: Locale; q: number } => entry.locale !== null && entry.q > 0)
    .sort((a, b) => b.q - a.q)
    .map(entry => entry.locale);
}

/**
 * Language for a visitor without one in the path: `?lang=` (old links, e.g. the app's legal links),
 * then the saved choice, then the browser languages, then English.
 */
export function resolveLocale(input: { query?: string | null; cookie?: string | null; acceptLanguage?: string | null }): Locale {
  if (input.query) return matchLocale(input.query) ?? DEFAULT_LOCALE;
  return matchLocale(input.cookie) ?? acceptedLocales(input.acceptLanguage)[0] ?? DEFAULT_LOCALE;
}
