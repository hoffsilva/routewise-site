import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { AuthLinkHandler } from '@/components/AuthLinkHandler';
import { authLinkCopy } from '@/content/authLink';
import { legalDocuments } from '@/content/legal';
import { isLocale } from '@/i18n/locales';

type Params = Promise<{ lang: string }>;

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const { lang } = await params;
  if (!isLocale(lang)) return {};
  return {
    title: authLinkCopy[lang].metaTitle,
    robots: { index: false, follow: false },
    // The address carries session tokens until the page clears it: never send it as a referrer
    referrer: 'no-referrer',
    icons: { icon: '/assets/favicon.png' },
  };
}

/** Where email links (sign-up confirmation, password reset) land after Supabase verifies them (SITE-02). */
export default async function AuthConfirmPage({ params }: { params: Params }) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();
  const shared = legalDocuments[lang];

  return (
    <div className="min-h-screen bg-[linear-gradient(180deg,var(--color-paper)_0%,white_42%,var(--color-mist-100)_100%)] leading-[1.7]">
      <header className="mx-auto flex max-w-[1180px] items-center px-[22px] py-6">
        <a href={`/${lang}`} className="flex items-center gap-3">
          <img src="/icon.png" alt="RouteWise" width={46} height={46} className="size-[46px] rounded-xl object-cover shadow-soft" />
          <div>
            <span className="text-gradient-map block font-display text-[1.35rem] font-extrabold">RouteWise</span>
            <span className="block text-[0.88rem] font-semibold text-mist-600">{shared.brandSubtitle}</span>
          </div>
        </a>
      </header>
      <main className="mx-auto max-w-[640px] px-[22px] pb-16">
        <section className="mt-4 rounded-[28px] border border-mist-200 bg-white p-[clamp(28px,5vw,48px)] text-center shadow-medium">
          <AuthLinkHandler copy={authLinkCopy[lang]} />
        </section>
      </main>
    </div>
  );
}
