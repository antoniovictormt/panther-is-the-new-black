import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  * {    
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Encode Sans Expanded', sans-serif;
  };

  body {
    color: rgb(255, 255, 255);
    background-color: rgba(0, 0, 0, 255);    
  };
`;
