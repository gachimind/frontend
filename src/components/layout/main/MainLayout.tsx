import React from 'react';

import styled from 'styled-components';

import Container from '../Container';
import Footer from '../Footer';
import Header from '../Header';

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <Container>
      <Header>
        <LoginButton>LOGIN</LoginButton>
      </Header>
      <MainContentsBox>{children}</MainContentsBox>
      <Footer></Footer>
    </Container>
  );
};

const LoginButton = styled.button`
  font-size: 24px;
  margin-right: 150px;
`;

const MainContentsBox = styled.div`
  height: 684px;
  gap: 40px;
  padding: 0px 152px;
  display: grid;
  grid-template-columns: 3fr 7fr;
`;

export default MainLayout;
