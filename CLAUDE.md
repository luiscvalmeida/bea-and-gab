# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

React wedding website for Beatriz & Gabriel's wedding (August 2026). Multi-language support (EN, FR, PT) with RSVP form submission to Google Sheets.

## Tech Stack

- **Framework**: React 18 + TypeScript
- **Build Tool**: Vite
- **Styling**: Styled Components
- **i18n**: react-i18next
- **Linting**: ESLint + Prettier (with pre-commit hooks via Husky)
- **Hosting**: GitHub Pages

## Development

```bash
yarn install    # Install dependencies
yarn dev        # Start dev server (http://localhost:5173)
yarn build      # Production build to dist/
yarn preview    # Preview production build
yarn lint       # Run ESLint
```

## Architecture

### File Structure

```
src/
├── components/
│   ├── common/        # Button, Divider, Section
│   ├── layout/        # Navbar, MobileMenu, LanguageSwitcher, Footer
│   └── sections/      # MainSection, AccommodationSection, RSVPSection, etc.
├── i18n/
│   ├── index.ts       # i18next configuration
│   └── translations/  # en.json, fr.json, pt.json
├── styles/
│   ├── theme.ts       # Theme constants (colors, fonts)
│   └── GlobalStyles.ts
├── App.tsx
└── main.tsx
```

### Language System

Translations are JSON files in `src/i18n/translations/`. Components use the `useTranslation` hook from react-i18next. For HTML content, use the `<Trans>` component.

### RSVP Form

Form logic lives in `src/components/sections/RSVPSection/RSVPForm.tsx`. Submits to Google Apps Script. Uses localStorage (`rsvp_submitted`) to prevent duplicate submissions.

### Image Delivery

Production uses Cloudinary URLs with transformation parameters. Local backups in `public/assets/`.

### Hosting

- GitHub Actions workflow (`.github/workflows/deploy.yml`) builds and deploys to GitHub Pages
- Custom domain configured via `public/CNAME`
- Pushes to `main` trigger automatic deployment

### Pre-commit Hooks

Husky + lint-staged runs Prettier and ESLint on staged files before each commit.
