import styled from 'styled-components';

import blackCatFaceImage from '@assets/png_blackCatFaceImage.png';
import blueRocketImage from '@assets/png_blueRocketImage.png';
import brownCatFaceImage from '@assets/png_brownCatFaceImage.png';
import grayCatFaceImage from '@assets/png_grayCatFaceImage.png';
import mixCatFaceImage from '@assets/png_mixCatFaceImage.png';
import orangeCatFaceImage from '@assets/png_orangeCatFaceImage.png';
import redRocketImage from '@assets/png_redRocketImage.png';
import whiteCatFaceImage from '@assets/png_whiteCatFaceImage.png';
import yellowRocketImage from '@assets/png_yellowRocketImage.png';

import Button from '@components/common/Button';
import InputContainer from '@components/common/InputContainer';
import Modal from '@components/common/Modal';

const SetUpInfoModal = ({ visible, onClose }: { visible: boolean; onClose: () => void }) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars

  return (
    <Modal visible={visible} onClose={onClose} title="SET UP" width={1020}>
      <SetUpInfoModalLayout>
        <LeftSectionBox>
          <InputContainer label="닉네임">
            <NicknameInputBox>
              <input />
              <button>중복확인</button>
            </NicknameInputBox>
          </InputContainer>
          <InputContainer label="적용 캐릭터">
            <SelectedCharacterBox />
          </InputContainer>
        </LeftSectionBox>
        <RightSectionBox>
          <InputContainer label="캐릭터 선택">
            <CatButtonBox>
              <Button>
                <img src={whiteCatFaceImage} />
              </Button>
              <Button>
                <img src={brownCatFaceImage} />
              </Button>
              <Button>
                <img src={blackCatFaceImage} />
              </Button>
              <Button>
                <img src={mixCatFaceImage} />
              </Button>
              <Button>
                <img src={orangeCatFaceImage} />
              </Button>
              <Button>
                <img src={grayCatFaceImage} />
              </Button>
            </CatButtonBox>
          </InputContainer>
          <InputContainer label="로케트 선택">
            <RocketButtonBox>
              <Button>
                <img src={redRocketImage} />
              </Button>
              <Button>
                <img src={blueRocketImage} />
              </Button>
              <Button>
                <img src={yellowRocketImage} />
              </Button>
            </RocketButtonBox>
          </InputContainer>
          <SetUpInfoButton>생성하기</SetUpInfoButton>
        </RightSectionBox>
      </SetUpInfoModalLayout>
    </Modal>
  );
};

const SetUpInfoModalLayout = styled.div`
  padding: 72px 80px;
  gap: 80px;
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

const LeftSectionBox = styled.div`
  width: 464px;
  gap: 70px;
  display: flex;
  flex-direction: column;
`;

const NicknameInputBox = styled.div`
  height: 56px;
  ${(props) => props.theme.borders.bottomRightWhiteBorder};
  display: flex;
  justify-content: space-between;
  align-items: center;

  input {
    font-size: 16px;
    color: ${(props) => props.theme.colors.ivory2};
    background-color: transparent;
    width: 70%;
    height: 100%;
    padding: 16px 12px;

    :focus {
      outline: none;
    }
  }

  button {
    cursor: pointer;
    background-color: transparent;
    font-size: 16px;
    color: ${(props) => props.theme.colors.ivory2};
    border: 1px solid ${(props) => props.theme.colors.ivory2};
    width: 80px;
    height: 28px;
    margin-right: 20px;
  }
`;

const SelectedCharacterBox = styled.div`
  height: 350px;
  ${(props) => props.theme.borders.bottomRightWhiteBorder};
`;

const RightSectionBox = styled.div`
  width: 332px;
  gap: 32px;
  display: flex;
  flex-direction: column;
`;

const CatButtonBox = styled.div`
  height: 208px;
  gap: 16px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);

  Button {
    width: 100px;
    height: 100px;
  }
`;

const RocketButtonBox = styled.div`
  height: 124px;
  gap: 16px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
`;

const SetUpInfoButton = styled(Button)`
  font-size: 24px;
  height: 72px;
  margin-top: 8px;
`;

export default SetUpInfoModal;
