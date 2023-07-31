import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

:root{
  --white: #FFFFFF;
  --black: #000000;
  --dark-green: #727A43;
  --highlight-green: #9BA55F;
  --beige: #FFF8ED;
  --background-green: #EEF2E5;
  --completed: #c0f2b1;
  --uncompleted: #f2b5b1;
  --menu: #b7c29f;
}

  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    padding: 0;
    font-family: Arial, Helvetica, sans-serif;
    background-color: var(--background-green);
  }

  h1,
h2,
h3,
h4,
h5,
h6,
p,
ul,
figure,
blockquote,
dl,
dd {
  padding: 0;
  margin: 0}

  button {
  border: none;
  background-color: transparent;
  font-family: inherit;
  padding: 0;
  cursor: pointer;
}

li {
  list-style-type: none;
}

`;
