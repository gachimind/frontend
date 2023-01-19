import styled from 'styled-components';

import useGameInitiationSocket from '@hooks/socket/useGameInitiationSocket';

// TODO: 디자인을 반영해야 한다.
const GameStart = ({ isGameReadyToStart }: { isGameReadyToStart: boolean }) => {
  const { emitGameStart } = useGameInitiationSocket();

  return (
    <GameStartLayout>
      <button onClick={emitGameStart} disabled={!isGameReadyToStart}>
        게임시작
      </button>
    </GameStartLayout>
  );
};

const GameStartLayout = styled.div``;

export default GameStart;
