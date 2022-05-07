// External modules
import { css } from '@emotion/react';

const globalStyles = css`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  html,
  body,
  div,
  span,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  a,
  img,
  ol,
  ul,
  li,
  aside,
  figure,
  figcaption,
  footer,
  header,
  nav,
  section {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
  }

  aside,
  figcaption,
  figure,
  footer,
  header,
  nav,
  section {
    display: block;
  }

  body {
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif;
    line-height: 1;
  }

  ol,
  ul {
    list-style: none;
  }

  img {
    max-width: 100%;
  }

  a {
    display: inline-block;
    color: inherit;
    text-decoration: none;
  }

  :root {
    --color-primary: #128ebf;
    --color-secondary: #43beae;
    --color-dark: #374957;
    --color-dusk: #83858d;
    --color-light: #f5f7f9;
    --color-soft: #e5e7ee;
    --color-white: #ffffff;
  }
`;

export default globalStyles;
