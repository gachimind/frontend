import './app.css';
import 'react-tooltip/dist/react-tooltip.css';

import { Provider } from 'react-redux';
import { SingletonHooksContainer } from 'react-singleton-hook';
import { ThemeProvider } from 'styled-components';

import store from '@redux/store';
import { GlobalStyle } from '@styles/GlobalStyle';
import { theme } from '@styles/theme';

import ToastProvider from '@components/common/ToastProvider';

import Router from './shared/Router';

const App = (): JSX.Element => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Provider store={store}>
        <SingletonHooksContainer />
        <ToastProvider />
        <Router />
      </Provider>
    </ThemeProvider>
  );
};

export default App;
