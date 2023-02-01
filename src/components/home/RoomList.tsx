import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router';

import styled from 'styled-components';

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
          <span>0{broadcastedRooms.filter((room) => room.participants !== 0).length === 0 ? 0 : page}</span>
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
            <RoomCard key={room.roomId} room={room} onJoinClick={() => handleJoinRoomClick(room.roomId)} />
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
  gap: 23px;
  top: -35px;
  right: 56px;
  display: flex;
  align-items: center;

  button {
    background: none;
  }

  span {
    font-size: 20px;
    color: ${(props) => props.theme.colors.darkGrey4};
  }
`;

export default RoomList;
