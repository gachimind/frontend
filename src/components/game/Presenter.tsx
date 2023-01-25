import styled, { keyframes } from 'styled-components';

import { useAppSelector } from '@redux/hooks';

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
  const isMe = user?.userId === turn?.speechPlayer;

  return (
    <PresenterLayout>
      {turn && currentUser && playState?.event === 'readyTimer' && (
        <PresentationInfo isMe={isMe} keyword={turn.keyword} nickname={presenterNickname} />
      )}
      {isMe && playState?.event === 'speechTimer' && (
        <PresenterKeywordBox>
          제시어:&nbsp;<span>{turn?.keyword}</span>
        </PresenterKeywordBox>
      )}
      {room?.isGameOn && turn && <PresenterCam nickname={presenterNickname} isMe={isMe} userId={turn.speechPlayer} />}
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
  & > span {
    font-size: 20px;
    font-weight: 500;
  }
`;

export default Presenter;
