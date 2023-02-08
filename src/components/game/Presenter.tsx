import React, { useEffect, useState } from 'react';

import styled from 'styled-components';

import useChatSocket from '@hooks/socket/useChatSocket';
import useGameInitiationSocket from '@hooks/socket/useGameInitiationSocket';
import { useAppDispatch, useAppSelector } from '@redux/hooks';
import { setEvaluated } from '@redux/modules/gamePlaySlice';
import { useGetUserInfoQuery } from '@redux/query/user';
import { alertToast } from '@utils/toast';

import GameReady from './GameReady';
import GameResultModal from './GameResultModal';
import GameStart from './GameStart';
import PresentationInfo from './PresentationInfo';
import PresenterCam from './PresenterCam';
import PresenterKeywordBox from './PresenterKeywordBox';
import PresentEvaluate from './PresentEvaluate';

const Presenter = () => {
  const { data: user } = useGetUserInfoQuery();
  const dispatch = useAppDispatch();
  const { room, scoreMap } = useAppSelector((state) => state.gameRoom);
  const { turn, playState, isTurnEvaluated } = useAppSelector((state) => state.gamePlay);
  const [resultModalVisible, setResultModalVisible] = useState<boolean>(false);
  const { emitGameReady, emitGameStart } = useGameInitiationSocket();
  const { emitTurnEvaluation } = useChatSocket();
  const currentUser = room?.participants.find((participant) => participant.userId === user?.userId);
  const presenter = room?.participants.find((participant) => participant.userId === turn?.speechPlayer);
  const isMe = user?.userId === turn?.speechPlayer;

  const isEvaluatable = () => {
    return playState?.event === 'discussionTimer' && user?.userId !== turn?.speechPlayer && !isTurnEvaluated;
  };

  useEffect(() => {
    if (playState?.event === 'gameEnd') {
      setResultModalVisible(true);
    }
    if (isEvaluatable()) {
      alertToast(`정답은 "${turn?.keyword}" 입니다.`, 'success', {
        hideProgressBar: true,
        autoClose: 9000,
      });
    }
  }, [playState]);

  useEffect(() => {
    dispatch(setEvaluated(false));
  }, [turn]);

  return (
    <PresenterLayout>
      <PresentationInfo
        isMe={isMe}
        keyword={turn?.keyword as string}
        nickname={presenter?.nickname ?? ''}
        event={playState?.event}
      />
      {playState?.event === 'speechTimer' && turn && (
        <PresenterKeywordBox isMe={isMe} keyword={turn.keyword} answered={turn.answered} />
      )}
      {room?.isGameOn && turn && (
        <PresenterCam
          nickname={presenter?.nickname ?? ''}
          isMe={isMe}
          userId={turn.speechPlayer}
          profileImg={presenter?.profileImg}
        />
      )}
      {!room?.isGameOn && (
        <GameReadyBox>
          {currentUser?.isHost && <GameStart handleClick={emitGameStart} />}
          {currentUser?.isHost === false && <GameReady handleClick={emitGameReady} />}
        </GameReadyBox>
      )}
      {isEvaluatable() && (
        <ScoreEvaluateBox>
          <PresentEvaluate currentTurn={turn?.currentTurn ?? 0} emitEvaluate={emitTurnEvaluation} />
        </ScoreEvaluateBox>
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

const ScoreEvaluateBox = styled.div`
  position: absolute;
  top: 110px;
  right: -40px;
  z-index: 3;
`;

export default React.memo(Presenter);
