import { useRef } from 'react';
import { createPortal } from 'react-dom';

import styled from 'styled-components';

import closeButton from '@assets/closeButton.svg';
import useClickAway from '@hooks/useClickAway';

interface ModalProps {
  visible: boolean;
  height: number;
  title: string;
  children: React.ReactNode;
  onClose: () => void;
}

const Modal = ({ visible, height, title, children, onClose }: ModalProps) => {
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
            <ModalBox ref={ref} height={height}>
              <ModalHeader>
                {title}
                <ModalCloseButton onClick={() => onClose && onClose()}>
                  <img src={closeButton} />
                </ModalCloseButton>
              </ModalHeader>
              {children}
            </ModalBox>
          </ModalBackgroundLayout>,
          portalDiv,
        )}
    </>
  );
};

// TODO: 임시 색상으로 추후 변경되어야 한다.
const ModalBackgroundLayout = styled.div<{ visible: boolean }>`
  display: ${({ visible }) => (visible ? 'block' : 'none')};
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  transform: scale(${(props) => props.theme.layout.scale});
  left: 0;
  top: 0;
  right: 0;
  bottom: auto;
  z-index: 999;
  min-height: 100vh;
  padding-right: 15vw;
  padding-left: 15vw;
`;

const ModalBox = styled.div<{ height: number }>`
  width: 560px;
  height: ${(props) => props.height}px;
  background-color: white;
  position: relative;
  z-index: 20;
  margin: auto;
`;

const ModalHeader = styled.div`
  position: relative;
  font-size: 24px;
  color: ${(props) => props.theme.colors.ivory1};
  height: 48px;
  background-color: ${(props) => props.theme.colors.darkGrey1};
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalCloseButton = styled.button`
  cursor: pointer;
  background-color: transparent;
  position: absolute;
  font-size: inherit;
  color: inherit;
  right: 27px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default Modal;
