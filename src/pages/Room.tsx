import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

import styled from 'styled-components';

import { useAuthSocket } from '@hooks/socket/useAuthSocket';
import useGameSocket from '@hooks/socket/useGameSocket';

import Container from '@components/common/Container';
import CamList from '@components/game/CamList';
import ChatLog from '@components/game/ChatLog';

const Room = () => {
  const { id } = useParams();
  const { authorized } = useAuthSocket();

  const { emitUserLeaveRoom, emitJoinRoom, onAnnounceRoomUpdate } = useGameSocket();
  useEffect(() => {
    return () => emitUserLeaveRoom();
  }, []);

  useEffect(() => {
    onAnnounceRoomUpdate();
    if (authorized) {
      id && emitJoinRoom(id);
    }
  }, [id, authorized]);

  return (
    <Container page="room" containerType="template" width={84.63541666666667} height={86.8945868945869}>
      <ComponentsBox>
        <LeftComponentsBox>
          <Container title="TIMER" height={16.80672268907563} width={19.53125}>
            <Timer>02:00</Timer>
          </Container>
          <Container title="SCORE" height={51.82072829131653} width={19.53125} />
        </LeftComponentsBox>
        <CenterComponentsBox>
          <Container title="PRESENTER" height={49.01960784313726} width={19.53125} />
          <Container title="CHATTING" height={19.607843137254903} width={19.53125}>
            {
              // TODO: 소켓 연결 시 ChatBox style ChatLog 컴포넌트로 이동
            }
            <ChatBox>
              <p>CHAT CHAT</p>
              <input placeholder="   | TEXT"></input>
            </ChatBox>
            {/* <ChatLog /> */}
          </Container>
        </CenterComponentsBox>
        {
          // TODO: 소켓 연결 시 CamBox style CamList 컴포넌트로 이동
        }
        <RightComponentsBox>
          <CamBox>
            <CamInfoBox>
              <span>♥</span>
              <span>닉네임</span>
              <span>마이크</span>
            </CamInfoBox>
          </CamBox>
          <CamBox>
            <CamInfoBox>
              <span>♥</span>
              <span>닉네임</span>
              <span>마이크</span>
            </CamInfoBox>
          </CamBox>
          <CamBox>
            <CamInfoBox>
              <span>♥</span>
              <span>닉네임</span>
              <span>마이크</span>
            </CamInfoBox>
          </CamBox>
          <CamBox>
            <CamInfoBox>
              <span>♥</span>
              <span>닉네임</span>
              <span>마이크</span>
            </CamInfoBox>
          </CamBox>
          <CamBox>
            <CamInfoBox>
              <span>♥</span>
              <span>닉네임</span>
              <span>마이크</span>
            </CamInfoBox>
          </CamBox>
          <CamBox>
            <CamInfoBox>
              <span>♥</span>
              <span>닉네임</span>
              <span>마이크</span>
            </CamInfoBox>
          </CamBox>
          {/* <CamList /> */}
        </RightComponentsBox>
      </ComponentsBox>
    </Container>
  );
};

const ComponentsBox = styled.div`
  gap: 25px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const LeftComponentsBox = styled.div`
  gap: 15px;
  display: flex;
  flex-direction: column;
`;

const Timer = styled.span`
  color: white;
  margin: 10px auto;
`;

const CenterComponentsBox = styled.div`
  gap: 15px;
  display: flex;
  flex-direction: column;
`;

const ChatBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  p {
    color: #f0f0f0;
  }
  input {
    background-color: #f0f0f0;
    height: 20px;
  }
`;

const RightComponentsBox = styled.div`
  background-color: #f0f0f0;
  width: 22.786458333333332vw;
  height: 70.72829131652661vh;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
`;

const CamBox = styled.div`
  border: 1px solid black;
  width: 138px;
  height: 133px;
`;

const CamInfoBox = styled.div`
  position: absolute;
  color: white;
  background-color: black;
  opacity: 0.7;
  width: inherit;
  height: 30px;
  margin-top: 103px;
  gap: 3px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default Room;
