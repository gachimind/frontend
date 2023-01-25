import styled from 'styled-components';

import useGameTimeCountDown from '@hooks/useGameTimeCountDown';
import { convertLeaveCounterFormat } from '@utils/common';

interface PresentationInfoProps {
  isMe: boolean;
  keyword: string;
  nickname: string;
}

const PresentationInfo = ({ isMe, keyword, nickname }: PresentationInfoProps) => {
  const { count } = useGameTimeCountDown();
  return (
    <PresentationInfoLayout>
      <PresentationInfoTextBox>
        <div>
          {isMe ? (
            <>
              <p>당신이 설명할 제시어는</p>
              <KeywordText>&apos;{keyword}&apos;</KeywordText>
              <p>입니다.</p>
            </>
          ) : (
            `다음 발표자는 '${nickname}'입니다.`
          )}
        </div>
        <CounterText>
          {convertLeaveCounterFormat(count)}
          <span> 초</span>
        </CounterText>
      </PresentationInfoTextBox>
    </PresentationInfoLayout>
  );
};

const PresentationInfoLayout = styled.div`
  position: absolute;
  left: 0;
  top: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 3;
  width: 100%;
  height: 92%;
  background-color: rgba(28, 28, 28, 0.6);
`;

const PresentationInfoTextBox = styled.div`
  font-size: 24px;
  text-align: center;
  color: ${(props) => props.theme.colors.white};
`;

const KeywordText = styled.p`
  font-size: 36px;
  margin: 10px 0;
  color: red;
`;

const CounterText = styled.p`
  font-size: 56px;
  margin-top: 10px;
  text-align: center;
  color: ${(props) => props.theme.colors.purple2};
  & > span {
    font-size: 32px;
  }
`;

export default PresentationInfo;