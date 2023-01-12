import styled from 'styled-components';

import { useAuthSocket } from '@hooks/socket/useAuthSocket';

import Container from '@components/common/Container';
import RoomList from '@components/home/RoomList';
import UserInfo from '@components/home/UserInfo';

// TODO: 소켓 연결 시 방 style RoomList 컴포넌트로 이동
const Main = () => {
  useAuthSocket();
  return (
    <Container page="main" containerType="template" width={84.63541666666667} height={86.8945868945869}>
      <ComponentsBox>
        <Container title="PROFILE" height={67.22689075630252} width={17.578125}>
          <UserInfo />
        </Container>
        <Container title="ROOM SELECTION" height={67.22689075630252} width={48.828125}>
          <RoomListBox>
            <RoomBox>
              방 관련 정보
              <EnterRoomButton>참가하기</EnterRoomButton>
            </RoomBox>
            <RoomBox>
              방 관련 정보
              <EnterRoomButton>참가하기</EnterRoomButton>
            </RoomBox>
            <RoomBox>
              방 관련 정보
              <EnterRoomButton>참가하기</EnterRoomButton>
            </RoomBox>
            <RoomBox>
              방 관련 정보
              <EnterRoomButton>참가하기</EnterRoomButton>
            </RoomBox>
            <RoomBox>
              방 관련 정보
              <EnterRoomButton>참가하기</EnterRoomButton>
            </RoomBox>
            <RoomBox>
              방 관련 정보
              <EnterRoomButton>참가하기</EnterRoomButton>
            </RoomBox>
            <RoomBox>
              방 관련 정보
              <EnterRoomButton>참가하기</EnterRoomButton>
            </RoomBox>
            <RoomBox>
              방 관련 정보
              <EnterRoomButton>참가하기</EnterRoomButton>
            </RoomBox>
            <RoomBox>
              방 관련 정보
              <EnterRoomButton>참가하기</EnterRoomButton>
            </RoomBox>
          </RoomListBox>
          {/* <RoomList /> */}
        </Container>
      </ComponentsBox>
    </Container>
  );
};

// TODO: 반응형 사이즈로 수정
const ComponentsBox = styled.div`
  margin-top: 1.8207282913165266vh;
  gap: 3.43878954607978vw;
  display: flex;
  justify-content: center;
`;

const RoomListBox = styled.div`
  margin-left: 1.3020833333333333vw;
  margin-bottom: 5px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
`;

const RoomBox = styled.div`
  background-color: #eeeeee;
  width: 170px;
  height: 110px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

const EnterRoomButton = styled.button`
  cursor: pointer;
  background-color: white;
  border: 0;
  border-radius: 10px;
  margin-bottom: 5px;
`;

export default Main;
