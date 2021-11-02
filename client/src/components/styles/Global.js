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

  .single-star-outline {
    height: 26px;
    width: 21px;
  }

  .single-star-fill {
    position: relative;
    display: inline-block;
    height: 26px;
    background-color: #333333;
  }

  .single-star-container {
    height: 26px;
    width: 21px;
    display: inline-block;
  }

  .single-star-outline-small {
    height: 16px;
    width: 11px;
  }

  .single-star-fill-small {
    position: relative;
    display: inline-block;
    height: 16px;
    background-color: #333333;
  }

  .single-star-container-small {
    height: 16px;
    width: 11px;
    display: inline-block;
  }
`

export default GlobalStyles;