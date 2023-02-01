import styled, { keyframes } from 'styled-components';

import { BACKGROUND_HEIGHT, BACKGROUND_WIDTH } from '@constants/characters';
import { getRandomInt } from '@utils/common';

export interface StaticStarProps {
  width?: number;
  height?: number;
  amount?: number;
}

const StaticStar = ({ amount = 700, height = BACKGROUND_HEIGHT, width = BACKGROUND_WIDTH }: StaticStarProps) => {
  const floorAmount = Math.floor(amount / 2);
  return (
    <StaticStarLayout>
      <div>
        {[...Array(floorAmount)].map((_, index) => (
          <span
            key={index}
            style={{
              left: getRandomInt(10, width - 10),
              top: getRandomInt(-90, height - 10),
              width: index > 40 ? '1px' : '1.5px',
              height: index > 40 ? '1px' : '1.5px',
            }}
          ></span>
        ))}
      </div>
      <div>
        {[...Array(floorAmount)].map((_, index) => (
          <span
            key={floorAmount + index}
            style={{
              left: getRandomInt(10, width - 10),
              top: getRandomInt(-90, height - 10),
              width: index > 40 ? '1px' : '1.5px',
              height: index > 40 ? '1px' : '1.5px',
            }}
          ></span>
        ))}
      </div>
    </StaticStarLayout>
  );
};

const MoveFrames = keyframes`
  0% {
    transform: rotate(0) ;
  }
  50% {
    transform: rotate(1deg) translateY(100px) scale3d(1.15, 1.15, 1);
  }
  100% {
    transform: rotate(0deg);
  }
`;

const FadeFrames = keyframes`
  0% {
    opacity: 1;
  }
  50% {
    opacity: 0.8;
  }
  100% {
    opacity: 1;
  }
`;

const StaticStarLayout = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  animation: ${FadeFrames} 0.1s infinite;
  -webkit-animation: ${FadeFrames} 0.1s infinite;
  -moz-animation: ${FadeFrames} 0.1s infinite;

  & > div {
    animation: ${MoveFrames} 90s infinite ease-in-out;
    -webkit-animation: ${MoveFrames} 90s infinite ease-in-out;
    -moz-animation: ${MoveFrames} 90s infinite ease-in-out;
  }
  & > div:first-child {
    -moz-animation-delay: -45s;
    -webkit-animation-delay: -45s;
    animation-delay: -45s;
  }
  span {
    position: absolute;
    background-image: radial-gradient(hsl(180, 100%, 90%), hsl(180, 100%, 80%) 10%, hsla(180, 100%, 80%, 0) 100%);
  }
`;

export default StaticStar;
