import styled from 'styled-components';

import Modal from '@components/common/Modal';

const EnterRoomModal = ({ visible, onClose }: { visible: boolean; onClose: () => void }) => {
  return (
    <Modal visible={visible} onClose={onClose} title="ENTER THE ROOM">
      <EnterRoomModalLayout>
        <InputBox>
          <span>방 제목</span>
          <input placeholder="방 제목이 들어간당" />
        </InputBox>
        <InputBox>
          <span>비밀번호</span>
          <input placeholder="비밀번호가 들어간당" />
        </InputBox>
        <EnterRoomButton>생성하기</EnterRoomButton>
      </EnterRoomModalLayout>
    </Modal>
  );
};

// TODO: 임시 색상으로 추후 변경되어야 한다.
const EnterRoomModalLayout = styled.div`
  font-family: ${(props) => props.theme.font.korean};
  padding: 40px 70px;
  gap: 28px;
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

const EnterRoomButton = styled.button`
  font-family: inherit;
  font-size: 24px;
  color: ${(props) => props.theme.colors.ivory1};
  background-color: ${(props) => props.theme.colors.darkGrey1};
  height: 56px;
  margin-top: 26px;
  margin-bottom: 56px;
`;

export default EnterRoomModal;
