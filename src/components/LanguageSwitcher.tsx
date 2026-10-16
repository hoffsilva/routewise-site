'use client';

import { usePathname, useRouter } from 'next/navigation';
import { LOCALE_COOKIE, LOCALES, type Locale } from '@/i18n/locales';

const ONE_YEAR = 60 * 60 * 24 * 365;

interface Props {
  current: Locale;
  /** "pill": landing nav; "chips": legal page header */
  variant?: 'pill' | 'chips';
  className?: string;
}

/** Switches the language segment of the current path and remembers the choice for "/" and old links. */
export function LanguageSwitcher({ current, variant = 'pill', className = '' }: Props) {
  const router = useRouter();
  const pathname = usePathname();

  const switchTo = (next: Locale) => {
    document.cookie = `${LOCALE_COOKIE}=${next}; path=/; max-age=${ONE_YEAR}; samesite=lax`;
    const rest = pathname.replace(/^\/[a-z]{2}(?=\/|$)/, '');
    router.replace(`/${next}${rest}${window.location.search}${window.location.hash}`, { scroll: false });
  };

  const container = variant === 'pill'
    ? 'inline-flex items-center gap-1.5 rounded-full border border-mist-200/85 bg-white/80 p-1 shadow-soft'
    : 'flex flex-wrap items-center gap-3';

  return (
    <div className={`${container} ${className}`} aria-label="Language switcher">
      {LOCALES.map(locale => {
        const active = locale === current;
        const base = variant === 'pill'
          ? 'rounded-full px-3 py-2 text-xs font-extrabold transition-colors'
          : 'flex-1 rounded-full border px-3 py-2 text-sm font-extrabold shadow-soft sm:flex-none';
        const tone = active
          ? 'bg-gradient-map text-white border-transparent'
          : variant === 'pill'
            ? 'text-mist-600 hover:text-ink'
            : 'border-mist-200 bg-white text-ink-soft';
        return (
          <button
            key={locale}
            type="button"
            className={`${base} ${tone} cursor-pointer`}
            aria-pressed={active}
            onClick={() => switchTo(locale)}
          >
            {locale.toUpperCase()}
          </button>
        );
      })}
    </div>
  );
}
