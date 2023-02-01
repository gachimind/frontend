import { useEffect, useState } from 'react';

import styled, { keyframes } from 'styled-components';

import { getCatInfoByQuery } from '@utils/character';

import CatOnGame from '@components/character/CatOnGame';

import { Participant } from '@customTypes/gameRoomType';

const BarColor = ['#80019F', '#821176', '#E8ADD8', '#535353', '#535353', '#535353'];

interface GameResultCharBarProps {
  score: number;
  maxScore: number;
  participant: Participant;
  index: number;
}

const GameResultBarChart = ({ maxScore, score, participant, index }: GameResultCharBarProps) => {
  const height = score === 0 ? 15 : score ?? 10;
  const [scoreInfo, setScoreInfo] = useState<{ score: number }>({ score: 0 });

  useEffect(() => {
    if (score === scoreInfo.score) {
      return;
    }
    setScoreInfo({ score: score });
  }, [score]);

  const { cat, rocket } = getCatInfoByQuery(participant?.profileImg);
  return (
    <GameResultBarChartLayout
      style={{ height: ((height / maxScore) * 60).toString() + '%', backgroundColor: BarColor[index] }}
    >
      {score !== undefined && (
        <>
          <CatContainerBox id={'id-chart-' + index}>
            <CatOnGame
              catTheme={cat}
              rocketTheme={rocket}
              scale={1.34}
              size="large"
              scoreInfo={scoreInfo}
              nickname={participant.nickname}
              hasIdlePopupAnimation={false}
              catType="body"
              catMarginTop={-7}
            />
          </CatContainerBox>
        </>
      )}
    </GameResultBarChartLayout>
  );
};

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

const GameResultBarChartLayout = styled.li`
  position: relative;
  width: 60px;
  list-style: none;
  -moz-animation: ${graphAnimation} 2s linear;
  -webkit-animation: ${graphAnimation} 2s linear;
  animation: ${graphAnimation} 2s linear;
`;

const CatContainerBox = styled.div`
  position: absolute;
  z-index: 2;
  top: -138px;
  left: -30px;
`;

export default GameResultBarChart;
