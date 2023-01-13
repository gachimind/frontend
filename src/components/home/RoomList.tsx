import { useEffect } from 'react';
import { useNavigate } from 'react-router';

import styled from 'styled-components';

import useGameSocket from '@hooks/socket/useGameSocket';
import useLocalStream from '@hooks/useLocalStream';
import { useAppSelector } from '@redux/hooks';

const RoomList = () => {
  const navigate = useNavigate();
  const rooms = useAppSelector((state) => state.gameRoom);
  const { onBroadcastWholeRooms } = useGameSocket();
  const { initLocalStream } = useLocalStream();

  useEffect(() => {
    onBroadcastWholeRooms();
  }, []);

  const handleJoinRoomClick = async (roomId: number) => {
    await initLocalStream();
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
  color: white;
`;

const RoomCard = styled.div`
  border-radius: 10px;
  border: 1px solid black;
  padding: 10px;
  min-width: 200px;
`;

export default RoomList;
