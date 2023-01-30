import { useState } from 'react';

import styled from 'styled-components';

import medalIcon from '@assets/svg_medalIcon.svg';
import trophyIcon from '@assets/svg_trophyIcon.svg';
import { useAppSelector } from '@redux/hooks';

import Cat from '@components/character/Cat';
import Button from '@components/common/Button';
import EditProfileModal from '@components/mypage/EditProfileModal';

import CreateGameModal from './CreateGameModal';
import LoginModal from './LoginModal';

const UserInfo = ({ mypage }: { mypage?: boolean }) => {
  const user = useAppSelector((state) => state.user.user);
  const nickname = sessionStorage.getItem('nickname');

  const catTheme = user?.profileImg.split('-')[0];
  const rocketTheme = user?.profileImg.split('-')[1];

  const [loginModalVisible, setLoginModalVisible] = useState<boolean>(false);
  const [createGameModalVisible, setCreateGameModalVisible] = useState<boolean>(false);
  const [EditProfileModalVisible, setEditProfileModalVisible] = useState<boolean>(false);

  return (
    <UserInfoLayout>
      <ProfileBox>
        {user ? (
          <>
            <Cat type="rocket" catTheme="white" rocketTheme="red" scale={2} />
            <RankBox>
              <span className="rank-box-title">오늘의 랭킹</span>
              <div>
                <span className="rank-box-rank">{user?.today.todayRank}</span>
                <span className="rank-box-unit">위</span>
              </div>
            </RankBox>
          </>
        ) : (
          <Cat type="body" catTheme="white" rocketTheme="red" scale={1.7} />
        )}
        <UserStatusBox>
          {!nickname ? (
            <span className="user-status-box-login" onClick={() => setLoginModalVisible(true)}>
              로그인이 필요합니다
            </span>
          ) : (
            <span>{user?.nickname === nickname ? user.nickname : nickname}</span>
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
  display: flex;
  justify-content: center;
  align-items: center;
`;

const RankBox = styled.div`
  position: absolute;
  top: 16px;
  right: 8px;

  div {
    margin-top: 8px;
  }

  .rank-box-title {
    font-size: 12px;
    color: ${(props) => props.theme.colors.ivory2};
    text-shadow: ${(props) => props.theme.textShadow.textShadow2};
  }

  .rank-box-rank {
    font-size: 24px;
    color: ${(props) => props.theme.colors.ivory3};
    text-shadow: ${(props) => props.theme.textShadow.textShadow1};
    margin-right: 4px;
  }

  .rank-box-unit {
    font-size: 12px;
    color: ${(props) => props.theme.colors.ivory2};
  }
`;

const UserStatusBox = styled.div`
  position: absolute;
  background: rgba(0, 0, 0, 0.7);
  width: 100%;
  height: 72px;
  bottom: 0;
  padding: 8px;

  span {
    border: 1px solid ${(props) => props.theme.colors.lightGrey7};
    height: 100%;
    font-size: 20px;
    color: ${(props) => props.theme.colors.ivory2};
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .user-status-box-login {
    cursor: pointer;
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
    width: 40px;
    height: 40px;
    ${(props) => props.theme.borders.bottomRightThinWhiteBorder};
    display: flex;
    justify-content: center;
    align-items: center;
    img {
      width: 32px;
      height: 32px;
    }
  }

  div {
    gap: 8px;
    display: flex;
    flex-direction: column;

    .score-box-title {
      font-size: 12px;
      color: ${(props) => props.theme.colors.ivory2};
      text-shadow: ${(props) => props.theme.textShadow.textShadow2};
    }

    .score-box-score {
      color: ${(props) => props.theme.colors.ivory3};
      text-shadow: ${(props) => props.theme.textShadow.textShadow1};
      font-size: 24px;
      gap: 4px;
      display: flex;
      align-items: center;
      span {
        font-size: 12px;
        color: ${(props) => props.theme.colors.ivory2};
        text-shadow: none;
      }
    }
  }
`;

export default UserInfo;
