import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

import styled from 'styled-components';

import { useAuthSocket } from '@hooks/socket/useAuthSocket';
import useGameSocket from '@hooks/socket/useGameSocket';

import Layout from '@components/common/Layout';
import CamList from '@components/game/CamList';
import ChatLog from '@components/game/ChatLog';

const Room = () => {
  const { id } = useParams();
  const { authorized } = useAuthSocket();

  const { emitUserLeaveRoom, emitJoinRoom, onAnnounceRoomUpdate, onJoinRoom } = useGameSocket();
  useEffect(() => {
    return () => emitUserLeaveRoom();
  }, []);

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
        <Layout height={550} width={400}>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(2,1fr)',
            }}
          >
            <Cam />
            <Cam />
            <Cam />
            <Cam />
            <Cam />
            <Cam />
            {/* <CamList /> */}
          </div>
        </Layout>
      </div>
    </Layout>
  );
};

const Cam = styled.div`
  border: 1px solid white;
  width: 160px;
  height: 160px;
`;
export default Room;
