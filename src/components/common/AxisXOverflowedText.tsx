import styled, { keyframes } from 'styled-components';

import { findKoreanLength } from '@utils/common';

export interface AxisXOverflowedTextStyles extends React.HTMLAttributes<HTMLDivElement> {
  width: number;
  animationSecond: number;
}

export interface AxisXOverflowedTextProps extends AxisXOverflowedTextStyles {
  maxLength: number;
  innerText: string;
  children: React.ReactNode;
}

const AxisXOverflowedText = ({ children, width, innerText, maxLength, animationSecond }: AxisXOverflowedTextProps) => {
  return (
    <div>
      {innerText.length > maxLength - findKoreanLength(innerText) ? (
        <AxisXOverflowedTextLayout width={width} animationSecond={animationSecond}>
          <div>{children}</div>
        </AxisXOverflowedTextLayout>
      ) : (
        <>{children}</>
      )}
    </div>
  );
};

const AxisXOverflowedTextAnimation = keyframes`
  0%,
  20% {
    transform: translateX(0%);
    left: 0%;
  }
  80%,
  100% {
    transform: translateX(-100%);
    left: 100%;
  }
`;

const AxisXOverflowedTextLayout = styled.div<AxisXOverflowedTextStyles>`
  white-space: nowrap;
  display: block;
  overflow: hidden;
  width: ${(props) => props.width + 'px'};
  div {
    -moz-animation: ${AxisXOverflowedTextAnimation} ${(props) => props.animationSecond}s infinite alternate ease-in-out;
    -webkit-animation: ${AxisXOverflowedTextAnimation} ${(props) => props.animationSecond}s infinite alternate
      ease-in-out;
    animation: ${AxisXOverflowedTextAnimation} ${(props) => props.animationSecond}s infinite alternate ease-in-out;
  }
`;

export default AxisXOverflowedText;
