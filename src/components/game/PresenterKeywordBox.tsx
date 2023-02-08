import styled, { keyframes } from 'styled-components';

import { filterKeyword } from '@utils/common';

export interface PresenterKeywordBoxProps {
  isMe: boolean;
  keyword: string;
  answered?: boolean;
}

const PresenterKeywordBox = ({ isMe, keyword, answered }: PresenterKeywordBoxProps) => {
  return (
    <PresenterKeywordLayout>
      {keyword.length > 12 && <p>제시어</p>}
      <p>
        {keyword.length <= 12 && <span>제시어:&nbsp;</span>}
        <KeywordText isMe={isMe} answered={answered ?? false}>
          {isMe || answered ? keyword : filterKeyword(keyword)}
        </KeywordText>
      </p>
    </PresenterKeywordLayout>
  );
};

const KeywordSlide = keyframes`
0% {
  height: 220px;
  background-color: inherit;
  font-size: 40px;
  color: red;
}
  100% {
    height: 42px;
    background-color: rgba(28, 28, 28, 0.7);
  }
`;

const PresenterKeywordLayout = styled.div`
  position: absolute;
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  top: 38px;
  background-color: rgba(28, 28, 28, 0.7);
  z-index: 3;
  padding: 10px 0;
  color: ${(props) => props.theme.colors.ivory2};
  height: 42px;
  animation: ${KeywordSlide} 0.75s 0s;
  font-size: 14px;
  & > p > span {
    font-size: 20px;
    font-weight: 500;
  }
`;

const KeywordText = styled.span<{ isMe: boolean; answered: boolean }>`
  letter-spacing: ${(props) => (props.isMe || props.answered ? '1px' : '-4px')};
  color: ${(props) => (props.answered ? 'green' : props.theme.colors.ivory2)};
`;

export default PresenterKeywordBox;
