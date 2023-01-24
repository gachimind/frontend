import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import styled from 'styled-components';

import GameRuleIcon from '@assets/svg_gameRuleIcon.svg';
import leaveRoomIcon from '@assets/svg_leaveRoomIcon.svg';

import Button from '@components/common/Button';
import CamButton from '@components/game/CamButton';
import GameRuleToolTip from '@components/game/GameRuleToolTip';
import MicButton from '@components/game/MicButton';

import Footer from './Footer';
import Header from './Header';
import PageContainer from './PageContainer';

const RoomTemplate = ({ children }: { children: React.ReactNode }) => {
  const navigate = useNavigate();

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
          <LeaveButton onClick={() => navigate('/')}>
            게임방 나가기
            <img src={leaveRoomIcon} />
          </LeaveButton>
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
  cursor: pointer;
  margin-right: 613px;
`;

const MediaControlBox = styled.div`
  gap: 55px;
  display: flex;
`;

const LeaveButton = styled(Button)`
  font-size: 16px;
  width: 176px;
  height: 56px;
  margin-left: 454px;
  gap: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default RoomTemplate;
