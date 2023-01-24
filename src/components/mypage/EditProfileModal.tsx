import styled from 'styled-components';

import Button from '@components/common/Button';
import Input from '@components/common/Input';
import InputContainer from '@components/common/InputContainer';
import Modal from '@components/common/Modal';

const EditProfileModal = ({ visible, onClose }: { visible: boolean; onClose: () => void }) => {
  return (
    <Modal visible={visible} onClose={onClose} title="EDIT NICKNAME">
      <EditProfileModalLayout>
        <InputContainer label="닉네임 변경">
          <Input type="text" />
        </InputContainer>
        <EditProfileButton>변경하기</EditProfileButton>
      </EditProfileModalLayout>
    </Modal>
  );
};

// TODO: 임시 색상으로 추후 변경되어야 한다.
const EditProfileModalLayout = styled.div`
  padding: 120px 70px;
  gap: 68px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const EditProfileButton = styled(Button)`
  font-size: 24px;
  height: 56px;
`;

export default EditProfileModal;
