import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import styled from 'styled-components';

import lockIcon from '@assets/svg_lockIcon.svg';
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
  const [submitDisabled, setSubmitDisabled] = useState<boolean>(true);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    const regex = /^(\d{4})$/;
    if (regex.test(password)) {
      setSubmitDisabled(false);
      return;
    }
    setSubmitDisabled(true);
  }, [password]);

  const handlePasswordWithEnterClick = () => {
    dispatch(
      setLastEnteredRoom({
        roomId,
        password: parseInt(password, 10),
      }),
    );
    navigate('/?roomId=' + roomId);
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
        <EnterRoomButton onClick={handlePasswordWithEnterClick} isDisabled={submitDisabled}>
          입장하기
        </EnterRoomButton>
      </EnterPrivateRoomModalLayout>
    </Modal>
  );
};

const EnterPrivateRoomModalLayout = styled.div`
  font-family: ${(props) => props.theme.font.korean};
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

  border-top: ${(props) => props.theme.borders.normalblack};
  border-right: ${(props) => props.theme.borders.normalwhite};
  border-bottom: ${(props) => props.theme.borders.normalwhite};
  border-left: ${(props) => props.theme.borders.normalblack};

  img {
    position: absolute;
    right: 78px;
    margin-top: -2px;
  }
`;

const EnterRoomButton = styled.button<{ isDisabled: boolean }>`
  cursor: ${(props) => !props.isDisabled && 'pointer'};
  font-family: inherit;
  font-size: 24px;
  color: ${(props) => props.theme.colors.ivory1};
  background-color: ${(props) => props.theme.colors.darkGrey2};
  opacity: ${(props) => (props.isDisabled ? 0.5 : 1)};
  height: 72px;
  margin-top: 20px;

  border-top: ${(props) => props.theme.borders.normalwhite};
  border-right: ${(props) => props.theme.borders.normalblack};
  border-bottom: ${(props) => props.theme.borders.normalblack};
  border-left: ${(props) => props.theme.borders.normalwhite};
`;

export default EnterPrivateRoomModal;
