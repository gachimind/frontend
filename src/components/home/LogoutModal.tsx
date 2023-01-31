import { useRef } from 'react';
import { createPortal } from 'react-dom';
import { useNavigate } from 'react-router-dom';

import styled from 'styled-components';

import userApi from '@apis/userApi';
import CloseModalIcon from '@assets/svg_closeModalIcon.svg';
import cursorIcon from '@assets/svg_cursorIcon.svg';
import useClickAway from '@hooks/useClickAway';

import Button from '@components/common/Button';

export interface LogoutModalProps {
  visible: boolean;
  onClose: () => void;
}

const LogoutModal = ({ visible, onClose }: LogoutModalProps) => {
  const navigate = useNavigate();
  const ref = useRef(null);
  useClickAway(ref, () => onClose && onClose());
  const portalDiv = document.querySelector('#root');

  const handleLogoutClick = async () => {
    await userApi.logout().then(() => {
      sessionStorage.clear();
      window.location.reload();
    });
  };

  if (!portalDiv) {
    return null;
  }
  return (
    <>
      {visible &&
        createPortal(
          <ModalLayout>
            <ModalBackgroundLayout visible={visible}>
              <ModalBox ref={ref}>
                <ModalHeader>
                  <ModalCloseButton onClick={() => onClose && onClose()}>
                    <img src={CloseModalIcon} />
                  </ModalCloseButton>
                </ModalHeader>
                <ModalContentBox>
                  <Button onClick={() => navigate('/mypage')}>마이페이지</Button>
                  <div>
                    <span onClick={handleLogoutClick}>계정 로그아웃하기</span>
                  </div>
                </ModalContentBox>
              </ModalBox>
            </ModalBackgroundLayout>
          </ModalLayout>,
          portalDiv,
        )}
    </>
  );
};

const ModalLayout = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 998;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.58);
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
  box-shadow: ${(props) => props.theme.boxShadows.boxShadow1};
  border: ${(props) => props.theme.borders.normalIvory};
  width: 560px;
  margin-top: -475px;
  margin-right: -1150px;
  height: fit-content;
  z-index: 20;
`;

const ModalHeader = styled.div`
  position: relative;
  font-family: ${(props) => props.theme.font.joystick};
  font-size: 24px;
  color: ${(props) => props.theme.colors.black1};
  height: 48px;
  background-color: ${(props) => props.theme.colors.ivory1};
  box-shadow: 2px 0px ${(props) => props.theme.colors.ivory1}, -2px -2px ${(props) => props.theme.colors.ivory1};
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalCloseButton = styled.button`
  cursor: url(${cursorIcon}), pointer;
  position: absolute;
  font-size: inherit;
  color: inherit;
  background-color: transparent;
  right: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalContentBox = styled.div`
  position: relative;
  padding: 56px 80px 144px 80px;
  display: flex;

  Button {
    font-size: 24px;
    width: 400px;
    height: 72px;
  }

  div {
    position: absolute;
    background-color: ${(props) => props.theme.colors.black5};
    left: 0;
    bottom: 0;
    width: 100%;
    height: 88px;
    display: flex;
    justify-content: center;
    align-items: center;
    span {
      cursor: url(${cursorIcon}), pointer;
      font-size: 20px;
      color: ${(props) => props.theme.colors.lightGrey9};
    }
  }
`;

export default LogoutModal;
