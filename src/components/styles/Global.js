import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  :root {
    --body-font: 'Poppins', sans-serif;
    --biggest-font-size: 2.25rem;
    --h1-font-size: 1.5rem;
    --h2-font-size: 1.25rem;
    --h3-font-size: 1rem;
    --normal-font-size: .938rem;
    --small-font-size: .813rem;
    --smaller-font-size: .75rem;
    --font-medium: 500;
    --font-semi-bold: 600;
  }

  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }

  html {
    scroll-behavior: smooth;
  }

  body {
    font-family: var(--body-font);
    font-size: var(--normal-font-size);
    color: ${({ theme }) => theme.colors.text};
    background-color: ${({ theme }) => theme.colors.body};
    transition: 0.3s;
  }

  h1, h2, h3 {
    color: ${({ theme }) => theme.colors.title};
    font-weight: var(--font-semi-bold);
  }
  a {
    text-decoration: none;
  }
  ul {
    list-style: none;
  }
  
  h1 {
    font-size: var(--h1-font-size);
  }

  h2 {
    font-size: var(--h2-font-size);
  }

  h3 {
    font-size: var(--h3-font-size);
  }

  p {
    font-size: var(--normal-font-size);
  }

  @media screen and (max-width: 767px) {
    body {
      /* styles for mobile */
    }
  }

  @media screen and (min-width: 768px) {
    body {
      /* styles for desktop */
    }
  }

  @media screen and (min-width: 1024px) {
    :root {
      --biggest-font-size: 4rem;
      --h1-font-size: 2.25rem;
      --h2-font-size: 1.5rem;
      --h3-font-size: 1.25rem;
      --normal-font-size: 1rem;
      --small-font-size: .875rem;
      --smaller-font-size: .813rem;
    }
  }
    /* For 2K & 4K resolutions */
  @media screen and (min-width: 1440px) {
    body {  
      zoom: 1;
    }
  } 
  @media screen and (min-width: 2048px) {
    body {  
      zoom: 1.5;
    }
  }

  @media screen and (min-width: 3840px) {
    body {
      zoom: 2;
    }
  }
`;


export default GlobalStyles;
