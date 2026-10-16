import { describe, expect, it } from 'bun:test';
import { NextRequest } from 'next/server';
import { resolveLocale } from '../src/i18n/locales';
import { proxy } from '../proxy';

describe('resolveLocale', () => {
  it('prefers ?lang=, then the saved choice, then the browser languages', () => {
    expect(resolveLocale({ query: 'pt-BR', cookie: 'fr', acceptLanguage: 'es' })).toBe('pt');
    expect(resolveLocale({ cookie: 'fr', acceptLanguage: 'es' })).toBe('fr');
    expect(resolveLocale({ acceptLanguage: 'de-DE,de;q=0.9,es-419;q=0.8,en;q=0.5' })).toBe('es');
    expect(resolveLocale({})).toBe('en');
    expect(resolveLocale({ query: 'xx' })).toBe('en');
  });
});

describe('proxy', () => {
  const redirectOf = (url: string, headers: Record<string, string> = {}) => {
    const response = proxy(new NextRequest(url, { headers }));
    return response.headers.get('location');
  };

  it('keeps the old static URLs working (the app links to /legal.html?lang=xx#privacy)', () => {
    expect(redirectOf('https://routewise.app/legal.html?lang=pt')).toBe('https://routewise.app/pt/legal');
    expect(redirectOf('https://routewise.app/privacy.html?lang=es')).toBe('https://routewise.app/es/legal#privacy');
    expect(redirectOf('https://routewise.app/terms.html')).toBe('https://routewise.app/en/legal#terms');
    expect(redirectOf('https://routewise.app/index.html?lang=fr')).toBe('https://routewise.app/fr');
  });

  it('sends "/" to the visitor language and keeps other query params', () => {
    expect(redirectOf('https://routewise.app/?download=1', { 'accept-language': 'pt-BR,pt;q=0.9' }))
      .toBe('https://routewise.app/pt?download=1');
    expect(redirectOf('https://routewise.app/', { cookie: 'routewise-site-lang=fr' })).toBe('https://routewise.app/fr');
  });
});
