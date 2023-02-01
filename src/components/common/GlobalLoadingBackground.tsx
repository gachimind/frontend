import React from 'react';

import styled from 'styled-components';

import GliteringStar from '@components/character/GliteringStar';
import StaticStar from '@components/character/StaticStar';

const GlobalLoadingBackground = () => {
  return (
    <GlobalLoadingBackgroundLayout>
      <StaticStar amount={4000} width={1920} height={1000} />
      <GliteringStar left={1300} top={120} delay={2000} />
      <GliteringStar left={300} top={800} delay={0} />
    </GlobalLoadingBackgroundLayout>
  );
};

const GlobalLoadingBackgroundLayout = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
`;

export default React.memo(GlobalLoadingBackground);
