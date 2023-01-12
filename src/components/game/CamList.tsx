import { useEffect } from 'react';

import styled from 'styled-components';

import { SUBSCRIBE } from '@constants/socket';
import socketInstance from '@hooks/socket/socketInstance';
import useStreamUpdateSocket from '@hooks/socket/useStreamUpdateSocket';
import { useAppDispatch, useAppSelector } from '@redux/hooks';
import { setUserCam, setUserMic } from '@redux/modules/userMediaSlice';

import Cam from './Cam';

// TODO: 사용자들의 캠 대신 이름으로 참여 여부를 먼저 나타냈다. 수정되어야 한다.
const CamList = () => {
  const { userStream, userCam, userMic, userStreamRef } = useAppSelector((state) => state.userMedia);
  const { playerList, playerStreamMap } = useAppSelector((state) => state.playerMedia);
  const { user } = useAppSelector((state) => state.user);
  const dispatch = useAppDispatch();
  const { onUpdateUserStream, offUpdateUserStream } = useStreamUpdateSocket();

  useEffect(() => {
    // XXX: 우선은 끈 상태로 시작하게 했지만..???
    if (userStreamRef?.current) {
      dispatch(setUserCam(false));
      dispatch(setUserMic(false));
      userStreamRef.current.getAudioTracks().forEach((track) => (track.enabled = !track.enabled));
      userStreamRef.current.getVideoTracks().forEach((track) => (track.enabled = !track.enabled));
    }
  }, []);

  useEffect(() => {
    onUpdateUserStream();
    return () => {
      offUpdateUserStream();
    };
  }, [playerList]);

  return (
    <CamListLayout>
      {playerList.map((player, index) => {
        return (
          <div key={player.userId}>
            {player.userId === user?.userId ? (
              <Cam
                userStream={userStream}
                nickname={user.nickname}
                video={userCam}
                audio={userMic}
                isMe={true}
                isHost={index === 0}
              />
            ) : (
              <Cam
                key={player.userId}
                userStream={playerStreamMap[player.socketId]}
                nickname={player.nickname}
                video={player.video}
                audio={player.audio}
                isHost={index === 0}
              />
            )}
          </div>
        );
      })}
    </CamListLayout>
  );
};

const CamListLayout = styled.div`
  gap: 10px;
  height: 100%;
  display: grid;
  min-height: 470px;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr;
`;

export default CamList;
