import { useState } from 'react';

import styled from 'styled-components';

import medalIcon from '@assets/svg_medalIcon.svg';
import trophyIcon from '@assets/svg_trophyIcon.svg';
import { useAppSelector } from '@redux/hooks';

import EditProfileModal from '@components/mypage/EditProfileModal';

import CreateGameModal from './CreateGameModal';
import LoginModal from './LoginModal';

const UserInfo = ({ mypage }: { mypage?: boolean }) => {
  const isLogined = useAppSelector((state) => state.user.isLogined);

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
              <span className="nickname">닉네임</span>
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
        <MakeRoomButton onClick={() => (!isLogined ? setLoginModalVisible(true) : setCreateGameModalVisible(true))}>
          게임방 만들기
        </MakeRoomButton>
      )}

      {EditProfileModalVisible && (
        <EditProfileModal visible={EditProfileModalVisible} onClose={() => setEditProfileModalVisible(false)} />
      )}
      {mypage && <MakeRoomButton onClick={() => setEditProfileModalVisible(true)}>회원정보 수정</MakeRoomButton>}
      <ScoreBox>
        <img src={medalIcon} />
        <div>
          <span className="title">오늘 획득한 점수</span>
          <span className="score">
            10000
            <span className="title" id="fix">
              점
            </span>
          </span>
        </div>
      </ScoreBox>
      <ScoreBox>
        <img src={trophyIcon} />
        <div>
          <span className="title">누적 점수</span>
          <span className="score">
            10000
            <span className="title" id="fix">
              점
            </span>
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

  border-top: ${(props) => props.theme.borders.normalblack};
  border-right: ${(props) => props.theme.borders.normalwhite};
  border-bottom: ${(props) => props.theme.borders.normalwhite};
  border-left: ${(props) => props.theme.borders.normalblack};
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
  span {
    font-family: ${(props) => props.theme.font.korean};
  }
  .nickname {
    font-family: ${(props) => props.theme.font.korean};
  }
`;

const MakeRoomButton = styled.button`
  cursor: pointer;
  font-family: ${(props) => props.theme.font.korean};
  font-size: 24px;
  color: ${(props) => props.theme.colors.ivory2};
  text-shadow: ${(props) => props.theme.textShadow.textShadow};
  background-color: ${(props) => props.theme.colors.darkGrey2};

  border-top: ${(props) => props.theme.borders.normalwhite};
  border-right: ${(props) => props.theme.borders.normalblack};
  border-bottom: ${(props) => props.theme.borders.normalblack};
  border-left: ${(props) => props.theme.borders.normalwhite};
`;

const ScoreBox = styled.div`
  color: ${(props) => props.theme.colors.ivory2};
  font-family: ${(props) => props.theme.font.korean};
  padding: 0px 40px;
  gap: 24px;
  display: grid;
  grid-template-columns: 1fr 4fr;
  justify-content: center;
  align-items: center;

  border-top: ${(props) => props.theme.borders.normalblack};
  border-right: ${(props) => props.theme.borders.normalwhite};
  border-bottom: ${(props) => props.theme.borders.normalwhite};
  border-left: ${(props) => props.theme.borders.normalblack};

  img {
    background-color: ${(props) => props.theme.colors.darkGrey1};
    width: 48px;
    height: 48px;
  }

  div {
    display: flex;
    flex-direction: column;

    .title {
      font-family: ${(props) => props.theme.font.korean};
      font-size: 12px;
    }

    .score {
      font-family: ${(props) => props.theme.font.korean};
      text-shadow: ${(props) => props.theme.textShadow.textShadow};
      font-size: 24px;
      gap: 4px;
      display: flex;
      align-items: center;
      #fix {
        text-shadow: none;
      }
    }
  }
`;

export default UserInfo;
