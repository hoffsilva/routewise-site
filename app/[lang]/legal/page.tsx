import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { accountDeletion, CONTACT_EMAIL, legalDocuments, legalMetaDescriptions } from '@/content/legal';
import { isLocale, type Locale } from '@/i18n/locales';
import { localizedAlternates } from '@/i18n/metadata';
import { LanguageSwitcher } from '@/components/LanguageSwitcher';

type Params = Promise<{ lang: string }>;
type LegalCopy = (typeof legalDocuments)[Locale];
type LegalDocument = LegalCopy['privacy'] | LegalCopy['terms'] | (typeof accountDeletion)[Locale];

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const { lang } = await params;
  if (!isLocale(lang)) return {};
  return {
    title: legalDocuments[lang].metaTitle,
    description: legalMetaDescriptions[lang],
    alternates: localizedAlternates(lang, '/legal'),
    icons: { icon: '/assets/favicon.png' },
  };
}

function Document({ id, doc }: { id: 'privacy' | 'terms' | 'delete-account'; doc: LegalDocument }) {
  return (
    <article id={id} className="rounded-3xl border border-mist-200 bg-white p-[clamp(24px,4vw,42px)] shadow-soft">
      <h2 className="mb-2 text-[clamp(1.8rem,4vw,2.55rem)]">{doc.title}</h2>
      <p className="mb-5 text-[0.95rem] font-bold text-mist-600">{doc.updated}</p>
      <div className="mb-6 rounded-2xl border-l-4 border-brand-teal bg-mist-100 p-[18px] text-ink-soft">{doc.intro}</div>
      {doc.sections.map(([title, paragraphs]) => (
        <section key={title} className="mt-5 border-t border-mist-200 pt-5">
          <h3 className="mb-3 text-[1.22rem]">{title}</h3>
          {paragraphs.map(paragraph => (
            // Trusted static text with inline mailto links
            <p key={paragraph} className="my-2.5 text-ink-soft" dangerouslySetInnerHTML={{ __html: paragraph }} />
          ))}
        </section>
      ))}
    </article>
  );
}

export default async function LegalPage({ params }: { params: Params }) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();
  const copy = legalDocuments[lang];
  const deletion = accountDeletion[lang];

  return (
    <div className="min-h-screen bg-[linear-gradient(180deg,var(--color-paper)_0%,white_42%,var(--color-mist-100)_100%)] leading-[1.7] [&_a]:text-brand-blue [&_a:hover]:underline">
      <header className="mx-auto flex max-w-[1180px] flex-col items-start justify-between gap-6 px-[22px] py-6 md:flex-row md:items-center">
        <a href={`/${lang}`} className="flex items-center gap-3 !text-inherit !no-underline">
          <img src="/icon.png" alt="RouteWise" width={46} height={46} className="size-[46px] rounded-xl object-cover shadow-soft" />
          <div>
            <span className="text-gradient-map block font-display text-[1.35rem] font-extrabold">RouteWise</span>
            <span className="block text-[0.88rem] font-semibold text-mist-600">{copy.brandSubtitle}</span>
          </div>
        </a>
        <nav className="flex w-full flex-wrap items-center justify-between gap-3 md:w-auto md:justify-start" aria-label="Legal navigation">
          <a href={`/${lang}`} className="text-[0.95rem] font-bold !text-ink-soft">{copy.home}</a>
          <a href="#privacy" className="text-[0.95rem] font-bold !text-ink-soft">{copy.privacyNav}</a>
          <a href="#terms" className="text-[0.95rem] font-bold !text-ink-soft">{copy.termsNav}</a>
          <a href="#delete-account" className="text-[0.95rem] font-bold !text-ink-soft">{deletion.nav}</a>
        </nav>
        <LanguageSwitcher current={lang} variant="chips" className="w-full md:w-auto" />
      </header>

      <main>
        <section className="mx-auto mt-4 mb-9 max-w-[1060px] px-[22px]">
          <div className="relative overflow-hidden rounded-[28px] border border-mist-200 bg-white p-[clamp(28px,5vw,54px)] shadow-medium">
            <div className="pointer-events-none absolute -top-[150px] -right-[120px] size-[360px] bg-[radial-gradient(circle,rgba(42,181,160,0.18),transparent_68%)]" />
            <p className="mb-4 text-[0.78rem] font-extrabold tracking-[0.08em] text-brand-teal uppercase">{copy.kicker}</p>
            <h1 className="mb-[18px] max-w-[760px] text-[clamp(2.1rem,5vw,4rem)] tracking-[-0.03em]">{copy.title}</h1>
            <p className="mb-[26px] max-w-[720px] text-[1.08rem] text-mist-600">{copy.intro}</p>
            <div className="flex flex-wrap gap-3">
              <a href="#privacy" className="inline-flex min-h-11 items-center justify-center rounded-full bg-action px-[18px] text-[19px] font-bold !text-white shadow-[0_4px_18px_rgba(232,93,76,0.24)] !no-underline">
                {copy.privacyNav}
              </a>
              <a href="#terms" className="inline-flex min-h-11 items-center justify-center rounded-full bg-mist-100 px-[18px] text-[19px] font-bold !text-ink-soft !no-underline">
                {copy.termsNav}
              </a>
            </div>
          </div>
        </section>

        <div className="mx-auto grid max-w-[980px] gap-[26px] px-[22px] pb-16">
          <Document id="privacy" doc={copy.privacy} />
          <Document id="terms" doc={copy.terms} />
          <Document id="delete-account" doc={deletion} />
        </div>
      </main>

      <footer className="mx-auto flex max-w-[1180px] flex-wrap items-center justify-between gap-[18px] border-t border-mist-200 px-[22px] pt-8 pb-[42px] text-mist-600">
        <div>
          <strong className="text-ink">RouteWise</strong>
          <p>{copy.footer}</p>
        </div>
        <div className="flex flex-wrap gap-4 font-bold">
          <a href={`/${lang}`}>{copy.home}</a>
          <a href="#privacy">{copy.privacyNav}</a>
          <a href="#terms">{copy.termsNav}</a>
          <a href="#delete-account">{deletion.nav}</a>
          <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>
        </div>
      </footer>
    </div>
  );
}
