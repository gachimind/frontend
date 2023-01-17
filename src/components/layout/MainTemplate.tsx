import React, { useState } from 'react';

import styled from 'styled-components';

import EnterPrivateRoomModal from '@components/home/EnterPrivateRoomModal';
import LoginModal from '@components/home/LoginModal';
import ReportBugModal from '@components/home/ReportBugModal';

import Footer from './Footer';
import Header from './Header';
import PageContainer from './PageContainer';

// TODO: 방 참가하기 버튼에 비밀방 참가하기 모달을 연결한다.
const MainTemplate = ({ children }: { children: React.ReactNode }) => {
  const [loginModalVisible, setLoginModalVisible] = useState<boolean>(false);
  // const [enterPrivateRoomModalVisible, setEnterPrivateRoomModalVisible] = useState<boolean>(false);
  const [reportBugModalVisible, setReportBugModalVisible] = useState<boolean>(false);

  return (
    <PageContainer>
      <Header>
        {loginModalVisible && <LoginModal visible={loginModalVisible} onClose={() => setLoginModalVisible(false)} />}
        <LoginButton onClick={() => setLoginModalVisible(true)}>LOGIN</LoginButton>
        {/* {enterPrivateRoomModalVisible && (
          <EnterPrivateRoomModal visible={enterPrivateRoomModalVisible} onClose={() => setEnterPrivateRoomModalVisible(false)} />
        )}
        <LoginButton onClick={() => setEnterPrivateRoomModalVisible(true)}>LOGIN</LoginButton> */}
      </Header>
      <MainContentsBox>{children}</MainContentsBox>
      <Footer>
        <FooterBox>
          <button></button>
          <button></button>
          <button></button>
          {reportBugModalVisible && (
            <ReportBugModal visible={reportBugModalVisible} onClose={() => setReportBugModalVisible(false)} />
          )}
          <button onClick={() => setReportBugModalVisible(true)}>버그</button>
        </FooterBox>
      </Footer>
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

const FooterBox = styled.div`
  height: inherit;
  gap: 56px;
  display: flex;
  justify-content: center;
  align-items: center;

  button {
    background-color: ${(props) => props.theme.colors.darkGrey1};
    width: 48px;
    height: 48px;
  }
`;

export default MainTemplate;
