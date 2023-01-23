import { useEffect, useRef } from 'react';

import styled from 'styled-components';

import CamUserStatus from './CamUserStatus';

interface CamProps {
  userStream?: MediaStream;
  nickname: string;
  audio?: boolean;
  isMe?: boolean;
  isHost?: boolean;
}

// TODO: 게임 레디 전/레디 후/캠 키기 전 디자인을 추가해야한다.
const Cam = ({ userStream, nickname, audio, isMe, isHost }: CamProps) => {
  const videoRef: React.RefObject<HTMLVideoElement> | null = useRef(null);

  // FIXME: 적용하고 지울 것
  isHost;
  useEffect(() => {
    if (!videoRef.current || !userStream) {
      return;
    }
    videoRef.current.srcObject = userStream;
  }, [userStream]);

  return (
    <CamLayout>
      {userStream ? (
        <VideoBox>
          <Video ref={videoRef} autoPlay playsInline muted={isMe} />
          <CamUserStatus isMicOn={audio} nickname={nickname} />
        </VideoBox>
      ) : (
        <EmptyVideo>{nickname}</EmptyVideo>
      )}
    </CamLayout>
  );
};

const CamLayout = styled.div`
  margin: 0 16px;
`;

const VideoBox = styled.div`
  position: relative;
`;

const Video = styled.video`
  width: 150px;
  height: 130px;
`;

const EmptyVideo = styled.div`
  margin-top: 8px;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 150px;
  height: 116px;
  background-color: black;
  color: white;
`;

export default Cam;
