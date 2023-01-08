import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { useAuthSocket } from '@hooks/socket/useAuthSocket';
import useGameSocket from '@hooks/socket/useGameSocket';

import CamList from '@components/game/CamList';
import ChatLog from '@components/game/ChatLog';

const Room = () => {
  const { id } = useParams();
  const { authorized } = useAuthSocket();

  const { emitUserLeaveRoom, emitJoinRoom, onAnnounceRoomUpdate } = useGameSocket();
  useEffect(() => {
    return () => emitUserLeaveRoom();
  }, []);

  useEffect(() => {
    onAnnounceRoomUpdate();
    if (authorized) {
      id && emitJoinRoom(id);
    }
  }, [id, authorized]);

  return (
    <div>
      게임방
      <CamList />
      <ChatLog />
    </div>
  );
};

export default Room;
