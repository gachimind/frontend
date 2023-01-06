import { Route, Routes } from 'react-router';
import { BrowserRouter } from 'react-router-dom';

import Main from '@pages/Main';
import Mypage from '@pages/Mypage';
import Room from '@pages/Room';

const App = (): JSX.Element => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/room/:id" element={<Room />} />
        <Route path="/mypage" element={<Mypage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
