import { APP_STORE_URL } from '@/site';

export { APP_STORE_URL };

/** Where the app handles auth links (routewise-mobile `parseAuthConfirmUrl`). */
export const APP_AUTH_URL = 'routewise://auth/confirm';

export type AuthLink =
  | { kind: 'confirm' | 'recovery'; appUrl: string }
  | { kind: 'error' }
  | { kind: 'empty' };

function params(raw: string): URLSearchParams {
  return new URLSearchParams(raw.replace(/^[?#]/, ''));
}

/**
 * Reads where Supabase sent the user after verifying an email link (SITE-02): tokens in the fragment
 * (`#access_token=…&refresh_token=…&type=recovery|signup|magiclink`) or an error. The app link carries the
 * same query and fragment, so the app opens exactly as it did with the old routewise:// redirect.
 */
export function readAuthLink(href: string): AuthLink {
  const url = new URL(href);
  const query = params(url.search);
  const fragment = params(url.hash);
  const get = (name: string) => fragment.get(name) ?? query.get(name);

  if (get('error') || get('error_code')) return { kind: 'error' };
  if (!get('access_token') || !get('refresh_token')) return { kind: 'empty' };

  return {
    kind: get('type') === 'recovery' ? 'recovery' : 'confirm',
    appUrl: `${APP_AUTH_URL}${url.search}${url.hash}`,
  };
}

/** Auth pages never report their query or fragment (session tokens) to analytics. */
export function analyticsUrl(href: string): string {
  const url = new URL(href);
  if (!url.pathname.includes('/auth/')) return href;
  return `${url.origin}${url.pathname}`;
}

/** Phones and tablets, where the app can be installed. */
export function isMobileDevice(userAgent: string, maxTouchPoints: number): boolean {
  return /iPhone|iPad|iPod|Android/i.test(userAgent) || (/Macintosh/.test(userAgent) && maxTouchPoints > 1);
}
