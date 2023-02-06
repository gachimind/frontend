import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import styled from 'styled-components';

import bugIcon from '@assets/svg_bugIcon.svg';
import footerImage from '@assets/svg_footerImage.svg';
import homeIcon from '@assets/svg_homeIcon.svg';
import instagramIcon from '@assets/svg_instagramIcon.svg';
import myPageIcon from '@assets/svg_myPageIcon.svg';
import { useAppSelector } from '@redux/hooks';

import Button from '@components/common/Button';
import LoginModal from '@components/home/LoginModal';
import ReportBugModal from '@components/home/ReportBugModal';

const Footer = ({ children, page }: { children?: React.ReactNode; page: string }) => {
  const navigate = useNavigate();
  const user = useAppSelector((state) => state.user.user);

  const [reportBugModalVisible, setReportBugModalVisible] = useState<boolean>(false);
  const [loginModalVisible, setLoginModalVisible] = useState<boolean>(false);
  return (
    <FooterLayout>
      {page !== 'room' && (
        <FooterBox>
          {loginModalVisible && <LoginModal visible={loginModalVisible} onClose={() => setLoginModalVisible(false)} />}
          <PageNavigateButton
            onClick={() => (user ? navigate(page === 'main' ? '/mypage' : '/') : setLoginModalVisible(true))}
          >
            <img src={page === 'main' ? myPageIcon : homeIcon} />
          </PageNavigateButton>
          {reportBugModalVisible && (
            <ReportBugModal visible={reportBugModalVisible} onClose={() => setReportBugModalVisible(false)} />
          )}
          <ReportBugButton onClick={() => setReportBugModalVisible(true)}>
            버그 제보
            <img src={bugIcon} />
          </ReportBugButton>
          <button
            className="instagram"
            onClick={() => window.open('https://instagram.com/gachimind?igshid=ZDdkNTZiNTM=')}
          >
            <img src={instagramIcon} />
          </button>
        </FooterBox>
      )}
      {children}
    </FooterLayout>
  );
};

const FooterLayout = styled.div`
  background-image: url(${footerImage});
  background-size: contain;
  height: 80px;

  .instagram {
    background-color: transparent;
    img {
      width: 65px;
      height: 65px;
    }
  }
`;

const FooterBox = styled.div`
  height: inherit;
  margin-right: 60px;
  gap: 26px;
  display: flex;
  justify-content: right;
  align-items: center;

  Button {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

const PageNavigateButton = styled(Button)`
  width: 56px;
  height: 56px;
  img {
    width: 30px;
    height: 36px;
  }
`;

const ReportBugButton = styled(Button)`
  font-size: 16px;
  width: 152px;
  height: 56px;
  gap: 8px;
`;

export default Footer;
