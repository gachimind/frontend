import { useNavigate } from 'react-router-dom';

import styled from 'styled-components';

import cursorIcon from '@assets/svg_cursorIcon.svg';
import { useLazyGetLogoutQuery } from '@redux/query/user';

import Button from '@components/common/Button';
import Modal from '@components/common/Modal';

const LogoutModal = ({ visible, onClose, page }: { visible: boolean; onClose: () => void; page: string }) => {
  const navigate = useNavigate();
  const [logout] = useLazyGetLogoutQuery();
  const handleLogoutClick = async () => {
    await logout();
    onClose();
    navigate('/', { replace: true });
  };

  return (
    <Modal visible={visible} onClose={onClose} modalName="logout" page={page} isBackgroundClickEventDisabled={false}>
      <LogoutModalModalBox page={page}>
        {page === 'main' && <Button onClick={() => navigate('/mypage')}>마이페이지</Button>}
        <div>
          <span onClick={handleLogoutClick}>계정 로그아웃하기</span>
        </div>
      </LogoutModalModalBox>
    </Modal>
  );
};

const LogoutModalModalBox = styled.div<{ page: string }>`
  position: relative;
  padding: ${(props) => (props.page === 'main' ? '56px 80px 144px 80px' : '56px 0px')};
  display: flex;

  Button {
    font-size: 24px;
    width: 400px;
    height: 72px;
  }

  div {
    position: ${(props) => (props.page === 'main' ? 'absolute' : 'relative')};
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
