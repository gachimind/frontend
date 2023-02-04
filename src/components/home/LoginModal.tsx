import styled from 'styled-components';

import kakaoIcon from '@assets/png_kakaoIcon.png';

import Modal from '@components/common/Modal';

const LoginModal = ({ visible, onClose }: { visible: boolean; onClose: () => void }) => {
  const handleLoginKakaoButtonClick = () => {
    const KAKAO_AUTH_URL = process.env.REACT_APP_API_ENDPOINT + '/api/users/login/kakao';
    KAKAO_AUTH_URL && (window.location.href = KAKAO_AUTH_URL);
  };

  return (
    <Modal visible={visible} onClose={onClose} title="LOGIN">
      <LoginModalLayout>
        <button className="kakao" onClick={() => handleLoginKakaoButtonClick()}>
          <img src={kakaoIcon} />
          카카오 로그인
        </button>
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

  button {
    height: 85px;
    border-radius: 12px;
  }

  .kakao {
    color: #000000 85%;
    font-size: 26px;
    font-family: initial;
    background-color: #fee500;
    display: flex;
    justify-content: center;
    align-items: center;

    img {
      margin-right: 10px;
    }
  }
`;

export default LoginModal;
