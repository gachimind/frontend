import React, { useEffect, useState } from 'react';

import styled from 'styled-components';

import useGameInitiationSocket from '@hooks/socket/useGameInitiationSocket';
import { useAppSelector } from '@redux/hooks';

import GameReady from './GameReady';
import GameResultModal from './GameResultModal';
import GameStart from './GameStart';
import PresentationInfo from './PresentationInfo';
import PresenterCam from './PresenterCam';
import PresenterKeywordBox from './PresenterKeywordBox';

const Presenter = () => {
  const { user } = useAppSelector((state) => state.user);
  const { room, scoreMap } = useAppSelector((state) => state.gameRoom);
  const { turn, playState } = useAppSelector((state) => state.gamePlay);
  const [resultModalVisible, setResultModalVisible] = useState<boolean>(false);
  const { emitGameReady, emitGameStart } = useGameInitiationSocket();
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
        <PresenterKeywordBox isMe={isMe} keyword={turn.keyword} answered={turn.answered} />
      )}
      {room?.isGameOn && turn && (
        <PresenterCam
          nickname={presenterNickname}
          isMe={isMe}
          userId={turn.speechPlayer}
          profileImg={currentUser?.profileImg}
        />
      )}
      {!room?.isGameOn && (
        <GameReadyBox>
          {currentUser?.isHost && <GameStart handleClick={emitGameStart} />}
          {currentUser?.isHost === false && <GameReady handleClick={emitGameReady} />}
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

export default React.memo(Presenter);
