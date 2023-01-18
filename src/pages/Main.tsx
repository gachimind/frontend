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
    // XXX: 이것 말고 메인 페이지에서 날만한 예외가 없을까 모르겠다..?? 예외정보가 너무 추상적이다.
    onError({ target: 'event', value: PUBLISH.login }, () => dispatch(logout()));
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
