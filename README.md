# Zayti — Natural Coconut Oil

A Next.js 14 (App Router) + Tailwind CSS site for Zayti, a coconut oil brand by Sabee'a.

## Getting started

```bash
npm install
npm run dev
```

Then open http://localhost:3000.

## Pages

- `/` — Home (hero, benefits, featured products, brand story teaser)
- `/products` — Full product range
- `/about` — Brand story and process
- `/contact` — Contact form

## Structure

- `app/` — pages (App Router)
- `components/` — Navbar, Footer, ProductCard, decorative SVGs
- `lib/products.js` — product data (edit this to change prices, sizes, copy)
- `public/logo.png` — your uploaded logo

## Customizing

- **Colors**: edit the `ivory`, `paper`, `ink`, `bronze`, `bronze-dark`, `olive`,
  `olive-dark` values in `tailwind.config.js`.
- **Products**: edit `lib/products.js` — every page pulls from this file.
- **Copy**: page text lives directly in each `app/**/page.js` file.
- **Contact form**: `app/contact/ContactForm.js` currently just shows a
  confirmation on submit. Wire it up to an email service (e.g. Resend,
  Formspree) or an API route when you're ready to receive real submissions.

## Deploying

The easiest option is [Vercel](https://vercel.com) — push this to a GitHub
repo and import it there, or run `npx vercel` from this folder.
