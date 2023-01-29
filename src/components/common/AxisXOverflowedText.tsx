import styled, { keyframes } from 'styled-components';

import { findKoreanLength } from '@utils/common';

export interface AxisXOverflowedTextStyles extends React.HTMLAttributes<HTMLDivElement> {
  width: number;
  animationSecond: number;
  fontSize?: number;
}

export interface AxisXOverflowedTextProps extends AxisXOverflowedTextStyles {
  maxLength: number;
  innerText: string;
  children: React.ReactNode;
}

const AxisXOverflowedText = ({
  children,
  width,
  innerText,
  maxLength,
  animationSecond,
  fontSize = 20,
}: AxisXOverflowedTextProps) => {
  const adjustedMaxLength = maxLength - findKoreanLength(innerText);
  return (
    <div>
      {innerText.length > adjustedMaxLength ? (
        <AxisXOverflowedTextLayout
          width={width}
          animationSecond={animationSecond}
          overflowLength={innerText.length - adjustedMaxLength}
          fontSize={fontSize}
        >
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
  }
  80%,
  100% {
    transform: translateX(-100%);
  }
`;

const AxisXOverflowedTextLayout = styled.div<{
  animationSecond: number;
  width: number;
  overflowLength: number;
  fontSize: number;
}>`
  white-space: nowrap;
  display: block;
  overflow: hidden;
  width: ${(props) => props.width + 'px'};
  div {
    width: ${(props) => props.overflowLength * props.fontSize * 0.6 + 6 + 'px'};
    -moz-animation: ${AxisXOverflowedTextAnimation} ${(props) => props.animationSecond}s infinite alternate ease-in-out;
    -webkit-animation: ${AxisXOverflowedTextAnimation} ${(props) => props.animationSecond}s infinite alternate
      ease-in-out;
    animation: ${AxisXOverflowedTextAnimation} ${(props) => props.animationSecond}s infinite alternate ease-in-out;
  }
`;

export default AxisXOverflowedText;
