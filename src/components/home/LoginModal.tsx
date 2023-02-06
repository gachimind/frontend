import styled from 'styled-components';

import kakaoIcon from '@assets/png_kakaoIcon.png';
import githubIcon from '@assets/svg_githubicon.svg';

import Modal from '@components/common/Modal';

const LoginModal = ({ visible, onClose }: { visible: boolean; onClose: () => void }) => {
  const handleLoginKakaoButtonClick = () => {
    const KAKAO_AUTH_URL = process.env.REACT_APP_API_ENDPOINT + '/api/users/login/kakao';
    KAKAO_AUTH_URL && (window.location.href = KAKAO_AUTH_URL);
  };

  const handleLoginGihubButtonClick = () => {
    const GITHUB_AUTH_URL = process.env.REACT_APP_API_ENDPOINT + '/api/users/login/github';
    GITHUB_AUTH_URL && (window.location.href = GITHUB_AUTH_URL);
  };

  return (
    <Modal visible={visible} onClose={onClose} title="LOGIN">
      <LoginModalLayout>
        <KakaoButton className="kakao" onClick={() => handleLoginKakaoButtonClick()}>
          <img src={kakaoIcon} />
          카카오로 시작하기
        </KakaoButton>
        <GithubButton className="kakao" onClick={() => handleLoginGihubButtonClick()}>
          <img src={githubIcon} />
          Github로 시작하기
        </GithubButton>
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

const OAuthButton = styled.button`
  height: 76px;
  border-radius: 6px;
  font-size: 24px;
  font-weight: 600;
  font-family: initial;
  display: flex;
  justify-content: center;
  align-items: center;
  & > img {
    margin-right: 10px;
  }
`;

const KakaoButton = styled(OAuthButton)`
  color: #000000 85%;
  background-color: #fee500;
`;

const GithubButton = styled(OAuthButton)`
  color: white;
  background-color: black;
`;

export default LoginModal;
