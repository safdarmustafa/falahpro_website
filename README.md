# Falah Pro Website

Official static website for **Falah Pro** — Built for Every Muslim.

This site supports the Google Play Store listing with:

- Landing page
- Privacy Policy
- Terms & Conditions
- Account Deletion instructions
- Contact / Support

## Tech Stack

- React
- Vite
- React Router DOM
- Tailwind CSS v4

No backend. No database. No authentication.

## Getting Started

```bash
npm install
npm run dev
```

Build for production:

```bash
npm run build
npm run preview
```

## Domain (Cloudflare Pages)

Update the site URL in **one place** after deployment:

```js
// src/assets/site.js
export const SITE_URL = 'https://YOUR_PROJECT.pages.dev'
```

This constant powers SEO metadata, canonical URLs, Open Graph tags, `robots.txt`, and `sitemap.xml`.

## Cloudflare Pages

Deploy the `dist` output from `npm run build`.

Recommended Cloudflare Pages settings:

- **Build command:** `npm run build`
- **Build output directory:** `dist`
- **Framework preset:** Vite

SPA routing is handled by `public/_redirects`.

When the Play Store listing is live, set `playStoreUrl` in `src/assets/site.js` to enable the store button.

## Branding

Place the Android app logo at:

```text
src/assets/logo.png
```

The site imports this path everywhere branding is required. Drop in a replacement PNG with the same filename — no code changes needed.

## Contact

- **Support:** safdarmustafa01@gmail.com
- **Developer:** Safdar Mustafa
- **Co-Developer:** Dayam Nadeem

Site details are centralized in `src/assets/site.js`.
