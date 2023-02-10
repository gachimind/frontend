import { Navigate, Route, Routes } from 'react-router';
import { BrowserRouter } from 'react-router-dom';

import Main from '@pages/Main';
import Mypage from '@pages/Mypage';
import Room from '@pages/Room';

import OAuthRedirectHandler from '@components/home/OAuthRedirectHandler';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/room/:id" element={<Room />} />
        <Route path="/mypage" element={<Mypage />} />
        <Route path="/login" element={<OAuthRedirectHandler />} />
        <Route path="/*" element={<Navigate to="/" replace={true} />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
