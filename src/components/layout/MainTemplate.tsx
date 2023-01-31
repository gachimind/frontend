import React, { useState } from 'react';

import styled from 'styled-components';

import bugIcon from '@assets/svg_bugIcon.svg';

import Button from '@components/common/Button';
import ReportBugModal from '@components/home/ReportBugModal';

import Footer from './Footer';
import Header from './Header';
import PageContainer from './PageContainer';

const MainTemplate = ({ children }: { children: React.ReactNode }) => {
  const [reportBugModalVisible, setReportBugModalVisible] = useState<boolean>(false);
  return (
    <PageContainer>
      <Header />
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
