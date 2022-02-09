import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  html, body {
    height: 100%;
  }
  body {
    margin: 0;
    padding: 0;
    max-height: 720px;
    min-height: 480px;
    max-width: 1920px;
    min-width: 1024px;
    font-family: 'Noto Sans KR', sans-serif;
    @media screen and (max-width: 500px) {
      min-width: 320px;
      min-height: 667px;
    }
  }
`;

export default GlobalStyle;
