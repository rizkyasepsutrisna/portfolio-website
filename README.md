# Rizky Asep Sutrisna — Portfolio

A modern, one-page personal portfolio built with **React + Vite + Tailwind CSS**, featuring a clean minimalist design with subtle cybersecurity accents, a light/dark theme toggle, and smooth scroll animations. Deployed as a static site on **GitHub Pages**.

## Features

- One-page scrolling layout with scroll-spy navigation
- Light / Dark mode toggle (persists to `localStorage`, respects system preference)
- Typing animation for professional roles in the hero
- Animated stat counters and scroll-triggered reveals (Framer Motion)
- Experience timeline with category filters (Security / QA / Other)
- All content driven by a single data file: [`src/data/portfolio.json`](src/data/portfolio.json)
- Fully responsive, mobile-first design

## Tech Stack

| Area        | Choice                    |
| ----------- | ------------------------- |
| Framework   | React 18                  |
| Build tool  | Vite 5                    |
| Styling     | Tailwind CSS 3            |
| Animations  | Framer Motion             |
| Icons       | Lucide React              |
| Deployment  | GitHub Pages              |

## Getting Started

Install dependencies and start the dev server:

```bash
npm install
npm run dev
```

Then open the printed local URL (default `http://localhost:5173`).

## Editing Content

All portfolio content (profile, experiences, skills, education, certifications,
organizations) lives in [`src/data/portfolio.json`](src/data/portfolio.json).
Update that file and the UI reflects the changes automatically — no component
edits needed.

## Build

```bash
npm run build      # outputs to dist/
npm run preview    # preview the production build locally
```

## Deployment to GitHub Pages

There are two supported options:

### Option 1 — GitHub Actions (recommended)

A workflow at [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml)
builds and deploys automatically on every push to `main`.

1. Push this repo to GitHub.
2. Go to **Settings → Pages → Build and deployment → Source** and select
   **GitHub Actions**.
3. Push to `main`; the site publishes automatically.

### Option 2 — Manual via `gh-pages`

```bash
npm run deploy
```

This builds the project and pushes `dist/` to the `gh-pages` branch. Then set
**Settings → Pages → Source** to the `gh-pages` branch.

> The Vite `base` is set to `'./'` (relative paths), so the build works on a
> GitHub Pages project site regardless of the repository name.

## License

Personal portfolio — content © Rizky Asep Sutrisna.
