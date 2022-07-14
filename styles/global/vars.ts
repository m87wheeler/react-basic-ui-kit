import { css } from "styled-components";

export const vars = css`
  :root {
    --color-white: 255, 255, 255;
    --color-black: 0, 0, 0;

    --color-primary: 255, 0, 0;
    --color-primary-contrast: rgb(var(--color-white));

    --font-family-sans: sans-serif;
    --font-family-serif: serif;
    --font-family-mono: monospace;

    --font-size-xs: 0.75rem;
    --font-size-sm: 0.9rem;
    --font-size-md: 1rem;
    --font-size-lg: 1.1rem;
    --font-size-xl: 1.25rem;
    --font-size-h6: 1.5rem;
    --font-size-h5: 2rem;
    --font-size-h4: 2.75rem;
    --font-size-h3: 3.5rem;
    --font-size-h2: 4.25rem;
    --font-size-h1: 5.5rem;
  }
`;
