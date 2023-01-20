import styled from 'styled-components';

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
        <EditProfileButton>제보하기..?</EditProfileButton>
      </EditProfileModalLayout>
    </Modal>
  );
};

// TODO: 임시 색상으로 추후 변경되어야 한다.
const EditProfileModalLayout = styled.div`
  font-family: ${(props) => props.theme.font.korean};
  padding: 120px 70px;
  gap: 68px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const EditProfileButton = styled.button`
  cursor: pointer;
  font-family: inherit;
  font-size: 24px;
  color: ${(props) => props.theme.colors.ivory1};
  background-color: ${(props) => props.theme.colors.darkGrey2};
  height: 56px;

  border-top: ${(props) => props.theme.borders.normalwhite};
  border-right: ${(props) => props.theme.borders.normalblack};
  border-bottom: ${(props) => props.theme.borders.normalblack};
  border-left: ${(props) => props.theme.borders.normalwhite};
`;

export default EditProfileModal;
