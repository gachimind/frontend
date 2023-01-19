import styled from 'styled-components';

import Modal from '@components/common/Modal';

const LoginModal = ({ visible, onClose }: { visible: boolean; onClose: () => void }) => {
  // const KAKAO_AUTH_URL = process.env.REACT_APP_KAKAO_AUTH_URL;
  const KAKAO_AUTH_URL = `http://localhost:3001/api/users/login/kakao`;
  const GOOGLE_AUTH_URL = `http://localhost:3001/api/users/login/google`;
  const GITHUB_AUTH_URL = `http://localhost:3001/api/users/login/github`;

  const handleLoginKakaoButtonClick = () => {
    KAKAO_AUTH_URL && (window.location.href = KAKAO_AUTH_URL);
  };

  const handleLoginGoogleButtonClick = () => {
    GOOGLE_AUTH_URL && (window.location.href = GOOGLE_AUTH_URL);
  };

  const handleLoginGithubButtonClick = () => {
    GITHUB_AUTH_URL && (window.location.href = GITHUB_AUTH_URL);
  };

  return (
    <Modal visible={visible} onClose={onClose} title="LOGIN">
      <LoginModalLayout>
        <LoginButton onClick={() => handleLoginKakaoButtonClick()}>카카오 로그인</LoginButton>
        <LoginButton onClick={() => handleLoginGoogleButtonClick()}>구글 로그인</LoginButton>
        <LoginButton onClick={() => handleLoginGithubButtonClick()}>깃허브</LoginButton>
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
  cursor: pointer;
  font-family: ${(props) => props.theme.font.korean};
  font-size: 24px;
  color: ${(props) => props.theme.colors.ivory1};
  background-color: ${(props) => props.theme.colors.darkGrey1};
  height: 56px;
`;

export default LoginModal;
