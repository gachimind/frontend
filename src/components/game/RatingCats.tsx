import { useState } from 'react';

import styled, { keyframes } from 'styled-components';

import cursorIcon from '@assets/svg_cursorIcon.svg';

import CatIcon from '@components/character/CatIcon';

export interface RatingCatsProps {
  setInputScore: (value: number) => void;
}

const RatingCats = ({ setInputScore }: RatingCatsProps) => {
  const [selectedList, setSelectedList] = useState<boolean[]>([true]);

  const handleRatingCatClick = (index: number) => {
    setInputScore(index + 1);
    setSelectedList([...Array(5)].map((_, idx) => index >= idx));
  };

  return (
    <RatingCatsLayout>
      {[...Array(5)].map((_, index) => (
        <RatingCatBox key={index} selected={selectedList[index]}>
          <div onClick={() => handleRatingCatClick(index)}></div>
          <CatIcon catTheme="white" />
        </RatingCatBox>
      ))}
    </RatingCatsLayout>
  );
};

const RatingCatsLayout = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 36px;
`;

const RatingCatRotateAnimation = keyframes`
    0% {
        transform: rotate(-1deg);
    }
    50% {
        transform: rotate(1deg);
    }
    100% {
        transform: rotate(-1deg);
    }
`;

const RatingCatBox = styled.div<{ selected: boolean }>`
  position: relative;
  transform: scale(2.1);
  margin-right: 36px;
  opacity: ${(props) => (props.selected ? 1 : 0.3)};
  & > div:first-child {
    position: absolute;
    cursor: url(${cursorIcon}), pointer;
    left: 2px;
    top: 2px;
    width: 26px;
    height: 21px;
    z-index: 2;
  }
  & > div:nth-child(2) {
    animation: ${RatingCatRotateAnimation} ${(props) => (props.selected ? 0.3 : 0)}s infinite;
    -webkit-animation: ${RatingCatRotateAnimation} ${(props) => (props.selected ? 0.3 : 0)}s infinite;
    -moz-animation: ${RatingCatRotateAnimation} ${(props) => (props.selected ? 0.3 : 0)}s infinite;
  }
`;

export default RatingCats;
