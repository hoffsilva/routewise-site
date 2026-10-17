import { describe, expect, it } from 'bun:test';
import { NextRequest } from 'next/server';
import { fetchApiStatus, interpretHealth } from '../src/status';
import { statusCopy } from '../src/content/status';
import { LOCALES } from '../src/i18n/locales';
import { proxy } from '../proxy';
import sitemap from '../app/sitemap';

const AT = '2026-10-17T12:00:00.000Z';

const fakeFetch = (respond: () => Promise<Response>) => (async () => respond()) as unknown as typeof fetch;

describe('interpretHealth', () => {
  it('reads /health: database decides up/down, the cache only degrades', () => {
    expect(interpretHealth(200, { status: 'healthy', database: true, redis: true }, AT, 120))
      .toEqual({ overall: 'operational', api: 'ok', database: 'ok', cache: 'ok', checkedAt: AT, responseMs: 120 });
    expect(interpretHealth(200, { database: true, redis: false }, AT, 90)).toMatchObject({ overall: 'degraded', cache: 'down' });
    expect(interpretHealth(503, { status: 'unhealthy', database: false, redis: true }, AT, 80))
      .toMatchObject({ overall: 'down', api: 'ok', database: 'down' });
  });

  it('treats anything that is not a health answer as the API being unreachable', () => {
    const unreachable = { overall: 'down', api: 'down', database: 'unknown', cache: 'unknown', responseMs: null };
    expect(interpretHealth(null, null, AT, null)).toMatchObject(unreachable);
    expect(interpretHealth(502, '<html>Bad gateway</html>', AT, 40)).toMatchObject(unreachable);
    expect(interpretHealth(200, { status: 'healthy' }, AT, 40)).toMatchObject(unreachable);
  });
});

describe('fetchApiStatus', () => {
  it('measures the response and never throws', async () => {
    let clock = 1_000;
    const now = () => (clock += 150);
    const ok = await fetchApiStatus(fakeFetch(async () => Response.json({ database: true, redis: true })), now);
    expect(ok).toMatchObject({ overall: 'operational', responseMs: 150 });

    const failed = await fetchApiStatus(fakeFetch(async () => { throw new Error('timeout'); }));
    expect(failed).toMatchObject({ overall: 'down', api: 'down' });

    const html = await fetchApiStatus(fakeFetch(async () => new Response('<html></html>', { status: 502 })));
    expect(html.overall).toBe('down');
  });

  it('gives up on a request that never answers, even if the abort signal is ignored', async () => {
    const hanging = fakeFetch(() => new Promise<Response>(() => {}));
    const status = await fetchApiStatus(hanging, Date.now, 50);
    expect(status).toMatchObject({ overall: 'down', api: 'down' });
  });
});

describe('status page', () => {
  it('has the same copy in every language', () => {
    const shape = (value: unknown): unknown =>
      value && typeof value === 'object'
        ? Object.fromEntries(Object.entries(value).map(([key, inner]) => [key, shape(inner)]))
        : typeof value;
    for (const lang of LOCALES) expect(shape(statusCopy[lang])).toEqual(shape(statusCopy.en));
    for (const lang of LOCALES) expect(statusCopy[lang].contact).toContain('{email}');
  });

  it('is reachable at /status but stays out of the sitemap', () => {
    const location = proxy(new NextRequest('https://routewise.app/status', { headers: { 'accept-language': 'pt-BR' } }))
      .headers.get('location');
    expect(location).toBe('https://routewise.app/pt/status');
    expect(sitemap().some(entry => entry.url.includes('/status'))).toBe(false);
  });
});
