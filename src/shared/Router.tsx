import { Route, Routes } from 'react-router';
import { BrowserRouter } from 'react-router-dom';

import Main from '@pages/Main';
import Mypage from '@pages/Mypage';
import Room from '@pages/Room';

import LoginStatus from '@components/common/LoginStatus';
import OAuthRedirectHandler from '@components/home/OAuthRedirectHandler';

const Router = () => {
  return (
    <BrowserRouter>
      <LoginStatus />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/room/:id" element={<Room />} />
        <Route path="/mypage" element={<Mypage />} />
        <Route path="/login" element={<OAuthRedirectHandler />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
