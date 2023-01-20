import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import styled from 'styled-components';

import useErrorSocket from '@hooks/socket/useErrorSocket';
import useGameSocket from '@hooks/socket/useGameSocket';
import useDebounce from '@hooks/useDebounce';
import { useAppDispatch } from '@redux/hooks';
import { setLastEnteredRoom } from '@redux/modules/gameRoomSlice';

import Input from '@components/common/Input';
import InputContainer from '@components/common/InputContainer';
import Modal from '@components/common/Modal';

interface EnterPrivateRoomModalProps {
  visible: boolean;
  onClose: () => void;
  roomId?: number;
  roomTitle?: string;
}

const EnterPrivateRoomModal = ({ visible, onClose, roomId, roomTitle }: EnterPrivateRoomModalProps) => {
  const [password, setPassword] = useState<string>('');
  const [isPasswordConfirmed, setIsPasswordConfirmed] = useState<boolean>(false);
  const [submitDisabled, setSubmitDisabled] = useState<boolean>(true);
  const [isPasswordSubmitted, setIsPasswordSubmitted] = useState<boolean>(false);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { onValidRoomPassword, emitValidRoomPassword } = useGameSocket();
  const { onError, offError } = useErrorSocket();
  const debouncedPasswordSubmitted = useDebounce(isPasswordSubmitted, 1000);

  useEffect(() => {
    const regex = /^(\d{4})$/;
    if (regex.test(password)) {
      setSubmitDisabled(false);
      return;
    }
    setSubmitDisabled(true);
  }, [password]);

  useEffect(() => {
    setIsPasswordSubmitted(false);
  }, [debouncedPasswordSubmitted]);

  useEffect(() => {
    onValidRoomPassword(() => {
      setIsPasswordConfirmed(true);
    });
    onError([
      {
        target: 'event',
        value: 'valid-room-password',
        callback: () => {
          setPassword('');
          setIsPasswordSubmitted(true);
        },
      },
    ]);
    return () => {
      offError();
    };
  }, []);

  useEffect(() => {
    if (isPasswordConfirmed) {
      dispatch(
        setLastEnteredRoom({
          roomId,
          password: parseInt(password, 10),
        }),
      );
      navigate('/?roomId=' + roomId);
    }
  }, [isPasswordConfirmed, password]);

  const handlePasswordWithEnterClick = () => {
    if (!roomId || submitDisabled || isPasswordSubmitted) {
      return;
    }
    const roomPassword = parseInt(password, 10);
    emitValidRoomPassword(roomId, roomPassword);
  };

  return (
    <Modal visible={visible} onClose={onClose} title="ENTER THE ROOM">
      <EnterPrivateRoomModalLayout>
        <RoomInfoBox>
          <span>방 제목</span>
          <div>{roomTitle}</div>
        </RoomInfoBox>
        <InputContainer label="비밀번호">
          <Input
            placeholder="비밀번호가 들어간당"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </InputContainer>
        <EnterRoomButton onClick={handlePasswordWithEnterClick} isDisabled={submitDisabled || isPasswordSubmitted}>
          입장하기
        </EnterRoomButton>
      </EnterPrivateRoomModalLayout>
    </Modal>
  );
};

// TODO: 임시 색상으로 추후 변경되어야 한다.
const EnterPrivateRoomModalLayout = styled.div`
  font-family: ${(props) => props.theme.font.korean};
  padding: 40px 70px;
  gap: 28px;
  display: flex;
  flex-direction: column;
  justify-content: center;
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
`;

const EnterRoomButton = styled.button<{ isDisabled: boolean }>`
  font-family: inherit;
  font-size: 24px;
  color: ${(props) => props.theme.colors.ivory1};
  background-color: ${(props) => props.theme.colors.darkGrey1};
  height: 56px;
  margin-top: 26px;
  margin-bottom: 56px;
  opacity: ${(props) => (props.isDisabled ? 0.5 : 1)};
  cursor: ${(props) => !props.isDisabled && 'pointer'};
`;

export default EnterPrivateRoomModal;
