import styled from 'styled-components';

import useGameTimeCountDown from '@hooks/useGameTimeCountDown';
import { convertLeaveCounterFormat } from '@utils/common';

const Timer = () => {
  const { count, description } = useGameTimeCountDown();

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
