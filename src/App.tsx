import { Route, Routes } from 'react-router';
import { BrowserRouter } from 'react-router-dom';

import { Provider } from 'react-redux';
import { SingletonHooksContainer } from 'react-singleton-hook';
import { ThemeProvider } from 'styled-components';

import Main from '@pages/Main';
import Mypage from '@pages/Mypage';
import Room from '@pages/Room';
import store from '@redux/store';
import { GlobalStyle } from '@styles/GlobalStyle';
import { theme } from '@styles/theme';

const App = (): JSX.Element => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Provider store={store}>
        <SingletonHooksContainer />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/room/:id" element={<Room />} />
            <Route path="/mypage" element={<Mypage />} />
          </Routes>
        </BrowserRouter>
      </Provider>
    </ThemeProvider>
  );
};

export default App;
