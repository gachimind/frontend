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
    return () => {
      if (isRenderedFirstTime) {
        setIsRenderedFirstTime(false);
        return;
      }
      emitGameReady();
    };
  }, [debouncedReadyState]);

  return (
    <GameReadyLayout>
      <button onClick={() => setIsReady(!isReady)}>
        <img src={readyButton} />
      </button>
    </GameReadyLayout>
  );
};

const GameReadyLayout = styled.div`
  button {
    cursor: pointer;
    background-color: ${(props) => props.theme.colors.darkGrey2};
    width: 628px;
    height: 232px;
    border: ${(props) => props.theme.borders.normalIvory};
  }
`;

export default GameReady;
