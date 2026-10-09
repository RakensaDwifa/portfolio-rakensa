# Rakensa Dwifa — Personal Portfolio

Personal portfolio website for **Rakensa Dwifa Noverdiastra** — web developer & Engineering Physics student at Telkom University Bandung.

Rebuilt from a static HTML site into a modern Next.js app with a bold neo-brutalist "coastal" design system (warm sand + teal), smooth scrolling, and scroll-reveal motion.

## Tech stack

- **Next.js 16** (App Router) + **TypeScript**
- **Tailwind CSS v4** design tokens
- **Framer Motion** (via `motion`) for scroll reveals & interactions
- **Lenis** for smooth scrolling
- **Lucide** & **Simple Icons**
- **Vercel Analytics**

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Project structure

- `app/` — pages, root layout, metadata, OG image, sitemap & robots
- `data/portfolioData.ts` — all site content in one place (edit this to update the site)
- `components/` — section components (hero, about, projects, tech, journey, contact…)
- `types/portfolio.ts` — shared types
- `public/` — assets (profile photo, projects, CV)

## Environment variables

See `.env.example`:

- `NEXT_PUBLIC_SITE_URL` — production URL (for metadata)
- `NEXT_PUBLIC_CONTACT_ENDPOINT` — Google Apps Script endpoint for the contact form (falls back to a `mailto:` link when empty)

## Scripts

```bash
npm run dev      # development
npm run build    # production build
npm run start    # serve the production build
npm run lint     # eslint
```