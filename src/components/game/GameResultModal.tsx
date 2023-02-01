import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import styled from 'styled-components';

import { useAppDispatch } from '@redux/hooks';
import { clearScore } from '@redux/modules/gameRoomSlice';

import Button from '@components/common/Button';
import Modal from '@components/common/Modal';

import { Participant } from '@customTypes/gameRoomType';

import GameResultBarChart from './GameResultBarChart';

export interface GameResultModalProps {
  visible: boolean;
  onClose: () => void;
  participants: Participant[];
  scoreMap: { [key: number]: number };
  userId: number;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const GameResultModal = ({ visible, onClose, participants, scoreMap, userId }: GameResultModalProps) => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const [sortedParticipants, setSortedParticipants] = useState<Participant[]>([]);
  const [sortedScore, setSortedScore] = useState<number[]>([]);

  useEffect(() => {
    const sorted = [...participants].sort((o1, o2) => scoreMap[o2.userId] - scoreMap[o1.userId]);
    setSortedParticipants(sorted);
    setSortedScore(sorted.map((participant) => scoreMap[participant.userId]));
    return () => {
      dispatch(clearScore());
    };
  }, []);

  return (
    <Modal visible={visible} onClose={onClose} title="SCORE" width={640}>
      <GameResultModalLayout>
        <span>YOUR SCORE</span>
        <ResultBox>
          <ul>
            <GameResultBarChart
              index={4}
              maxScore={sortedScore[0]}
              score={sortedScore[4]}
              participant={sortedParticipants[4]}
            />
            <GameResultBarChart
              index={2}
              maxScore={sortedScore[0]}
              score={sortedScore[2]}
              participant={sortedParticipants[2]}
            />
            <GameResultBarChart
              index={0}
              maxScore={sortedScore[0]}
              score={sortedScore[0]}
              participant={sortedParticipants[0]}
            />
            <GameResultBarChart
              index={1}
              maxScore={sortedScore[0]}
              score={sortedScore[1]}
              participant={sortedParticipants[1]}
            />
            <GameResultBarChart
              index={3}
              maxScore={sortedScore[0]}
              score={sortedScore[3]}
              participant={sortedParticipants[3]}
            />
            <GameResultBarChart
              index={5}
              maxScore={sortedScore[0]}
              score={sortedScore[5]}
              participant={sortedParticipants[5]}
            />
          </ul>
        </ResultBox>
        <ButtonBox>
          <LeaveRoomButton onClick={() => navigate('/', { replace: true })}>나가기</LeaveRoomButton>
          <ContinueGameButton onClick={onClose}>계속하기</ContinueGameButton>
        </ButtonBox>
      </GameResultModalLayout>
    </Modal>
  );
};

const GameResultModalLayout = styled.div`
  padding: 68px 68px;
  gap: 32px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  & > span {
    font-family: ${(props) => props.theme.font.joystick};
    font-size: 32px;
    color: ${(props) => props.theme.colors.ivory2};
    text-shadow: 0px 4px 0px #797979;
  }
`;

const ResultBox = styled.div`
  position: relative;
  width: 532px;
  height: 400px;
  ${(props) => props.theme.borders.bottomRightWhiteBorder};

  ul {
    position: absolute;
    bottom: 0;
    left: 0;
    padding: 0 32px;
    gap: 20px;
    display: flex;
    flex-direction: row;
    align-items: flex-end;
    overflow: hidden;
    height: 100%;
  }
`;

const ButtonBox = styled.div`
  font-family: inherit;
  gap: 24px;
  display: flex;
  justify-content: center;
  margin-top: 10px;
`;

const LeaveRoomButton = styled(Button)`
  font-size: 24px;
  width: 250px;
  height: 72px;
`;

const ContinueGameButton = styled(Button)`
  font-size: 24px;
  background-color: ${(props) => props.theme.colors.purple1};
  width: 250px;
  height: 72px;
`;

export default GameResultModal;
