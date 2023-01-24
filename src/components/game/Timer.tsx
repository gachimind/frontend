import styled from 'styled-components';

import useGameTimeCountDown from '@hooks/useGameTimeCountDown';

const Timer = () => {
  const { count, description } = useGameTimeCountDown();

  function convertTimeFormat(counter: number) {
    return `0${Math.floor(counter / 60000)}:${((counter % 60000) / 1000).toString().padStart(2, '0')}`;
  }

  return (
    <TimerLayout>
      <TimeDescriptionText>{description}</TimeDescriptionText>
      <TimeLeaveText>{convertTimeFormat(count)}</TimeLeaveText>
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
