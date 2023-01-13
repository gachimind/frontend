import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

import styled from 'styled-components';

import { useAuthSocket } from '@hooks/socket/useAuthSocket';
import useGameSocket from '@hooks/socket/useGameSocket';
import useGameUpdateSocket from '@hooks/socket/useGameUpdateSocket';
import useLocalStream from '@hooks/useLocalStream';
import { useAppSelector } from '@redux/hooks';

import Layout from '@components/common/Layout';
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
    <Layout main={true} height={670} width={1400}>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          gap: '40px',
        }}
      >
        <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
          <Layout height={150} width={400}></Layout>
          <Layout height={350} width={400}></Layout>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
          <Layout height={350} width={400}></Layout>
          <Layout height={150} width={400}>
            <ChatLog />
          </Layout>
        </div>
        <Layout width={400} height={500}>
          <CamList />
        </Layout>
      </div>
    </Layout>
  );
};

export default Room;
