import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  *{
      font-family: "Roboto", sans-serif;
      color: white;
  }
  body{
      margin: 0;
      padding: 30px 230px;
    background: linear-gradient(to right, #000000, #3533cd); 
  }
  p {
    width: 800px;
    margin: auto;
    text-align: justify;
  }
`;
