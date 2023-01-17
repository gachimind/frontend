import styled from 'styled-components';

import ImageHolderIcon from '@assets/svg_imageHolderIcon.svg';
import MicOnIcon from '@assets/svg_micOnIcon.svg';
import { useAppSelector } from '@redux/hooks';

import GameReady from './GameReady';
import GameStart from './GameStart';

// TODO: 마이크 꺼졌을때 아이콘 추가하기
const Presenter = () => {
  const { user } = useAppSelector((state) => state.user);
  const { room } = useAppSelector((state) => state.gameRoom);
  const currentUser = room?.participants.find((participant) => participant.userId === user?.userId);
  return (
    <PresenterLayout>
      <PresenterCamBox>CAM</PresenterCamBox>
      <GameReadyBox>
        {!room?.isGameOn && currentUser?.isHost ? (
          <GameStart isGameReadyToStart={room?.isGameReadyToStart ?? false} />
        ) : (
          <GameReady readyStatus={currentUser?.isReady ?? false} />
        )}
      </GameReadyBox>
      <PresenterStatusBox>
        <div>
          <img src={ImageHolderIcon} />
          <span>{user?.nickname}</span>
        </div>
        <img className="mic-icon" src={MicOnIcon} />
      </PresenterStatusBox>
    </PresenterLayout>
  );
};

const PresenterLayout = styled.div`
  position: absolute;
  top: 0;
  height: 100%;
  width: 100%;
`;

const PresenterCamBox = styled.div`
  position: absolute;
  top: 39px;
  left: 0;
`;

// TODO: 디자인 보고 수정
const GameReadyBox = styled.div`
  position: absolute;
  top: 39px;
  right: 0;
`;

const PresenterStatusBox = styled.div`
  position: absolute;
  background-color: rgba(0, 0, 0, 0.5);
  width: 100%;
  height: 58px;
  bottom: 0;
  padding-left: 24px;
  display: flex;
  align-items: center;

  div {
    gap: 16px;
    display: flex;
    justify-content: center;
    align-items: center;

    span {
      color: ${(props) => props.theme.colors.white};
      font-family: ${(props) => props.theme.font.korean};
      font-weight: 700;
      font-size: 16px;
    }
  }

  .mic-icon {
    margin-left: 319px;
  }
`;

export default Presenter;
