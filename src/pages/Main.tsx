import { useAuthSocket } from '@hooks/socket/useAuthSocket';

import RoomList from '@components/home/RoomList';
import UserInfo from '@components/home/UserInfo';

const Main = () => {
  useAuthSocket();
  return (
    <div>
      <UserInfo />
      <br />
      <RoomList />
    </div>
  );
};

export default Main;
