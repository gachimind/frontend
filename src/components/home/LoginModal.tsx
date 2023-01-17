import styled from 'styled-components';

import Modal from '@components/common/Modal';

const LoginModal = ({ visible, onClose }: { visible: boolean; onClose: () => void }) => {
  return (
    <Modal visible={visible} onClose={onClose} height={500} title="LOGIN">
      <LoginModalLayout>
        <LoginButton>카카오 로그인</LoginButton>
        <LoginButton>구글 로그인</LoginButton>
        <LoginButton>깃허브</LoginButton>
      </LoginModalLayout>
    </Modal>
  );
};

// TODO: 임시 색상으로 추후 변경되어야 한다.
const LoginModalLayout = styled.div`
  padding: 118px 70px;
  gap: 24px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const LoginButton = styled.button`
  font-family: ${(props) => props.theme.font.korean};
  font-size: 24px;
  color: ${(props) => props.theme.colors.ivory1};
  background-color: ${(props) => props.theme.colors.darkGrey1};
  height: 56px;
`;

export default LoginModal;
