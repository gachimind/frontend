import { useEffect } from 'react';

import { PUBLISH } from '@constants/socket';
import { useAuthSocket } from '@hooks/socket/useAuthSocket';
import useErrorSocket from '@hooks/socket/useErrorSocket';
import { useAppDispatch } from '@redux/hooks';
import { logout } from '@redux/modules/userSlice';

import RoomList from '@components/home/RoomList';
import UserInfo from '@components/home/UserInfo';
import ContentContainer from '@components/layout/ContentContainer';
import MainTemplate from '@components/layout/MainTemplate';

const Main = () => {
  useAuthSocket();
  const dispatch = useAppDispatch();
  const { onError } = useErrorSocket();

  useEffect(() => {
    onError([{ target: 'status', value: 403, callback: () => dispatch(logout()) }]);
  }, []);

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
