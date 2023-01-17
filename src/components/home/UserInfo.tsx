import { useState } from 'react';

import styled from 'styled-components';

import CreateGameModal from './CreateGameModal';

const UserInfo = () => {
  const [createGameModalVisible, setCreateGameModalVisible] = useState<boolean>(false);

  return (
    <UserInfoLayout>
      <ProfileBox>
        <UserImageBox></UserImageBox>
        <UserStatusBox>
          <span className="nickname">닉네임</span>
          <span>|</span>
          <span>10TH</span>
        </UserStatusBox>
      </ProfileBox>
      {createGameModalVisible && (
        <CreateGameModal visible={createGameModalVisible} onClose={() => setCreateGameModalVisible(false)} />
      )}
      <MakeRoomButton onClick={() => setCreateGameModalVisible(true)}>게임방 만들기</MakeRoomButton>
      <ScoreBox>
        <img></img>
        <div>
          <span className="title">오늘 획득한 점수</span>
          <span className="score">10000</span>
        </div>
      </ScoreBox>
      <ScoreBox>
        <img></img>
        <div>
          <span className="title">누적 점수</span>
          <span className="score">10000</span>
        </div>
      </ScoreBox>
    </UserInfoLayout>
  );
};

// TODO: 임시 색상으로 추후 변경되어야 한다.
const UserInfoLayout = styled.div`
  height: 94.3%;
  padding: 40px;
  gap: 16px;
  display: grid;
  grid-template-rows: 4fr 1fr 1fr 1fr;
`;

const ProfileBox = styled.div`
  display: grid;
  grid-template-rows: 3fr 1fr;
`;

const UserImageBox = styled.div`
  background-color: white;
`;

const UserStatusBox = styled.div`
  font-size: 20px;
  background-color: ${(props) => props.theme.colors.darkGrey1};
  gap: 53px;
  display: flex;
  justify-content: center;
  align-items: center;

  .nickname {
    font-family: ${(props) => props.theme.font.korean};
  }
`;

const MakeRoomButton = styled.button`
  font-family: ${(props) => props.theme.font.korean};
  font-size: 24px;
`;

const ScoreBox = styled.div`
  background-color: white;
  font-family: ${(props) => props.theme.font.korean};
  padding: 0px 40px;
  gap: 24px;
  display: grid;
  grid-template-columns: 1fr 4fr;
  justify-content: center;
  align-items: center;

  img {
    background-color: ${(props) => props.theme.colors.darkGrey1};
    width: 48px;
    height: 48px;
  }

  div {
    display: flex;
    flex-direction: column;

    .title {
      font-size: 12px;
    }

    .score {
      font-size: 24px;
    }
  }
`;

export default UserInfo;
