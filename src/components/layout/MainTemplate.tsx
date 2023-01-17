import React, { useState } from 'react';

import styled from 'styled-components';

import EnterRoomModal from '@components/home/EnterRoomModal';
import LoginModal from '@components/home/LoginModal';

import Footer from './Footer';
import Header from './Header';
import PageContainer from './PageContainer';

// TODO: 방 참가하기 버튼에 모달을 연결한다.
const MainTemplate = ({ children }: { children: React.ReactNode }) => {
  const [loginModalVisible, setLoginModalVisible] = useState<boolean>(false);
  // const [enterRoomModalVisible, setEnterRoomModalVisible] = useState<boolean>(false);

  return (
    <PageContainer>
      <Header>
        {loginModalVisible && <LoginModal visible={loginModalVisible} onClose={() => setLoginModalVisible(false)} />}
        <LoginButton onClick={() => setLoginModalVisible(true)}>LOGIN</LoginButton>
        {/* {enterRoomModalVisible && (
          <EnterRoomModal visible={enterRoomModalVisible} onClose={() => setEnterRoomModalVisible(false)} />
        )}
        <LoginButton onClick={() => setEnterRoomModalVisible(true)}>LOGIN</LoginButton> */}
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
  height: 664px;
  gap: 40px;
  padding: 0px 152px;
  display: grid;
  grid-template-columns: 3fr 7fr;
`;

export default MainTemplate;
