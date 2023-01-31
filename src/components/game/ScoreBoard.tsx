import styled from 'styled-components';

import { BACKGROUND_HEIGHT, BACKGROUND_WIDTH } from '@constants/characters';
import { useAppSelector } from '@redux/hooks';

import StarlightBackground from '@components/common/StarlightBackground';

import PlayerCat from './PlayerCat';

const ScoreBoard = () => {
  const { room } = useAppSelector((state) => state.gameRoom);

  if (!room) {
    return <ScoreBoardLayout></ScoreBoardLayout>;
  }
  return (
    <ScoreBoardLayout>
      <StarlightBackground />
      <PlayerCatBox>
        {room.participants.map((participant) => (
          <PlayerCat key={participant.socketId} participant={participant} />
        ))}
      </PlayerCatBox>
    </ScoreBoardLayout>
  );
};

const ScoreBoardLayout = styled.div`
  color: ${(props) => props.theme.colors.white};
  position: relative;
  overflow: hidden;
  width: ${BACKGROUND_WIDTH + 'px'};
  height: ${BACKGROUND_HEIGHT + 'px'};
`;

const PlayerCatBox = styled.div`
  position: absolute;
  width: 100%;
  left: -28px;
  bottom: -21px;
  display: flex;
  justify-content: space-evenly;
  align-items: flex-end;
  & > * {
    margin-right: -56px;
  }
`;

export default ScoreBoard;
