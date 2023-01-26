import { useState } from 'react';

import styled from 'styled-components';

import { useAppSelector } from '@redux/hooks';

import Button from '@components/common/Button';
import Input from '@components/common/Input';
import InputContainer from '@components/common/InputContainer';
import Modal from '@components/common/Modal';

const EditProfileModal = ({ visible, onClose }: { visible: boolean; onClose: () => void }) => {
  const user = useAppSelector((state) => state.user.user);
  const [nickname, setNickname] = useState<string | undefined>(user?.nickname);

  return (
    <Modal visible={visible} onClose={onClose} title="EDIT NICKNAME">
      <EditProfileModalLayout>
        <InputContainer label="닉네임 변경">
          <Input type="text" value={nickname} onChange={(e) => setNickname(e.target.value)} maxLength={13} />
        </InputContainer>
        <EditProfileButton>완료하기</EditProfileButton>
      </EditProfileModalLayout>
    </Modal>
  );
};

const EditProfileModalLayout = styled.div`
  padding: 120px 80px;
  gap: 60px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const EditProfileButton = styled(Button)`
  font-size: 24px;
  background-color: ${(props) => props.theme.colors.purple1};
  height: 72px;
`;

export default EditProfileModal;
