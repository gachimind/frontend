import { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import styled from 'styled-components';

import { useAuthSocket } from '@hooks/socket/useAuthSocket';
import useErrorSocket from '@hooks/socket/useErrorSocket';
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
  const navigate = useNavigate();
  const { authorized } = useAuthSocket();
  const { userStreamRef, isMediaSuccess } = useAppSelector((state) => state.userMedia);
  const { lastEnteredRoom } = useAppSelector((state) => state.gameRoom);
  const { destroyLocalStream } = useLocalStream();
  const { onAnnounceRoomUpdate, offAnnounceRoomUpdate } = useGameUpdateSocket();
  const { emitUserLeaveRoom, emitJoinRoom, onJoinRoom } = useGameSocket();
  const { onError } = useErrorSocket();

  useEffect(() => {
    if (!isMediaSuccess) {
      navigate('/?roomId=' + id);
    }
    return () => {
      offAnnounceRoomUpdate();
      emitUserLeaveRoom();
    };
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
    if (authorized && id) {
      const intId = parseInt(id, 10);
      !Number.isNaN(intId) && emitJoinRoom({ roomId: intId, roomPassword: lastEnteredRoom?.password });
      onError([{ target: 'event', value: 'enter-room', callback: () => navigate('/', { replace: true }) }]);
      onJoinRoom();
    }
  }, [id, authorized]);

  return (
    <RoomTemplate>
      <ContentContainer title="SCORE" lights={true}>
        <ScoreBoard />
      </ContentContainer>
      <MiddleSectionBox>
        <ContentContainer title="PRESENTER" lights={true}>
          <Presenter />
        </ContentContainer>
        <CamListBox>
          <CamList />
        </CamListBox>
      </MiddleSectionBox>
      <RightSectionBox>
        <ContentContainer title="TIMER">
          <TimerBox>
            <span>00:00</span>
          </TimerBox>
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
  border: ${(props) => props.theme.borders.thinGrey};
  padding: 13px 21px;
`;

const RightSectionBox = styled.div`
  height: inherit;
  gap: 23px;
  display: grid;
  grid-template-rows: 2500fr 8183fr;
`;

const TimerBox = styled.div`
  display: flex;
  justify-content: center;

  span {
    margin-top: 30px;
    font-size: 40px;
    color: ${(props) => props.theme.colors.ivory1};
    font-family: ${(props) => props.theme.font.korean};
  }
`;

export default Room;
