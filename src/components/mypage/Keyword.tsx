import styled from 'styled-components';

import cursorIcon from '@assets/svg_cursorIcon.svg';
import { useGetUserKeywordQuery } from '@redux/query/user';

const Keyword = () => {
  const { data } = useGetUserKeywordQuery();
  const keywords = data;

  return (
    <KeywordLayout>
      <KeywordBox>
        <div>SOLVED KEYWORDS</div>
        <ul>
          {keywords?.totalQuizKeyword.map((keyword, idx) => (
            <li key={idx}>
              <span onClick={() => window.open(keyword.link)}>{keyword.keyword}</span>
            </li>
          ))}
        </ul>
      </KeywordBox>
      <KeywordBox>
        <div>PUBLISHED KEYWORDS</div>
        <ul>
          {keywords?.totalSpeechKeyword.map((keyword, idx) => (
            <li key={idx}>
              <span onClick={() => window.open(keyword.link)}>{keyword.keyword}</span>
            </li>
          ))}
        </ul>
      </KeywordBox>
    </KeywordLayout>
  );
};

export default Keyword;

const KeywordLayout = styled.div`
  height: 94.3%;
  padding: 32px 30px;
  gap: 30px;
  display: grid;
  grid-template-rows: 1fr 1fr;
`;

const KeywordBox = styled.div`
  ${(props) => props.theme.borders.bottomRightNormal1}

  div {
    font-size: 16px;
    color: ${(props) => props.theme.colors.white1};
    background-color: rgba(0, 0, 0, 0.7);
    height: 44px;
    padding-left: 24px;
    display: flex;
    align-items: center;
  }

  ul {
    padding: 22px 28px;
    overflow-y: scroll;
    height: 200px;
  }

  ul::-webkit-scrollbar {
    width: 8px;
  }

  ul::-webkit-scrollbar-thumb {
    background-color: ${(props) => props.theme.colors.lightGrey1};
  }

  li {
    cursor: url(${cursorIcon}), pointer;
    color: ${(props) => props.theme.colors.white1};
    font-size: 20px;
    list-style: none;
    margin-bottom: 4px;

    :hover {
      color: yellow;
    }
  }
`;
