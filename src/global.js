import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  :root {
      --color-dark: rgba(0, 0, 0, 255);
      --color-primary: rgb(255, 255, 255);
      --color-secundary: rgb(90,17,90);
  }

  * {    
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Encode Sans Expanded', sans-serif;
  };

  body {
    background: var(--color-dark);
  }
`;
