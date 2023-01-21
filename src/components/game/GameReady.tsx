import { useEffect, useState } from 'react';

import styled from 'styled-components';

import readyButton from '@assets/svg_readyButton.svg';
import useGameInitiationSocket from '@hooks/socket/useGameInitiationSocket';
import useDebounce from '@hooks/useDebounce';

// TODO: 디자인을 반영해야 한다.
const GameReady = ({ readyStatus }: { readyStatus: boolean }) => {
  const [isReady, setIsReady] = useState<boolean>(readyStatus);
  const [isRenderedFirstTime, setIsRenderedFirstTime] = useState<boolean>(true);
  const debouncedReadyState = useDebounce(isReady, 200);
  const { emitGameReady } = useGameInitiationSocket();

  useEffect(() => {
    if (isRenderedFirstTime) {
      setIsRenderedFirstTime(false);
    }
    emitGameReady();
  }, [debouncedReadyState]);

  return (
    <GameReadyLayout isReady={isReady}>
      <button onClick={() => setIsReady(!isReady)}>
        <img src={readyButton} />
      </button>
    </GameReadyLayout>
  );
};

const GameReadyLayout = styled.div<{ isReady: boolean }>`
  button {
    cursor: pointer;
    background-color: ${(props) => props.theme.colors.darkGrey2};
    width: 628px;
    height: 232px;
    border: ${(props) => props.theme.borders.normalIvory};
  }

  img {
    opacity: ${(props) => (props.isReady ? 0.3 : 1)};
  }
`;

export default GameReady;
