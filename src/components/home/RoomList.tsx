import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router';

import styled, { keyframes } from 'styled-components';

import enterRoomIcon from '@assets/svg_enterRoomIcon.svg';
import privateRoomIcon from '@assets/svg_privateRoomIcon.svg';
import roomListLeftIcon from '@assets/svg_roomListLeftIcon.svg';
import roomListRightIcon from '@assets/svg_roomListRightIcon.svg';
import { useAuthSocket } from '@hooks/socket/useAuthSocket';
import useLocalStream from '@hooks/useLocalStream';
import { useAppSelector } from '@redux/hooks';
import { getParam } from '@utils/common';

import GlobalLoading from '@components/common/GlobalLoading';

import { GameRoomBroadcastResponse } from '@customTypes/socketType';

import EnterPrivateRoomModal from './EnterPrivateRoomModal';
import RoomCard from './RoomCard';

const RoomList = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { broadcastedRooms } = useAppSelector((state) => state.gameRoom);
  const { isMediaLoading, isMediaSuccess } = useAppSelector((state) => state.userMedia);
  const [selectedRoom, setSelectedRoom] = useState<GameRoomBroadcastResponse>();
  useAuthSocket();
  const { initLocalStream } = useLocalStream();

  const [isPasswordModalOpen, setIsPasswordModalOpen] = useState<boolean>(false);

  const [page, setPage] = useState(1);
  const offset = (page - 1) * 9;
  const numPages = Math.ceil(broadcastedRooms.length / 9);

  useEffect(() => {
    if (location.search && getParam('roomId')) {
      initLocalStream();
    }
  }, [location]);

  useEffect(() => {
    if (!isMediaLoading && isMediaSuccess) {
      const roomId = getParam('roomId');
      roomId && navigate('/room/' + roomId, { replace: true });
    }
  }, [isMediaLoading, isMediaSuccess]);

  const handleJoinRoomClick = async (roomId: number) => {
    const room = broadcastedRooms.find((room) => room.roomId === roomId);
    if (!room) {
      return;
    }
    setSelectedRoom(room);
    const hasPassword = room?.isSecretRoom;
    if (hasPassword) {
      setIsPasswordModalOpen(true);
      return;
    }
    navigate('/?roomId=' + roomId);
  };

  return (
    <>
      <RoomListLayout>
        <RoomPaginationBox>
          <button onClick={() => setPage(page - 1)} disabled={page === 1}>
            <img src={roomListLeftIcon} />
          </button>
          <button onClick={() => setPage(page + 1)} disabled={page === numPages}>
            <img src={roomListRightIcon} />
          </button>
        </RoomPaginationBox>
        {isPasswordModalOpen && selectedRoom && (
          <EnterPrivateRoomModal
            roomId={selectedRoom.roomId}
            roomTitle={selectedRoom.roomTitle}
            visible={isPasswordModalOpen}
            onClose={() => setIsPasswordModalOpen(false)}
            successHandler={() => navigate('/?roomId=' + selectedRoom.roomId)}
          />
        )}
        <GlobalLoading isLoading={isMediaLoading && !isMediaSuccess} />
        {broadcastedRooms
          .filter((room) => room.participants !== 0)
          .slice(offset, offset + 9)
          .map((room) => (
            <RoomCard key={room.roomId}>
              <CardContentsBox>
                <Title>
                  {room.roomTitle.length > 6 ? (
                    <div>
                      <text>{room.roomTitle}</text>
                    </div>
                  ) : (
                    room.roomTitle
                  )}
                </Title>
                <Participants>
                  참여인원: {room.participants.toString()}/{room.maxCount}
                </Participants>
                <EnterButton onClick={() => handleJoinRoomClick(room.roomId)}>
                  참가하기
                  <img src={enterRoomIcon} />
                </EnterButton>
              </CardContentsBox>
              {room.isSecretRoom && <img className="secret-room-icon" src={privateRoomIcon} />}
            </RoomCard>
          ))}
      </RoomListLayout>
    </>
  );
};

const RoomListLayout = styled.div`
  position: relative;
  padding: 29px 53px;
  column-gap: 40px;
  row-gap: 24px;
  display: flex;
  flex-wrap: wrap;
`;

const RoomPaginationBox = styled.div`
  position: absolute;
  gap: 32px;
  top: -35px;
  right: 56px;
  display: flex;

  button {
    cursor: pointer;
    background: none;
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
  from {
    -moz-transform: translateX(5%);
    -webkit-transform: translateX(5%);
    transform: translateX(5%);
  }
  to {
    -moz-transform: translateX(-105%);
    -webkit-transform: translateX(-105%);
    transform: translateX(-105%);
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
    -moz-animation: ${titleAnimation} 7s linear infinite;
    -webkit-animation: ${titleAnimation} 7s linear infinite;
    animation: ${titleAnimation} 7s linear infinite;
    text {
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

const EnterButton = styled.button`
  cursor: pointer;
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

export default RoomList;
