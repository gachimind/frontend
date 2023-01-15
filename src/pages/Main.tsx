import { useAuthSocket } from '@hooks/socket/useAuthSocket';

import RoomList from '@components/home/RoomList';
import UserInfo from '@components/home/UserInfo';
import ContentBox from '@components/layout/ContentBox';
import MainLayout from '@components/layout/main/MainLayout';

const Main = () => {
  useAuthSocket();
  return (
    <MainLayout>
      <ContentBox title="SCORE">
        <UserInfo />
      </ContentBox>
      <ContentBox title="ROOM SELECTION">
        <RoomList />
      </ContentBox>
    </MainLayout>
  );
};

export default Main;
