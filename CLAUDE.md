# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Static wedding website for Beatriz & Gabriel. Single-page application with multi-language support (EN, FR, PT).

## Development

```bash
# Run locally (no build required - static HTML)
npx serve .
```

Or simply open `index.html` in a browser.

## Architecture

**Static SPA Structure:**
- `index.html` - Single page with all sections (Main, Accommodation, Transport, RSVP, Kids, Dress Code, Gifts)
- `style.css` - All styles with CSS custom properties
- `script.js` - Language switcher and mobile menu functionality
- `assets/` - Images

**Internationalization:**
- Uses `data-i18n` attributes on HTML elements
- `translations` object in `script.js` contains all strings for EN/FR/PT
- `setLanguage(lang)` function updates all translatable elements

**Navigation:**
- Fixed navbar with section links
- Mobile hamburger menu with slide-down overlay
- Language switcher in both desktop and mobile nav

## Design System

**CSS Variables (defined in `:root`):**
- `--color-main`: #3f510b (olive green)
- `--color-bg`: #f8f8f8
- `--font-title`: 'Great Vibes' (cursive, Google Fonts)
- `--font-body`: 'Quicksand' (Google Fonts)

**Style Guidelines:**
- Rustic, pastel, warm, cozy aesthetic
- `.title-font` class for decorative headings
- `.btn` class for buttons
- Section dividers use repeated flower images

## Adding Translations

1. Add translation key-value pairs to the `translations` object in `script.js` for each language (en, fr, pt)
2. Add `data-i18n="key.name"` attribute to HTML elements
3. Mobile menu links need manual duplication (not using data-i18n)
