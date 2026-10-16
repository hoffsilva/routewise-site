'use client';

import { useEffect, useState } from 'react';
import type { Locale } from '@/i18n/locales';
import type { SiteCopy } from '@/content/site';
import { APP_STORE_URL } from '@/site';
import { LanguageSwitcher } from './LanguageSwitcher';

export function Nav({ lang, copy }: { lang: Locale; copy: SiteCopy['nav'] }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const close = () => setOpen(false);
  const solid = scrolled || open;
  const links = [
    { href: '#recursos', label: copy.features },
    { href: '#screenshots', label: copy.screenshots },
    { href: '#como-funciona', label: copy.howItWorks },
  ];

  return (
    <nav
      className={`fixed inset-x-0 top-0 z-[1000] px-8 py-4 transition-all duration-300 ${solid ? 'bg-white/95 shadow-soft backdrop-blur-xl' : ''}`}
    >
      <div className="mx-auto flex max-w-[1200px] flex-wrap items-center justify-between gap-y-4 lg:flex-nowrap">
        <a href="#top" className="flex items-center gap-3" onClick={close}>
          <img src="/icon.png" alt="RouteWise" width={44} height={44} className="size-11 rounded-xl object-cover" />
          <span className="text-gradient-map font-display text-2xl font-extrabold">RouteWise</span>
        </a>

        <ul className={`${open ? 'flex' : 'hidden'} order-3 w-full flex-col gap-5 pt-2 lg:order-none lg:flex lg:w-auto lg:flex-row lg:gap-10 lg:pt-0`}>
          {links.map(link => (
            <li key={link.href}>
              <a href={link.href} onClick={close} className="text-[0.95rem] font-medium text-ink-soft transition-colors hover:text-brand-blue">
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className={`${open ? 'flex' : 'hidden'} order-3 w-full flex-col items-stretch gap-4 pb-2 lg:order-none lg:flex lg:w-auto lg:flex-row lg:items-center lg:pb-0`}>
          <LanguageSwitcher current={lang} className="justify-center" />
          <a
            href={APP_STORE_URL}
            target="_blank"
            rel="noreferrer"
            onClick={close}
            className="inline-flex justify-center rounded-full bg-gradient-warm px-7 py-3 text-[0.95rem] font-semibold text-white shadow-[0_4px_15px_rgba(232,93,76,0.3)] transition hover:-translate-y-0.5 hover:shadow-[0_6px_25px_rgba(232,93,76,0.4)]"
          >
            {copy.download}
          </a>
        </div>

        <button
          type="button"
          className="cursor-pointer p-2 lg:hidden"
          aria-label="Menu"
          aria-expanded={open}
          onClick={() => setOpen(value => !value)}
        >
          <span className={`my-[5px] block h-0.5 w-6 bg-ink transition-all duration-300 ${open ? 'translate-y-[7px] rotate-45' : ''}`} />
          <span className={`my-[5px] block h-0.5 w-6 bg-ink transition-all duration-300 ${open ? 'opacity-0' : ''}`} />
          <span className={`my-[5px] block h-0.5 w-6 bg-ink transition-all duration-300 ${open ? '-translate-y-[7px] -rotate-45' : ''}`} />
        </button>
      </div>
    </nav>
  );
}
