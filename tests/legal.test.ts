import { describe, expect, it } from 'bun:test';
import { legalDocuments } from '../src/content/legal';
import { LOCALES } from '../src/i18n/locales';

const shape = (doc: { sections: readonly (readonly [string, readonly string[]])[] }) =>
  doc.sections.map(([, paragraphs]) => paragraphs.length);

describe('legal text', () => {
  it('has the same sections and paragraphs in every language (no clause missing in one translation)', () => {
    const [first, ...others] = LOCALES;
    for (const lang of others) {
      expect(shape(legalDocuments[lang].privacy)).toEqual(shape(legalDocuments[first!].privacy));
      expect(shape(legalDocuments[lang].terms)).toEqual(shape(legalDocuments[first!].terms));
    }
  });

  it('describes what the app does: no notifications, the providers it uses (SITE-03)', () => {
    for (const lang of LOCALES) {
      const privacy = JSON.stringify(legalDocuments[lang].privacy);
      expect(privacy).not.toMatch(/notifica|notification/i);
      for (const provider of ['Supabase', 'Google Maps Platform', 'OpenAI', 'RevenueCat', 'Sentry']) {
        expect(privacy).toContain(provider);
      }
    }
  });
});
