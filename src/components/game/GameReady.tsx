import { useEffect, useState } from 'react';

import styled from 'styled-components';

import useDebounce from '@hooks/useDebounce';

import GameButton from '@components/common/GameButton';
import GameButtonContainer from '@components/layout/GameButtonContainer';

// TODO: 디자인을 반영해야 한다.
const GameReady = ({ handleClick }: { handleClick: () => void }) => {
  const [isReady, setIsReady] = useState<boolean>(false);
  const [isRenderedFirstTime, setIsRenderedFirstTime] = useState<boolean>(true);
  const debouncedReadyState = useDebounce(isReady, 200);

  useEffect(() => {
    if (isRenderedFirstTime) {
      setIsRenderedFirstTime(false);
      return;
    }
    handleClick();
  }, [debouncedReadyState]);

  return (
    <GameButtonContainer>
      <DescriptionTextBox>
        <p>게임을 시작해볼까요?</p>
        <p>{debouncedReadyState ? '다른 참가자들울 잠시 기다려주세요!' : '시작을 원하시면 레디 버튼을 눌러주세요'}</p>
      </DescriptionTextBox>
      <GameReadyButton visible={!debouncedReadyState} onClick={() => setIsReady(!isReady)}>
        {debouncedReadyState ? 'CANCEL' : 'READY'}
      </GameReadyButton>
    </GameButtonContainer>
  );
};

const DescriptionTextBox = styled.div`
  text-align: left;
  font-size: 24px;
  line-height: 120%;
  width: 456px;
  color: ${(props) => props.theme.colors.ivory1};
`;

const GameReadyButton = styled(GameButton)``;

export default GameReady;
