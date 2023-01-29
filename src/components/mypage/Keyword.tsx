import { useEffect } from 'react';

import styled from 'styled-components';

import { useAppDispatch, useAppSelector } from '@redux/hooks';
import { __getUserKeyword } from '@redux/modules/userSlice';

const Keyword = () => {
  const dispatch = useAppDispatch();
  const keywords = useAppSelector((state) => state.user.keywords);

  useEffect(() => {
    dispatch(__getUserKeyword());
  }, []);

  return (
    <KeywordLayout>
      <KeywordBox>
        <div className="keyword-box-header">SOLVED KEYWORDS</div>
        {keywords?.totalQuizKeyword.map((keyword, idx) => (
          <div key={idx}>{keyword}</div>
        ))}
      </KeywordBox>
      <KeywordBox>
        <div className="keyword-box-header">PUBLISHED KEYWORDS</div>
        {keywords?.totalSpeechKeyword.map((keyword, idx) => (
          <div key={idx}>{keyword}</div>
        ))}
      </KeywordBox>
    </KeywordLayout>
  );
};

export default Keyword;

const KeywordLayout = styled.div`
  height: 94.3%;
  padding: 45px 40px;
  gap: 32px;
  display: grid;
  grid-template-rows: 1fr 1fr;
`;

const KeywordBox = styled.div`
  ${(props) => props.theme.borders.bottomRightWhiteBorder}

  .keyword-box-header {
    font-size: 16px;
    color: ${(props) => props.theme.colors.ivory2};
    background-color: rgba(0, 0, 0, 0.7);
    height: 44px;
    padding-left: 24px;
    display: flex;
    align-items: center;
  }
`;
