import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

import useGameSocket from '@hooks/socket/useGameSocket';

const Room = () => {
  const { id } = useParams();
  const { emitUserLeaveRoom, emitJoinRoom } = useGameSocket();
  useEffect(() => {
    return () => emitUserLeaveRoom();
  }, []);

  useEffect(() => {
    id && emitJoinRoom(id);
  }, [id]);

  return <div>게임방</div>;
};

export default Room;
