import { useState } from 'react';

import styled from 'styled-components';

import medalIcon from '@assets/svg_medalIcon.svg';
import trophyIcon from '@assets/svg_trophyIcon.svg';
import { useAppSelector } from '@redux/hooks';

import Button from '@components/common/Button';
import EditProfileModal from '@components/mypage/EditProfileModal';

import CreateGameModal from './CreateGameModal';
import LoginModal from './LoginModal';

const UserInfo = ({ mypage, isLogined }: { mypage?: boolean; isLogined: boolean }) => {
  const user = useAppSelector((state) => state.user.user);

  const [loginModalVisible, setLoginModalVisible] = useState<boolean>(false);
  const [createGameModalVisible, setCreateGameModalVisible] = useState<boolean>(false);
  const [EditProfileModalVisible, setEditProfileModalVisible] = useState<boolean>(false);

  return (
    <UserInfoLayout>
      <ProfileBox>
        <UserImageBox></UserImageBox>
        <UserStatusBox>
          {!isLogined ? (
            <span>로그인이 필요합니다.</span>
          ) : (
            <>
              <span>{user && user.nickname}</span>
              <span>|</span>
              <span>10TH</span>
            </>
          )}
        </UserStatusBox>
      </ProfileBox>
      {loginModalVisible && <LoginModal visible={loginModalVisible} onClose={() => setLoginModalVisible(false)} />}

      {createGameModalVisible && (
        <CreateGameModal visible={createGameModalVisible} onClose={() => setCreateGameModalVisible(false)} />
      )}
      {!mypage && (
        <OnClickHandleButton
          onClick={() => (!isLogined ? setLoginModalVisible(true) : setCreateGameModalVisible(true))}
        >
          게임방 만들기
        </OnClickHandleButton>
      )}

      {EditProfileModalVisible && (
        <EditProfileModal visible={EditProfileModalVisible} onClose={() => setEditProfileModalVisible(false)} />
      )}
      {mypage && (
        <OnClickHandleButton onClick={() => setEditProfileModalVisible(true)}>회원정보 수정</OnClickHandleButton>
      )}
      <ScoreBox>
        <img src={medalIcon} />
        <div>
          <span className="score-box-title">오늘 획득한 점수</span>
          <span className="score-box-score">
            10000
            <span>점</span>
          </span>
        </div>
      </ScoreBox>
      <ScoreBox>
        <img src={trophyIcon} />
        <div>
          <span className="score-box-title">누적 점수</span>
          <span className="score-box-score">
            10000
            <span>점</span>
          </span>
        </div>
      </ScoreBox>
    </UserInfoLayout>
  );
};

const UserInfoLayout = styled.div`
  height: 94.3%;
  padding: 32px 40px;
  gap: 12px;
  display: grid;
  grid-template-rows: 4fr 1fr 1fr 1fr;
`;

const ProfileBox = styled.div`
  position: relative;
  margin-bottom: 18px;

  border-top: ${(props) => props.theme.borders.normalBlack};
  border-right: ${(props) => props.theme.borders.normalWhite};
  border-bottom: ${(props) => props.theme.borders.normalWhite};
  border-left: ${(props) => props.theme.borders.normalBlack};
`;

const UserImageBox = styled.div`
  background-color: white;
`;

const UserStatusBox = styled.div`
  position: absolute;
  font-size: 20px;
  color: ${(props) => props.theme.colors.ivory2};
  background: rgba(0, 0, 0, 0.7);
  width: 100%;
  bottom: 0;
  gap: 52px;
  padding: 25px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const OnClickHandleButton = styled(Button)`
  font-size: 24px;
`;

const ScoreBox = styled.div`
  color: ${(props) => props.theme.colors.ivory2};
  padding: 0px 40px;
  gap: 24px;
  display: grid;
  grid-template-columns: 1fr 4fr;
  justify-content: center;
  align-items: center;

  border-top: ${(props) => props.theme.borders.normalBlack};
  border-right: ${(props) => props.theme.borders.normalWhite};
  border-bottom: ${(props) => props.theme.borders.normalWhite};
  border-left: ${(props) => props.theme.borders.normalBlack};

  img {
    background-color: ${(props) => props.theme.colors.darkGrey1};
    width: 48px;
    height: 48px;
  }

  div {
    display: flex;
    flex-direction: column;

    .score-box-title {
      font-size: 12px;
    }

    .score-box-score {
      text-shadow: ${(props) => props.theme.textShadow.textShadow};
      font-size: 24px;
      gap: 4px;
      display: flex;
      align-items: center;
      span {
        font-size: 12px;
        text-shadow: none;
      }
    }
  }
`;

export default UserInfo;
