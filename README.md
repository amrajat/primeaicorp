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
   - In the Pages project → **Settings** → **Environment variables**, set:
     - `RESEND_API_KEY` — from [Resend](https://resend.com) (or another provider you wire in the Function)
     - `FORM_NOTIFY_EMAIL` — optional, defaults to `ai@primeaicorp.com`
     - `RESEND_FROM` — verified sender (e.g. `Prime AI Company <hello@primeaicorp.com>`)
   - Without `RESEND_API_KEY`, submissions still return success but only appear in **Workers & Pages** → your project → **Logs** (Real-time logs).
   - Local `npm run dev` does not run Pages Functions; test the form on a deployed preview or `*.pages.dev` URL.

## Typography

**[Geist Serif](https://vercel.com/font?type=serif)** for body and headings, with **[Geist Pixel](https://vercel.com/font?type=pixel)** for labels, stats, and short supporting lines. Both are self-hosted from the `geist` npm package (`public/fonts/GeistSerifVF.woff2`, `public/fonts/GeistPixelVF.woff2`). Re-copy after `npm update geist` if needed.

## Content

- Models, use cases, and services: `src/data/*.ts`
- Site emails: `ai@primeaicorp.com`, `legal@primeaicorp.com` in `src/data/site.ts`

## Legal

Legal pages are template text—not legal advice. Have counsel review before production.
