import { useState } from 'react';
import { useNavigate } from 'react-router';

import styled from 'styled-components';

import { PARTICIPANTS_OPTIONS, ROUND_OPTIONS } from '@constants/options';
import useGameSocket from '@hooks/socket/useGameSocket';

import Modal from '@components/common/Modal';
import Selection from '@components/common/Selection';

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
    onClose();
    onShowCreatedRoomId(navigate, '/?roomId=');
  };
  return (
    <Modal visible={visible} onClose={onClose} title="MAKE A ROOM">
      <CreateGameModalLayout>
        <RoomInfoBox>
          <span>방제</span>
          <div>방제</div>
        </RoomInfoBox>
        <RoomInfoBox>
          <span>인원</span>
          <Selection options={PARTICIPANTS_OPTIONS} />
          {/* <input
            type="number"
            value={maxCount}
            onChange={(e) => setMaxCount(parseInt(e.target.value))}
            placeholder="최대인원"
          /> */}
        </RoomInfoBox>
        <RoomInfoBox>
          <span>라운드</span>
          <Selection options={ROUND_OPTIONS} />
          {/* <input type="number" placeholder="라운드가 들어간당" /> */}
        </RoomInfoBox>
        <RoomInfoBox>
          <span>카운트</span>
          <input placeholder="카운트가 들어간당" />
        </RoomInfoBox>
        <CreateRoomButton onClick={handleCreateGameButtonClick}>생성하기</CreateRoomButton>
      </CreateGameModalLayout>
    </Modal>
  );
};

// TODO: 임시 색상으로 추후 변경되어야 한다.
const CreateGameModalLayout = styled.div`
  background-color: white;
  font-family: ${(props) => props.theme.font.korean};
  padding: 40px 70px 48px 70px;
  gap: 24px;
  display: flex;
  flex-direction: column;
`;

const RoomInfoBox = styled.div`
  font-family: inherit;
  display: flex;
  flex-direction: column;
  span {
    font-family: inherit;
    font-size: 24px;
    margin-bottom: 8px;
  }
  div {
    font-family: inherit;
    font-size: 24px;
    background-color: ${(props) => props.theme.colors.ivory1};
    height: 56px;
    padding-left: 20px;
    display: flex;
    align-items: center;
  }
  input {
    font-family: inherit;
    font-size: 24px;
    background-color: ${(props) => props.theme.colors.ivory1};
    height: 56px;
    padding-left: 20px;
  }
`;

const CreateRoomButton = styled.button`
  font-family: inherit;
  font-size: 24px;
  color: ${(props) => props.theme.colors.ivory1};
  background-color: ${(props) => props.theme.colors.darkGrey1};
  height: 56px;
  margin-top: 60px;
`;

export default CreateGameModal;
