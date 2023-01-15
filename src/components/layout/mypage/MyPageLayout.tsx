import React from 'react';

import styled from 'styled-components';

import Container from '../Container';
import Footer from '../Footer';
import Header from '../Header';

const MyPageLayout = ({ children }: { children?: React.ReactNode }) => {
  return (
    <Container>
      <Header></Header>
      <MyPageContentsBox>{children}</MyPageContentsBox>
      <Footer></Footer>
    </Container>
  );
};

const MyPageContentsBox = styled.div`
  height: 684px;
  gap: 40px;
  padding: 0px 152px;
  display: grid;
  grid-template-columns: 3fr 3fr 4fr;
`;

export default MyPageLayout;
