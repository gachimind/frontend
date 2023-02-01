import React from 'react';

import styled, { keyframes } from 'styled-components';

// TODO: 사이즈 다르게 또 필요하면 scale 속성 props 추가해서 쓰기
const TitleText = () => {
  return <TitleTextLayout>GACHIMIND</TitleTextLayout>;
};

const TitleAnimation = keyframes`
    0% {
        opacity: 0.2;
    }
    70% {
        opacity: 1;
    }
`;

const TitleTextLayout = styled.p`
  font-size: 72px;
  font-family: ${(props) => props.theme.font.joystick};
  filter: drop-shadow(-4px 0px #535353) drop-shadow(0px 4px #212122) drop-shadow(-0.5px -0.5px 0 #000)
    drop-shadow(0.5px -0.5px 0 #000) drop-shadow(0.5px 0.5px 0 #000);
  background-image: linear-gradient(
    0deg,
    ${(props) => props.theme.colors.darkGrey4} 20%,
    ${(props) => props.theme.colors.white} 50%
  );
  background-size: 100%;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  -webkit-background-clip: text;
  animation: ${TitleAnimation} infinite 3s steps(12);
  -webkit-animation: ${TitleAnimation} infinite 3s steps(12);
  -moz-animation: ${TitleAnimation} infinite 3s steps(12);
`;

export default React.memo(TitleText);
