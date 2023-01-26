import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { Tooltip as ReactTooltip } from 'react-tooltip';
import styled, { keyframes } from 'styled-components';

import { useAppDispatch } from '@redux/hooks';
import { clearScore } from '@redux/modules/gameRoomSlice';

import Button from '@components/common/Button';
import Modal from '@components/common/Modal';

import { Participant } from '@customTypes/gameRoomType';

export interface GameResultModalProps {
  visible: boolean;
  onClose: () => void;
  participants: Participant[];
  userId: number;
}

const GameResultModal = ({ visible, onClose, participants, userId }: GameResultModalProps) => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const sortedParticipants = [...participants].sort((o1, o2) => o2.score - o1.score);
  const sortedScore = sortedParticipants.map((participant) => participant.score);
  const maxScore = sortedScore[0];

  useEffect(() => {
    return () => {
      dispatch(clearScore());
    };
  }, []);

  return (
    <Modal visible={visible} onClose={onClose} title="SCORE" width={640}>
      <GameResultModalLayout>
        <span>SCORE RESULT</span>
        <ResultBox>
          <ul>
            {[...Array(6)].map((_, index) => {
              const height = sortedScore[index] === 0 ? 15 : sortedScore[index] ?? 10;
              console.log(height);
              return (
                <>
                  <li
                    id={'id-chart-' + index}
                    key={index}
                    style={{ height: ((height / maxScore) * 80).toString() + '%' }}
                  />
                  {sortedScore[index] !== undefined && (
                    <ReactTooltip anchorId={'id-chart-' + index} place={index === 0 ? 'right' : 'top'}>
                      <p style={{ fontSize: '18px', marginBottom: '10px' }}>
                        &nbsp;{sortedParticipants[index].nickname}
                        {userId === sortedParticipants[index].userId && '(ME)'}
                      </p>
                      <p style={{ fontSize: '16px' }}>&nbsp;{sortedParticipants[index].score + '점'}</p>
                    </ReactTooltip>
                  )}
                </>
              );
            })}
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
  padding: 68px 72px;
  gap: 32px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  span {
    font-family: ${(props) => props.theme.font.joystick};
    font-size: 32px;
    color: ${(props) => props.theme.colors.ivory2};
    text-shadow: 0px 4px 0px #797979;
  }
`;

const graphAnimation = keyframes`
  0% {
    -moz-transform: translateY(100%);
    -webkit-transform: translateY(100%);
    transform: translateY(100%);
  }
  100% {
    -moz-transform: translateY(0%);
    -webkit-transform: translateY(0%);
    transform: translateY(0%);
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
    left: 32px;
    gap: 20px;
    display: flex;
    flex-direction: row;
    align-items: flex-end;
    overflow: hidden;
    height: 100%;
  }

  li {
    width: 60px;
    list-style: none;
    background-color: ${(props) => props.theme.colors.darkGrey4};
    -moz-animation: ${graphAnimation} 2s linear;
    -webkit-animation: ${graphAnimation} 2s linear;
    animation: ${graphAnimation} 2s linear;
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
