# Butrint Bytyqi Portfolio

Personal portfolio of Butrint Bytyqi, software engineer focused on AI agents and business process automation. Live at [butrintbytyqi.netlify.app](https://butrintbytyqi.netlify.app).

## Stack

- **React 18** + **Vite**: single-page app, no router
- **Hand-rolled CSS**: design tokens + plain component stylesheets, no UI framework
- **framer-motion**: subtle scroll reveals, respects `prefers-reduced-motion`
- **EmailJS**: contact form delivery

## Design

Editorial / Swiss-inspired system:

- **Typefaces** (self-hosted via [Fontsource](https://fontsource.org), zero external requests): [Instrument Serif](https://fonts.google.com/specimen/Instrument+Serif) for display, [Schibsted Grotesk](https://fonts.google.com/specimen/Schibsted+Grotesk) for body, [IBM Plex Mono](https://fonts.google.com/specimen/IBM+Plex+Mono) for meta labels
- **Accent**: International Klein Blue `#002FA7` on warm off-white paper
- Numbered sections, hairline rules, asymmetric 12-column grid

Tokens live in `src/styles/tokens.css`; each component has a sibling stylesheet.

## Content

All copy lives in plain data modules under `src/data/` (`profile`, `about`, `experience`, `projects`, `background`, `skills`, `nav`). Updating the site (adding a role, a project, a skill) is a data-only edit; no component changes needed. The downloadable CV is `public/ButrintBytyqiCV.pdf`.

## Development

```bash
npm install
npm run dev       # dev server
npm run build     # production build → dist/
npm run preview   # serve the build locally
```

## Deployment

- **Netlify** (canonical): builds from the repo, publish directory `dist`
- **GitHub Pages** (mirror): `.github/workflows/deploy.yml` builds on push to `main` and deploys `dist/` to the `gh-pages` branch

`vite.config.js` uses `base: './'` so the same build works at both a domain root and a project path.

## Contact form

The form sends via EmailJS using its public browser credentials in `src/lib/email.js`. To limit abuse, restrict the public key to allowed origins in the EmailJS dashboard (Account → Security → Allowed origins) and keep an eye on the monthly quota. A honeypot field filters naive bots client-side.
