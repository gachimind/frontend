import React from 'react';

import styled from 'styled-components';

const GameButtonContainer = ({ children }: { children: React.ReactNode }) => {
  return (
    <GameButtonContainerLayout>
      <GameButtonContainerHeaderBox />
      <GameButtonContainerContentBox>{children}</GameButtonContainerContentBox>
    </GameButtonContainerLayout>
  );
};

const GameButtonContainerLayout = styled.div`
  background-color: ${(props) => props.theme.colors.darkGrey2};
  width: 628px;
  height: 312px;
  box-shadow: ${(props) => props.theme.boxShadows.boxShadow1};
  border: ${(props) => props.theme.borders.normal1};
  display: flex;
  justify-content: center;
  align-items: stretch;
  flex-direction: column;
  z-index: 100;
`;

const GameButtonContainerHeaderBox = styled.div`
  font-family: ${(props) => props.theme.font.joystick};
  font-size: 24px;
  color: ${(props) => props.theme.colors.black1};
  height: 42px;
  width: 100%;
  background-color: ${(props) => props.theme.colors.lightGrey6};
  box-shadow: 2px 0px ${(props) => props.theme.colors.ivory1}, -2px -2px ${(props) => props.theme.colors.ivory1};
`;

const GameButtonContainerContentBox = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  grid-row-gap: 32px;
`;

export default GameButtonContainer;
