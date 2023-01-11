import { useAuthSocket } from '@hooks/socket/useAuthSocket';

import Layout from '@components/common/Layout';
import RoomList from '@components/home/RoomList';
import UserInfo from '@components/home/UserInfo';

const Main = () => {
  useAuthSocket();
  return (
    <Layout main={true} height={670} width={1400}>
      <div style={{ marginTop: '20px', display: 'flex', justifyContent: 'center', gap: '40px' }}>
        <Layout height={500} width={300}>
          <UserInfo />
        </Layout>
        <br />
        <Layout height={500} width={800}>
          <RoomList />
        </Layout>
      </div>
    </Layout>
  );
};

export default Main;
