import { createGlobalStyle } from 'styled-components';

import { colors } from './theme';

export const GlobalStyle = createGlobalStyle`
* {
    font-family: 'IBM Plex Mono', monospace;
    margin: 0;
    padding: 0;
    border: 0;
    vertical-align: baseline;
    box-sizing: border-box;
  }

  body {
    width: 100vw;
    height: 100vh;
    background-color: ${colors.darkGrey2};
  }

  #root {
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    width: 100%;
    height: 100%;
    overflow: hidden;
  }

`;
