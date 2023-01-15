import React from 'react';

import styled from 'styled-components';

import CamButton from '@components/game/CamButton';
import MicButton from '@components/game/MicButton';

import ruleIcon from '../../../assets/ruleIcon.svg';
import Container from '../Container';
import Footer from '../Footer';
import Header from '../Header';

const RoomLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <Container>
      <Header page="ROOM"></Header>
      <RoomContentsBox>{children}</RoomContentsBox>
      <Footer>
        <FooterButtonsBox>
          <RuleButton src={ruleIcon} />
          <MediaControlBox>
            <CamButton />
            <MicButton />
          </MediaControlBox>
          <LeaveRoomButton>나가기</LeaveRoomButton>
        </FooterButtonsBox>
      </Footer>
    </Container>
  );
};

const RoomContentsBox = styled.div`
  height: 684px;
  gap: 40px;
  padding: 0px 152px;
  display: grid;
  grid-template-columns: 3fr 4fr 3fr;
`;

const FooterButtonsBox = styled.div`
  height: inherit;
  gap: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const RuleButton = styled.img`
  margin-right: 550px;
`;

const MediaControlBox = styled.div`
  gap: 53px;
  display: flex;
`;

const LeaveRoomButton = styled.button`
  font-family: ${(props) => props.theme.font.korean};
  font-size: 20px;
  background-color: ${(props) => props.theme.colors.button};
  width: 200px;
  height: 48px;
  margin-left: 450px;
`;

export default RoomLayout;
