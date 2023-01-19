import { useEffect } from 'react';

import { useAuthSocket } from '@hooks/socket/useAuthSocket';
import { useAppDispatch } from '@redux/hooks';
import { __getUserInfo } from '@redux/modules/userSlice';

import RoomList from '@components/home/RoomList';
import UserInfo from '@components/home/UserInfo';
import ContentContainer from '@components/layout/ContentContainer';
import MainTemplate from '@components/layout/MainTemplate';

const Main = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    sessionStorage.setItem('accessToken', 'token1');
    dispatch(__getUserInfo());
  }, []);

  useAuthSocket();
  return (
    <MainTemplate>
      <ContentContainer title="SCORE" lights={true}>
        <UserInfo />
      </ContentContainer>
      <ContentContainer title="ROOM SELECTION" lights={true}>
        <RoomList />
      </ContentContainer>
    </MainTemplate>
  );
};

export default Main;
