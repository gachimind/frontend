import React, { useState } from 'react';

import styled from 'styled-components';

import GameRuleIcon from '@assets/svg_gameRuleIcon.svg';

import CamButton from '@components/game/CamButton';
import GameRuleToolTip from '@components/game/GameRuleToolTip';
import MicButton from '@components/game/MicButton';

import Footer from './Footer';
import Header from './Header';
import PageContainer from './PageContainer';

const RoomTemplate = ({ children }: { children: React.ReactNode }) => {
  const [GameRuleModalVisible, setGameRuleModalVisible] = useState<boolean>(false);
  return (
    <PageContainer>
      <Header page="ROOM"></Header>
      <RoomContentsBox>{children}</RoomContentsBox>
      <Footer>
        <FooterBox>
          {GameRuleModalVisible && (
            <GameRuleToolTip visible={GameRuleModalVisible} onClose={() => setGameRuleModalVisible(false)} />
          )}
          <RuleButton onClick={() => setGameRuleModalVisible(true)} src={GameRuleIcon} />
          <MediaControlBox>
            <CamButton />
            <MicButton />
          </MediaControlBox>
          <LeaveButton>나가기</LeaveButton>
        </FooterBox>
      </Footer>
    </PageContainer>
  );
};

const RoomContentsBox = styled.div`
  height: 664px;
  gap: 40px;
  padding: 0px 152px;
  display: grid;
  grid-template-columns: 5fr 7fr 5fr;
`;

const FooterBox = styled.div`
  height: inherit;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const RuleButton = styled.img`
  margin-right: 613px;
`;

const MediaControlBox = styled.div`
  gap: 55px;
  display: flex;
`;

const LeaveButton = styled.button`
  font-family: ${(props) => props.theme.font.korean};
  font-size: 20px;
  background-color: ${(props) => props.theme.colors.darkGrey1};
  width: 200px;
  height: 48px;
  margin-left: 454px;
`;

export default RoomTemplate;
