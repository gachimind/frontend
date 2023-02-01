import { useEffect, useState } from 'react';

import styled from 'styled-components';

import useGameInitiationSocket from '@hooks/socket/useGameInitiationSocket';
import useDebounce from '@hooks/useDebounce';

import GameButton from '@components/common/GameButton';

// TODO: 디자인을 반영해야 한다.
const GameReady = () => {
  const [isReady, setIsReady] = useState<boolean>(false);
  const [isRenderedFirstTime, setIsRenderedFirstTime] = useState<boolean>(true);
  const debouncedReadyState = useDebounce(isReady, 200);
  const { emitGameReady } = useGameInitiationSocket();

  useEffect(() => {
    if (isRenderedFirstTime) {
      setIsRenderedFirstTime(false);
      return;
    }
    emitGameReady();
  }, [debouncedReadyState]);

  return (
    <GameReadyLayout>
      <GameReadyButton visible={!isReady} onClick={() => setIsReady(!isReady)}>
        READY
      </GameReadyButton>
    </GameReadyLayout>
  );
};

const GameReadyLayout = styled.div`
  background-color: ${(props) => props.theme.colors.darkGrey2};
  width: 628px;
  height: 232px;
  border: ${(props) => props.theme.borders.normal1};
  display: flex;
  justify-content: center;
  align-items: center;
`;

const GameReadyButton = styled(GameButton)``;

export default GameReady;
