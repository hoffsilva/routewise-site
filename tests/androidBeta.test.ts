/**
 * Android tester sign-up (hoffsilva/routewise#40): Android visitors are invited to the closed test,
 * and routewise.app/android (QR code, store listing) opens it in the visitor's language.
 */
import { describe, expect, it } from 'bun:test';
import { NextRequest } from 'next/server';
import { isAndroidDevice } from '../src/components/AndroidBetaModal';
import { androidBetaCopy } from '../src/content/androidBeta';
import { LOCALES } from '../src/i18n/locales';
import { proxy } from '../proxy';

describe('Android tester modal', () => {
  it('detects Android phones and tablets only', () => {
    expect(isAndroidDevice('Mozilla/5.0 (Linux; Android 16; SM-A175F) AppleWebKit/537.36 Chrome/141.0 Mobile Safari/537.36')).toBe(true);
    expect(isAndroidDevice('Mozilla/5.0 (Linux; Android 14; SM-X210) AppleWebKit/537.36 Chrome/141.0 Safari/537.36')).toBe(true);
    expect(isAndroidDevice('Mozilla/5.0 (iPhone; CPU iPhone OS 18_0 like Mac OS X) AppleWebKit/605.1.15 Mobile/15E148')).toBe(false);
    expect(isAndroidDevice('Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 Chrome/141.0 Safari/537.36')).toBe(false);
  });

  it('sends the short link /android to the home page in the visitor language, with the modal open', () => {
    const response = proxy(new NextRequest('https://routewise.app/android', { headers: { 'accept-language': 'fr-CA,fr;q=0.9' } }));
    expect(response.headers.get('location')).toBe('https://routewise.app/fr#android');
  });

  it('has the three join steps in every language', () => {
    for (const lang of LOCALES) {
      expect(androidBetaCopy[lang].steps).toHaveLength(3);
    }
  });
});
