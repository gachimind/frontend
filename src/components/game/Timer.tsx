import { useEffect } from 'react';

import styled from 'styled-components';

import timeTick from '@assets/sounds/tick.wav';
import useGameTimeCountDown from '@hooks/useGameTimeCountDown';
import useSound from '@hooks/useSound';
import { convertLeaveCounterFormat } from '@utils/common';

const Timer = () => {
  const { count, description } = useGameTimeCountDown();
  const { playSound } = useSound();
  useEffect(() => {
    if (count > 0 && count <= 5000) {
      playSound(timeTick, 0.1);
    }
  }, [count]);
  return (
    <TimerLayout>
      <TimeDescriptionText>{description}</TimeDescriptionText>
      <TimeLeaveText>{convertLeaveCounterFormat(count, true)}</TimeLeaveText>
    </TimerLayout>
  );
};

const TimerLayout = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100px;
  color: ${(props) => props.theme.colors.ivory1};
`;

const TimeDescriptionText = styled.p`
  font-size: 18px;
`;

const TimeLeaveText = styled.p`
  font-size: 40px;
`;

export default Timer;
