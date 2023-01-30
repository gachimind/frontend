import styled from 'styled-components';

import Button from '@components/common/Button';
import Modal from '@components/common/Modal';

const SetUpInfoSuccessModal = ({ visible, onClose }: { visible: boolean; onClose: () => void }) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars

  return (
    <Modal visible={visible} onClose={onClose} title="SET UP">
      <SetUpInfoSuccessModalLayout>
        <span className="welcome">WELCOME</span>
        <CharacterBox></CharacterBox>
        <span className="welcome-quote">환영합니다 ㅇㅇㅇ님!</span>
        <ButtonBox>
          <Button className="go-back-button">다시하기</Button>
          <Button>완료하기</Button>
        </ButtonBox>
      </SetUpInfoSuccessModalLayout>
    </Modal>
  );
};

const SetUpInfoSuccessModalLayout = styled.div`
  padding: 72px 80px;
  gap: 32px;
  display: flex;
  flex-direction: column;
  justify-content: center;

  .welcome {
    font-family: ${(props) => props.theme.font.joystick};
    font-size: 32px;
    background-image: linear-gradient(
      0deg,
      ${(props) => props.theme.colors.lightGrey6} 50%,
      ${(props) => props.theme.colors.darkGrey4} 50%
    );
    background-clip: text;
    -webkit-text-stroke: 1px ${(props) => props.theme.colors.darkGrey4};
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    display: flex;
    justify-content: center;
  }

  .welcome-quote {
    font-size: 24px;
    color: ${(props) => props.theme.colors.darkGrey4};
    display: flex;
    justify-content: center;
  }
`;

const CharacterBox = styled.div`
  height: 350px;
  ${(prosp) => prosp.theme.borders.bottomRightWhiteBorder};
`;

const ButtonBox = styled.div`
  margin-top: 8px;
  gap: 16px;
  display: flex;

  .go-back-button {
    background-color: transparent;
  }

  Button {
    font-family: inherit;
    font-size: 24px;
    width: 200px;
    height: 72px;
    background-color: ${(props) => props.theme.colors.purple1};
  }
`;

export default SetUpInfoSuccessModal;
