import styled from 'styled-components';

import { useAuthSocket } from '@hooks/socket/useAuthSocket';

import RoomList from '@components/home/RoomList';
import UserInfo from '@components/home/UserInfo';
import ContentBox from '@components/layout/ContentBox';
import MainLayout from '@components/layout/main/MainLayout';

const Main = () => {
  useAuthSocket();
  return (
    <MainLayout>
      <ContentBox title="SCORE">
        <UserInfo />
      </ContentBox>
      <ContentBox title="ROOM SELECTION">
        <RoomListLayout>
          <RoomListBox>
            <RoomContentsBox>
              <RoomTitle>방제목</RoomTitle>
              <RoomParticipants>참여인원: 0/6</RoomParticipants>
              <EnterRoomButton>참가하기</EnterRoomButton>
            </RoomContentsBox>
          </RoomListBox>
          <RoomListBox>
            <RoomContentsBox>
              <RoomTitle>방제목</RoomTitle>
              <RoomParticipants>참여인원: 0/6</RoomParticipants>
              <EnterRoomButton>참가하기</EnterRoomButton>
            </RoomContentsBox>
          </RoomListBox>
          <RoomListBox>
            <RoomContentsBox>
              <RoomTitle>방제목</RoomTitle>
              <RoomParticipants>참여인원: 0/6</RoomParticipants>
              <EnterRoomButton>참가하기</EnterRoomButton>
            </RoomContentsBox>
          </RoomListBox>
          <RoomListBox>
            <RoomContentsBox>
              <RoomTitle>방제목</RoomTitle>
              <RoomParticipants>참여인원: 0/6</RoomParticipants>
              <EnterRoomButton>참가하기</EnterRoomButton>
            </RoomContentsBox>
          </RoomListBox>
          <RoomListBox>
            <RoomContentsBox>
              <RoomTitle>방제목</RoomTitle>
              <RoomParticipants>참여인원: 0/6</RoomParticipants>
              <EnterRoomButton>참가하기</EnterRoomButton>
            </RoomContentsBox>
          </RoomListBox>
          <RoomListBox>
            <RoomContentsBox>
              <RoomTitle>방제목</RoomTitle>
              <RoomParticipants>참여인원: 0/6</RoomParticipants>
              <EnterRoomButton>참가하기</EnterRoomButton>
            </RoomContentsBox>
          </RoomListBox>
          <RoomListBox>
            <RoomContentsBox>
              <RoomTitle>방제목</RoomTitle>
              <RoomParticipants>참여인원: 0/6</RoomParticipants>
              <EnterRoomButton>참가하기</EnterRoomButton>
            </RoomContentsBox>
          </RoomListBox>
          <RoomListBox>
            <RoomContentsBox>
              <RoomTitle>방제목</RoomTitle>
              <RoomParticipants>참여인원: 0/6</RoomParticipants>
              <EnterRoomButton>참가하기</EnterRoomButton>
            </RoomContentsBox>
          </RoomListBox>
          <RoomListBox>
            <RoomContentsBox>
              <RoomTitle>방제목</RoomTitle>
              <RoomParticipants>참여인원: 0/6</RoomParticipants>
              <EnterRoomButton>참가하기</EnterRoomButton>
            </RoomContentsBox>
          </RoomListBox>
        </RoomListLayout>
        {/* <RoomList /> */}
      </ContentBox>
    </MainLayout>
  );
};

const RoomListLayout = styled.div`
  height: 637px;
  padding: 35px 58px;
  column-gap: 22px;
  row-gap: 16px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
`;

const RoomListBox = styled.div`
  font-family: ${(props) => props.theme.font.korean};
  background-color: white;
`;

const RoomContentsBox = styled.div`
  font-family: inherit;
  margin-left: 11.27%;
  margin-right: 45.77%;
  margin-top: 8%;
  margin-bottom: 6%;
  display: flex;
  flex-direction: column;
`;

const RoomTitle = styled.span`
  font-family: inherit;
  font-size: 24px;
`;

const RoomParticipants = styled.span`
  font-family: inherit;
  font-size: 16px;
`;

const EnterRoomButton = styled.button`
  font-family: inherit;
  font-size: 20px;
  border-radius: 24px;
  margin-top: 28.53px;
  padding: 8px 24px;
`;

export default Main;
