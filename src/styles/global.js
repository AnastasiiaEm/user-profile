import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  body {
    font-family: "Open Sans", sans-serif;
    font-weight: 400;
    font-style: normal;
    font-size: 16px;
    letter-spacing: -0.5px;
    line-height: 150%; 
    color: ${({ theme }) => theme.colors.darkGray};
  }

  h1, h2, h3 {
    font-family: 'Montserrat', sans-serif;
    margin: 0;
    font-weight: 600;
    line-height: 108%;
  }

  p {
    margin: 0;
  }
`