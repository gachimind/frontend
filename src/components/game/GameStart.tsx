import { useEffect, useState } from 'react';

import styled from 'styled-components';

import { useAppSelector } from '@redux/hooks';

import GameButton from '@components/common/GameButton';
import GameButtonContainer from '@components/layout/GameButtonContainer';

// TODO: 디자인을 반영해야 한다.
const GameStart = ({ handleClick }: { handleClick: () => void }) => {
  const [isGameReadyToStart, setIsGameReadyToStart] = useState<boolean>(false);
  const { room } = useAppSelector((state) => state.gameRoom);

  useEffect(() => {
    if (room?.participants.length === 1) {
      setIsGameReadyToStart(false);
      return;
    }
    setIsGameReadyToStart(room?.isGameReadyToStart ?? false);
  }, [isGameReadyToStart, room]);

  return (
    <GameButtonContainer>
      <DescriptionTextBox>
        <p>게임을 시작해볼까요?</p> 시작을 원하시면 아래 버튼을 눌러주세요
      </DescriptionTextBox>
      <GameStartButton onClick={handleClick} disabled={!isGameReadyToStart} visible={isGameReadyToStart}>
        START
      </GameStartButton>
    </GameButtonContainer>
  );
};

const GameStartButton = styled(GameButton)`
  ${(props) => !props.visible && `cursor: not-allowed;`}
`;

const DescriptionTextBox = styled.div`
  text-align: left;
  font-size: 24px;
  line-height: 120%;
  color: ${(props) => props.theme.colors.ivory1};
`;

export default GameStart;
