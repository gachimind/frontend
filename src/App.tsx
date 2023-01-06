import { BrowserRouter } from 'react-router-dom';
import { Route, Routes } from 'react-router';
import Main from '@pages/Main';
import Room from '@pages/Room';
import Mypage from '@pages/Mypage';

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
