import styled from 'styled-components';

import cursorIcon from '@assets/svg_cursorIcon.svg';

import Modal from '@components/common/Modal';

interface SpecialNotificationModalProps {
  visible: boolean;
  onClose: () => void;
  contents: string;
  notificaionKey: string;
}

const SpecialNotificationModal = ({ visible, onClose, contents, notificaionKey }: SpecialNotificationModalProps) => {
  const notVisibleToday = () => {
    const date = new Date();
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();
    const currentDate = `${year}${month}${day}`;
    return currentDate === localStorage.getItem(notificaionKey);
  };

  const handleClickShowOnlyTodaySpan = () => {
    const date = new Date();
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();
    const currentDate = `${year}${month}${day}`;
    localStorage.setItem(notificaionKey, currentDate);
    onClose();
  };
  return (
    <>
      {!notVisibleToday() && (
        <Modal visible={visible} onClose={onClose}>
          <SpecialNotificationModalLayout>
            <h1>특 별 공 지</h1>
            <p>{contents}</p>
            <div>
              <span onClick={handleClickShowOnlyTodaySpan}>오늘 하루 보지 않기</span>
            </div>
          </SpecialNotificationModalLayout>
        </Modal>
      )}
    </>
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

  span {
    cursor: url(${cursorIcon}), pointer;
    text-decoration: underline;
    :hover {
      color: yellow;
    }
  }
`;

export default SpecialNotificationModal;
