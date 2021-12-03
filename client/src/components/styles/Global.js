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
    // background-color: rgba(0, 0, 0, .5);
    background-color: lightgrey;
    box-shadow: 0 0 1px rgba(255, 255, 255, .5);
  }

  body {
    font-family: 'Qahiri', sans-serif;
    // color: #333;
    color: ${({ theme }) => theme.fontColor};
    background-color: ${({ theme }) => theme.body};
    margin: 0;
  }

  p {
    opacity: 0.8;
  }

  a {
    color: ${({ theme }) => theme.fontColor};
  }

  .checkbox {
    height: 18px;
    width: 18px;
    background-color: #ffff;
  }

  .single-star-outline {
    height: 26px;
    width: 21px;

  }

  .single-star-fill {
    position: relative;
    display: inline-block;
    height: 26px;
    // background-color: #333333;
    background-color: ${({ theme }) => theme.star};
  }

  .single-star-container {
    height: 26px;
    width: 21px;
    display: inline-block;
    background-color: #ffff;

    img {
      ${({ theme }) => {
      if (theme.body === '#353535') return `
          filter: invert(0.8);
          `
      }}
    }
  }

  .single-star-outline-small {
    height: 16px;
    width: 11px;
  }

  .single-star-fill-small {
    position: relative;
    display: inline-block;
    height: 16px;
    // background-color: #333333;
    background-color: ${({ theme }) => theme.star};
  }

  .single-star-container-small {
    height: 16px;
    width: 11px;
    display: inline-block;
    background-color: #ffff;

    img {
      ${({ theme }) => {
      if (theme.body === '#353535') return `
          filter: invert(0.8);
          `
      }}
    }
  }

  .rate-area {
    float:left;
    border-style: none;
  }

  .rate-area:not(:checked) > input {
      position:absolute;
      top:-9999px;
      clip:rect(0,0,0,0);
  }

  .rate-area:not(:checked) > label {
      float: right;
      width: .80em;
      overflow: hidden;
      white-space: nowrap;
      cursor: pointer;
      font-size: 24px;
      line-height: 16px;
      color: lightgrey;
      margin-bottom: 10px !important;
  }

  .rate-area:not(:checked) > label:before {
      content: '★';
  }

  .rate-area > input:checked ~ label {
      color: black;
      text-shadow: none;
  }

  .rate-area:not(:checked) > label:hover,
  .rate-area:not(:checked) > label:hover ~ label {
      // color: black;
      color: ${({ theme }) => theme.star};

  }

  .rate-area > input:checked + label:hover,
  .rate-area > input:checked + label:hover ~ label,
  .rate-area > input:checked ~ label:hover,
  .rate-area > input:checked ~ label:hover ~ label,
  .rate-area > label:hover ~ input:checked ~ label {
      color: black;
      text-shadow: none;

  }

  .rate-area > label:active {
      position:relative;
      top:0px;
      left:0px;
  }

`

export default GlobalStyles;