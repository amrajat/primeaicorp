# Prime AI Company — Marketing Site

Static marketing site for **Prime AI Company**, built with [Astro](https://astro.build), Tailwind CSS v4, and deployed to **Cloudflare Pages** from GitHub.

## Commands

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # output → dist/
npm run preview
```

## Cloudflare Pages deployment

1. Push this repository to GitHub.
2. In [Cloudflare Dashboard](https://dash.cloudflare.com) → **Workers & Pages** → **Create** → **Connect to Git**.
3. Build settings:
   - **Framework preset:** Astro
   - **Build command:** `npm run build`
   - **Build output directory:** `dist`
   - **Node.js version:** 22 (matches `package.json` engines)
4. Add custom domain `primeaicorp.com` (and optional `www` redirect via `public/_redirects`).
5. **Project intake form (Pages Functions):** Cloudflare Pages does **not** have a Netlify-style **Forms** toggle in project settings. Submissions are handled by a [Pages Function](https://developers.cloudflare.com/pages/functions/) at `functions/api/project-intake.js` (see the [HTML forms tutorial](https://developers.cloudflare.com/pages/tutorials/forms/)). The form on `/get-started` POSTs to `/api/project-intake`; the UI shows success on the same page (`?submitted=true`).
   - Keep the repo **`/functions`** folder at the project root (same level as `package.json`), not inside `dist/`. `wrangler.toml` sets `pages_build_output_dir` so Pages pairs `dist/` with Functions on deploy.
   - `public/_routes.json` limits Function invocations to `/api/*` (static pages stay free-tier static).
   - **Smoke test after deploy:** `curl -I https://primeaicorp.com/api/project-intake` should return **`405 Method Not Allowed`** (not `404`). `404` means the Function did not deploy—check **Deployments** → latest build log for Functions compile errors and that **Root directory** is `/`.
   - In the Pages project → **Settings** → **Environment variables**, set:
     - `RESEND_API_KEY` — from [Resend](https://resend.com) (or another provider you wire in the Function)
     - `FORM_NOTIFY_EMAIL` — optional, defaults to `ai@primeaicorp.com`
     - `RESEND_FROM` — verified sender (e.g. `Prime AI Company <hello@primeaicorp.com>`)
   - Without `RESEND_API_KEY`, submissions still return success but only appear in **Workers & Pages** → your project → **Logs** (Real-time logs).
   - **Local testing:** put secrets in **`.dev.vars`** (repo root; gitignored), then `npm run dev` and submit on **Get started**. Astro dev serves `POST /api/project-intake` via the same handler as production (reads `.dev.vars`).
   - Optional production-like check: `npm run build` && `npx wrangler pages dev dist --compatibility-date=2024-11-01`.

## Typography

**[Geist Serif](https://vercel.com/font?type=serif)** for body and headings, with **[Geist Pixel](https://vercel.com/font?type=pixel)** for labels, stats, and short supporting lines. Fonts are **self-hosted** in `public/fonts/` (not loaded from the `geist` package at runtime). After `npm update geist`, run `npm run fonts:sync`, then `npm run favicon` if the pixel font changed.

`public/favicon.svg` is the cream circle plus the **Geist Pixel “P”** as exported vector paths (`npm run favicon`, uses dev-only `fontkit`).

## Content

- Models, use cases, and services: `src/data/*.ts`
- Site emails: `ai@primeaicorp.com`, `legal@primeaicorp.com` in `src/data/site.ts`

## Legal

Legal pages are template text—not legal advice. Have counsel review before production.
