import styled from 'styled-components';

import { useAppSelector } from '@redux/hooks';

// TODO: 임시로 점수만 나타낸 것을 수정해야함
const ScoreBoard = () => {
  const { room } = useAppSelector((state) => state.gameRoom);
  return (
    <ScoreBoardLayout>
      {room?.participants.map((participant) => (
        <p key={participant.userId}>
          {participant.nickname} : {participant.score ?? 0}
        </p>
      ))}
    </ScoreBoardLayout>
  );
};

const ScoreBoardLayout = styled.div`
  color: ${(props) => props.theme.colors.white};
`;

export default ScoreBoard;
