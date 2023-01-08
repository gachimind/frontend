import { useState } from 'react';

import CreateGameModal from './CreateGameModal';

const UserInfo = () => {
  const [createGameModalVisible, setCreateGameModalVisible] = useState<boolean>(false);
  return (
    <div>
      {createGameModalVisible && (
        <CreateGameModal visible={createGameModalVisible} onClose={() => setCreateGameModalVisible(false)} />
      )}
      <button onClick={() => setCreateGameModalVisible(true)}>게임만들기</button>
    </div>
  );
};

export default UserInfo;
