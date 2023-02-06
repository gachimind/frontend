import styled from 'styled-components';

import Footer from './Footer';
import Header from './Header';
import PageContainer from './PageContainer';

const MainTemplate = ({ children }: { children: React.ReactNode }) => {
  return (
    <PageContainer>
      <Header page="main" />
      <MainContentsBox>{children}</MainContentsBox>
      <Footer page="main" />
    </PageContainer>
  );
};

const MainContentsBox = styled.div`
  height: 664px;
  gap: 40px;
  padding: 0px 152px;
  display: grid;
  grid-template-columns: 3fr 7fr;
`;

export default MainTemplate;
