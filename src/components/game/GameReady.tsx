import { useEffect, useState } from 'react';

import styled from 'styled-components';

import useGameInitiationSocket from '@hooks/socket/useGameInitiationSocket';
import useDebounce from '@hooks/useDebounce';

import GameButton from '@components/common/GameButton';
import GameButtonContainer from '@components/layout/GameButtonContainer';

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
    <GameButtonContainer>
      <DescriptionTextBox>
        <p>게임을 시작해볼까요?</p> 시작을 원하시면 아래 버튼을 눌러주세요
      </DescriptionTextBox>
      <GameReadyButton visible={!isReady} onClick={() => setIsReady(!isReady)}>
        READY
      </GameReadyButton>
    </GameButtonContainer>
  );
};

const DescriptionTextBox = styled.div`
  text-align: left;
  font-size: 24px;
  line-height: 120%;
  color: ${(props) => props.theme.colors.ivory1};
`;

const GameReadyButton = styled(GameButton)``;

export default GameReady;
