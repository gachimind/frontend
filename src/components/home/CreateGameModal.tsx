import { useState } from 'react';
import { useNavigate } from 'react-router';

import styled from 'styled-components';

import lockIcon from '@assets/svg_lockIcon.svg';
import { COUNT_OPTIONS, PARTICIPANTS_OPTIONS } from '@constants/options';
import useGameSocket from '@hooks/socket/useGameSocket';

import Button from '@components/common/Button';
import Input from '@components/common/Input';
import InputContainer from '@components/common/InputContainer';
import Modal from '@components/common/Modal';
import Selection from '@components/common/Selection';

import { CreateRoomRequest } from '@customTypes/socketType';

const CreateGameModal = ({ visible, onClose }: { visible: boolean; onClose: () => void }) => {
  const [roomTitle, setRoomTitle] = useState<string>('가치마인드 한 판 해요');
  const [maxCount, setMaxCount] = useState<number>(2);
  const [time, setTime] = useState<string>('30:30:60');
  const [roomPassword, setRoomPassword] = useState<string>('');
  const [isSecretRoom, setIsSecretRoom] = useState<boolean>(false);
  const { onShowCreatedRoomId, emitCreateRoom } = useGameSocket();
  const navigate = useNavigate();

  const handleCreateGameButtonClick = () => {
    if (!roomTitle || maxCount < 2 || maxCount > 6 || (isSecretRoom && String(roomPassword)?.length !== 4)) {
      return;
    }
    const password = isSecretRoom ? Number(roomPassword) : undefined;
    const createRoom: CreateRoomRequest = {
      roomTitle,
      maxCount,
      readyTime: Number(time.split(':')[0]) * 1000,
      speechTime: Number(time.split(':')[1]) * 1000,
      discussionTime: Number(time.split(':')[2]) * 1000,
      round: 1,
      roomPassword: password,
      isSecretRoom,
    };
    emitCreateRoom(createRoom);
    onClose();
    onShowCreatedRoomId(navigate, '/?roomId=', password);
  };
  return (
    <Modal visible={visible} onClose={onClose} title="MAKE A ROOM">
      <CreateGameModalLayout>
        <InputContainer label="방제">
          <TitleInputBox>
            <Input
              style={{ width: '328px' }}
              type="text"
              value={roomTitle}
              onChange={(e) => setRoomTitle(e.target.value)}
              maxLength={12}
            />
            <PasswordButton onClick={() => setIsSecretRoom((prev) => !prev)}>
              <img src={lockIcon} />
            </PasswordButton>
          </TitleInputBox>
        </InputContainer>
        {isSecretRoom && (
          <InputContainer label="비밀번호">
            <Input
              type="text"
              value={roomPassword}
              onChange={(e) => setRoomPassword(e.target.value.replace(/[^0-9.]/g, '').replace(/(\..*)\./g, '$1'))}
              maxLength={4}
            />
          </InputContainer>
        )}
        <InputContainer label="인원">
          <Selection options={PARTICIPANTS_OPTIONS} setValue={setMaxCount} />
        </InputContainer>
        <InputContainer label="카운트(발표/준비/토론)">
          <Selection options={COUNT_OPTIONS} setValue={setTime} />
        </InputContainer>
        <CreateRoomButton onClick={handleCreateGameButtonClick}>생성하기</CreateRoomButton>
      </CreateGameModalLayout>
    </Modal>
  );
};

const CreateGameModalLayout = styled.div`
  padding: 40px 70px 48px 70px;
  gap: 24px;
  display: flex;
  flex-direction: column;
`;

const TitleInputBox = styled.div`
  display: flex;
  justify-content: space-between;
`;

const PasswordButton = styled(Button)`
  width: 56px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const CreateRoomButton = styled(Button)`
  font-size: 24px;
  height: 72px;
  margin-top: 20px;
`;

export default CreateGameModal;
