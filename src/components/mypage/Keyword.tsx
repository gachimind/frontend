import styled from 'styled-components';

const Keyword = () => {
  return (
    <KeywordLayout>
      <KeywordBox></KeywordBox>
      <KeywordBox></KeywordBox>
    </KeywordLayout>
  );
};

export default Keyword;

const KeywordLayout = styled.div`
  height: 94.3%;
  padding: 52px 40px;
  gap: 36px;
  display: grid;
  grid-template-rows: 1fr 1fr;
`;

const KeywordBox = styled.div`
  background-color: white;
`;
