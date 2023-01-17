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
import ContentContainer from '@components/layout/ContentContainer';
import RoomTemplate from '@components/layout/RoomTemplate';

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
    <RoomTemplate>
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
          <TimerBox>00:00</TimerBox>
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
  border: ${(props) => props.theme.borders.camList};
  padding: 16px 39px;
`;

const RightSectionBox = styled.div`
  height: inherit;
  gap: 23px;
  display: grid;
  grid-template-rows: 1fr 3fr;
`;

const TimerBox = styled.div`
  font-size: 40px;
  color: ${(props) => props.theme.colors.ivory1};
  margin-top: 30px;
  display: flex;
  justify-content: center;
`;

export default Room;
