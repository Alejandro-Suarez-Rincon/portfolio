# Juan Alejandro Suarez Rincon — Portfolio

Personal portfolio built with Next.js 16, React, TypeScript and Tailwind CSS. Features a bilingual interface (EN / ES), dark/light mode, and a custom i18n system without external libraries.

## Stack

- **Framework:** Next.js 16 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS 4
- **Fonts:** Geist (Vercel)
- **Theming:** next-themes
- **i18n:** Custom React Context (no external library)

## Features

- Bilingual — English / Spanish toggle, persisted in `localStorage`
- Dark / light mode
- Responsive design
- Sections: Hero, Work Experience, Personal Projects, Education, Contact
- Dynamic project pages with three layout templates (wide, standard, minimal)

## Getting Started

```bash
pnpm install
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000).

## Project Structure

```
src/
├── app/                   # Pages and root layout
│   └── projects/[slug]/   # Dynamic project pages
├── components/            # Reusable UI components
├── modules/projects/      # Project page templates
├── data/                  # Projects, work experience, education
├── i18n/                  # Translation system (context, locales, utils)
└── types/                 # TypeScript interfaces
```

## Adding Content

**New project** — add an entry to `src/data/projects.ts`. Thumbnail goes in `public/images/projects/<slug>-thumb.png`.

**New work experience** — add an entry to `src/data/work.ts`.

**New education entry** — add an entry to `src/data/education.ts`.

All data fields support an optional `translations.es` object for Spanish content.

## Deploy

```bash
git checkout main
git merge feature/restart
git push origin main
```

Vercel picks up the push automatically and redeploys.
