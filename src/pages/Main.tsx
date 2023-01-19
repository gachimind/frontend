import { useEffect } from 'react';

import useErrorSocket from '@hooks/socket/useErrorSocket';
import { useAppDispatch } from '@redux/hooks';
import { logout } from '@redux/modules/userSlice';
import { __getUserInfo } from '@redux/modules/userSlice';

import RoomList from '@components/home/RoomList';
import UserInfo from '@components/home/UserInfo';
import ContentContainer from '@components/layout/ContentContainer';
import MainTemplate from '@components/layout/MainTemplate';

const Main = () => {
  const dispatch = useAppDispatch();

  const { onError } = useErrorSocket();

  useEffect(() => {
    onError([{ target: 'status', value: 403, callback: () => dispatch(logout()) }]);
  }, []);

  useEffect(() => {
    sessionStorage.setItem('accessToken', 'token1');
    dispatch(__getUserInfo());
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
