import { useEffect } from 'react';
import { useNavigate } from 'react-router';

import styled from 'styled-components';

import useGameSocket from '@hooks/socket/useGameSocket';
import { useAppSelector } from '@redux/hooks';

const RoomList = () => {
  const navigate = useNavigate();
  const rooms = useAppSelector((state) => state.gameRoom);
  const { onBroadcastWholeRooms } = useGameSocket();

  useEffect(() => {
    onBroadcastWholeRooms();
  }, []);

  const handleJoinRoomClick = (roomId: number) => {
    navigate('/room/' + roomId);
  };

  return (
    <>
      <br />
      <RoomListLayout>
        {rooms.broadcastedRooms.map((room) => (
          <RoomCard key={room.roomId}>
            <button onClick={() => handleJoinRoomClick(room.roomId)}>들가기</button>
            <p>
              현재 인원: {room.participants.toString()} / {room.maxCount}
            </p>
          </RoomCard>
        ))}
      </RoomListLayout>
    </>
  );
};

const RoomListLayout = styled.div`
  display: flex;
  flex-wrap: wrap;
  grid-column-gap: 16px;
  grid-row-gap: 16px;
`;

const RoomCard = styled.div`
  border-radius: 10px;
  border: 1px solid black;
  padding: 10px;
  min-width: 200px;
`;

export default RoomList;
