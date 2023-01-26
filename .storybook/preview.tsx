import { DecoratorFn } from '@storybook/react';
import React from 'react';
import { ThemeProvider } from 'styled-components';
import { theme } from '../src/styles/theme';
import { GlobalStyle } from '../src/styles/GlobalStyle';
import '../src/app.css';
import 'react-tooltip/dist/react-tooltip.css';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  layout: 'fullscreen',
};

const withTheme: DecoratorFn = (StoryFn, context) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <StoryFn id="root" />
      <div id="modal-root"></div>
      <div id="loading-root"></div>
    </ThemeProvider>
  );
};

export const decorators = [withTheme];
