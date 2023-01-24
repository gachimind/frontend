import styled from 'styled-components';

import Button from '@components/common/Button';
import Modal from '@components/common/Modal';

const LoginModal = ({ visible, onClose }: { visible: boolean; onClose: () => void }) => {
  const KAKAO_AUTH_URL = process.env.REACT_APP_API_ENDPOINT + '/api/users/login/kakao';
  const GOOGLE_AUTH_URL = process.env.REACT_APP_API_ENDPOINT + '/api/users/login/google';
  const GITHUB_AUTH_URL = process.env.REACT_APP_API_ENDPOINT + '/api/users/login/github';

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

const LoginModalLayout = styled.div`
  padding: 118px 70px;
  gap: 24px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const LoginButton = styled(Button)`
  font-size: 24px;
  height: 72px;
`;

export default LoginModal;
