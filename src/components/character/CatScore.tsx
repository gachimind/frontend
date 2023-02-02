import { useEffect, useState } from 'react';

import styled from 'styled-components';

import ScoreLarge from '@assets/img_scoreLarge.png';
import ScoreSmall from '@assets/img_scoreSmall.png';
import { useAppSelector } from '@redux/hooks';

export interface CatScoreProps {
  scoreInfo?: {
    score: number;
  };
  size: 'large' | 'small';
}

const CatScore = ({ scoreInfo, size = 'small' }: CatScoreProps) => {
  const [totalScore, setTotalScore] = useState<number>(0);
  const [restScore, setRestScore] = useState<number>(0);
  const { scoreMap } = useAppSelector((state) => state.gameRoom);

  useEffect(() => {
    if (!scoreInfo?.score) {
      return;
    }
    setRestScore(scoreInfo.score);
  }, [scoreInfo]);

  useEffect(() => {
    if (restScore === 0 || !scoreInfo?.score) {
      return;
    }
    const timeoutId = setTimeout(() => {
      setTotalScore((prev) => prev + 1);
      setRestScore((prev) => prev - 1);
    }, 1000 / scoreInfo?.score);
    return () => {
      clearTimeout(timeoutId);
    };
  }, [restScore]);

  useEffect(() => {
    if (Object.keys(scoreMap).length === 0) {
      setTotalScore(0);
      setRestScore(0);
    }
  }, [scoreMap]);

  return (
    <CatScoreLayout size={size}>
      <div>
        <img src={size === 'small' ? ScoreSmall : ScoreLarge} />
      </div>
      <Score size={size}>{Math.round(totalScore).toString().padStart(4, '0')}</Score>
    </CatScoreLayout>
  );
};

const CatScoreLayout = styled.div<{ size: 'small' | 'large' }>`
  position: relative;
  width: ${(props) => (props.size === 'small' ? '58.67px' : '88px')};
  height: ${(props) => (props.size === 'small' ? '21.33px' : '32px')};
  & > div {
    position: absolute;
    left: 0;
    top: 0;
  }
`;

const Score = styled.span<{ size: 'small' | 'large' }>`
  position: absolute;
  right: ${(props) => (props.size === 'small' ? '4px' : '8px')};
  top: ${(props) => (props.size === 'small' ? '3px' : '6px')};
  color: ${(props) => props.theme.colors.ivory2};
  font-size: ${(props) => (props.size === 'small' ? '14px' : '20px')};
`;

export default CatScore;
