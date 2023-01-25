import styled from 'styled-components';

import MicOnIcon from '@assets/svg_micOnIcon.svg';
import { useAppSelector } from '@redux/hooks';

import PlayerImageHolder from '@components/game/PlayerImageHolder';

import GameReady from './GameReady';
import GameStart from './GameStart';
import PresentationInfo from './PresentationInfo';
import PresenterCam from './PresenterCam';

// TODO: 마이크 꺼졌을때 아이콘 추가하기
const Presenter = () => {
  const { user } = useAppSelector((state) => state.user);
  const { room } = useAppSelector((state) => state.gameRoom);
  const { turn, playState } = useAppSelector((state) => state.gamePlay);
  const currentUser = room?.participants.find((participant) => participant.userId === user?.userId);
  const presenterNickname =
    room?.participants.find((participant) => participant.userId === turn?.speechPlayer)?.nickname ?? '';

  return (
    <PresenterLayout>
      {turn && currentUser && playState?.event === 'readyTimer' && (
        <PresentationInfo
          isMe={user?.userId === turn.speechPlayer}
          keyword={turn.keyword}
          nickname={presenterNickname}
        />
      )}
      {room?.isGameOn && turn && (
        <PresenterCam
          nickname={presenterNickname}
          isMe={user?.userId === turn.speechPlayer}
          userId={turn.speechPlayer}
        />
      )}
      {!room?.isGameOn && <GameReadyBox>{currentUser?.isHost ? <GameStart /> : <GameReady />}</GameReadyBox>}
    </PresenterLayout>
  );
};

const PresenterLayout = styled.div`
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
`;

// TODO: 디자인 보고 수정
const GameReadyBox = styled.div`
  position: absolute;
  top: 110px;
  right: -40px;
`;

export default Presenter;
