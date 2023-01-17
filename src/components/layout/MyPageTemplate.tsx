import React from 'react';

import styled from 'styled-components';

import Footer from './Footer';
import Header from './Header';
import PageContainer from './PageContainer';

const MyPageTemplate = ({ children }: { children?: React.ReactNode }) => {
  return (
    <PageContainer>
      <Header></Header>
      <MyPageContentsBox>{children}</MyPageContentsBox>
      <Footer></Footer>
    </PageContainer>
  );
};

const MyPageContentsBox = styled.div`
  height: 684px;
  gap: 40px;
  padding: 0px 152px;
  display: grid;
  grid-template-columns: 3fr 3fr 4fr;
`;

export default MyPageTemplate;
