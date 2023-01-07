import { useEffect } from 'react';

import useGameSocket from '@hooks/socket/useGameSocket';

const Room = () => {
  const { emitUserLeaveRoom } = useGameSocket();
  useEffect(() => {
    return () => emitUserLeaveRoom();
  }, []);

  return <div>게임방</div>;
};

export default Room;
