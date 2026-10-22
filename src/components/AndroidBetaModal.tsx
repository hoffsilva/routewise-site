'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import type { AndroidBetaCopy } from '@/content/androidBeta';
import { ANDROID_TEST_OPT_IN_URL, ANDROID_TESTERS_GROUP_URL, PLAY_STORE_URL, SUPPORT_EMAIL } from '@/site';

export const ANDROID_HASH = '#android';
const SEEN_KEY = 'routewise-android-beta-seen';
const STEP_LINKS = [ANDROID_TESTERS_GROUP_URL, ANDROID_TEST_OPT_IN_URL, PLAY_STORE_URL];

/** Android phones and tablets (the app isn't on Google Play yet, so they're invited to the closed test). */
export function isAndroidDevice(userAgent: string): boolean {
  return /Android/i.test(userAgent);
}

function seenThisSession(): boolean {
  try {
    return sessionStorage.getItem(SEEN_KEY) === '1';
  } catch {
    return false;
  }
}

function markSeen() {
  try {
    sessionStorage.setItem(SEEN_KEY, '1');
  } catch {
    // Storage blocked: it may open again on the next page load
  }
}

/**
 * Android tester sign-up (hoffsilva/routewise#40). Opens from the "Android" menu item (#android, also the
 * routewise.app/android short link) and, on Android devices, by itself once per session.
 */
export function AndroidBetaModal({ copy }: { copy: AndroidBetaCopy }) {
  const [open, setOpen] = useState(false);
  const dialogRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // The hash drives it: menu item, routewise.app/android and the back button all stay in sync
    const syncWithHash = () => setOpen(window.location.hash === ANDROID_HASH);
    if (window.location.hash !== ANDROID_HASH && isAndroidDevice(navigator.userAgent) && !seenThisSession()) {
      window.history.replaceState(null, '', ANDROID_HASH);
    }
    syncWithHash();
    window.addEventListener('hashchange', syncWithHash);
    return () => window.removeEventListener('hashchange', syncWithHash);
  }, []);

  const close = useCallback(() => {
    markSeen();
    setOpen(false);
    if (window.location.hash === ANDROID_HASH) {
      window.history.replaceState(null, '', window.location.pathname + window.location.search);
    }
  }, []);

  useEffect(() => {
    if (!open) return;
    const previousFocus = document.activeElement as HTMLElement | null;
    const focusable = () =>
      [...(dialogRef.current?.querySelectorAll<HTMLElement>('a[href], button') ?? [])];
    focusable()[0]?.focus();

    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') close();
      if (event.key !== 'Tab') return;
      // Keep keyboard focus inside the dialog
      const items = focusable();
      const first = items[0];
      const last = items[items.length - 1];
      if (!first || !last) return;
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };
    const overflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = overflow;
      window.removeEventListener('keydown', onKey);
      // The mobile menu hides the link that opened it: fall back to the menu button
      const visible = previousFocus && previousFocus.offsetParent !== null ? previousFocus : null;
      (visible ?? document.querySelector<HTMLElement>('nav button[aria-label="Menu"]'))?.focus();
    };
  }, [open, close]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[1100] flex items-end justify-center bg-ink/50 p-0 backdrop-blur-sm sm:items-center sm:p-6" onClick={close}>
      <div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="android-beta-title"
        className="max-h-[92vh] w-full max-w-[720px] overflow-y-auto rounded-t-3xl bg-white p-6 shadow-medium sm:rounded-3xl sm:p-8"
        onClick={event => event.stopPropagation()}
      >
        <div className="mb-4 flex items-start justify-between gap-4">
          <span className="inline-block rounded-full bg-brand-teal/10 px-4 py-2 text-[0.85rem] font-semibold text-brand-teal">{copy.badge}</span>
          <button
            type="button"
            onClick={close}
            aria-label={copy.close}
            className="flex size-10 shrink-0 cursor-pointer items-center justify-center rounded-full bg-mist-100 text-xl text-ink-soft hover:bg-mist-200"
          >
            ×
          </button>
        </div>
        <h2 id="android-beta-title" className="mb-3 text-[clamp(1.8rem,5vw,2.4rem)] tracking-[-0.02em] text-ink">{copy.title}</h2>
        <p className="mb-7 text-lg text-mist-600">{copy.intro}</p>

        <h3 className="mb-4 text-[1.25rem] text-ink">{copy.stepsTitle}</h3>
        <ol className="mb-6 grid gap-3">
          {copy.steps.map((step, index) => (
            <li key={step.title} className="flex flex-col gap-3 rounded-2xl border border-mist-200 p-5 sm:flex-row sm:items-center">
              <span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-gradient-map font-display font-extrabold text-white" aria-hidden="true">
                {index + 1}
              </span>
              <div className="flex-1">
                <h4 className="font-display text-[1.05rem] font-bold text-ink">{step.title}</h4>
                <p className="text-ink-soft">{step.body}</p>
              </div>
              <a
                href={STEP_LINKS[index]}
                target="_blank"
                rel="noreferrer"
                className="inline-flex shrink-0 items-center justify-center rounded-full bg-gradient-warm px-5 py-3 text-center font-semibold text-white shadow-warm transition hover:-translate-y-0.5 hover:shadow-warm-lg"
              >
                {step.cta}
              </a>
            </li>
          ))}
        </ol>

        <p className="mb-6 text-sm text-mist-600">{copy.groupNote}</p>

        <section className="mb-6 rounded-2xl border-l-4 border-brand-teal bg-mist-100 p-5">
          <h3 className="mb-1 text-[1.1rem] text-ink">{copy.stayTitle}</h3>
          <p className="text-ink-soft">
            {copy.stayBody}{' '}
            <a href={`mailto:${SUPPORT_EMAIL}`} className="font-semibold text-brand-blue hover:underline">{SUPPORT_EMAIL}</a>.
          </p>
        </section>

        {/* Desktop visitors: open it on the phone */}
        <section className="hidden items-center gap-5 rounded-2xl border border-mist-200 p-5 md:flex">
          <img src="/assets/android-beta-qr.png" alt={copy.qrAlt} width={140} height={140} className="size-35" />
          <div>
            <h3 className="mb-1 text-[1.1rem] text-ink">{copy.desktopTitle}</h3>
            <p className="text-ink-soft">{copy.desktopBody}</p>
          </div>
        </section>
      </div>
    </div>
  );
}
