import { useEffect, useState } from 'react';

import styled, { keyframes } from 'styled-components';

import enterRoomIcon from '@assets/svg_enterRoomIcon.svg';
import privateRoomIcon from '@assets/svg_privateRoomIcon.svg';
import { useAppSelector } from '@redux/hooks';

import { GameRoomBroadcastResponse } from '@customTypes/socketType';

import LoginModal from './LoginModal';

interface RoomCardProps {
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
          <Title>
            {room.roomTitle.length > 6 ? (
              <div>
                <span>{room.roomTitle}</span>
              </div>
            ) : (
              room.roomTitle
            )}
          </Title>
          <Participants>
            참여인원: {room.participants.toString()}/{room.maxCount}
          </Participants>
          <EnterButton onClick={handleJoinButtonClick} disabled={!joinInfo.isJoinable} isJoinable={joinInfo.isJoinable}>
            {joinInfo.message}
            <img src={enterRoomIcon} />
          </EnterButton>
        </CardContentsBox>
        {room.isSecretRoom && <img className="secret-room-icon" src={privateRoomIcon} />}
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
  .secret-room-icon {
    width: 86px;
    height: 86px;
    margin-top: 25px;
    margin-left: -10px;
  }
`;

const CardContentsBox = styled.div`
  font-family: inherit;
  margin-left: 32px;
  margin-top: 25px;
  display: flex;
  flex-direction: column;
`;

const titleAnimation = keyframes`
  0%,
  20% {
    transform: translateX(0%);
    left: 0%;
  }
  80%,
  100% {
    transform: translateX(-100%);
    left: 100%;
  }
`;

const Title = styled.span`
  background-image: linear-gradient(0deg, rgba(121, 121, 121, 0.5) 50%, ${(props) => props.theme.colors.ivory2} 50%);
  background-clip: text;
  -webkit-text-stroke: 1px ${(props) => props.theme.colors.darkGrey4};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-family: inherit;
  font-size: 20px;
  line-height: 150%;
  width: 130px;
  white-space: nowrap;
  display: block;
  overflow: hidden;

  div {
    -moz-animation: ${titleAnimation} 3s infinite alternate ease-in-out;
    -webkit-animation: ${titleAnimation} 3s infinite alternate ease-in-out;
    animation: ${titleAnimation} 3s infinite alternate ease-in-out;
    span {
      background-image: linear-gradient(
        0deg,
        rgba(121, 121, 121, 0.5) 50%,
        ${(props) => props.theme.colors.ivory2} 50%
      );
      background-clip: text;
      -webkit-text-stroke: 1px ${(props) => props.theme.colors.darkGrey4};
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
  }
`;

const Participants = styled.span`
  font-family: inherit;
  font-size: 12px;
  color: ${(props) => props.theme.colors.lightGrey5};
  opacity: 0.5;
`;

const EnterButton = styled.button<{ isJoinable: boolean }>`
  cursor: ${(props) => (props.isJoinable ? 'pointer' : 'default')};
  opacity: ${(props) => (props.isJoinable ? 1 : 0.7)};
  font-family: inherit;
  font-size: 14px;
  color: ${(props) => props.theme.colors.ivory2};
  text-shadow: ${(props) => props.theme.textShadow.textShadow1};
  background-color: ${(props) => props.theme.colors.darkGrey2};
  margin-top: 12px;
  width: 96px;
  height: 40px;
  gap: 8px;
  display: flex;
  justify-content: center;
  align-items: center;

  ${(props) => props.theme.borders.topLeftGreyBorder}
`;

export default RoomCard;
