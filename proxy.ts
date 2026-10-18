import { NextResponse, type NextRequest } from 'next/server';
import { LOCALE_COOKIE, resolveLocale } from '@/i18n/locales';

// Paths without a language, including the old static site's URLs (the app links to /legal.html?lang=xx#privacy)
const TARGETS: Record<string, { path: string; hash?: string }> = {
  '/': { path: '' },
  '/index.html': { path: '' },
  '/legal': { path: '/legal' },
  '/legal.html': { path: '/legal' },
  '/privacy.html': { path: '/legal', hash: 'privacy' },
  '/terms.html': { path: '/legal', hash: 'terms' },
  '/status': { path: '/status' },
  // Email links after Supabase verifies them (SITE-02); the browser keeps the #tokens across the redirect
  '/auth/confirm': { path: '/auth/confirm' },
};

export function proxy(request: NextRequest) {
  const target = TARGETS[request.nextUrl.pathname];
  if (!target) return NextResponse.next();

  const locale = resolveLocale({
    query: request.nextUrl.searchParams.get('lang'),
    cookie: request.cookies.get(LOCALE_COOKIE)?.value,
    acceptLanguage: request.headers.get('accept-language'),
  });

  const url = request.nextUrl.clone();
  url.pathname = `/${locale}${target.path}`;
  url.searchParams.delete('lang');
  // A fragment in the original URL (legal.html#privacy) is kept by the browser across the redirect
  if (target.hash) url.hash = target.hash;
  return NextResponse.redirect(url, 307);
}

export const config = {
  matcher: ['/', '/index.html', '/legal', '/legal.html', '/privacy.html', '/terms.html', '/status', '/auth/confirm'],
};
