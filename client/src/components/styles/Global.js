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
      font-size: 40px;
      line-height: 32px;
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
      color: black;
      
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