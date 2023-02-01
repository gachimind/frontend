import { useEffect, useState } from 'react';

import useErrorSocket from '@hooks/socket/useErrorSocket';
import useDuplicatedUserInvalidate from '@hooks/useDuplicatedUserInvalidate';
import { useAppDispatch, useAppSelector } from '@redux/hooks';
import { logout } from '@redux/modules/userSlice';

import RoomList from '@components/home/RoomList';
import SetUpInfoModal from '@components/home/SetUpInfoModal';
import UserInfo from '@components/home/UserInfo';
import ContentContainer from '@components/layout/ContentContainer';
import MainTemplate from '@components/layout/MainTemplate';

const Main = () => {
  const user = useAppSelector((state) => state.user.user);
  const dispatch = useAppDispatch();
  const { onError, offError } = useErrorSocket();
  const { invalidate } = useDuplicatedUserInvalidate();

  useEffect(() => {
    onError([
      { target: 'status', value: 401, callback: () => dispatch(logout()) },
      { target: 'status', value: 409, callback: invalidate, skipAlert: true },
    ]);
    return () => {
      offError();
    };
  }, []);

  const [SetUpInfoModalVisible, setSetUpInfoModalVisible] = useState<boolean>(false);

  useEffect(() => {
    if (user?.isFirstLogin) {
      setSetUpInfoModalVisible(true);
    }
  }, [user]);

  return (
    <MainTemplate>
      <ContentContainer title="PROFILE">
        <UserInfo />
        {SetUpInfoModalVisible && (
          <SetUpInfoModal visible={SetUpInfoModalVisible} onClose={() => setSetUpInfoModalVisible(false)} />
        )}
      </ContentContainer>
      <ContentContainer title="ROOM SELECTION">
        <RoomList />
      </ContentContainer>
    </MainTemplate>
  );
};

export default Main;
