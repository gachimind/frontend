import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

import styled from 'styled-components';

import { useAuthSocket } from '@hooks/socket/useAuthSocket';
import useGameSocket from '@hooks/socket/useGameSocket';
import useGameUpdateSocket from '@hooks/socket/useGameUpdateSocket';
import useLocalStream from '@hooks/useLocalStream';
import { useAppSelector } from '@redux/hooks';

import CamList from '@components/game/CamList';
import ChatLog from '@components/game/ChatLog';
import Presenter from '@components/game/Presenter';
import ScoreBoard from '@components/game/ScoreBoard';
import ContentBox from '@components/layout/ContentBox';
import RoomLayout from '@components/layout/room/RoomLayout';

const Room = () => {
  const { id } = useParams();
  const { authorized } = useAuthSocket();
  const { userStreamRef } = useAppSelector((state) => state.userMedia);
  const { destroyLocalStream } = useLocalStream();
  const { onAnnounceRoomUpdate } = useGameUpdateSocket();
  const { emitUserLeaveRoom, emitJoinRoom, onJoinRoom } = useGameSocket();
  useEffect(() => {
    return () => emitUserLeaveRoom();
  }, []);

  useEffect(() => {
    if (userStreamRef) {
      return () => {
        destroyLocalStream(userStreamRef);
        console.log('[destroy] local stream');
      };
    }
  }, [userStreamRef]);

  useEffect(() => {
    onAnnounceRoomUpdate();
    if (authorized) {
      id && emitJoinRoom({ roomId: parseInt(id, 10) });
      onJoinRoom();
    }
  }, [id, authorized]);

  return (
    <RoomLayout>
      <ContentBox title="SCORE">
        <ScoreBoard />
      </ContentBox>
      <MiddleSectionBox>
        <ContentBox title="PRESENTER">
          <Presenter />
        </ContentBox>
        <CamListBox>{/* <CamList /> */}</CamListBox>
      </MiddleSectionBox>
      <RightSectionBox>
        <ContentBox title="TIMER">
          <TimerBox>00:00</TimerBox>
        </ContentBox>
        <ContentBox title="CHATTING">
          <ChatLog />
        </ContentBox>
      </RightSectionBox>
    </RoomLayout>
  );
};

const MiddleSectionBox = styled.div`
  height: inherit;
  gap: 32px;
  display: grid;
  grid-template-rows: 5fr 2fr;
`;

const CamListBox = styled.div`
  border: ${(props) => props.theme.borders.camList};
`;

const RightSectionBox = styled.div`
  height: inherit;
  gap: 23px;
  display: grid;
  grid-template-rows: 1fr 3fr;
`;

const TimerBox = styled.div`
  font-size: 40px;
  color: ${(props) => props.theme.colors.outline};
  margin-top: 30px;
  display: flex;
  justify-content: center;
`;

export default Room;
