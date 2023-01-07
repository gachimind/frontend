import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

import useGameSocket from '@hooks/socket/useGameSocket';
import { useSocketService } from '@hooks/socket/useSocketService';

import ChatLog from '@components/game/ChatLog';

const Room = () => {
  const { id } = useParams();
  const { authorized } = useSocketService();

  const { emitUserLeaveRoom, emitJoinRoom } = useGameSocket();
  useEffect(() => {
    return () => emitUserLeaveRoom();
  }, []);

  useEffect(() => {
    if (authorized) {
      id && emitJoinRoom(id);
    }
  }, [id, authorized]);

  return (
    <div>
      게임방
      <ChatLog />
    </div>
  );
};

export default Room;
