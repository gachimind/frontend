import { useEffect, useState } from 'react';

import styled from 'styled-components';

import ScoreLarge from '@assets/img_scoreLarge.png';
import ScoreSmall from '@assets/img_scoreSmall.png';

export interface CatScoreProps {
  score: number;
  size: 'large' | 'small';
}

const CatScore = ({ score, size = 'small' }: CatScoreProps) => {
  const [restScore, setRestScore] = useState<number>(0);
  const [totalScore, setTotalScore] = useState<number>(0);
  const [correctScore, setCorrectScore] = useState<number>(0);

  useEffect(() => {
    if (score === 0) {
      setRestScore(0);
      setTotalScore(0);
      setCorrectScore(0);
      return;
    }
    if (score < totalScore || score % 10 !== 0) {
      return;
    }
    setRestScore(score - totalScore);
    setCorrectScore(score);
  }, [score]);

  useEffect(() => {
    if (!restScore) {
      totalScore !== 0 && setTotalScore(correctScore);
      return;
    }
    const timeoutId = setTimeout(() => {
      setTotalScore((prev) => prev + 10);
      setRestScore((prev) => prev - 10);
    }, 10);
    return () => {
      clearTimeout(timeoutId);
    };
  }, [restScore]);

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
