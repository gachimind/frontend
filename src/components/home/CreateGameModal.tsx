import { useState } from 'react';
import { useNavigate } from 'react-router';

import styled from 'styled-components';

import lockIcon from '@assets/svg_lockIcon.svg';
import { PARTICIPANTS_OPTIONS } from '@constants/options';
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
      isSecretRoom: true,
    };
    emitCreateRoom(createRoom);
    onClose();
    // TODO: 비밀번호 input 구현 후 적용
    onShowCreatedRoomId(navigate, '/?roomId=', 1234);
  };
  return (
    <Modal visible={visible} onClose={onClose} title="MAKE A ROOM">
      <CreateGameModalLayout>
        <InputContainer label="방제">
          <Input
            style={{ width: '340px' }}
            type="text"
            value={roomTitle}
            onChange={(e) => setRoomTitle(e.target.value)}
          />
          <img style={{ position: 'absolute', right: '68px', marginTop: '34px' }} src={lockIcon} />
        </InputContainer>
        <InputContainer label="비밀번호">
          <Input type="text" />
        </InputContainer>
        <InputContainer label="인원">
          <Selection options={PARTICIPANTS_OPTIONS} />
        </InputContainer>
        <InputContainer label="카운트">
          <Input type="number" value={maxCount} onChange={(e) => setMaxCount(parseInt(e.target.value))} />
        </InputContainer>
        <CreateRoomButton onClick={handleCreateGameButtonClick}>생성하기</CreateRoomButton>
      </CreateGameModalLayout>
    </Modal>
  );
};

const CreateGameModalLayout = styled.div`
  font-family: ${(props) => props.theme.font.korean};
  padding: 40px 70px 48px 70px;
  gap: 24px;
  display: flex;
  flex-direction: column;
`;

const CreateRoomButton = styled.button`
  cursor: pointer;
  font-family: inherit;
  font-size: 24px;
  color: ${(props) => props.theme.colors.ivory1};
  background-color: ${(props) => props.theme.colors.darkGrey2};
  height: 72px;
  margin-top: 20px;

  border-top: ${(props) => props.theme.borders.normalwhite};
  border-right: ${(props) => props.theme.borders.normalblack};
  border-bottom: ${(props) => props.theme.borders.normalblack};
  border-left: ${(props) => props.theme.borders.normalwhite};
`;

export default CreateGameModal;
