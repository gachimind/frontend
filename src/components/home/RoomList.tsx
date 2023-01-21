import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router';

import styled from 'styled-components';

import roomCard from '@assets/svg_roomCard.svg';
import { useAuthSocket } from '@hooks/socket/useAuthSocket';
import useLocalStream from '@hooks/useLocalStream';
import { useAppSelector } from '@redux/hooks';
import { getParam } from '@utils/common';

import GlobalLoading from '@components/common/GlobalLoading';

import { GameRoomBroadcastResponse } from '@customTypes/socketType';

import EnterPrivateRoomModal from './EnterPrivateRoomModal';

const RoomList = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { broadcastedRooms } = useAppSelector((state) => state.gameRoom);
  const { isMediaLoading, isMediaSuccess } = useAppSelector((state) => state.userMedia);
  const [selectedRoom, setSelectedRoom] = useState<GameRoomBroadcastResponse>();
  useAuthSocket();
  const { initLocalStream } = useLocalStream();

  const [isPasswordModalOpen, setIsPasswordModalOpen] = useState<boolean>(false);

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
          .map((room) => (
            <RoomCard key={room.roomId}>
              <CardContentsBox>
                <Title>{room.roomTitle}</Title>
                <Participants>
                  참여인원: {room.participants.toString()}/{room.maxCount}
                </Participants>
                <EnterButton onClick={() => handleJoinRoomClick(room.roomId)}>참가하기</EnterButton>
              </CardContentsBox>
            </RoomCard>
          ))}
      </RoomListLayout>
    </>
  );
};

const RoomListLayout = styled.div`
  padding: 29px 46px;
  column-gap: 32px;
  row-gap: 16px;
  display: flex;
  flex-wrap: wrap;
`;

const RoomCard = styled.div`
  background-image: url(${roomCard});
  width: 272px;
  height: 176px;
`;

const CardContentsBox = styled.div`
  font-family: inherit;
  margin-left: 32px;
  margin-top: 48px;
  display: flex;
  flex-direction: column;
`;

const Title = styled.span`
  background-image: linear-gradient(0deg, rgba(121, 121, 121, 0.5) 50%, #ffffff 50%);
  background-size: 100%;
  background-clip: text;
  -webkit-text-stroke: 1px #797979;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-family: inherit;
  font-size: 20px;
  line-height: 150%;
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
  text-shadow: ${(props) => props.theme.textShadow.textShadow};
  background-color: ${(props) => props.theme.colors.darkGrey2};
  margin-top: 12px;
  width: 96px;
  height: 40px;

  border-top: ${(props) => props.theme.borders.normalGrey};
  border-right: ${(props) => props.theme.borders.normalBlack};
  border-bottom: ${(props) => props.theme.borders.normalBlack};
  border-left: ${(props) => props.theme.borders.normalGrey};
`;

export default RoomList;
