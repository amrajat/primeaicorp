# Prime AI Company — Marketing Site

Static marketing site for **Prime AI Company**, built with [Astro](https://astro.build), Tailwind CSS v4, and deployed to **Cloudflare Workers** (static assets + server route) from GitHub.

## Commands

```bash
npm install
npm run dev       # http://localhost:4321 (Worker runtime via platformProxy + .dev.vars)
npm run build     # dist/client + dist/server (Worker)
npm run preview   # production-like local Worker after build
```

## Cloudflare deployment

The intake API is an **Astro server route** (`src/pages/api/project-intake.ts`, `prerender = false`) via [`@astrojs/cloudflare`](https://docs.astro.build/en/guides/integrations-guide/cloudflare/). Pages Functions alone were not being attached to this project; the Worker bundles static files and `/api/project-intake`.

### Git-connected Worker / Pages (recommended)

1. [Cloudflare Dashboard](https://dash.cloudflare.com) → **Workers & Pages** → connect **`amrajat/primeaicorp`** (`main`).
2. **Build settings**
   - **Build command:** `npm run build`
   - **Deploy command:** `npm run deploy:cloudflare`
   - **Build output directory:** leave **empty** (do not use `dist` only—that skips the Worker)
   - **Node.js version:** `22` (or match `package.json` engines)
3. **Environment variables** (Production + Preview): `RESEND_API_KEY`, optional `FORM_NOTIFY_EMAIL`, `RESEND_FROM`.
4. **Secrets for local dev:** copy `.dev.vars.example` → `.dev.vars` (gitignored).
5. **Custom domain:** attach `primeaicorp.com` to this **Worker** (same place you had Pages). Optional `www` redirect in `public/_redirects`.
6. **Smoke test:** `curl -I https://primeaicorp.com/api/project-intake` → **405** (not 404). Then submit on `/get-started/`.

If you previously set **Deploy command** to bare `npx wrangler deploy`, replace it with `npm run deploy:cloudflare` (uses `dist/server/wrangler.json` from the Astro build).

## Project intake form

- Form POSTs to `/api/project-intake`; success UI on `/get-started?submitted=true`.
- Handler: `src/lib/project-intake-handler.ts` (Resend optional).
- Without `RESEND_API_KEY`, submissions return success and log in **Workers & Pages** → **Logs**.

## Typography

**[Geist Serif](https://vercel.com/font?type=serif)** for body and headings, with **[Geist Pixel](https://vercel.com/font?type=pixel)** for labels, stats, and short supporting lines. Fonts are **self-hosted** in `public/fonts/`. After `npm update geist`, run `npm run fonts:sync`, then `npm run favicon` if the pixel font changed.

`public/favicon.svg` — cream circle + Geist Pixel **P** (`npm run favicon`, dev-only `fontkit`).

## Content

- Models, use cases, and services: `src/data/*.ts`
- Site emails: `ai@primeaicorp.com`, `legal@primeaicorp.com` in `src/data/site.ts`

## Legal

Legal pages are template text—not legal advice. Have counsel review before production.
