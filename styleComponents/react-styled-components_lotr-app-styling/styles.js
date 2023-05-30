import { createGlobalStyle } from "styled-components";
import { Lora } from "next/font/google";

const lora = Lora({
  subsets: ["latin"],
  style: ["normal", "italic"],
});

export const GlobalStyle = createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  body {
    font-family: ${lora.style.fontFamily}, serif;
  }

  p{
    margin:16px;
    max-width:680px;
  }

  ul{
    padding-inline-start:unset;
    margin-bottom: 48px;
  }


  .prev{
   
  }
`;
