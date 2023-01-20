import styled from 'styled-components';

import startButton from '@assets/svg_startButton.svg';
import useGameInitiationSocket from '@hooks/socket/useGameInitiationSocket';

// TODO: 디자인을 반영해야 한다.
const GameStart = ({ isGameReadyToStart }: { isGameReadyToStart: boolean }) => {
  const { emitGameStart } = useGameInitiationSocket();

  return (
    <GameStartLayout>
      <button onClick={emitGameStart} disabled={!isGameReadyToStart}>
        <img src={startButton} />
      </button>
    </GameStartLayout>
  );
};

const GameStartLayout = styled.div`
  button {
    background-color: ${(props) => props.theme.colors.darkGrey2};
    width: 628px;
    height: 232px;
    border: ${(props) => props.theme.borders.normalIvory};
  }
`;

export default GameStart;
