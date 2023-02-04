import styled from 'styled-components';

import Button from '@components/common/Button';
import Modal from '@components/common/Modal';

const LeaveRoomModal = ({ visible, onClose }: { visible: boolean; onClose: () => void }) => {
  return (
    <Modal visible={visible} onClose={onClose}>
      <LeaveRoomModalBox>
        정말 나갈거냐옹?
        <ButtonBox>
          <LeaveButton onClick={() => window.location.replace('/')}>나가기</LeaveButton>
          <StayButton onClick={onClose}>계속하기</StayButton>
        </ButtonBox>
      </LeaveRoomModalBox>
    </Modal>
  );
};

const LeaveRoomModalBox = styled.div`
  font-size: 26px;
  color: ${(props) => props.theme.colors.white1};
  padding: 50px 80px;
  gap: 30px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const ButtonBox = styled.div`
  font-family: inherit;
  gap: 24px;
  display: flex;
  justify-content: center;
`;

const LeaveButton = styled(Button)`
  font-size: 24px;
  width: 200px;
  height: 72px;
`;

const StayButton = styled(Button)`
  font-size: 24px;
  background-color: ${(props) => props.theme.colors.purple1};
  width: 200px;
  height: 72px;
`;

export default LeaveRoomModal;
