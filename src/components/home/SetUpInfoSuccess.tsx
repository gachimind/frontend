import styled from 'styled-components';

import { useGetUserInfoQuery } from '@redux/query/user';
import { getCatInfoByQuery } from '@utils/character';

import Cat from '@components/character/Cat';
import Button from '@components/common/Button';

const SetUpInfoSuccess = ({
  isSetUpInfoSuccess,
}: {
  isSetUpInfoSuccess: React.Dispatch<React.SetStateAction<boolean>>;
  onClose: () => void;
}) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { data } = useGetUserInfoQuery();
  const user = data;
  const { cat, rocket } = getCatInfoByQuery(user?.profileImg);

  return (
    <SetUpInfoSuccessLayout>
      <span className="welcome">WELCOME</span>
      <CharacterBox>
        <NicknameText>{user?.nickname}</NicknameText>
        <Cat type="rocket" catTheme={cat} rocketTheme={rocket} scale={2} />
      </CharacterBox>
      {!!user?.nickname && user?.nickname.length > 8 ? (
        <span className="welcome-quote">
          <p>환영합니다</p>
          <p>{user?.nickname}님!</p>
        </span>
      ) : (
        <span className="welcome-quote">환영합니다 {user?.nickname}님!</span>
      )}
      <ButtonBox>
        <Button
          className="go-back-button"
          onClick={() => {
            isSetUpInfoSuccess((prev) => !prev);
          }}
        >
          다시하기
        </Button>
        <Button onClick={() => window.location.reload()}>완료하기</Button>
      </ButtonBox>
    </SetUpInfoSuccessLayout>
  );
};

const SetUpInfoSuccessLayout = styled.div`
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
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;

const CharacterBox = styled.div`
  position: relative;
  height: 350px;
  ${(prosp) => prosp.theme.borders.bottomRightNormal1};
  display: flex;
  justify-content: center;
  align-items: center;
`;

const NicknameText = styled.span`
  position: absolute;
  width: 96%;
  top: 45px;
  left: 0;
  font-size: 20px;
  color: ${(props) => props.theme.colors.ivory2};
  display: flex;
  justify-content: center;
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

export default SetUpInfoSuccess;
