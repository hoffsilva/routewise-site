import { describe, expect, it } from 'bun:test';
import { NextRequest } from 'next/server';
import { analyticsUrl, isMobileDevice, readAuthLink } from '../src/authLink';
import { authLinkCopy } from '../src/content/authLink';
import { LOCALES } from '../src/i18n/locales';
import { proxy } from '../proxy';
import sitemap from '../app/sitemap';

const PAGE = 'https://routewise.app/pt/auth/confirm';

describe('readAuthLink (SITE-02)', () => {
  it('hands a password reset to the app with the same query and fragment', () => {
    const link = readAuthLink(`${PAGE}#access_token=a.b.c&refresh_token=r1&expires_in=3600&type=recovery`);
    expect(link).toEqual({
      kind: 'recovery',
      appUrl: 'routewise://auth/confirm#access_token=a.b.c&refresh_token=r1&expires_in=3600&type=recovery',
    });
  });

  it('treats sign-up and magic links as an email confirmation', () => {
    expect(readAuthLink(`${PAGE}#access_token=a&refresh_token=r&type=signup`).kind).toBe('confirm');
    expect(readAuthLink(`${PAGE}#access_token=a&refresh_token=r&type=magiclink`).kind).toBe('confirm');
  });

  it('reports expired or used links, and pages opened without a link', () => {
    expect(readAuthLink(`${PAGE}#error=access_denied&error_code=otp_expired`)).toEqual({ kind: 'error' });
    expect(readAuthLink(`${PAGE}?error=server_error`)).toEqual({ kind: 'error' });
    expect(readAuthLink(PAGE)).toEqual({ kind: 'empty' });
    expect(readAuthLink(`${PAGE}#access_token=only`)).toEqual({ kind: 'empty' });
  });
});

describe('auth link privacy', () => {
  it('never reports tokens to analytics', () => {
    expect(analyticsUrl(`${PAGE}?x=1#access_token=secret`)).toBe(PAGE);
    expect(analyticsUrl('https://routewise.app/pt?download=1')).toBe('https://routewise.app/pt?download=1');
  });

  it('stays out of the sitemap', () => {
    expect(sitemap().some(entry => entry.url.includes('/auth/'))).toBe(false);
  });
});

describe('auth link page', () => {
  it('is reachable at /auth/confirm in the visitor language, keeping the query', () => {
    const response = proxy(new NextRequest('https://routewise.app/auth/confirm?error=otp_expired', {
      headers: { 'accept-language': 'es-419' },
    }));
    expect(response.headers.get('location')).toBe('https://routewise.app/es/auth/confirm?error=otp_expired');
  });

  it('opens the app on phones only', () => {
    expect(isMobileDevice('Mozilla/5.0 (iPhone; CPU iPhone OS 18_0 like Mac OS X)', 5)).toBe(true);
    expect(isMobileDevice('Mozilla/5.0 (Linux; Android 15)', 5)).toBe(true);
    expect(isMobileDevice('Mozilla/5.0 (Macintosh; Intel Mac OS X 15_0)', 5)).toBe(true); // iPad
    expect(isMobileDevice('Mozilla/5.0 (Macintosh; Intel Mac OS X 15_0)', 0)).toBe(false);
    expect(isMobileDevice('Mozilla/5.0 (Windows NT 10.0; Win64; x64)', 0)).toBe(false);
  });

  it('has the same copy in every language', () => {
    for (const lang of LOCALES) expect(Object.keys(authLinkCopy[lang])).toEqual(Object.keys(authLinkCopy.en));
  });
});
