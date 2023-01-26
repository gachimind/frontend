import React, { useEffect, useState } from 'react';

import styled from 'styled-components';

import { useAppSelector } from '@redux/hooks';

import { Participant } from '@customTypes/gameRoomType';

interface CamBorderProps {
  userId: number;
  isHost?: boolean;
}

const CamStatus = ({ userId, isHost }: CamBorderProps) => {
  const { room } = useAppSelector((state) => state.gameRoom);
  const [currentPlayer, setCurrentPlayer] = useState<Participant>();

  useEffect(() => {
    setCurrentPlayer(room?.participants.find((participant) => participant.userId === userId));
  }, [room]);

  const isReady = !isHost && (currentPlayer?.isReady ?? false);
  return (
    <>
      {!room?.isGameOn && (
        <CamBorderLayout isReady={isReady}>{isReady && <ReadyText>ready</ReadyText>}</CamBorderLayout>
      )}
    </>
  );
};

const CamBorderLayout = styled.div<{ isReady: boolean }>`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 15px;
  width: 100%;
  height: 88%;
  border: ${(props) => (props.isReady ? '2px solid ' + props.theme.colors.purple2 : 'none')};
  z-index: 2;
`;

const ReadyText = styled.p`
  font-family: ${(props) => props.theme.font.joystick};
  text-align: center;
  font-size: 20px;
  line-height: 19px;
  color: ${(props) => props.theme.colors.purple2};
  text-shadow: 0px 0px 2px #ffffff;
  text-transform: uppercase;
  margin-bottom: 16px;
  font-weight: 700;
`;

export default CamStatus;
