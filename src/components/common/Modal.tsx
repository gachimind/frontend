import { useRef } from 'react';
import { createPortal } from 'react-dom';

import styled from 'styled-components';

import CloseModalIcon from '@assets/svg_closeModalIcon.svg';
import useClickAway from '@hooks/useClickAway';

export interface ModalProps {
  visible: boolean;
  title?: string;
  width?: number;
  height?: number;
  children: React.ReactNode;
  isBackgroundClickEventDisabled?: boolean;
  hasBackgroundShadow?: boolean;
  onClose: () => void;
  modalName?: string;
  page?: string;
  isModalCloseButtonShown?: boolean;
}

const Modal = ({
  visible,
  title,
  width,
  height,
  children,
  onClose,
  isBackgroundClickEventDisabled = true,
  hasBackgroundShadow = true,
  modalName,
  page,
  isModalCloseButtonShown = true,
}: ModalProps) => {
  const ref = useRef(null);
  useClickAway(ref, () => !isBackgroundClickEventDisabled && onClose && onClose());
  const portalDiv = document.querySelector('#modal-root');

  if (!portalDiv) {
    return null;
  }
  return (
    <>
      {visible &&
        createPortal(
          <ModalLayout hasBackgroundShadow={hasBackgroundShadow ?? false}>
            <ModalBackgroundLayout visible={visible}>
              <ModalBox ref={ref} width={width} modalName={modalName} page={page} height={height}>
                <ModalHeader modalName={modalName}>
                  {title}
                  {isModalCloseButtonShown && (
                    <ModalCloseButton onClick={() => onClose && onClose()}>
                      <img src={CloseModalIcon} />
                    </ModalCloseButton>
                  )}
                </ModalHeader>
                {children}
              </ModalBox>
            </ModalBackgroundLayout>
          </ModalLayout>,
          portalDiv,
        )}
    </>
  );
};

const ModalLayout = styled.div<{ hasBackgroundShadow: boolean }>`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 998;
  width: 100vw;
  height: 100vh;
  background: ${(props) => (props.hasBackgroundShadow ? 'rgba(0, 0, 0, 0.58)' : 'inherit')};
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

const ModalBox = styled.div<{ width?: number; modalName?: string; page?: string; height?: number }>`
  position: relative;
  background-color: ${(props) => props.theme.colors.darkGrey2};
  box-shadow: ${(props) => props.theme.boxShadows.boxShadow1};
  border: ${(props) => (props.modalName === 'GameRuleToolTip' ? 'none' : props.theme.borders.normal1)};
  width: ${(props) => (props.width ? props.width : 560)}px;
  height: ${(props) => (props.modalName === 'GameRuleToolTip' ? props.height + 'px' : 'fit-content')};
  z-index: 20;
  ${(props) => {
    if (props.modalName === 'logout') {
      return `margin-top: ${props.page === 'main' ? '-475px' : '-545px'};
     margin-right: -1150px; 
  `;
    }
    if (props.modalName === 'GameRuleToolTip') {
      return `margin-bottom: -205px;
     margin-left: -1050px;
  `;
    }
    return 'margin: 0 auto;';
  }}
`;

const ModalHeader = styled.div<{ modalName?: string }>`
  position: relative;
  font-family: ${(props) => props.theme.font.joystick};
  font-size: 24px;
  color: ${(props) => (props.modalName === 'GameRuleToolTip' ? props.theme.colors.ivory1 : props.theme.colors.black1)};
  height: 48px;
  background-color: ${(props) =>
    props.modalName === 'GameRuleToolTip' ? props.theme.colors.darkGrey1 : props.theme.colors.ivory1};
  box-shadow: ${(props) =>
    props.modalName === 'GameRuleToolTip'
      ? 'none'
      : `2px 0px ${props.theme.colors.ivory1}, -2px -2px ${props.theme.colors.ivory1}`};
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalCloseButton = styled.button`
  position: absolute;
  font-size: inherit;
  color: inherit;
  background-color: transparent;
  right: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default Modal;
