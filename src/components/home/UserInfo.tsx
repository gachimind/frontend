import { useState } from 'react';

import styled, { keyframes } from 'styled-components';

import medalIcon from '@assets/svg_medalIcon.svg';
import trophyIcon from '@assets/svg_trophyIcon.svg';
import { useAppSelector } from '@redux/hooks';

import Button from '@components/common/Button';
import EditProfileModal from '@components/mypage/EditProfileModal';

import CreateGameModal from './CreateGameModal';
import LoginModal from './LoginModal';

const UserInfo = ({ mypage }: { mypage?: boolean }) => {
  const user = useAppSelector((state) => state.user.user);
  const nickname = sessionStorage.getItem('nickname');

  const [loginModalVisible, setLoginModalVisible] = useState<boolean>(false);
  const [createGameModalVisible, setCreateGameModalVisible] = useState<boolean>(false);
  const [EditProfileModalVisible, setEditProfileModalVisible] = useState<boolean>(false);

  return (
    <UserInfoLayout>
      <ProfileBox>
        <UserImageBox></UserImageBox>
        <UserStatusBox>
          {!nickname ? (
            <span className="user-status-box-login">로그인이 필요합니다.</span>
          ) : (
            <>
              <span className="user-status-box-nickname">
                {user?.nickname === nickname ? (
                  user.nickname.length > 4 ? (
                    <div>{user.nickname}</div>
                  ) : (
                    user.nickname
                  )
                ) : nickname.length > 4 ? (
                  <div>{nickname}</div>
                ) : (
                  nickname
                )}
              </span>
              <span className="user-status-box-slash">|</span>
              {user?.today.todayRank !== undefined && (
                <span className="user-status-box-rank">
                  {user?.today.todayRank === 1 && '1ST'}
                  {user?.today.todayRank === 2 && '2ND'}
                  {user?.today.todayRank === 3 && '3RD'}
                  {user?.today.todayRank > 3 && user?.today.todayRank + 'TH'}
                </span>
              )}
            </>
          )}
        </UserStatusBox>
      </ProfileBox>
      {loginModalVisible && <LoginModal visible={loginModalVisible} onClose={() => setLoginModalVisible(false)} />}

      {createGameModalVisible && (
        <CreateGameModal visible={createGameModalVisible} onClose={() => setCreateGameModalVisible(false)} />
      )}
      {!mypage && (
        <OnClickHandleButton onClick={() => (!user ? setLoginModalVisible(true) : setCreateGameModalVisible(true))}>
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
        <div className="score-box-icon">
          <img src={medalIcon} />
        </div>
        <div>
          <span className="score-box-title">오늘 획득한 점수</span>
          <span className="score-box-score">
            {user ? user.today.todayScore : 0}
            <span>점</span>
          </span>
        </div>
      </ScoreBox>
      <ScoreBox>
        <div className="score-box-icon">
          <img src={trophyIcon} />
        </div>
        <div>
          <span className="score-box-title">누적 점수</span>
          <span className="score-box-score">
            {user ? user.total.totalScore : 0}
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
  ${(props) => props.theme.borders.bottomRightWhiteBorder}
`;

const UserImageBox = styled.div``;

const nicknameAnimation = keyframes`
  from {
    -moz-transform: translateX(50%);
    -webkit-transform: translateX(50%);
    transform: translateX(50%);
  }
  to {
    -moz-transform: translateX(-50%);
    -webkit-transform: translateX(-50%);
    transform: translateX(-50%);
  }
`;

const UserStatusBox = styled.div`
  position: absolute;
  font-size: 20px;
  color: ${(props) => props.theme.colors.ivory2};
  background: black;
  width: 100%;
  bottom: 0;
  gap: 52px;
  padding: 25px;
  display: flex;
  align-items: center;

  .user-status-box-login {
    margin-left: 40px;
  }

  .user-status-box-nickname {
    position: fixed;
    width: 100px;
    white-space: nowrap;
    display: block;
    overflow: hidden;
    display: flex;
    justify-content: center;

    div {
      -moz-animation: ${nicknameAnimation} 7s linear infinite;
      -webkit-animation: ${nicknameAnimation} 7s linear infinite;
      animation: ${nicknameAnimation} 7s linear infinite;
    }
  }

  .user-status-box-slash {
    position: fixed;
    margin-left: 127px;
  }

  .user-status-box-rank {
    margin-left: 195px;
  }
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

  ${(props) => props.theme.borders.bottomRightWhiteBorder}

  .score-box-icon {
    background-color: ${(props) => props.theme.colors.lightGrey6};
    width: 40px;
    height: 40px;
  }

  div {
    display: flex;
    flex-direction: column;

    .score-box-title {
      font-size: 12px;
    }

    .score-box-score {
      text-shadow: ${(props) => props.theme.textShadow.textShadow1};
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
