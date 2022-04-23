import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  body {
      background-color: ${({ theme }) => theme.background.color};
      margin: 40px auto;
      max-width: 650px;
      line-height: 1.6;
      font-size: 18px;
      padding: 0 10px;
      font-family: 'Source Sans Pro', sans-serif;
      font-style: normal;
    }
  `;
