# Mittal Hospital & Research Centre — React Site

A modern, premium, glassmorphic React rebuild of the Mittal Hospital website.

## Stack

- **Vite + React 18** — fast dev, tiny production bundle
- **React Router 6** — SPA navigation across 20+ pages
- **Tailwind CSS** — utility-first styling + custom glassmorphism layer
- **Framer Motion** — page transitions, scroll reveals, micro-interactions
- **React Hook Form + Zod-ready** — accessible, validated forms
- **React Helmet Async** — per-page SEO + JSON-LD schema

## Develop

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # outputs dist/
npm run preview  # serve the production build
```

## Project structure

```
src/
├── App.jsx                 # router
├── main.jsx                # entry
├── index.css               # tailwind + custom glassmorphism layer
├── data/site.js            # all hospital content (CMS-ready)
├── components/
│   ├── Seo.jsx             # per-page SEO + schema.org
│   ├── ui/                 # Section, Button, Counter, Toast, FloatingShapes
│   └── layout/             # TopBar, Navbar, MobileNav, Footer, FloatingActions, Layout
└── pages/                  # one .jsx per route (Home, About, Doctors, ...)
```

All hospital data — doctors, departments, services, packages, blog, events — lives in `src/data/site.js`.
Swap with an API/CMS by mirroring the shape.
