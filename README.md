# Beatriz & Gabriel Wedding Website

This is a static HTML website for Beatriz & Gabriel's wedding.

## How to Run
Simply open `index.html` in any web browser. No server is required, but for the best experience (especially with fonts and some browser security policies), you can run a local server:

```bash
npx serve .
```

## Structure
- `index.html`: Main HTML file containing the content and structure.
- `style.css`: Stylesheet for the rustic, pastel, warm theme.
- `script.js`: JavaScript for the language switcher and mobile menu.
- `assets/`: Folder containing images.

## Language Support
The website supports English (EN), French (FR), and Portuguese (PT).
The content is currently in English. To add translations:
1. Open `script.js`.
2. Locate the `translations` object.
3. Update the `fr` and `pt` sections with the translated text for each key.

## Customization
- **Images**: Replace the placeholder images in `assets/` with real photos.
- **RSVP**: The RSVP section is a placeholder. You can embed a Google Form or Typeform by replacing the content in the `#rsvp` section in `index.html`.
