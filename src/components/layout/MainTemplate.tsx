import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import styled from 'styled-components';

import bugIcon from '@assets/svg_bugIcon.svg';
import worldIcon from '@assets/svg_worldIcon.svg';

import Button from '@components/common/Button';
import LoginModal from '@components/home/LoginModal';
import ReportBugModal from '@components/home/ReportBugModal';

import Footer from './Footer';
import Header from './Header';
import PageContainer from './PageContainer';

const MainTemplate = ({ children, isLogined }: { children: React.ReactNode; isLogined: boolean }) => {
  const navigate = useNavigate();

  const [loginModalVisible, setLoginModalVisible] = useState<boolean>(false);
  const [reportBugModalVisible, setReportBugModalVisible] = useState<boolean>(false);
  return (
    <PageContainer>
      <Header>
        {loginModalVisible && <LoginModal visible={loginModalVisible} onClose={() => setLoginModalVisible(false)} />}
        {!isLogined ? (
          <LoginButton onClick={() => setLoginModalVisible(true)}>
            <img src={worldIcon} />
            LOGIN
          </LoginButton>
        ) : (
          <LoginButton onClick={() => navigate('/mypage')}>MYPAGE</LoginButton>
        )}
      </Header>
      <MainContentsBox>{children}</MainContentsBox>
      <Footer>
        <FooterBox>
          {reportBugModalVisible && (
            <ReportBugModal visible={reportBugModalVisible} onClose={() => setReportBugModalVisible(false)} />
          )}
          <ReportBugButton onClick={() => setReportBugModalVisible(true)}>
            버그 제보
            <img src={bugIcon} />
          </ReportBugButton>
        </FooterBox>
      </Footer>
    </PageContainer>
  );
};

const LoginButton = styled.button`
  cursor: pointer;
  color: ${(props) => props.theme.colors.darkGrey2};
  font-family: ${(props) => props.theme.font.joystick};
  font-size: 20px;
  margin-right: 150px;
  background-color: transparent;
  gap: 16px;
  display: flex;
  align-items: center;
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
  margin-right: 138px;
  display: flex;
  justify-content: right;
  align-items: center;
`;

const ReportBugButton = styled(Button)`
  font-size: 16px;
  width: 152px;
  height: 56px;
  gap: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default MainTemplate;
