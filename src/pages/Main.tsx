import { useEffect, useState } from 'react';

import { PUBLISH } from '@constants/socket';
import useErrorSocket from '@hooks/socket/useErrorSocket';
import { useAppDispatch } from '@redux/hooks';
import { logout } from '@redux/modules/userSlice';

import RoomList from '@components/home/RoomList';
import UserInfo from '@components/home/UserInfo';
import ContentContainer from '@components/layout/ContentContainer';
import MainTemplate from '@components/layout/MainTemplate';

const Main = () => {
  const dispatch = useAppDispatch();
  const { onError, offError } = useErrorSocket();

  useEffect(() => {
    onError([{ target: 'event', value: PUBLISH.login, callback: () => dispatch(logout()) }]);
    return () => {
      offError();
    };
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
