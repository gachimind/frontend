import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

import styled from 'styled-components';

import { useAuthSocket } from '@hooks/socket/useAuthSocket';
import useGameSocket from '@hooks/socket/useGameSocket';
import useGameUpdateSocket from '@hooks/socket/useGameUpdateSocket';
import useLocalStream from '@hooks/useLocalStream';
import { useAppSelector } from '@redux/hooks';

import CamList from '@components/game/CamList';
import ChatLog from '@components/game/ChatLog';

const Room = () => {
  const { id } = useParams();
  const { authorized } = useAuthSocket();
  const { userStreamRef } = useAppSelector((state) => state.userMedia);
  const { destroyLocalStream } = useLocalStream();
  const { onAnnounceRoomUpdate } = useGameUpdateSocket();
  const { emitUserLeaveRoom, emitJoinRoom, onJoinRoom } = useGameSocket();
  useEffect(() => {
    return () => emitUserLeaveRoom();
  }, []);

  useEffect(() => {
    if (userStreamRef) {
      return () => {
        destroyLocalStream(userStreamRef);
        console.log('[destroy] local stream');
      };
    }
  }, [userStreamRef]);

  useEffect(() => {
    onAnnounceRoomUpdate();
    if (authorized) {
      id && emitJoinRoom({ roomId: parseInt(id, 10) });
      onJoinRoom();
    }
  }, [id, authorized]);

  return (
    <div>
      <ChatLog />
      <CamList />
    </div>
  );
};

export default Room;
