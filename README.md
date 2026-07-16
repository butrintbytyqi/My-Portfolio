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

## Contact agent

The contact form is handled by an autonomous serverless agent. On submit, the browser POSTs to a Netlify Function (`netlify/functions/contact.mjs`), which:

1. Validates the input (honeypot, email format, length caps, soft per-IP rate limit).
2. Asks **Google Gemini** (`gemini-2.5-flash`, free tier) to draft a concise, on-brand reply, grounded in a fixed profile. The visitor's message is passed as clearly delimited, untrusted data; the model only ever produces body text.
3. Sends that reply to the visitor via **Resend** (from `hello@butrintbytyqi.com`, `Reply-To` = your Gmail, so a reply lands straight in your inbox), and sends you a copy of the exchange.

Recipients and routing are hardcoded server-side — the model and the visitor's message can never redirect where mail goes. The visitor message is fenced with a per-request nonce so it can't inject instructions. A **Cloudflare Turnstile** bot check is verified server-side before any AI/email call runs, closing off email-bombing and quota-burning. Every reply invites the visitor to reach Butrint directly. If Gemini is unavailable, a templated reply is sent instead; if Resend isn't configured, the UI shows the direct email address.

### One-time setup

All secrets live in Netlify environment variables (scoped to **Functions**) — never in the repo or the client bundle. See `.env.example`.

1. **Resend** — create a free account at [resend.com](https://resend.com), then:
   - Add your domain at **resend.com/domains** and create the DNS records it shows (DKIM `TXT`, SPF `TXT` on the `send` subdomain, the `send` `MX`, and a `_dmarc` `TXT`). Wait for **Verified**.
   - Create an API key at **resend.com/api-keys** (starts with `re_`).
2. **Gemini** — create a free key at [aistudio.google.com/apikey](https://aistudio.google.com/apikey) (no card required). Note: free-tier prompts may be used by Google to improve their products — fine for contact messages, but don't route confidential mail through the free tier.
3. **Cloudflare Turnstile** — at [dash.cloudflare.com](https://dash.cloudflare.com) → Turnstile, add a widget for `butrintbytyqi.com`. It gives a **site key** (public) and a **secret key** (private). The bot check activates only once both keys below are set.
4. **Netlify** — under Site configuration → Environment variables, add:
   - Scope **Functions**: `RESEND_API_KEY`, `GEMINI_API_KEY`, `TURNSTILE_SECRET_KEY` (+ optional `CONTACT_OWNER`, `CONTACT_FROM`, `GEMINI_MODEL`)
   - Scope **Builds** (baked into the frontend): `VITE_TURNSTILE_SITE_KEY`
5. Redeploy. Test locally with `netlify dev` after `netlify link` (loads env + serves the function alongside Vite).

Free-tier ceilings: Resend 100 emails/day (each submission sends 2), Gemini ~250 requests/day. For higher volume or stronger rate-limiting, move the per-IP guard to a shared store (e.g. Upstash Redis).
