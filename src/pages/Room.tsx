import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import styled from 'styled-components';

import { useAuthSocket } from '@hooks/socket/useAuthSocket';
import useErrorSocket from '@hooks/socket/useErrorSocket';
import useGamePlaySocket from '@hooks/socket/useGamePlaySocket';
import useGameSocket from '@hooks/socket/useGameSocket';
import useGameUpdateSocket from '@hooks/socket/useGameUpdateSocket';
import useBeforeUnload from '@hooks/useBeforeUnload';
import useLocalStream from '@hooks/useLocalStream';
import usePopState from '@hooks/usePopState';
import { useAppDispatch, useAppSelector } from '@redux/hooks';
import { addChat, updateRoom } from '@redux/modules/gameRoomSlice';
import { alertToast } from '@utils/toast';

import CamList from '@components/game/CamList';
import ChatLog from '@components/game/ChatLog';
import Presenter from '@components/game/Presenter';
import ScoreBoard from '@components/game/ScoreBoard';
import Timer from '@components/game/Timer';
import EnterPrivateRoomModal from '@components/home/EnterPrivateRoomModal';
import ContentContainer from '@components/layout/ContentContainer';
import RoomTemplate from '@components/layout/RoomTemplate';

// TODO: 컴포넌트 복잡도를 개선한다.
const Room = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { authorized } = useAuthSocket();
  const { userStreamRef, isMediaSuccess } = useAppSelector((state) => state.userMedia);
  const { lastEnteredRoom, broadcastedRooms } = useAppSelector((state) => state.gameRoom);
  const { destroyLocalStream } = useLocalStream();
  const { onAnnounceRoomUpdate, offAnnounceRoomUpdate } = useGameUpdateSocket();
  const { emitUserLeaveRoom, emitJoinRoom, onJoinRoom } = useGameSocket();
  const { onError, offError } = useErrorSocket();
  useGamePlaySocket();
  usePopState();
  useBeforeUnload();

  const [isConfirmedUser, setIsConfirmedUser] = useState<boolean>(false);
  const [passwordModalVisible, setPasswordModalVisible] = useState<boolean>(false);
  const parsedId = parseInt(id ?? '', 10);

  useEffect(() => {
    if (!isMediaSuccess) {
      navigate('/?roomId=' + id);
    }
    onAnnounceRoomUpdate();
    return () => {
      offAnnounceRoomUpdate();
      emitUserLeaveRoom();
      offError();
      userStreamRef && destroyLocalStream(userStreamRef);
      dispatch(updateRoom(null));
      console.log('[destroy] local stream');
    };
  }, []);

  useEffect(() => {
    if (userStreamRef) {
      if (!authorized) {
        alertToast('로그인이 필요한 서비스입니다!', 'warning', {
          hideProgressBar: true,
        });
        navigate('/');
        return;
      }
      if (lastEnteredRoom?.roomId === parsedId) {
        setIsConfirmedUser(true);
        return;
      }
      if (broadcastedRooms.find((room) => room.roomId === parsedId)?.isSecretRoom) {
        setPasswordModalVisible(true);
      } else {
        setIsConfirmedUser(true);
      }
    }
  }, [userStreamRef]);

  useEffect(() => {
    if (authorized && id && isConfirmedUser) {
      const intId = parseInt(id, 10);
      !Number.isNaN(intId) && emitJoinRoom({ roomId: intId, roomPassword: lastEnteredRoom?.password });
      onJoinRoom();
      onError([
        { target: 'event', value: 'enter-room', callback: () => navigate('/', { replace: true }) },
        {
          target: 'event',
          value: 'send-chat',
          callback: (msg: string | undefined) =>
            dispatch(addChat({ message: msg as string, nickname: '', type: 'warning', socketId: '', userId: 0 })),
          skipAlert: true,
        },
      ]);
    }
  }, [id, authorized, isConfirmedUser]);

  const handlePasswordModalClose = () => {
    setPasswordModalVisible(false);
    navigate('/');
  };

  const passwordValidationSuccessHandler = () => {
    setIsConfirmedUser(true);
    setPasswordModalVisible(false);
  };

  return (
    <RoomTemplate>
      {passwordModalVisible && (
        <EnterPrivateRoomModal
          roomId={parsedId}
          roomTitle={broadcastedRooms.find((room) => room.roomId === parsedId)?.roomTitle}
          onClose={handlePasswordModalClose}
          visible={passwordModalVisible}
          successHandler={passwordValidationSuccessHandler}
        />
      )}
      <ContentContainer title="SCORE">
        <ScoreBoard />
      </ContentContainer>
      <MiddleSectionBox>
        <ContentContainer title="PRESENTER">
          <Presenter />
        </ContentContainer>
        <CamListBox>
          <CamList />
        </CamListBox>
      </MiddleSectionBox>
      <RightSectionBox>
        <ContentContainer title="TIMER">
          <Timer />
        </ContentContainer>
        <ContentContainer title="CHATTING">
          <ChatLog />
        </ContentContainer>
      </RightSectionBox>
    </RoomTemplate>
  );
};

const MiddleSectionBox = styled.div`
  height: inherit;
  gap: 32px;
  display: grid;
  grid-template-rows: 47fr 16fr;
`;

const CamListBox = styled.div`
  border: ${(props) => props.theme.borders.thin1};
  padding: 13px 21px;
`;

const RightSectionBox = styled.div`
  height: inherit;
  gap: 23px;
  display: grid;
  grid-template-rows: 5fr 16fr;
`;

export default Room;
