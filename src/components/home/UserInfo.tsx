import { useState } from 'react';

import styled from 'styled-components';

import CreateGameModal from './CreateGameModal';

const UserInfo = () => {
  const [createGameModalVisible, setCreateGameModalVisible] = useState<boolean>(false);
  return (
    <UserInfoLayout>
      <ImageBox>
        profileImage
        <NicknameRankingBox>닉네임 | 10TH</NicknameRankingBox>
      </ImageBox>
      {
        // TODO: 게임만들기 버튼 마이페이지에서는 개인정보변경 버튼으로 수정
      }
      <div>
        {createGameModalVisible && (
          <CreateGameModal visible={createGameModalVisible} onClose={() => setCreateGameModalVisible(false)} />
        )}
        <CreateRoomButton onClick={() => setCreateGameModalVisible(true)}>게임만들기</CreateRoomButton>
      </div>
      <ScoreBox>오늘의 점수</ScoreBox>
      <ScoreBox>누적 점수</ScoreBox>
    </UserInfoLayout>
  );
};

const UserInfoLayout = styled.div`
  width: 90%;
  padding: 10px;
  padding-top: 0px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

const ImageBox = styled.div`
  background-color: #eeeeee;
  width: 100%;
  height: 150px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

const NicknameRankingBox = styled.div`
  background-color: #797979;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50px;
`;

const CreateRoomButton = styled.button`
  cursor: pointer;
  font-family: inherit;
  font-weight: inherit;
  font-size: inherit;
  background-color: #eeeeee;
  border: 0;
  width: 185px;
  height: 50px;
`;

const ScoreBox = styled.div`
  background-color: #eeeeee;
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default UserInfo;
