import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { legalDocuments } from '@/content/legal';
import { statusCopy } from '@/content/status';
import { HTML_LANG, isLocale } from '@/i18n/locales';
import { SUPPORT_EMAIL } from '@/site';
import { fetchApiStatus, STATUS_REVALIDATE_SECONDS, type ApiStatus, type ComponentState } from '@/status';
import { AutoRefresh } from '@/components/AutoRefresh';

type Params = Promise<{ lang: string }>;

// Regenerated at most every 30 s (STATUS_REVALIDATE_SECONDS): visitors never call the API themselves
export const revalidate = 30;

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const { lang } = await params;
  if (!isLocale(lang)) return {};
  // Unlisted: not in the sitemap or navigation, and kept out of search results
  return {
    title: statusCopy[lang].metaTitle,
    robots: { index: false, follow: false },
    icons: { icon: '/assets/favicon.png' },
  };
}

const OVERALL_STYLE: Record<ApiStatus['overall'], { dot: string; ring: string; glow: string }> = {
  operational: { dot: 'bg-brand-teal', ring: 'bg-brand-teal/30', glow: 'bg-[radial-gradient(circle,rgba(42,181,160,0.22),transparent_68%)]' },
  degraded: { dot: 'bg-brand-orange', ring: 'bg-brand-orange/30', glow: 'bg-[radial-gradient(circle,rgba(245,166,35,0.22),transparent_68%)]' },
  down: { dot: 'bg-brand-coral', ring: 'bg-brand-coral/30', glow: 'bg-[radial-gradient(circle,rgba(232,93,76,0.22),transparent_68%)]' },
};

const STATE_PILL: Record<ComponentState, string> = {
  ok: 'bg-brand-teal/12 text-[#1d7f70]',
  down: 'bg-brand-coral/12 text-[#b8402f]',
  unknown: 'bg-mist-100 text-mist-600',
};

const STATE_DOT: Record<ComponentState, string> = {
  ok: 'bg-brand-teal',
  down: 'bg-brand-coral',
  unknown: 'bg-mist-400',
};

const fill = (template: string, values: Record<string, string>) =>
  template.replace(/\{(\w+)\}/g, (match, key: string) => values[key] ?? match);

export default async function StatusPage({ params }: { params: Params }) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();
  const copy = statusCopy[lang];
  const shared = legalDocuments[lang];
  const status = await fetchApiStatus();
  const style = OVERALL_STYLE[status.overall];
  const checkedAt = new Intl.DateTimeFormat(HTML_LANG[lang], {
    dateStyle: 'medium',
    timeStyle: 'medium',
    timeZone: 'UTC',
  }).format(new Date(status.checkedAt));
  const [beforeEmail, afterEmail = ''] = copy.contact.split('{email}');

  return (
    <div className="min-h-screen bg-[linear-gradient(180deg,var(--color-paper)_0%,white_42%,var(--color-mist-100)_100%)] leading-[1.7]">
      <header className="mx-auto flex max-w-[1180px] items-center justify-between gap-6 px-[22px] py-6">
        <a href={`/${lang}`} className="flex items-center gap-3">
          <img src="/icon.png" alt="RouteWise" width={46} height={46} className="size-[46px] rounded-xl object-cover shadow-soft" />
          <div>
            <span className="text-gradient-map block font-display text-[1.35rem] font-extrabold">RouteWise</span>
            <span className="block text-[0.88rem] font-semibold text-mist-600">{shared.brandSubtitle}</span>
          </div>
        </a>
        <a href={`/${lang}`} className="text-[0.95rem] font-bold text-ink-soft hover:text-brand-blue">{shared.home}</a>
      </header>

      <AutoRefresh seconds={STATUS_REVALIDATE_SECONDS} />
      <main className="mx-auto max-w-[860px] px-[22px] pb-16">
        <section className="relative mt-4 overflow-hidden rounded-[28px] border border-mist-200 bg-white p-[clamp(28px,5vw,54px)] shadow-medium motion-safe:animate-fade-in-up">
          <div className={`pointer-events-none absolute -top-[150px] -right-[120px] size-[360px] ${style.glow}`} />
          <p className="mb-5 text-[0.78rem] font-extrabold tracking-[0.08em] text-brand-teal uppercase">{copy.kicker}</p>
          <div className="flex items-start gap-4">
            <span className="relative mt-[0.55em] flex size-4 shrink-0" aria-hidden="true">
              <span className={`absolute inline-flex size-full animate-ping rounded-full motion-reduce:animate-none ${style.ring}`} />
              <span className={`relative inline-flex size-4 rounded-full ${style.dot}`} />
            </span>
            <div>
              <h1 className="mb-3 text-[clamp(1.9rem,5vw,3.2rem)] tracking-[-0.03em]">{copy.headline[status.overall]}</h1>
              <p className="max-w-[620px] text-[1.08rem] text-mist-600">{copy.summary[status.overall]}</p>
            </div>
          </div>
        </section>

        <section className="mt-[26px] rounded-3xl border border-mist-200 bg-white p-[clamp(20px,4vw,34px)] shadow-soft">
          <h2 className="mb-4 text-[1.22rem]">{copy.componentsTitle}</h2>
          <ul className="divide-y divide-mist-200">
            {(['api', 'database', 'cache'] as const).map(key => (
              <li key={key} className="flex items-center justify-between gap-4 py-4 first:pt-0 last:pb-0">
                <div>
                  <p className="font-display font-bold text-ink">{copy.components[key].name}</p>
                  <p className="text-[0.93rem] text-mist-600">{copy.components[key].description}</p>
                </div>
                <span className={`inline-flex shrink-0 items-center gap-2 rounded-full px-3 py-1 text-[0.85rem] font-extrabold ${STATE_PILL[status[key]]}`}>
                  <span className={`size-2 rounded-full ${STATE_DOT[status[key]]}`} aria-hidden="true" />
                  {copy.state[status[key]]}
                </span>
              </li>
            ))}
          </ul>
        </section>

        <section className="mt-[26px] flex flex-col gap-4 rounded-3xl bg-mist-100 p-[clamp(20px,4vw,30px)] text-[0.95rem] text-mist-600 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="font-bold text-ink-soft">{fill(copy.checkedAt, { time: checkedAt })}</p>
            {status.responseMs !== null && <p>{fill(copy.responseTime, { ms: String(status.responseMs) })}</p>}
            <p>{copy.refreshNote}</p>
          </div>
          <a
            href={`/${lang}/status`}
            className="inline-flex min-h-11 items-center justify-center self-start rounded-full bg-gradient-warm px-[18px] font-extrabold text-white shadow-[0_4px_18px_rgba(232,93,76,0.24)] sm:self-auto"
          >
            {copy.reload}
          </a>
        </section>

        <p className="mt-8 text-center text-mist-600">
          {beforeEmail}
          <a href={`mailto:${SUPPORT_EMAIL}`} className="font-bold text-brand-blue hover:underline">{SUPPORT_EMAIL}</a>
          {afterEmail}
        </p>
      </main>
    </div>
  );
}
