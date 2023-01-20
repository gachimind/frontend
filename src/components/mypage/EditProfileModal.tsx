import styled from 'styled-components';

import Modal from '@components/common/Modal';

const EditProfileModal = ({ visible, onClose }: { visible: boolean; onClose: () => void }) => {
  return (
    <Modal visible={visible} onClose={onClose} title="EDIT NICKNAME">
      <EditProfileModalLayout>
        <InputBox>
          <span>닉네임 변경</span>
          <input placeholder="닉네임이 들어간당" />
        </InputBox>
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

const InputBox = styled.div`
  font-family: inherit;
  display: flex;
  flex-direction: column;
  span {
    font-family: inherit;
    font-size: 24px;
    margin-bottom: 8px;
  }
  input {
    font-family: inherit;
    font-size: 24px;
    background-color: ${(props) => props.theme.colors.ivory1};
    height: 56px;
    ::placeholder {
      padding-left: 20px;
    }
  }
`;

const EditProfileButton = styled.button`
  cursor: pointer;
  font-family: inherit;
  font-size: 24px;
  color: ${(props) => props.theme.colors.ivory1};
  background-color: ${(props) => props.theme.colors.darkGrey1};
  height: 56px;
`;

export default EditProfileModal;
