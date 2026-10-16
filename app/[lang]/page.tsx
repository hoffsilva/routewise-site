import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { siteCopy } from '@/content/site';
import { isLocale, type Locale } from '@/i18n/locales';
import { localizedAlternates } from '@/i18n/metadata';
import { Nav } from '@/components/Nav';
import { Reveal } from '@/components/Reveal';
import { StoreRedirect } from '@/components/StoreRedirect';
import { APP_STORE_URL, SUPPORT_EMAIL } from '@/site';

type Params = Promise<{ lang: string }>;

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const { lang } = await params;
  if (!isLocale(lang)) return {};
  const copy = siteCopy[lang].meta;
  return {
    title: copy.title,
    description: copy.description,
    alternates: localizedAlternates(lang),
    icons: { icon: '/assets/favicon.png' },
    openGraph: { title: copy.title, description: copy.description, images: ['/icon.png'], type: 'website' },
  };
}

const FEATURES = [
  { icon: '🚀', tone: 'bg-brand-blue/15', title: 'instantTitle', body: 'instantBody' },
  { icon: '📄', tone: 'bg-brand-teal/15', title: 'filesTitle', body: 'filesBody' },
  { icon: '📸', tone: 'bg-brand-orange/15', title: 'photoTitle', body: 'photoBody' },
  { icon: '✅', tone: 'bg-brand-coral/15', title: 'previewTitle', body: 'previewBody' },
  { icon: '🚀', tone: 'bg-brand-blue/15', title: 'suggestionsTitle', body: 'suggestionsBody' },
  { icon: '🗺️', tone: 'bg-brand-teal/15', title: 'gpsTitle', body: 'gpsBody' },
] as const;

const STEPS = [
  { title: 'oneTitle', body: 'oneBody' },
  { title: 'twoTitle', body: 'twoBody' },
  { title: 'threeTitle', body: 'threeBody' },
] as const;

function CheckIcon() {
  return (
    <svg width="18" height="18" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
    </svg>
  );
}

function SectionHeader({ kicker, title, description }: { kicker: string; title: string; description: string }) {
  return (
    <div className="mx-auto mb-16 max-w-[600px] text-center">
      <span className="mb-4 inline-block rounded-full bg-brand-teal/10 px-4 py-2 text-[0.85rem] font-semibold text-brand-teal">{kicker}</span>
      <h2 className="mb-4 text-[clamp(2rem,4vw,2.75rem)] text-ink">{title}</h2>
      <p className="text-lg text-mist-600">{description}</p>
    </div>
  );
}

export default async function HomePage({ params }: { params: Params }) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();
  const copy = siteCopy[lang];

  return (
    <div id="top" className="overflow-x-hidden">
      <StoreRedirect copy={copy.redirect} />
      <Nav lang={lang} copy={copy.nav} />

      {/* Hero */}
      <section className="relative flex items-start overflow-hidden bg-gradient-to-b from-paper to-white px-6 pt-24 pb-12 sm:px-8 sm:pt-28 sm:pb-16 lg:min-h-screen lg:items-center lg:pt-32">
        <div className="pointer-events-none absolute -top-1/2 -right-[20%] h-[150%] w-4/5 bg-[radial-gradient(ellipse_at_center,rgba(42,181,160,0.08)_0%,transparent_70%)]" />
        <div className="pointer-events-none absolute -bottom-[30%] -left-[10%] h-full w-3/5 bg-[radial-gradient(ellipse_at_center,rgba(30,136,199,0.06)_0%,transparent_70%)]" />
        <div className="relative z-10 mx-auto w-full max-w-[1200px]">
          <div className="mx-auto max-w-[760px] animate-fade-in-up text-center">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-[0.85rem] font-medium text-brand-teal shadow-soft">
              <span aria-hidden="true">🚀</span>
              {copy.hero.badge}
            </div>
            <h1
              className="mb-6 text-[clamp(2.5rem,5vw,3.75rem)] tracking-[-0.02em] text-ink [&_span]:text-gradient-map"
              dangerouslySetInnerHTML={{ __html: copy.hero.title }}
            />
            <p className="mx-auto mb-8 max-w-[540px] text-xl text-mist-600">{copy.hero.description}</p>
            <div className="mb-10 flex flex-col flex-wrap items-center justify-center gap-4 sm:flex-row">
              <a
                href={APP_STORE_URL}
                target="_blank"
                rel="noreferrer"
                className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-warm px-8 py-4 font-semibold text-white shadow-warm transition hover:-translate-y-[3px] hover:shadow-warm-lg sm:w-auto"
              >
                <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" /><polyline points="7 10 12 15 17 10" /><line x1="12" y1="15" x2="12" y2="3" />
                </svg>
                {copy.hero.primaryCta}
              </a>
              <a
                href="#como-funciona"
                className="inline-flex w-full items-center justify-center gap-2 rounded-full border-2 border-mist-200 bg-white px-8 py-4 font-semibold text-ink transition hover:border-brand-blue hover:text-brand-blue sm:w-auto"
              >
                <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                {copy.hero.secondaryCta}
              </a>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-mist-600">
              {[copy.hero.trustRoute, copy.hero.trustImport].map(item => (
                <div key={item} className="flex items-center gap-2">
                  <span className="text-brand-teal"><CheckIcon /></span>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* App Store screenshots */}
      <section id="screenshots" className="border-b border-mist-100 bg-white px-8 pt-4 pb-24">
        <div className="mx-auto grid max-w-[320px] grid-cols-1 items-start gap-[1.1rem] sm:max-w-[640px] sm:grid-cols-2 lg:max-w-[1180px] lg:grid-cols-5">
          {[1, 2, 3, 4, 5].map(index => (
            <Reveal key={index}>
              <figure className="overflow-hidden rounded-[28px] border border-mist-200 bg-white p-[0.45rem] shadow-soft">
                <img
                  src={`/assets/screens/${lang}/image${index}.jpg`}
                  alt={`${copy.screenshots.altPrefix} ${index}`}
                  width={600}
                  height={1298}
                  loading="lazy"
                  className="block h-auto w-full rounded-[22px]"
                />
              </figure>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Features */}
      <section id="recursos" className="bg-white px-8 py-24">
        <SectionHeader kicker={copy.features.kicker} title={copy.features.title} description={copy.features.description} />
        <div className="mx-auto grid max-w-[400px] grid-cols-1 gap-8 lg:max-w-[1100px] lg:grid-cols-3">
          {FEATURES.map(feature => (
            <Reveal key={feature.title}>
              <div className="h-full rounded-3xl bg-paper p-8 transition duration-300 hover:-translate-y-[5px] hover:shadow-medium">
                <div className={`mb-6 flex size-[60px] items-center justify-center rounded-2xl text-[1.75rem] ${feature.tone}`}>{feature.icon}</div>
                <h3 className="mb-3 text-xl text-ink">{copy.features[feature.title]}</h3>
                <p className="text-[0.95rem] leading-[1.7] text-mist-600">{copy.features[feature.body]}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* How it works */}
      <section id="como-funciona" className="bg-white px-8 py-24">
        <div className="mx-auto max-w-[900px]">
          <SectionHeader kicker={copy.steps.kicker} title={copy.steps.title} description={copy.steps.description} />
          <div className="relative mt-12 flex flex-col justify-between gap-12 lg:flex-row lg:gap-8">
            <div className="absolute top-[45px] right-[15%] left-[15%] hidden h-[3px] bg-mist-200 lg:block" />
            {STEPS.map((step, index) => (
              <Reveal key={step.title} className="relative z-10 flex-1 text-center">
                <div className="mx-auto mb-6 flex size-[90px] items-center justify-center rounded-full bg-gradient-map font-display text-[2rem] font-extrabold text-white shadow-step">
                  {index + 1}
                </div>
                <h3 className="mb-3 text-xl text-ink">{copy.steps[step.title]}</h3>
                <p className="mx-auto max-w-[220px] text-[0.95rem] text-mist-600">{copy.steps[step.body]}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <Footer lang={lang} copy={copy} />
    </div>
  );
}

function Footer({ lang, copy }: { lang: Locale; copy: (typeof siteCopy)[Locale] }) {
  const columns = [
    {
      title: copy.footer.product,
      links: [
        { href: '#recursos', label: copy.nav.features },
        { href: '#screenshots', label: copy.nav.screenshots },
        { href: '#como-funciona', label: copy.nav.howItWorks },
      ],
    },
    {
      title: copy.footer.support,
      links: [
        { href: `mailto:${SUPPORT_EMAIL}`, label: copy.footer.help },
        { href: `mailto:${SUPPORT_EMAIL}`, label: copy.footer.contact },
        { href: `mailto:${SUPPORT_EMAIL}`, label: copy.footer.faq },
      ],
    },
    {
      title: copy.footer.legal,
      links: [
        { href: `/${lang}/legal#privacy`, label: copy.footer.privacy },
        { href: `/${lang}/legal#terms`, label: copy.footer.terms },
      ],
    },
  ];

  return (
    <footer className="bg-ink px-8 pt-16 pb-8 text-white/70">
      <div className="mx-auto max-w-[1100px]">
        <div className="mb-8 flex flex-col items-start justify-between gap-8 border-b border-white/10 pb-12 lg:flex-row lg:gap-0">
          <div className="max-w-[300px]">
            <div className="mb-4 flex items-center gap-3">
              <img src="/icon.png" alt="RouteWise" width={40} height={40} className="size-10 rounded-[10px]" />
              <span className="font-display text-[1.35rem] font-extrabold text-white">RouteWise</span>
            </div>
            <p className="text-[0.95rem] leading-[1.7]">{copy.footer.tagline}</p>
          </div>
          <div className="flex flex-wrap gap-8 lg:gap-16">
            {columns.map(column => (
              <div key={column.title}>
                <h4 className="mb-5 text-base text-white">{column.title}</h4>
                <ul className="flex flex-col gap-3">
                  {column.links.map(link => (
                    <li key={link.label}>
                      <a href={link.href} className="text-[0.95rem] text-white/70 transition-colors hover:text-white">{link.label}</a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <p className="text-center text-sm lg:text-left">{copy.footer.copyright}</p>
      </div>
    </footer>
  );
}
