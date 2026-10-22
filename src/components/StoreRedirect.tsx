'use client';

import { useEffect, useRef, useState } from 'react';
import type { SiteCopy } from '@/content/site';
import { APP_STORE_URL } from '@/site';
import { ANDROID_HASH } from './AndroidBetaModal';

const REDIRECT_DELAY_MS = 1400;

/** iPhone/iPad only: the app isn't on Google Play, so Android visitors stay on the site (SITE-01). */
function isIOSDevice(): boolean {
  const ua = navigator.userAgent || '';
  // iPadOS reports a Mac user agent; touch support tells them apart
  return /iPhone|iPad|iPod/i.test(ua) || (/Macintosh/.test(ua) && navigator.maxTouchPoints > 1);
}

/**
 * On iOS, offers to open the App Store and does so after a moment unless the visitor stays.
 * `?download=1` / `?store=ios` redirect right away (store links); `?stay=1` never redirects.
 */
export function StoreRedirect({ copy }: { copy: SiteCopy['redirect'] }) {
  const [visible, setVisible] = useState(false);
  const timer = useRef<number | null>(null);

  useEffect(() => {
    const url = new URL(window.location.href);
    if (url.searchParams.get('stay') === '1') return;
    if (url.searchParams.get('download') === '1' || url.searchParams.get('store') === 'ios') {
      window.location.href = APP_STORE_URL;
      return;
    }
    // The Android tester link (#android, routewise.app/android) stays on the site
    if (!isIOSDevice() || window.location.hash === ANDROID_HASH) return;

    setVisible(true);
    timer.current = window.setTimeout(() => {
      window.location.href = APP_STORE_URL;
    }, REDIRECT_DELAY_MS);
    const cancelForAndroid = () => {
      if (window.location.hash !== ANDROID_HASH) return;
      if (timer.current !== null) window.clearTimeout(timer.current);
      timer.current = null;
      setVisible(false);
    };
    window.addEventListener('hashchange', cancelForAndroid);
    return () => {
      if (timer.current !== null) window.clearTimeout(timer.current);
      window.removeEventListener('hashchange', cancelForAndroid);
    };
  }, []);

  if (!visible) return null;

  const stay = () => {
    if (timer.current !== null) window.clearTimeout(timer.current);
    timer.current = null;
    const url = new URL(window.location.href);
    url.searchParams.set('stay', '1');
    window.history.replaceState({}, '', url);
    setVisible(false);
  };

  return (
    <div className="fixed top-[78px] left-1/2 z-[1001] flex w-[min(calc(100%-32px),980px)] -translate-x-1/2 flex-col items-start justify-between gap-4 rounded-[18px] border border-mist-200/90 bg-white/90 px-4 py-3.5 shadow-medium backdrop-blur-lg lg:top-[86px] lg:flex-row lg:items-center">
      <div>
        <strong className="block font-display text-[0.95rem] text-ink">{copy.title}</strong>
        <span className="mt-0.5 block text-sm text-mist-600">{copy.body}</span>
      </div>
      <div className="flex w-full flex-wrap justify-end gap-2.5 lg:w-auto">
        <button type="button" onClick={stay} className="flex-1 cursor-pointer whitespace-nowrap rounded-full bg-mist-100 px-4 py-3 text-sm font-bold text-ink-soft lg:flex-none">
          {copy.cancel}
        </button>
        <a href={APP_STORE_URL} target="_blank" rel="noreferrer" className="flex-1 whitespace-nowrap rounded-full bg-route-teal px-4 py-3 text-center text-[19px] font-bold text-white lg:flex-none">
          {copy.continue}
        </a>
      </div>
    </div>
  );
}
