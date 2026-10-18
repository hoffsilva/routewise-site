'use client';

import { useEffect, useRef, useState } from 'react';
import type { authLinkCopy } from '@/content/authLink';
import type { Locale } from '@/i18n/locales';
import { APP_STORE_URL, isMobileDevice, readAuthLink, type AuthLink } from '@/authLink';

type Copy = (typeof authLinkCopy)[Locale];

/**
 * Hands an email link's session to the app (SITE-02). On a phone it opens RouteWise right away and keeps a
 * button; on a computer it explains what to do. The tokens leave the address bar as soon as they're read
 * and are only ever passed to the app link.
 */
export function AuthLinkHandler({ copy }: { copy: Copy }) {
  const [link, setLink] = useState<AuthLink | null>(null);
  const [mobile, setMobile] = useState(false);
  // Read once: the address is cleared right after, and React may run the effect twice in development
  const handled = useRef(false);

  useEffect(() => {
    if (handled.current) return;
    handled.current = true;
    const read = readAuthLink(window.location.href);
    window.history.replaceState(null, '', window.location.pathname);
    const onPhone = isMobileDevice(navigator.userAgent, navigator.maxTouchPoints);
    setLink(read);
    setMobile(onPhone);
    if (onPhone && 'appUrl' in read) window.location.href = read.appUrl;
  }, []);

  if (!link) {
    return <p className="text-mist-600">{copy.opening}</p>;
  }

  if (link.kind === 'error' || link.kind === 'empty') {
    return (
      <>
        <h1 className="mb-3 text-[clamp(1.9rem,5vw,3rem)] tracking-[-0.03em]">
          {link.kind === 'error' ? copy.errorTitle : copy.emptyTitle}
        </h1>
        <p className="text-[1.08rem] text-mist-600">{link.kind === 'error' ? copy.errorBody : copy.emptyBody}</p>
      </>
    );
  }

  const recovery = link.kind === 'recovery';
  return (
    <>
      <h1 className="mb-3 text-[clamp(1.9rem,5vw,3rem)] tracking-[-0.03em]">
        {recovery ? copy.recoveryTitle : copy.confirmTitle}
      </h1>
      {mobile ? (
        <>
          <p className="mb-6 text-[1.08rem] text-mist-600">{recovery ? copy.recoveryBody : copy.confirmBody}</p>
          <a
            href={link.appUrl}
            className="inline-flex min-h-12 items-center justify-center rounded-full bg-gradient-warm px-6 font-extrabold text-white shadow-[0_4px_18px_rgba(232,93,76,0.24)]"
          >
            {copy.openButton}
          </a>
          <p className="mt-8 text-[0.95rem] text-mist-600">{recovery ? copy.notInstalledRecovery : copy.notInstalledConfirm}</p>
          <a href={APP_STORE_URL} className="mt-2 inline-block font-bold text-brand-blue hover:underline">
            {copy.storeButton}
          </a>
        </>
      ) : (
        <p className="text-[1.08rem] text-mist-600">{recovery ? copy.recoveryDesktop : copy.confirmDesktop}</p>
      )}
    </>
  );
}
