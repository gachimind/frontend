import styled from 'styled-components';

const Keyword = () => {
  return (
    <KeywordLayout>
      <KeywordBox>
        <div className="keyword-box-header">SOLVED KEYWORDS</div>
      </KeywordBox>
      <KeywordBox>
        <div className="keyword-box-header">PUBLISHED KEYWORDS</div>
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
