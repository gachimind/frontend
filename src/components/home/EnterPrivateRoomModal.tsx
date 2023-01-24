import { useEffect, useState } from 'react';

import styled from 'styled-components';

import lockIcon from '@assets/svg_lockIcon.svg';
import useErrorSocket from '@hooks/socket/useErrorSocket';
import useGameSocket from '@hooks/socket/useGameSocket';
import useDebounce from '@hooks/useDebounce';
import { useAppDispatch } from '@redux/hooks';
import { setLastEnteredRoom } from '@redux/modules/gameRoomSlice';

import Button from '@components/common/Button';
import Input from '@components/common/Input';
import InputContainer from '@components/common/InputContainer';
import Modal from '@components/common/Modal';

interface EnterPrivateRoomModalProps {
  visible: boolean;
  onClose: () => void;
  roomId?: number;
  roomTitle?: string;
  successHandler: () => void;
}

const EnterPrivateRoomModal = ({ visible, onClose, roomId, roomTitle, successHandler }: EnterPrivateRoomModalProps) => {
  const [password, setPassword] = useState<string>('');
  const [isPasswordConfirmed, setIsPasswordConfirmed] = useState<boolean>(false);
  const [submitDisabled, setSubmitDisabled] = useState<boolean>(true);
  const [isPasswordSubmitted, setIsPasswordSubmitted] = useState<boolean>(false);
  const dispatch = useAppDispatch();
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
      successHandler();
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
        <InputContainer label="방제">
          <RoomTitle>
            {roomTitle}
            <img src={lockIcon} />
          </RoomTitle>
        </InputContainer>
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

const EnterPrivateRoomModalLayout = styled.div`
  padding: 56px 80px 64px 80px;
  gap: 28px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const RoomTitle = styled.div`
  font-family: inherit;
  font-size: 24px;
  color: ${(props) => props.theme.colors.ivory2};
  background-color: ${(props) => props.theme.colors.darkGrey2};
  width: 328px;
  height: 56px;
  display: flex;
  ${(props) => props.theme.borders.bottomRightWhiteBorder}

  img {
    position: absolute;
    right: 78px;
    margin-top: -2px;
  }
`;

const EnterRoomButton = styled(Button)<{ isDisabled: boolean }>`
  cursor: ${(props) => props.isDisabled && 'auto'};
  font-size: 24px;
  opacity: ${(props) => (props.isDisabled ? 0.5 : 1)};
  height: 72px;
  margin-top: 20px;
`;

export default EnterPrivateRoomModal;
