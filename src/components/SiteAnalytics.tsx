'use client';

import { Analytics } from '@vercel/analytics/next';
import { analyticsUrl } from '@/authLink';

/** Vercel Web Analytics: page views without cookies or personal identifiers; auth pages drop query and fragment. */
export function SiteAnalytics() {
  return <Analytics beforeSend={event => ({ ...event, url: analyticsUrl(event.url) })} />;
}
