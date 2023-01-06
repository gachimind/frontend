import { useRef } from 'react';
import { createPortal } from 'react-dom';

import styled from 'styled-components';

import useClickAway from '@hooks/useClickAway';

interface ModalProps {
  visible: boolean;
  width?: number;
  children: React.ReactNode;
  onClose: () => void;
}

const Modal = ({ visible, width = 400, children, onClose }: ModalProps) => {
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
          <ModalBackgroundLayout visible={visible}>
            <ModalContentsBox ref={ref} style={{ width: width + 'px' }}>
              {children}
            </ModalContentsBox>
          </ModalBackgroundLayout>,
          portalDiv,
        )}
    </>
  );
};

// TODO: 임시 스타일링으로 추후 변경되어야 한다.
const ModalBackgroundLayout = styled.div<{ visible: boolean }>`
  display: ${({ visible }) => (visible ? 'block' : 'none')};
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  left: 0;
  top: 0;
  right: 0;
  bottom: auto;
  z-index: 999;
  min-height: 100vh;
  padding-right: 15vw;
  padding-left: 15vw;
  background: rgba(0, 0, 0, 0.5);
`;

const ModalContentsBox = styled.div`
  background-color: white;
  position: relative;
  z-index: 20;
  min-height: 140px;
  min-width: 340px;
  max-width: 748px;
  max-height: 100vh;
  padding: 30px 58px 30px 58px;
  margin: auto;
  border-radius: 30px;
`;

export default Modal;
