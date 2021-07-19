import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
`;

const AppWrapper = styled.div`
  max-width: 1200px;
  margin: auto;
`;


export { GlobalStyle, AppWrapper };