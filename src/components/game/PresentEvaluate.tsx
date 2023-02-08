import { useEffect, useState } from 'react';

import styled from 'styled-components';

import { useAppDispatch } from '@redux/hooks';
import { setEvaluated } from '@redux/modules/gamePlaySlice';

import Button from '@components/common/Button';
import CircularProgress from '@components/common/CircularProgress';
import GameButtonContainer from '@components/layout/GameButtonContainer';

import RatingCats from './RatingCats';

export interface PresentEvaluateProps {
  currentTurn: number;
  emitEvaluate: (score: number, turn: number) => void;
}

const PresentEvaluate = ({ currentTurn, emitEvaluate }: PresentEvaluateProps) => {
  const [inputScore, setInputScore] = useState<number>(1);
  const dispatch = useAppDispatch();

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      dispatch(setEvaluated(true));
    }, 7000);
    return () => {
      clearTimeout(timeoutId);
    };
  }, []);

  const handleSetScoreChange = (value: number) => {
    setInputScore(value);
  };

  const handleEvaluateButtonClick = () => {
    emitEvaluate(inputScore, currentTurn);
    dispatch(setEvaluated(true));
  };

  return (
    <GameButtonContainer>
      <CircularProgressBox>
        <CircularProgress second={7} />
      </CircularProgressBox>
      <PresentEvaluateLayout>
        <DescriptionContainer>
          <DescriptionText>발표를 평가해주세요!!</DescriptionText>
          <SubDescriptionText>미제출 시 최고점으로 자동 평가됩니다!</SubDescriptionText>
        </DescriptionContainer>
        <RatingCats setInputScore={handleSetScoreChange} />
        <ButtonContainer>
          <SubmitButton onClick={handleEvaluateButtonClick}>평가하기</SubmitButton>
          <LeaveButton onClick={() => dispatch(setEvaluated(true))}>취소하기</LeaveButton>
        </ButtonContainer>
      </PresentEvaluateLayout>
    </GameButtonContainer>
  );
};

const PresentEvaluateLayout = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  grid-row-gap: 30px;
`;

const CircularProgressBox = styled.div`
  position: absolute;
  transform: scale(0.7);
  right: 0;
  top: 0;
`;

const DescriptionContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  grid-row-gap: 12px;
`;

const DescriptionText = styled.p`
  font-size: 24px;
  color: ${(props) => props.theme.colors.ivory1};
`;

const SubDescriptionText = styled.p`
  font-size: 14px;
  color: ${(props) => props.theme.colors.lightGrey10};
`;

const ButtonContainer = styled.div`
  margin-top: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  grid-column-gap: 30px;
`;

const LeaveButton = styled(Button)`
  font-size: 18px;
  width: 120px;
  height: 48px;
`;

const SubmitButton = styled(Button)`
  font-size: 18px;
  background-color: ${(props) => props.theme.colors.purple1};
  width: 120px;
  height: 48px;
`;

export default PresentEvaluate;
