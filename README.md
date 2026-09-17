# baba-rupneshwar-nath

Official website of Baba Rupneshwar Nath Temple — Phase 1. Built with Vite, React, and TypeScript.

## Development

Requires Node.js 20.

```bash
npm ci
npm run dev       # start dev server
npm run build     # type-check + production build to dist/
npm run preview   # preview the production build locally
npm test          # run the test suite
```

## Deployment

The site deploys automatically to GitHub Pages via [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml)
on every push to `main`. The workflow builds the project with Node.js 20 and publishes the `dist/` output
using the official `actions/upload-pages-artifact` and `actions/deploy-pages` actions.

The site is served at the custom domain **babarupneshwar.com** (configured via `public/CNAME`, which Vite
copies into `dist/` on build so the domain survives each deployment).
