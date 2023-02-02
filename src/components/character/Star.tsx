import React from 'react';

import styled, { css, keyframes } from 'styled-components';

import { BACKGROUND_HEIGHT } from '@constants/characters';
import { getRandomInt } from '@utils/common';

interface StarProps {
  left: number;
  size: number;
}

const Star = ({ left, size }: StarProps) => {
  return (
    <StarLayout
      left={left}
      size={size}
      colorRatio={getRandomInt(82, 95)}
      fadeRatio={getRandomInt(30, 50)}
      scaleRatio={getRandomInt(2, 20)}
    >
      <div>
        <div className="main-star" style={{ position: 'absolute', left: 0 }}></div>
      </div>
    </StarLayout>
  );
};

const FallFrames = () => {
  const animation = keyframes`
      0% {
        transform: translate(
            0,
            0
        );
      }
      100% { 
        transform: translate(
            ${getRandomInt(0, getRandomInt(-1.1, 1.1) * 80)}px,
           ${BACKGROUND_HEIGHT}px
        );
      }
    `;
  return css`
    animation: ${animation};
    animation-duration: ${getRandomInt(180, 240)}s;
    animation-iteration-count: infinite;
    animation-timing-function: linear;
    animation-delay: ${getRandomInt(-220, 0)}s;
  `;
};

const FadeFrames = keyframes`
  0% {
    opacity: 1;
  }
  50% {
    opacity: 0.7;
  }
  100% {
    opacity: 1;
  }
`;

const ScaleFrames = keyframes`
  0% {
    transform: scale3d(0.75, 0.75, 1);
  }
  50% {
    transform: scale3d(1.25, 1.25, 1);
  }
  100% {
    transform: scale3d(0.75, 0.75, 1);
  }
`;

const StarLayout = styled.div<{
  left: number;
  size: number;
  colorRatio: number;
  fadeRatio: number;
  scaleRatio: number;
}>`
  position: absolute;
  ${FallFrames};
  & > div {
    position: absolute;
    left: ${(props) => props.left + 'px'};
    top: 0;
    animation: ${FadeFrames} ${(props) => props.fadeRatio}ms infinite,
      ${ScaleFrames} ${(props) => props.scaleRatio}s infinite;
    div {
      position: absolute;
      width: ${(props) => props.size + 'px'};
      height: ${(props) => props.size + 'px'};
      background-image: radial-gradient(
        hsl(180, 100%, 90%),
        hsl(180, 100%, ${(props) => props.colorRatio}%) 10%,
        hsla(180, 100%, 80%, 0) 100%
      );
    }
  }
`;

export default Star;
