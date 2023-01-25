import styled from 'styled-components';

import useGameTimeCountDown from '@hooks/useGameTimeCountDown';
import { convertLeaveCounterFormat } from '@utils/common';

interface PresentationInfoProps {
  isMe: boolean;
  keyword: string;
  nickname: string;
  event: 'readyTimer' | 'startCount';
}

const PresentationInfo = ({ isMe, keyword, nickname, event }: PresentationInfoProps) => {
  const { count } = useGameTimeCountDown();
  if (event === 'startCount') {
    return (
      <PresentationInfoLayout>
        <PresentationInfoTextBox>
          <div>곧 게임이 시작됩니다.</div>
          <CounterText>
            {convertLeaveCounterFormat(count)}
            <span> 초</span>
          </CounterText>
        </PresentationInfoTextBox>
      </PresentationInfoLayout>
    );
  }
  if (event === 'readyTimer') {
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
              <>
                <p>현재 발표자는</p>
                <PresenterAnnounceText>{nickname}</PresenterAnnounceText>
                <p>입니다.</p>
              </>
            )}
          </div>
          <CounterText>
            {convertLeaveCounterFormat(count)}
            <span> 초</span>
          </CounterText>
        </PresentationInfoTextBox>
      </PresentationInfoLayout>
    );
  }
  return <></>;
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

const PresenterAnnounceText = styled.p`
  font-size: 28px;
  margin: 12px 0;
  padding: 0 40px;
  font-weight: 600;
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
