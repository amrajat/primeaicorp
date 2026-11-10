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
3. **Resend env (use Builds → Variables, not greyed-out Runtime):**  
   On **Settings → Builds → Variables and secrets**, set (you already have these):
   - **`RESEND_API_KEY`** — prefer **Encrypt**; from [Resend API Keys](https://resend.com/api-keys).
   - **`FORM_NOTIFY_EMAIL`** = `ai@primeaicorp.com`
   - **`RESEND_FROM`** = sender Resend allows (domain [verified](https://resend.com/docs/dashboard/domains/introduction) for `ai@primeaicorp.com`).

   Cloudflare only lets you edit **runtime** Variables and secrets when the Worker has a **script**. This project deploys that script via **`npm run deploy:cloudflare`**, which copies the Builds variables into the Worker config at deploy time—so you keep using **Builds → Variables** even when Runtime is disabled.

   **Required:** **Deploy command** = `npm run deploy:cloudflare` (not empty). **Build output directory** = empty. If you only upload static files, you get “static assets only” and the API/env won’t work.
4. **Local dev:** copy `.dev.vars.example` → `.dev.vars` (gitignored); `platformProxy` loads it for `npm run dev` / `npm run preview`.
5. **Custom domain:** attach `primeaicorp.com` to this **Worker** (same place you had Pages). Optional `www` redirect in `public/_redirects`.
6. **Smoke test:** `curl -I https://primeaicorp.com/api/project-intake` → **405** (not 404). Then submit on `/get-started/`.

If you previously set **Deploy command** to bare `npx wrangler deploy`, replace it with `npm run deploy:cloudflare` (uses `dist/server/wrangler.json` from the Astro build).

## Project intake form

- Form POSTs to `/api/project-intake`; success UI on `/get-started?submitted=true`.
- Handler: `src/lib/project-intake-handler.ts` (Resend required in production).
- Check delivery in [Resend → Emails](https://resend.com/emails) and **Workers & Pages** → **Logs** (`project-intake: Resend accepted submission`).

## Typography

**[Geist Serif](https://vercel.com/font?type=serif)** for body and headings, with **[Geist Pixel](https://vercel.com/font?type=pixel)** for labels, stats, and short supporting lines. Fonts are **self-hosted** in `public/fonts/`. After `npm update geist`, run `npm run fonts:sync`, then `npm run favicon` if the pixel font changed.

`public/favicon.svg` — cream circle + Geist Pixel **P** (`npm run favicon`, dev-only `fontkit`).

## Content

- Models, use cases, and services: `src/data/*.ts`
- Site emails: `ai@primeaicorp.com`, `legal@primeaicorp.com` in `src/data/site.ts`

## Legal

Legal pages are template text—not legal advice. Have counsel review before production.
