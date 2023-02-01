import { useEffect, useState } from 'react';

import styled, { keyframes } from 'styled-components';

import { useAppSelector } from '@redux/hooks';
import { filterKeyword } from '@utils/common';

import GameReady from './GameReady';
import GameResultModal from './GameResultModal';
import GameStart from './GameStart';
import PresentationInfo from './PresentationInfo';
import PresenterCam from './PresenterCam';

const Presenter = () => {
  const { user } = useAppSelector((state) => state.user);
  const { room, scoreMap } = useAppSelector((state) => state.gameRoom);
  const { turn, playState } = useAppSelector((state) => state.gamePlay);
  const [resultModalVisible, setResultModalVisible] = useState<boolean>(false);
  const currentUser = room?.participants.find((participant) => participant.userId === user?.userId);
  const presenterNickname =
    room?.participants.find((participant) => participant.userId === turn?.speechPlayer)?.nickname ?? '';
  const isMe = user?.userId === turn?.speechPlayer;

  useEffect(() => {
    if (playState?.event === 'gameEnd') {
      setResultModalVisible(true);
    }
  }, [playState]);

  return (
    <PresenterLayout>
      {(playState?.event === 'readyTimer' || playState?.event === 'startCount') && (
        <PresentationInfo
          isMe={isMe}
          keyword={turn?.keyword as string}
          nickname={presenterNickname}
          event={playState.event}
        />
      )}
      {playState?.event === 'speechTimer' && turn && (
        <PresenterKeywordBox>
          <p>
            제시어:&nbsp;<span>{isMe ? turn.keyword : filterKeyword(turn.keyword)}</span>
          </p>
        </PresenterKeywordBox>
      )}
      {room?.isGameOn && turn && <PresenterCam nickname={presenterNickname} isMe={isMe} userId={turn.speechPlayer} />}
      {!room?.isGameOn && (
        <GameReadyBox>
          {currentUser?.isHost && <GameStart />}
          {currentUser?.isHost === false && <GameReady />}
        </GameReadyBox>
      )}
      {resultModalVisible && room && (
        <GameResultModal
          visible={resultModalVisible}
          onClose={() => setResultModalVisible(false)}
          participants={room.participants}
          scoreMap={scoreMap}
          userId={user?.userId as number}
        />
      )}
    </PresenterLayout>
  );
};

const PresenterLayout = styled.div`
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
`;

const GameReadyBox = styled.div`
  position: absolute;
  top: 110px;
  right: -40px;
`;

const KeywordSlide = keyframes`
0% {
  height: 220px;
  background-color: inherit;
  font-size: 40px;
  color: red;
}
  100% {
    height: 42px;
    background-color: rgba(28, 28, 28, 0.7);
  }
`;

const PresenterKeywordBox = styled.div`
  position: absolute;
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: flex-end;
  top: 38px;
  background-color: rgba(28, 28, 28, 0.7);
  z-index: 3;
  padding: 10px 0;
  color: ${(props) => props.theme.colors.white};
  height: 42px;
  animation: ${KeywordSlide} 0.75s 0s;
  font-size: 14px;
  & > p > span {
    font-size: 20px;
    font-weight: 500;
  }
`;

export default Presenter;
