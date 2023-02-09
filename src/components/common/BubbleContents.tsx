import { useEffect, useRef, useState } from 'react';

import styled from 'styled-components';

export interface BubbleContentsProps {
  text: string;
  onMouseLeave: () => void;
}

const BubbleContents = ({ text, onMouseLeave }: BubbleContentsProps) => {
  const [height, setHeight] = useState<number>(40);
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (text && ref.current) {
      setHeight(ref.current.offsetHeight);
    }
  }, [text]);
  return (
    <BubbleContentsLayout ref={ref} onMouseLeave={onMouseLeave} height={height}>
      <div>
        <div className="border-width" style={{ left: '0', top: '-4px' }}></div>
        <div className="border-height" style={{ left: '-4px', top: '0px' }}></div>
        <div className="border-width" style={{ left: '0', bottom: '-4px' }}></div>
        <div className="border-height" style={{ right: '4px', top: '0' }}></div>
        <div>
          <p style={{ color: '#0A0A0A', fontSize: '24px' }}>{text}</p>
        </div>
        <p>{text}</p>
        <BubbleBox>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </BubbleBox>
      </div>
    </BubbleContentsLayout>
  );
};

const BubbleContentsLayout = styled.div<{ height: number }>`
  position: absolute;
  top: ${(props) => -props.height - 20}px;
  right: -20px;
  width: 500px;
  min-height: 48px;
  & > div:first-child {
    position: relative;
    width: 500px;
    min-height: 48px;
    padding: 10px 8px;
  }
  & > div > .border-width {
    position: absolute;
    width: 492px;
    height: 4px;
    background-color: black;
  }
  & > div > .border-height {
    position: absolute;
    width: 4px;
    height: 100%;
    background-color: black;
  }
  & > div > div:nth-child(5) {
    position: absolute;
    left: 0;
    top: 0;
    width: 492px;
    height: 100%;
    padding: 10px 8px;
    background-color: white;
  }
  & > div > p {
    visibility: hidden;
    font-size: 24px;
    line-height: 110%;
  }
`;

const BubbleBox = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  bottom: -16px;
  right: 28px;
  width: 20px;
  height: 16px;
  & > div {
    height: 4px;
    background-color: white;
  }
  & > div:first-child {
    width: 20px;
    border-top: 1px solid white;
  }
  & > div:nth-child(2) {
    width: 12px;
    box-shadow: -4px 0px 0px 0px black, 4px 0px 0px 0px black;
  }
  & > div:nth-child(3) {
    width: 4px;
    box-shadow: -4px 0px 0px 0px black, 4px 0px 0px 0px black;
  }
  & > div:nth-child(4) {
    width: 4px;
    background-color: black;
  }
`;

export default BubbleContents;
