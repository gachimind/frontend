import { useEffect, useState } from 'react';

import styled from 'styled-components';

import cursorIcon from '@assets/svg_cursorIcon.svg';
import enterRoomIcon from '@assets/svg_enterRoomIcon.svg';
import privateRoomIcon from '@assets/svg_privateRoomIcon.svg';
import { useAppSelector } from '@redux/hooks';

import AxisXOverflowedText from '@components/common/AxisXOverflowedText';

import { GameRoomBroadcastResponse } from '@customTypes/socketType';

import LoginModal from './LoginModal';

export interface RoomCardProps {
  room: GameRoomBroadcastResponse;
  onJoinClick: () => void;
}

interface RoomJoinableInfoType {
  message: string;
  isJoinable: boolean;
}

const RoomCard = ({ room, onJoinClick }: RoomCardProps) => {
  const { isLogined } = useAppSelector((state) => state.user);
  const [isLoginModalVisible, setIsLoginModalVisible] = useState<boolean>(false);
  const [joinInfo, setJoinInfo] = useState<RoomJoinableInfoType>({ message: '참가하기', isJoinable: true });

  useEffect(() => {
    setJoinInfo(getRoomJoinableInfo());
  }, [room]);

  const getRoomJoinableInfo = (): RoomJoinableInfoType => {
    if (room.isGameOn) {
      return { message: '게임중..', isJoinable: false };
    }
    if (room.participants === room.maxCount) {
      return { message: 'FULL!!', isJoinable: false };
    }
    return { message: '참가하기', isJoinable: true };
  };

  const handleJoinButtonClick = () => {
    if (!isLogined) {
      setIsLoginModalVisible(true);
      return;
    }
    onJoinClick();
  };

  return (
    <div>
      <GreyBox />
      <RoomCardTopBox />
      <RoomCardMainBox>
        <CardContentsBox>
          <AxisXOverflowedText animationSecond={3} maxLength={12} width={130} innerText={room.roomTitle}>
            <RoomTitleText>{room.roomTitle}</RoomTitleText>
          </AxisXOverflowedText>
          <Participants>
            참여인원: {room.participants.toString()}/{room.maxCount}
          </Participants>
        </CardContentsBox>
        {room.isSecretRoom && (
          <span className="room-card-private-room-icon">
            <img src={privateRoomIcon} />
          </span>
        )}
        <EnterButton onClick={handleJoinButtonClick} disabled={!joinInfo.isJoinable} isJoinable={joinInfo.isJoinable}>
          {joinInfo.message}
          <img src={enterRoomIcon} />
        </EnterButton>
        {isLoginModalVisible && !isLogined && (
          <LoginModal visible={isLoginModalVisible} onClose={() => setIsLoginModalVisible(false)} />
        )}
      </RoomCardMainBox>
    </div>
  );
};

const RoomCardTopBox = styled.div`
  position: relative;
  margin-left: 44px;
  width: 88px;
  height: 20px;
  outline: solid 4px ${(props) => props.theme.colors.lightGrey5};
  border: 4px solid white;
  overflow: hidden;
  box-shadow: 7px 7px 0px 6px black;
  border-collapse: collapse;
`;

const GreyBox = styled.div`
  position: absolute;
  margin-left: 44px;
  margin-top: 15px;
  z-index: 999;
  width: 88px;
  height: 12px;
  background-color: ${(props) => props.theme.colors.darkGrey2};
`;

const RoomCardMainBox = styled.div`
  position: relative;
  background-color: ${(props) => props.theme.colors.darkGrey2};
  width: 260px;
  height: 148px;
  ${(props) => props.theme.borders.roomCardBorder};
  outline: solid 4px ${(props) => props.theme.colors.lightGrey5};
  box-shadow: 7px 7px 0px 6px black;
  border-collapse: collapse;
  overflow: hidden;
  display: flex;
  .room-card-private-room-icon {
    position: absolute;
    top: 21px;
    right: 24px;
    width: 48px;
    height: 48px;
    display: flex;
    justify-content: center;
    align-items: center;
    ${(props) => props.theme.borders.bottomRightThinWhiteBorder};
  }
`;

const CardContentsBox = styled.div`
  font-family: inherit;
  margin-left: 32px;
  margin-top: 25px;
  display: flex;
  flex-direction: column;
`;

const RoomTitleText = styled.span`
  background-image: linear-gradient(0deg, rgba(121, 121, 121, 0.5) 50%, ${(props) => props.theme.colors.ivory2} 50%);
  background-clip: text;
  -webkit-text-stroke: 1px ${(props) => props.theme.colors.darkGrey4};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-size: 20px;
  line-height: 150%;
  font-family: inherit;
`;

const Participants = styled.span`
  font-family: inherit;
  font-size: 12px;
  color: ${(props) => props.theme.colors.lightGrey5};
  opacity: 0.5;
`;

const EnterButton = styled.button<{ isJoinable: boolean }>`
  position: absolute;
  cursor: ${(props) => (props.isJoinable ? `url(${cursorIcon}), pointer` : 'default')};
  opacity: ${(props) => (props.isJoinable ? 1 : 0.7)};
  font-family: inherit;
  font-size: 14px;
  color: ${(props) => props.theme.colors.ivory2};
  text-shadow: ${(props) => props.theme.textShadow.textShadow1};
  background-color: ${(props) => props.theme.colors.darkGrey2};
  right: 24px;
  bottom: 16px;
  width: 96px;
  height: 40px;
  gap: 8px;
  display: flex;
  justify-content: center;
  align-items: center;

  ${(props) => props.theme.borders.topLeftGreyBorder}
`;

export default RoomCard;
