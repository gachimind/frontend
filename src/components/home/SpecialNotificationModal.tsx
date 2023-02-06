import styled from 'styled-components';

import Modal from '@components/common/Modal';

interface SpecialNotificationModalProps {
  visible: boolean;
  onClose: () => void;
  contents: string;
}

const SpecialNotificationModal = ({ visible, onClose, contents }: SpecialNotificationModalProps) => {
  return (
    <Modal visible={visible} onClose={onClose}>
      <SpecialNotificationModalLayout>
        <h1>특 별 공 지</h1>
        <p>{contents}</p>
      </SpecialNotificationModalLayout>
    </Modal>
  );
};

const SpecialNotificationModalLayout = styled.div`
  padding: 40px 40px;
  gap: 24px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: ${(props) => props.theme.colors.white1};
`;

export default SpecialNotificationModal;
