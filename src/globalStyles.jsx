import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    transition: color .3s, background-color .3s;
  }

  body {
    min-height: 100vh;
    color: ${({ theme }) => theme.colors.font};
    background-color: ${({ theme }) => theme.colors.primary};
    font-family: ${({ theme }) => theme.font.families.primary};
  }

  #root {
    display: flex;
    justify-content: center;
    align-content: center;
    flex-direction: column;
    gap: 2rem;
  }
`;

export default GlobalStyles;
