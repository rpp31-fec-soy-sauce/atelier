import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`

  * {
    box-sizing: border-box;
  }


  ::-webkit-scrollbar {
  -webkit-appearance: none;
  width: 7px;
  }

  ::-webkit-scrollbar-thumb {
    border-radius: 4px;
    background-color: rgba(0, 0, 0, .5);
    box-shadow: 0 0 1px rgba(255, 255, 255, .5);
  }

  body {
    font-family: 'Qahiri', sans-serif;
    color: #333;
    margin: 0;
  }

  p {
    opacity: 0.8;
  }

  .checkbox {
    height: 18px; 
    width: 18px;
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

  .scroll {
    margin:4px, 4px;
    padding:4px;
    background-color: green;
    width: 500px;
    height: 110px;
    overflow-x: hidden;
    overflow-y: auto;
    text-align:justify;
  }
`

export default GlobalStyles;