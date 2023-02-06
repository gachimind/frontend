import React from 'react';

import styled from 'styled-components';

import { BACKGROUND_HEIGHT, BACKGROUND_WIDTH } from '@constants/characters';
import { getRandomInt } from '@utils/common';

import ShootingStars from '@components/character/ShootingStars';
import Star from '@components/character/Star';
import StaticStar from '@components/character/StaticStar';

const StarlightBackground = () => {
  const width = BACKGROUND_WIDTH;
  const height = BACKGROUND_HEIGHT;
  return (
    <div>
      <StarlightBackgroundLayout width={width} height={height}>
        {[...Array(10)].map((_, i) => (
          <Star key={i} left={getRandomInt(30, width - 30)} size={getRandomInt(4, 7)} />
        ))}
        <StaticStar />
        <ShootingStars />
      </StarlightBackgroundLayout>
    </div>
  );
};

const StarlightBackgroundLayout = styled.div<{ width: number; height: number }>`
  position: relative;
  width: ${(props) => props.width + 'px'};
  height: ${(props) => props.height + 'px'};
  background-color: ${(props) => props.theme.colors.darkGrey2};
  overflow: hidden;
`;

export default React.memo(StarlightBackground);
