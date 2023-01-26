import { DecoratorFn } from '@storybook/react';
import React from 'react';
import { ThemeProvider } from 'styled-components';
import { theme } from '../src/styles/theme';
import { GlobalStyle } from '../src/styles/GlobalStyle';
import '../src/app.css';
import 'react-tooltip/dist/react-tooltip.css';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../src/redux/store';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  viewport: {
    viewports: {
      pc: {
        name: 'Desktop',
        styles: {
          width: '1440px',
          height: '100%',
        },
      },
    },
    defaultViewport: 'pc',
  },
  layout: 'fullscreen',
};

export const reactRouterDecorator: DecoratorFn = (Story) => {
  return (
    <MemoryRouter>
      <Routes>
        <Route path="/*" element={<Story />} />
      </Routes>
    </MemoryRouter>
  );
};

export const reduxDecorator: DecoratorFn = (Story) => {
  return (
    <Provider store={store}>
      <Story />
    </Provider>
  );
};

const withTheme: DecoratorFn = (StoryFn, context) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <StoryFn />
      <div id="modal-root"></div>
      <div id="loading-root"></div>
    </ThemeProvider>
  );
};

export const decorators = [withTheme, reactRouterDecorator, reduxDecorator];
