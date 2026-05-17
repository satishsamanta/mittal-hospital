# Mittal Hospital & Research Centre — Modern React Website

A premium, glassmorphic React rebuild of the Mittal Hospital website (Ajmer) — built with Vite, React 18, Tailwind CSS, Framer Motion and React Router.

> The original WordPress-era site was outdated, slow and had non-functional forms. This rebuild ships a modern UI with full SEO, mobile responsiveness, multi-step forms and CMS-ready data.

## Live preview

```bash
cd mittal-react
npm install
npm run dev          # http://localhost:5173
```

## Stack

- **Vite + React 18** — fast dev, tiny production bundle (~155 KB gzip JS)
- **React Router 6** — SPA navigation across 22+ pages
- **Tailwind CSS** — utility-first styling + custom glassmorphism layer
- **Framer Motion** — page transitions, scroll reveals, micro-interactions
- **React Hook Form** — accessible, validated forms with honeypot anti-spam
- **React Helmet Async** — per-page SEO + JSON-LD `Hospital` / `MedicalSpecialty` schema

## Features

- 22 dedicated pages (Home, About, Core Team, 12 Departments, Doctors, Services, Facilities, Health Checkup, Video Consultation, Second Opinion, Appointment, Contact, Career, Academics, Gallery, Events, Blog, Patient Stories, Medical Tourism, Patient Portal, Emergency, 404, Legal)
- Cinematic hero with full-bleed Mittal Hospital building image
- 6-step appointment booking wizard with `localStorage` draft persistence
- Video consultation booking + Second opinion submission with file upload
- 24/7 emergency callback form, in-house pharmacy/blood-bank service cards
- Multi-format navigation: sticky glass navbar + mobile drawer + bottom mobile action bar + floating action cluster
- 12 super-specialty departments with rich SEO content (overview, conditions, procedures, why-choose-us, FAQs, stats)
- Mobile-first responsive (320 px → 1920 px tested)
- WCAG-AA accessible, `prefers-reduced-motion` honoured
- Production build is code-split into `vendor`, `motion`, and `index` chunks

## Project structure

```
mittal hospital/
├── README.md                # this file
├── DEVELOPMENT-PLAN.md      # full 16-section implementation plan
├── .gitignore
├── .claude/launch.json      # dev-server launch configurations
├── mittal-react/            # the React app
│   ├── package.json
│   ├── vite.config.js
│   ├── tailwind.config.js
│   ├── index.html
│   ├── README.md
│   └── src/
│       ├── App.jsx
│       ├── main.jsx
│       ├── index.css
│       ├── data/site.js     # ALL hospital content (CMS-ready)
│       ├── components/
│       └── pages/
└── (legacy static prototype at root, kept for reference)
```

All hospital content (doctors, departments, services, packages, blog, events, careers, facilities, empanelments, milestones, gallery) lives in `mittal-react/src/data/site.js` — swap with an API/CMS by mirroring the same shape.

## Build for production

```bash
cd mittal-react
npm run build        # outputs to mittal-react/dist/
npm run preview      # serve the production build at :4173
```

## Credits

- Sample medical photography by Unsplash
- Real Mittal Hospital logo + building photography from mittalhospital.com (to be replaced before deploy)
- Icons by Font Awesome
- Fonts by Google Fonts (Inter, Poppins, Space Grotesk)

## License

Private — © Mittal Hospital & Research Centre. All rights reserved.
