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
5. **Forms:** In the Pages project, enable **Forms**. Submissions use `data-static-form-name="project-intake"` on `/get-started`. Send notifications to **ai@primeaicorp.com** and set the success URL to `/get-started?submitted=true`.

## Typography

Single typeface: **[Geist Serif](https://vercel.com/font?type=serif)** — self-hosted from the `geist` npm package (`public/fonts/GeistSerifVF.woff2`). Re-copy after `npm update geist` if needed.

## Content

- Models, use cases, and services: `src/data/*.ts`
- Site emails: `ai@primeaicorp.com`, `legal@primeaicorp.com` in `src/data/site.ts`

## Legal

Legal pages are template text—not legal advice. Have counsel review before production.
