import React from 'react';

import styled from 'styled-components';

import Button from './Button';

export interface GameButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  visible: boolean;
}

const GameButton = ({ children, visible, ...props }: GameButtonProps) => {
  return (
    <GameButtonLayout visible={visible} {...props}>
      {children}
    </GameButtonLayout>
  );
};

const GameButtonLayout = styled(Button)<{ visible: boolean }>`
  font-family: ${(props) => props.theme.font.joystick};
  font-size: 28px;
  text-shadow: none;
  background-image: linear-gradient(
    0deg,
    ${(props) => (props.visible ? props.theme.colors.purple2 : '#A1A1A1')} 50%,
    ${(props) => props.theme.colors.white1} 50%
  );
  background-size: 100%;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  -webkit-background-clip: text;
  -webkit-text-stroke: 1px ${(props) => props.theme.colors.black1};
  width: 328px;
  height: 72px;
`;

export default GameButton;
