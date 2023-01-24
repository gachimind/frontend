import styled from 'styled-components';

import MicOnIcon from '@assets/svg_micOnIcon.svg';
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

  return (
    <PresenterLayout>
      {turn && currentUser && playState?.event === 'readyTimer' && (
        <PresentationInfo
          isMe={user?.userId === turn.speechPlayer}
          keyword={turn.keyword}
          nickname={room?.participants.find((participant) => participant.userId === turn.speechPlayer)?.nickname ?? ''}
        />
      )}
      <PresenterCam />
      {!room?.isGameOn && <GameReadyBox>{currentUser?.isHost ? <GameStart /> : <GameReady />}</GameReadyBox>}
      <PresenterStatusBox>
        <div>
          <ImageHolder></ImageHolder>
          <span>{user?.nickname}</span>
        </div>
        <img src={MicOnIcon} />
      </PresenterStatusBox>
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

const PresenterStatusBox = styled.div`
  position: absolute;
  background-color: rgba(0, 0, 0, 0.5);
  width: 100%;
  height: 58px;
  bottom: 0;
  padding-left: 24px;
  padding-right: 24px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  div {
    gap: 16px;
    display: flex;
    justify-content: center;
    align-items: center;

    span {
      color: ${(props) => props.theme.colors.white};
      font-size: 16px;
      font-family: ${(props) => props.theme.font.notoSansKR};
      font-weight: 500;
    }
  }
`;

const ImageHolder = styled.span`
  background-color: ${(props) => props.theme.colors.white};
  box-shadow: 0 0 0 3px #000 inset;
  border: 2px solid ${(props) => props.theme.colors.white};
  border-radius: 50%;
  width: 40px;
  height: 40px;
`;

export default Presenter;
