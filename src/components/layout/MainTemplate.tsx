import React, { useState } from 'react';

import styled from 'styled-components';

import LoginModal from '@components/home/LoginModal';

import Footer from './Footer';
import Header from './Header';
import PageContainer from './PageContainer';

const MainTemplate = ({ children }: { children: React.ReactNode }) => {
  const [loginModalVisible, setLoginModalVisible] = useState<boolean>(false);

  return (
    <PageContainer>
      <Header>
        {loginModalVisible && <LoginModal visible={loginModalVisible} onClose={() => setLoginModalVisible(false)} />}
        <LoginButton onClick={() => setLoginModalVisible(true)}>LOGIN</LoginButton>
      </Header>
      <MainContentsBox>{children}</MainContentsBox>
      <Footer></Footer>
    </PageContainer>
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

export default MainTemplate;
