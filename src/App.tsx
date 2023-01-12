import { Route, Routes } from 'react-router';
import { BrowserRouter } from 'react-router-dom';

import { Provider } from 'react-redux';
import { SingletonHooksContainer } from 'react-singleton-hook';
import { createGlobalStyle } from 'styled-components';

import Main from '@pages/Main';
import Mypage from '@pages/Mypage';
import Room from '@pages/Room';
import store from '@redux/store';

// TODO: globalstyle 다시 적용하기
const App = (): JSX.Element => {
  return (
    <>
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
    </>
  );
};

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@300&display=swap');
  font-family: 'IBM Plex Mono', monospace;
`;

export default App;
