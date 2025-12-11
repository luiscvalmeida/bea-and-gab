import { createGlobalStyle } from 'styled-components';
import { theme } from './theme';

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    scroll-behavior: smooth;
  }

  body {
    font-family: ${theme.fonts.body};
    background-color: ${theme.colors.bg};
    color: ${theme.colors.text};
    line-height: 1.6;
    overflow-x: hidden;
  }

  h1, h2, h3, h4 {
    color: ${theme.colors.main};
    margin-bottom: 1rem;
  }

  h1 {
    font-size: 5rem;
    margin-bottom: 0.5rem;

    @media (max-width: ${theme.breakpoints.mobile}) {
      font-size: 3rem;
    }
  }

  h2 {
    font-size: 3rem;
    margin-bottom: 1.5rem;

    @media (max-width: ${theme.breakpoints.mobile}) {
      font-size: 2.5rem;
    }
  }

  h3 {
    font-size: 1.5rem;
    font-weight: 600;
    margin-top: 1rem;
  }

  h4 {
    font-size: 1.2rem;
    font-weight: 600;
    margin-bottom: 0.5rem;
  }

  p {
    margin-bottom: 1rem;
    font-size: 1.1rem;
  }

  a {
    color: inherit;
    text-decoration: none;
    transition: opacity 0.3s;

    &:hover {
      opacity: 0.8;
    }
  }

  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(-10px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;
