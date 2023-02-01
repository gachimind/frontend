import { useEffect, useState } from 'react';

import styled from 'styled-components';

import useGameInitiationSocket from '@hooks/socket/useGameInitiationSocket';
import { useAppSelector } from '@redux/hooks';

import GameButton from '@components/common/GameButton';

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
    <GameStartLayout>
      <GameStartButton onClick={emitGameStart} disabled={!isGameReadyToStart} visible={isGameReadyToStart}>
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

const GameStartButton = styled(GameButton)`
  ${(props) => !props.visible && `cursor: not-allowed;`}
`;

export default GameStart;
