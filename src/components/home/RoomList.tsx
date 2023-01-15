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
            <RoomContentsBox>
              <RoomTitle>방제목</RoomTitle>
              <RoomParticipants>
                참여인원: {room.participants.toString()} / {room.maxCount}
              </RoomParticipants>
              <EnterRoomButton onClick={() => handleJoinRoomClick(room.roomId)}>참가하기</EnterRoomButton>
            </RoomContentsBox>
          </RoomCard>
        ))}
      </RoomListLayout>
    </>
  );
};

const RoomListLayout = styled.div`
  height: 637px;
  padding: 35px 58px;
  column-gap: 22px;
  row-gap: 16px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
`;

const RoomCard = styled.div`
  font-family: ${(props) => props.theme.font.korean};
  background-color: white;
`;

const RoomContentsBox = styled.div`
  font-family: inherit;
  margin-left: 11.27%;
  margin-right: 45.77%;
  margin-top: 8%;
  margin-bottom: 6%;
  display: flex;
  flex-direction: column;
`;

const RoomTitle = styled.span`
  font-family: inherit;
  font-size: 24px;
`;

const RoomParticipants = styled.span`
  font-family: inherit;
  font-size: 16px;
`;

const EnterRoomButton = styled.button`
  font-family: inherit;
  font-size: 20px;
  border-radius: 24px;
  margin-top: 28.53px;
  padding: 8px 24px;
`;

export default RoomList;
