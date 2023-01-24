import { useEffect, useState } from 'react';

import styled from 'styled-components';

import useGameInitiationSocket from '@hooks/socket/useGameInitiationSocket';
import { useAppSelector } from '@redux/hooks';

import Button from '@components/common/Button';

// TODO: 디자인을 반영해야 한다.
const GameStart = () => {
  const [isGameReadyToStart, setIsGameReadyToStart] = useState<boolean>(false);
  const { room } = useAppSelector((state) => state.gameRoom);
  const { emitGameStart } = useGameInitiationSocket();

  useEffect(() => {
    if (room?.participants.length === 1) {
      setIsGameReadyToStart(false);
      return;
    }
    setIsGameReadyToStart(
      room?.participants.every((participant) => participant.isHost || participant.isReady) ?? false,
    );
  }, [isGameReadyToStart, room]);

  return (
    <GameStartLayout>
      <GameStartButton onClick={emitGameStart} disabled={!isGameReadyToStart}>
        START
      </GameStartButton>
    </GameStartLayout>
  );
};

const GameStartLayout = styled.div`
  background-color: ${(props) => props.theme.colors.darkGrey2};
  width: 628px;
  height: 232px;
  border: ${(props) => props.theme.borders.normalIvory};
  display: flex;
  justify-content: center;
  align-items: center;
`;

const GameStartButton = styled(Button)`
  font-family: ${(props) => props.theme.font.joystick};
  font-size: 28px;
  text-shadow: none;
  background-image: linear-gradient(
    0deg,
    ${(props) => props.theme.colors.purple2} 50%,
    ${(props) => props.theme.colors.ivory2} 50%
  );
  background-size: 100%;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  -webkit-background-clip: text;
  -webkit-text-stroke: 1px ${(props) => props.theme.colors.black1};
  width: 328px;
  height: 72px;
`;

export default GameStart;
