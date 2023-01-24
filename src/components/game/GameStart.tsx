import { useEffect, useState } from 'react';

import styled from 'styled-components';

import startButton from '@assets/svg_startButton.svg';
import useGameInitiationSocket from '@hooks/socket/useGameInitiationSocket';
import { useAppSelector } from '@redux/hooks';

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
    setIsGameReadyToStart(room?.isGameReadyToStart ?? false);
  }, [isGameReadyToStart, room]);

  return (
    <GameStartLayout isReady={isGameReadyToStart}>
      <button onClick={emitGameStart} disabled={!isGameReadyToStart}>
        <img src={startButton} />
      </button>
    </GameStartLayout>
  );
};

const GameStartLayout = styled.div<{ isReady: boolean }>`
  button {
    cursor: pointer;
    background-color: ${(props) => props.theme.colors.darkGrey2};
    width: 628px;
    height: 232px;
    border: ${(props) => props.theme.borders.normalIvory};
  }

  img {
    opacity: ${(props) => (props.isReady ? 1 : 0.3)};
  }
`;

export default GameStart;
