import React, { useState } from 'react';

import styled from 'styled-components';

import GameRuleIcon from '@assets/svg_gameRuleIcon.svg';
import leaveRoomIcon from '@assets/svg_leaveRoomIcon.svg';

import Button from '@components/common/Button';
import CamButton from '@components/game/CamButton';
import GameRuleToolTip from '@components/game/GameRuleToolTip';
import LeaveRoomModal from '@components/game/LeaveRoomModal';
import MicButton from '@components/game/MicButton';

import Footer from './Footer';
import Header from './Header';
import PageContainer from './PageContainer';

const RoomTemplate = ({ children }: { children: React.ReactNode }) => {
  const [gameRuleModalVisible, setGameRuleModalVisible] = useState<boolean>(false);
  const [leaveRoomModalVisible, setLeaveRoomModalVisible] = useState<boolean>(false);

  return (
    <PageContainer>
      <Header page="room" />
      <RoomContentsBox>{children}</RoomContentsBox>
      <Footer page="room">
        <FooterBox>
          {gameRuleModalVisible && (
            <GameRuleToolTip visible={gameRuleModalVisible} onClose={() => setGameRuleModalVisible(false)} />
          )}
          <RuleButton onClick={() => setGameRuleModalVisible(true)}>
            <img src={GameRuleIcon} />
          </RuleButton>
          <MediaControlBox>
            <CamButton />
            <MicButton />
          </MediaControlBox>
          {leaveRoomModalVisible && (
            <LeaveRoomModal visible={leaveRoomModalVisible} onClose={() => setLeaveRoomModalVisible(false)} />
          )}
          <LeaveButton onClick={() => setLeaveRoomModalVisible(true)}>
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

const RuleButton = styled(Button)`
  width: 56px;
  height: 56px;
  margin-right: 613px;
  display: flex;
  justify-content: center;
  align-items: center;
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
