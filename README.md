# Prashu Pandey — Portfolio

Personal site and portfolio for [Prashu Pandey](https://github.com/pandeyprashu),
Full Stack Developer. Single statically-rendered page covering experience,
selected work, skills and contact.

## Stack

| Concern    | Choice                                    |
| ---------- | ----------------------------------------- |
| Framework  | Next.js 16 (App Router, React 19)         |
| Styling    | Tailwind CSS v4 (CSS-first configuration) |
| Animation  | Framer Motion                             |
| Theming    | next-themes, class strategy               |
| Icons      | lucide-react                              |
| Deployment | Vercel                                    |

## Running locally

```bash
npm install
npm run dev
```

The site runs at http://localhost:3000.

| Script              | Does                                     |
| ------------------- | ---------------------------------------- |
| `npm run dev`       | Development server                       |
| `npm run build`     | Production build                         |
| `npm run start`     | Serve the production build                |
| `npm run lint`      | ESLint                                   |
| `npm run typecheck` | `tsc --noEmit`                           |

## Editing content

All copy lives in `src/content/` as typed data — no JSX edits needed to update
the site:

| File            | Holds                                            |
| --------------- | ------------------------------------------------ |
| `profile.ts`    | Name, role, bio, contact details, nav items       |
| `experience.ts` | Roles, with highlights and stack                  |
| `projects.ts`   | Projects, with headline metrics and highlights    |
| `skills.ts`     | Skill groups                                      |
| `education.ts`  | Degrees                                           |

`types.ts` defines the shapes, so TypeScript will flag anything missing.

To swap the résumé, replace `public/prashu-pandey-resume.pdf` (the path is set
in `profile.ts`). To swap the portrait, replace `public/prashu-pandey.png` and
update the `width`/`height` props in `src/components/sections/hero.tsx` to match
the new file's intrinsic dimensions.

## Deploying to Vercel

Import the repository at [vercel.com/new](https://vercel.com/new). The framework
preset, build command and output directory are all detected automatically.

### Environment variables

| Variable               | Required | Purpose                                        |
| ---------------------- | -------- | ---------------------------------------------- |
| `NEXT_PUBLIC_SITE_URL` | Optional | Absolute origin, e.g. `https://prashupandey.com` |

Set `NEXT_PUBLIC_SITE_URL` once a custom domain is attached. Without it the site
falls back to `VERCEL_PROJECT_PRODUCTION_URL` (the stable `*.vercel.app`
production host), which is correct but ranks less well than a custom domain.

This value backs the canonical URL, the Open Graph tags, `robots.txt` and
`sitemap.xml`, so it is the one setting worth getting right — a wrong origin
points crawlers somewhere else entirely.

## SEO

Every route is prerendered at build time, so crawlers receive complete HTML
without executing JavaScript. The page ships with canonical URL, Open Graph and
Twitter cards, a generated 1200×630 social image (`src/app/opengraph-image.tsx`),
`robots.txt`, `sitemap.xml`, and schema.org `Person` structured data
(`src/components/seo/structured-data.tsx`).

Note that Vercel serves preview deployments with `X-Robots-Tag: noindex`; only
production deployments are indexable.

## Accessibility

Skip-to-content link, single `h1` with a coherent heading outline, keyboard-
operable disclosures with `aria-expanded`/`aria-controls`, visible focus rings,
and `prefers-reduced-motion` honoured — scroll reveals collapse to a plain fade
and smooth scrolling is disabled.
