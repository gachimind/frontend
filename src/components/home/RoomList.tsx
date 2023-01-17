import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router';

import styled from 'styled-components';

import useGameSocket from '@hooks/socket/useGameSocket';
import useLocalStream from '@hooks/useLocalStream';
import { useAppSelector } from '@redux/hooks';
import { getParam } from '@utils/common';

import GlobalLoading from '@components/common/GlobalLoading';

const RoomList = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const rooms = useAppSelector((state) => state.gameRoom);
  const { isMediaLoading, isMediaSuccess } = useAppSelector((state) => state.userMedia);
  const { onBroadcastWholeRooms } = useGameSocket();
  const { initLocalStream } = useLocalStream();

  useEffect(() => {
    onBroadcastWholeRooms();
  }, []);

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
    navigate('/?roomId=' + roomId);
  };

  return (
    <>
      <RoomListLayout>
        <GlobalLoading isLoading={isMediaLoading && !isMediaSuccess} />
        {rooms.broadcastedRooms.map((room) => (
          <RoomCard key={room.roomId}>
            <CardContentsBox>
              <Title>방제목</Title>
              <Participants>
                참여인원: {room.participants.toString()} / {room.maxCount}
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
  height: 94.3%;
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

const CardContentsBox = styled.div`
  font-family: inherit;
  margin-left: 11.27%;
  margin-right: 45.77%;
  margin-top: 8%;
  margin-bottom: 6%;
  display: flex;
  flex-direction: column;
`;

const Title = styled.span`
  font-family: inherit;
  font-size: 24px;
`;

const Participants = styled.span`
  font-family: inherit;
  font-size: 16px;
`;

const EnterButton = styled.button`
  font-family: inherit;
  font-size: 20px;
  border-radius: 24px;
  margin-top: 28.53px;
  padding: 8px 24px;
`;

export default RoomList;
