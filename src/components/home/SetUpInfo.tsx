import { useState } from 'react';

import styled from 'styled-components';

import userApi from '@apis/userApi';
import blackCatFaceImage from '@assets/png_blackCatFaceImage.png';
import blueRocketImage from '@assets/png_blueRocketImage.png';
import brownCatFaceImage from '@assets/png_brownCatFaceImage.png';
import grayCatFaceImage from '@assets/png_grayCatFaceImage.png';
import mixCatFaceImage from '@assets/png_mixCatFaceImage.png';
import orangeCatFaceImage from '@assets/png_orangeCatFaceImage.png';
import redRocketImage from '@assets/png_redRocketImage.png';
import whiteCatFaceImage from '@assets/png_whiteCatFaceImage.png';
import yellowRocketImage from '@assets/png_yellowRocketImage.png';
import { CatTheme, RocketTheme } from '@constants/characters';
import { useGetUserInfoQuery, useUpdateUserInfoMutation } from '@redux/query/user';
import { getCatInfoByQuery } from '@utils/character';

import Cat from '@components/character/Cat';
import Button from '@components/common/Button';
import InputContainer from '@components/common/InputContainer';

const SetUpInfo = ({
  isSetUpInfoSuccess,
  mypage,
  onClose,
}: {
  isSetUpInfoSuccess: React.Dispatch<React.SetStateAction<boolean>>;
  mypage?: boolean;
  onClose: () => void;
}) => {
  const [updateUserInfo] = useUpdateUserInfoMutation();
  const { data } = useGetUserInfoQuery();
  const user = data;
  const { cat, rocket } = getCatInfoByQuery(user?.profileImg);
  const [newNickname, setNewNickname] = useState<string>(user?.nickname ?? '');
  const [duplicateAlert, setDuplicateAlert] = useState<{ duplicate: boolean; message: string }>({
    duplicate: false,
    message: '',
  });
  const [newCat, setNewCat] = useState<CatTheme>(cat);
  const [newRocket, setNewRocket] = useState<RocketTheme>(rocket);

  const handleDuplicateCheckButtonClick = async () => {
    if (newNickname === user?.nickname) {
      return;
    }
    if (newNickname) {
      await userApi
        .duplicateCheck(newNickname)
        .then(
          (res) => res.status === 200 && setDuplicateAlert({ duplicate: false, message: '*사용가능한 닉네임입니다' }),
        )
        .catch((e) => e.status === 412 && setDuplicateAlert({ duplicate: true, message: '*중복되는 닉네임입니다' }));
      return;
    }
  };

  const handleUpdateInfoButtonClick = async () => {
    const newProfileImg = newCat + '-' + newRocket;
    if (!newNickname) {
      setDuplicateAlert({ duplicate: true, message: '*닉네임을 입력해주세요' });
      return;
    }
    if (user?.nickname === newNickname && data?.profileImg === newProfileImg) {
      !mypage && isSetUpInfoSuccess((prev) => !prev);
      return null;
    }
    if (duplicateAlert.duplicate) {
      return;
    }
    if (user?.nickname === newNickname && user?.profileImg !== newProfileImg) {
      updateUserInfo({ newNickname, newProfileImg });
      mypage ? onClose() : isSetUpInfoSuccess((prev) => !prev);
    }
    if (newNickname !== user?.nickname) {
      await userApi
        .duplicateCheck(newNickname)
        .then(() => {
          updateUserInfo({ newNickname, newProfileImg });
          mypage ? onClose() : isSetUpInfoSuccess((prev) => !prev);
        })
        .catch((e) => e.status === 412 && setDuplicateAlert({ duplicate: true, message: '*중복되는 닉네임입니다' }));
    }
  };

  return (
    <SetUpInfoLayout cat={newCat} rocket={newRocket}>
      <LeftSectionBox>
        <InputContainer label="닉네임">
          <NicknameInputBox duplicate={duplicateAlert.duplicate}>
            <input
              type="text"
              maxLength={10}
              value={newNickname}
              onChange={(e) => setNewNickname(e.target.value.replace(/\s/g, ''))}
            />
            <button onClick={handleDuplicateCheckButtonClick}>중복확인</button>
          </NicknameInputBox>
          <NicknameDuplicateAlert duplicate={duplicateAlert.duplicate}>{duplicateAlert.message}</NicknameDuplicateAlert>
        </InputContainer>
        <InputContainer label="적용 캐릭터">
          <SelectedCharacterBox>
            {newNickname && <NicknameText>{newNickname}</NicknameText>}
            <Cat type="rocket" catTheme={newCat} rocketTheme={newRocket} scale={2} />
          </SelectedCharacterBox>
        </InputContainer>
      </LeftSectionBox>
      <RightSectionBox>
        <InputContainer label="캐릭터 선택">
          <CatButtonBox>
            <Button className="cat-button-white" onClick={() => setNewCat('white')}>
              <img src={whiteCatFaceImage} />
            </Button>
            <Button className="cat-button-brown" onClick={() => setNewCat('brown')}>
              <img src={brownCatFaceImage} />
            </Button>
            <Button className="cat-button-black" onClick={() => setNewCat('black')}>
              <img src={blackCatFaceImage} />
            </Button>
            <Button className="cat-button-mix" onClick={() => setNewCat('mix')}>
              <img src={mixCatFaceImage} />
            </Button>
            <Button className="cat-button-orange" onClick={() => setNewCat('orange')}>
              <img src={orangeCatFaceImage} />
            </Button>
            <Button className="cat-button-gray" onClick={() => setNewCat('gray')}>
              <img src={grayCatFaceImage} />
            </Button>
          </CatButtonBox>
        </InputContainer>
        <InputContainer label="로케트 선택">
          <RocketButtonBox>
            <Button className="rocket-button-red" onClick={() => setNewRocket('red')}>
              <img src={redRocketImage} />
            </Button>
            <Button className="rocket-button-blue" onClick={() => setNewRocket('blue')}>
              <img src={blueRocketImage} />
            </Button>
            <Button className="rocket-button-yellow" onClick={() => setNewRocket('yellow')}>
              <img src={yellowRocketImage} />
            </Button>
          </RocketButtonBox>
        </InputContainer>
        <SetUpInfoButton onClick={handleUpdateInfoButtonClick}>{mypage ? '수정하기' : '생성하기'}</SetUpInfoButton>
      </RightSectionBox>
    </SetUpInfoLayout>
  );
};

const SetUpInfoLayout = styled.div<{ cat: CatTheme; rocket: RocketTheme }>`
  padding: 72px 80px;
  gap: 80px;
  display: flex;
  flex-direction: row;
  justify-content: center;

  .cat-button-${(props) => props.cat}, .rocket-button-${(props) => props.rocket} {
    background-color: ${(props) => props.theme.colors.purple1};
    ${(props) => props.theme.borders.bottomRightNormal1}
  }
`;

const LeftSectionBox = styled.div`
  width: 464px;
  gap: 38px;
  display: flex;
  flex-direction: column;
`;

const NicknameInputBox = styled.div<{ duplicate: boolean }>`
  height: 56px;
  ${(props) => props.theme.borders.bottomRightNormal1};
  display: flex;
  justify-content: space-between;
  align-items: center;
  outline: ${(props) => (props.duplicate ? `2px solid ${props.theme.colors.red2}` : 'none')};

  input {
    font-size: 16px;
    color: ${(props) => props.theme.colors.white1};
    background-color: transparent;
    width: 70%;
    height: 100%;
    padding: 16px 12px;

    :focus {
      outline: none;
    }
  }

  button {
    background-color: transparent;
    font-size: 16px;
    color: ${(props) => props.theme.colors.white1};
    border: 1px solid ${(props) => props.theme.colors.white1};
    width: 80px;
    height: 28px;
    margin-right: 20px;
  }
`;

const NicknameDuplicateAlert = styled.span<{ duplicate: boolean }>`
  color: ${(props) => (props.duplicate ? props.theme.colors.red2 : props.theme.colors.lightGrey8)};
  font-size: 16px;
  font-family: ${(props) => props.theme.font.ibmPlexMono};
  font-weight: 400;
  height: 24px;
  margin-top: 8px;
`;

const SelectedCharacterBox = styled.div`
  position: relative;
  height: 350px;
  ${(props) => props.theme.borders.bottomRightNormal1};
  display: flex;
  justify-content: center;
  align-items: center;
`;

const NicknameText = styled.span`
  position: absolute;
  width: 95%;
  top: 45px;
  left: 0;
  font-size: 20px;
  color: ${(props) => props.theme.colors.ivory2};
  display: flex;
  justify-content: center;
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

export default SetUpInfo;
