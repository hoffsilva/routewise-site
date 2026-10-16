# routewise-site

Landing page and legal pages for [routewise.app](https://routewise.app): Next.js (App Router) + Tailwind CSS, Bun, deployed on Vercel.

```bash
bun install
bun dev            # http://localhost:3000
bun run build
bun run typecheck
bun test
```

Requires Node ≥ 20.9 (use 22).

- Copy: `src/content/site.ts` (landing) and `src/content/legal.ts` (Terms + Privacy, canonical) in en, pt, fr, es.
- Pages are generated per language under `/{lang}`; `proxy.ts` sends `/` and the old `*.html` URLs to the visitor's language.
