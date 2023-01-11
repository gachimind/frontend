import { useState } from 'react';

import CreateGameModal from './CreateGameModal';
import LoginModal from './LoginModal';

const UserInfo = () => {
  const [loginModalVisible, setLoginGameModalVisible] = useState<boolean>(false);
  const [createGameModalVisible, setCreateGameModalVisible] = useState<boolean>(false);

  return (
    <div>
      {loginModalVisible && <LoginModal visible={loginModalVisible} onClose={() => setLoginGameModalVisible(false)} />}
      <button onClick={() => setLoginGameModalVisible(true)}>로그인</button>
      {createGameModalVisible && (
        <CreateGameModal visible={createGameModalVisible} onClose={() => setCreateGameModalVisible(false)} />
      )}
      <button onClick={() => setCreateGameModalVisible(true)}>게임만들기</button>
    </div>
  );
};

export default UserInfo;
