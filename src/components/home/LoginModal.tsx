import Modal from '@components/common/Modal';

const LoginModal = ({ visible, onClose }: { visible: boolean; onClose: () => void }) => {
  const handleLoginKakaoButtonClick = () => {
    console.log('카카오 로그인 할거양');
  };

  const handleLoginGoogleButtonClick = () => {
    console.log('구글 로그인 할거양');
  };

  const handleLoginGithubButtonClick = () => {
    console.log('깃헙 로그인 할거양');
  };

  return (
    <Modal visible={visible} onClose={onClose}>
      <button onClick={handleLoginKakaoButtonClick}>카카오</button>
      <button onClick={handleLoginGoogleButtonClick}>구글</button>
      <button onClick={handleLoginGithubButtonClick}>깃헙</button>
    </Modal>
  );
};

export default LoginModal;
