import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
  background: ${props => props.theme.colors.gray100};
  color: ${props => props.theme.colors.gray200};
  width: 100vw;
  }

  h1 {
  color: ${props => props.theme.colors.blue100};
  }

  body,
  input,
  textarea,
  select,
  button {
    font: 400 1rem 'Roboto', sans-serif;
  }

  button {
    cursor: pointer;
  }

  ul,
  ol {
    list-style: none;
  }

  a {
    text-decoration: none;
    color: inherit;
  }
`;
