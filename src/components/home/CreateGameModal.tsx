import { useState } from 'react';
import { useNavigate } from 'react-router';

import styled from 'styled-components';

import { PARTICIPANTS_OPTIONS, ROUND_OPTIONS } from '@constants/options';
import useGameSocket from '@hooks/socket/useGameSocket';

import Input from '@components/common/Input';
import InputContainer from '@components/common/InputContainer';
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
      discussionTime: 60,
      readyTime: 30,
      speechTime: 30,
      round: 1,
      roomPassword: 1234,
      isSecreteRoom: true,
    };
    emitCreateRoom(createRoom);
    onClose();
    // TODO: 비밀번호 input 구현 후 적용
    onShowCreatedRoomId(navigate, '/?roomId=', 1234);
  };
  return (
    <Modal visible={visible} onClose={onClose} title="MAKE A ROOM">
      <CreateGameModalLayout>
        <InputContainer label="방제목">
          <Input type="text" value={roomTitle} onChange={(e) => setRoomTitle(e.target.value)} placeholder="방제목" />
        </InputContainer>
        <InputContainer label="인원">
          <Selection options={PARTICIPANTS_OPTIONS} />
        </InputContainer>
        <InputContainer label="라운드">
          <Selection options={ROUND_OPTIONS} />
        </InputContainer>
        <InputContainer label="카운트">
          <Input placeholder="카운트가 들어간당" />
        </InputContainer>
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

const CreateRoomButton = styled.button`
  font-family: inherit;
  font-size: 24px;
  color: ${(props) => props.theme.colors.ivory1};
  background-color: ${(props) => props.theme.colors.darkGrey1};
  height: 56px;
  margin-top: 60px;
`;

export default CreateGameModal;
