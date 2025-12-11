export const theme = {
  colors: {
    main: '#3f510b',
    bg: '#f8f8f8',
    bgAlt: '#f8f8f8',
    text: '#4a4a4a',
    textLight: '#7a7a7a',
    white: '#ffffff',
    error: '#dc3545',
  },
  fonts: {
    title: "'Great Vibes', cursive",
    body: "'Quicksand', sans-serif",
  },
  breakpoints: {
    mobile: '768px',
  },
} as const;

export type Theme = typeof theme;
