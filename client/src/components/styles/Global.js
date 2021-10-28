import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`

  * {
    box-sizing: border-box;
  }

  body {
    font-family: 'Qahiri', sans-serif;
    color: #333;
    margin: 0;
  }

  p {
    opacity: 0.8;
  }
`

export default GlobalStyles;