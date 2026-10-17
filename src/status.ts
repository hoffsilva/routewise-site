export const API_HEALTH_URL = 'https://api.routewise.app/health';

/** How often the status page asks the API again (seconds). */
export const STATUS_REVALIDATE_SECONDS = 30;

const TIMEOUT_MS = 5000;

export type ComponentState = 'ok' | 'down' | 'unknown';

export interface ApiStatus {
  overall: 'operational' | 'degraded' | 'down';
  api: ComponentState;
  database: ComponentState;
  cache: ComponentState;
  checkedAt: string;
  responseMs: number | null;
}

/** Reads `/health`'s answer (200 healthy, 503 database down); anything else means the API is unreachable. */
export function interpretHealth(httpStatus: number | null, body: unknown, checkedAt: string, responseMs: number | null): ApiStatus {
  const health = body && typeof body === 'object' ? (body as { database?: unknown; redis?: unknown }) : null;
  const answered = health !== null && (httpStatus === 200 || httpStatus === 503) && typeof health.database === 'boolean';

  if (!answered) {
    return { overall: 'down', api: 'down', database: 'unknown', cache: 'unknown', checkedAt, responseMs: null };
  }

  const database: ComponentState = health.database ? 'ok' : 'down';
  const cache: ComponentState = health.redis === true ? 'ok' : health.redis === false ? 'down' : 'unknown';
  const overall = database === 'down' ? 'down' : cache === 'down' ? 'degraded' : 'operational';
  return { overall, api: 'ok', database, cache, checkedAt, responseMs };
}

/** Asks the API for its health; never throws. */
export async function fetchApiStatus(
  fetchImpl: typeof fetch = fetch,
  now: () => number = Date.now,
  timeoutMs: number = TIMEOUT_MS,
): Promise<ApiStatus> {
  const started = now();
  const checkedAt = new Date(started).toISOString();
  // Own timer: Next's fetch can drop the abort signal when it regenerates a stale page, and a hanging
  // request would keep showing the last state
  let timer: ReturnType<typeof setTimeout> | undefined;
  const timeout = new Promise<null>(resolve => { timer = setTimeout(() => resolve(null), timeoutMs); });
  const check = (async () => {
    // Fetched when the page is (re)generated: the page itself revalidates every STATUS_REVALIDATE_SECONDS
    const response = await fetchImpl(API_HEALTH_URL, { signal: AbortSignal.timeout(timeoutMs) });
    const body: unknown = await response.json().catch(() => null);
    return interpretHealth(response.status, body, checkedAt, now() - started);
  })().catch(() => null);

  const result = await Promise.race([check, timeout]);
  clearTimeout(timer);
  return result ?? interpretHealth(null, null, checkedAt, null);
}
