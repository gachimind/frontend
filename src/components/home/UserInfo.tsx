import { useState } from 'react';

import styled from 'styled-components';

import CreateGameModal from './CreateGameModal';

const UserInfo = () => {
  const [createGameModalVisible, setCreateGameModalVisible] = useState<boolean>(false);
  return (
    <UserInfoLayout>
      <ProfileBox>
        <ImageBox></ImageBox>
        <UserInfoBox>
          <Nickname>닉네임</Nickname>
          <span>|</span>
          <span>10TH</span>
        </UserInfoBox>
      </ProfileBox>
      {createGameModalVisible && (
        <CreateGameModal visible={createGameModalVisible} onClose={() => setCreateGameModalVisible(false)} />
      )}
      <MakeRoomButton onClick={() => setCreateGameModalVisible(true)}>게임방 만들기</MakeRoomButton>
      <ScoreContentBox>
        <ScoreBoxIcon></ScoreBoxIcon>
        <ScoreBox>
          <ScoreTitle>오늘 획득한 점수</ScoreTitle>
          <Score>10000</Score>
        </ScoreBox>
      </ScoreContentBox>
      <ScoreContentBox>
        <ScoreBoxIcon></ScoreBoxIcon>
        <ScoreBox>
          <ScoreTitle>누적 점수</ScoreTitle>
          <Score>10000</Score>
        </ScoreBox>
      </ScoreContentBox>
    </UserInfoLayout>
  );
};

const UserInfoLayout = styled.div`
  height: 94.3%;
  padding: 40px;
  gap: 16px;
  display: grid;
  grid-template-rows: 3fr 1fr 1fr 1fr;
`;

const ProfileBox = styled.div`
  display: grid;
  grid-template-rows: 5fr 2fr;
`;

const ImageBox = styled.div`
  background-color: white;
`;

const UserInfoBox = styled.div`
  font-size: 20px;
  background-color: ${(props) => props.theme.colors.footer};
  gap: 53px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Nickname = styled.span`
  font-family: ${(props) => props.theme.font.korean};
`;

const MakeRoomButton = styled.button`
  font-size: 24px;
  font-family: ${(props) => props.theme.font.korean};
`;

const ScoreContentBox = styled.div`
  background-color: white;
  font-family: ${(props) => props.theme.font.korean};
  padding: 0px 40px;
  gap: 24px;
  display: grid;
  grid-template-columns: 1fr 4fr;
  justify-content: center;
  align-items: center;
`;

const ScoreBoxIcon = styled.div`
  background-color: ${(props) => props.theme.colors.footer};
  width: 48px;
  height: 48px;
`;

const ScoreBox = styled.div`
  display: flex;
  flex-direction: column;
`;

const ScoreTitle = styled.span`
  font-size: 12px;
`;

const Score = styled.span`
  font-size: 24px;
`;

export default UserInfo;
