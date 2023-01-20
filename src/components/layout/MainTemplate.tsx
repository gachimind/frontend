import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import styled from 'styled-components';

import bugIcon from '@assets/svg_bugIcon.svg';
import { useAppSelector } from '@redux/hooks';

import Toast from '@components/common/ToastProvider';
import LoginModal from '@components/home/LoginModal';
import ReportBugModal from '@components/home/ReportBugModal';

import Footer from './Footer';
import Header from './Header';
import PageContainer from './PageContainer';

const MainTemplate = ({ children }: { children: React.ReactNode }) => {
  const isLogined = useAppSelector((state) => state.user.isLogined);

  const navigate = useNavigate();

  const [loginModalVisible, setLoginModalVisible] = useState<boolean>(false);
  const [reportBugModalVisible, setReportBugModalVisible] = useState<boolean>(false);
  return (
    <PageContainer>
      <Header>
        {loginModalVisible && <LoginModal visible={loginModalVisible} onClose={() => setLoginModalVisible(false)} />}
        {!isLogined ? (
          <LoginButton onClick={() => setLoginModalVisible(true)}>LOGIN</LoginButton>
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
          <button onClick={() => setReportBugModalVisible(true)}>
            버그 제보
            <img src={bugIcon} />
          </button>
        </FooterBox>
      </Footer>
    </PageContainer>
  );
};

const LoginButton = styled.button`
  cursor: pointer;
  font-size: 20px;
  margin-right: 150px;
  background-color: transparent;
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

  button {
    cursor: pointer;
    font-family: ${(props) => props.theme.font.korean};
    font-size: 16px;
    color: ${(props) => props.theme.colors.ivory2};
    text-shadow: -1px 0 #797979, 0 1px #797979, 1px 0 #797979, 0 -1px #797979;
    border-top: 4px solid white;
    border-right: 4px solid black;
    border-bottom: 4px solid black;
    border-left: 4px solid white;
    background-color: ${(props) => props.theme.colors.darkGrey2};
    width: 152px;
    height: 56px;
    gap: 8px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export default MainTemplate;
