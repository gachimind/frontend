import { useEffect, useState } from 'react';

import styled from 'styled-components';

import useGameInitiationSocket from '@hooks/socket/useGameInitiationSocket';
import useDebounce from '@hooks/useDebounce';

import Button from '@components/common/Button';

// TODO: 디자인을 반영해야 한다.
const GameReady = () => {
  const [isReady, setIsReady] = useState<boolean>(false);
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
    <GameReadyLayout>
      <GameReadyButton isReady={isReady} onClick={() => setIsReady(!isReady)}>
        READY
      </GameReadyButton>
    </GameReadyLayout>
  );
};

const GameReadyLayout = styled.div`
  background-color: ${(props) => props.theme.colors.darkGrey2};
  width: 628px;
  height: 232px;
  border: ${(props) => props.theme.borders.normalIvory};
  display: flex;
  justify-content: center;
  align-items: center;
`;

const GameReadyButton = styled(Button)<{ isReady: boolean }>`
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
  opacity: ${(props) => (props.isReady ? 0.3 : 1)};
  width: 328px;
  height: 72px;
`;

export default GameReady;
