# Jess is Cool

Portfolio site for Jessica (Jess) Solka, built with Vue 3, TypeScript, Vite, and Vue Router.

## Development

```sh
npm install
npm run dev
```

## Production build

```sh
npm run build
```

The build creates `dist/` and copies the app entry point to `dist/404.html` so direct case-study links work on GitHub Pages. The custom domain is kept in `CNAME` and copied from `public/CNAME`.

Case-study content lives in `src/data/work.ts`.

## Design system

Tailwind CSS 4 powers page layouts and component styling. The Purple Riot palette, display font,
and mono font are defined once in `src/assets/main.css` under `@theme`; use those `site-*` color
tokens and the shared font utilities instead of repeating raw colors or font stacks.

Reusable Vue primitives live in `src/components/`: `AppText` owns the type scale, `AppButton`
owns link and button variants, `SectionEyebrow` and `SectionHeading` standardize section labels,
`PageIntro` provides the page opening layout, `TagList` and `StatusTag` standardize metadata,
`SiteContainer` and `SiteNavLink` define shared site chrome, and `WorkCard`/`WorkRow` render the
two work-list patterns. Compose these for new pages and add a variant to the owning component when
a shared pattern needs a new treatment. `main.css` is reserved for Tailwind, design tokens, and
site-wide browser defaults; page and component styles belong in Tailwind utilities and shared
components.
