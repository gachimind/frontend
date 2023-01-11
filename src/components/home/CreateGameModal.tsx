import { useState } from 'react';
import { useNavigate } from 'react-router';

import useGameSocket from '@hooks/socket/useGameSocket';

import Modal from '@components/common/Modal';

import { CreateRoomRequest } from '@customTypes/socketType';

// TODO: 모든 input을 추가하고 유효성 검사를 수행하여 방을 생성할 수 있어야 한다.
const CreateGameModal = ({ visible, onClose }: { visible: boolean; onClose: () => void }) => {
  const [roomTitle, setRoomTitle] = useState<string>('');
  const [maxCount, setMaxCount] = useState<number>(2);
  const { onShowCreatedRoomId, emitCreateRoom } = useGameSocket();
  const navigate = useNavigate();
  const handleCreateGameButtonClick = () => {
    if (!roomTitle || maxCount < 2 || maxCount > 6) {
      return;
    }

    const createRoom: CreateRoomRequest = {
      roomTitle,
      maxCount,
      isSecretRoom: false,
      discussionTime: 60,
      readyTime: 30,
      speechTime: 30,
      round: 1,
    };
    emitCreateRoom(createRoom);
    onShowCreatedRoomId(navigate, '/room/');
  };
  return (
    <Modal visible={visible} onClose={onClose}>
      <input type="text" value={roomTitle} onChange={(e) => setRoomTitle(e.target.value)} placeholder="방제목" />
      <input
        type="number"
        value={maxCount}
        onChange={(e) => setMaxCount(parseInt(e.target.value))}
        placeholder="최대인원"
      />
      <button onClick={handleCreateGameButtonClick}>생성하기</button>
    </Modal>
  );
};

export default CreateGameModal;
