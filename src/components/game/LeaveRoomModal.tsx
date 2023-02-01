import { useRef } from 'react';
import { createPortal } from 'react-dom';
import { useNavigate } from 'react-router';

import styled from 'styled-components';

import useClickAway from '@hooks/useClickAway';

import Button from '@components/common/Button';

interface LeaveRoomModalProps {
  visible: boolean;
  onClose: () => void;
}

const LeaveRoomModal = ({ visible, onClose }: LeaveRoomModalProps) => {
  const navigate = useNavigate();
  const ref = useRef(null);
  useClickAway(ref, () => onClose && onClose());
  const portalDiv = document.querySelector('#modal-root');

  if (!portalDiv) {
    return null;
  }
  return (
    <>
      {visible &&
        createPortal(
          <LeaveRoomModalLayout>
            <ModalBackgroundLayout visible={visible}>
              <ModalBox ref={ref}>
                <ModalContents>
                  정말 나가시겠습니까?
                  <ButtonBox>
                    <LeaveButton onClick={() => navigate('/')}>나가기</LeaveButton>
                    <StayButton onClick={onClose}>계속하기</StayButton>
                  </ButtonBox>
                </ModalContents>
              </ModalBox>
            </ModalBackgroundLayout>
          </LeaveRoomModalLayout>,
          portalDiv,
        )}
    </>
  );
};

const LeaveRoomModalLayout = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 998;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.6);
`;

const ModalBackgroundLayout = styled.div<{ visible: boolean }>`
  display: ${({ visible }) => (visible ? 'block' : 'none')};
  position: fixed;
  transform: scale(${(props) => props.theme.layout.scale});
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  z-index: 999;
  min-height: 100vh;
  padding-right: 15vw;
  padding-left: 15vw;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalBox = styled.div`
  position: relative;
  background-color: ${(props) => props.theme.colors.darkGrey2};
  border: ${(props) => props.theme.borders.normal1};
  height: fit-content;
  z-index: 20;
  margin: 0 auto;
`;

const ModalContents = styled.div`
  font-size: 26px;
  color: ${(props) => props.theme.colors.ivory2};
  padding: 40px 50px;
  gap: 32px;
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
  margin-top: 10px;
`;

const LeaveButton = styled(Button)`
  font-size: 24px;
  width: 200px;
  height: 60px;
`;

const StayButton = styled(Button)`
  font-size: 24px;
  background-color: ${(props) => props.theme.colors.purple1};
  width: 200px;
  height: 60px;
`;

export default LeaveRoomModal;
