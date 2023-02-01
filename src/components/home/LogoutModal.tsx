import { useNavigate } from 'react-router-dom';

import styled from 'styled-components';

import userApi from '@apis/userApi';
import cursorIcon from '@assets/svg_cursorIcon.svg';

import Button from '@components/common/Button';
import Modal from '@components/common/Modal';

const LogoutModal = ({ visible, onClose }: { visible: boolean; onClose: () => void }) => {
  const navigate = useNavigate();

  const handleLogoutClick = async () => {
    await userApi.logout().then(() => {
      sessionStorage.clear();
      window.location.reload();
    });
  };

  return (
    <Modal visible={visible} onClose={onClose} modalName="logout">
      <LogoutModalModalBox>
        <Button onClick={() => navigate('/mypage')}>마이페이지</Button>
        <div>
          <span onClick={handleLogoutClick}>계정 로그아웃하기</span>
        </div>
      </LogoutModalModalBox>
    </Modal>
  );
};

const LogoutModalModalBox = styled.div`
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
