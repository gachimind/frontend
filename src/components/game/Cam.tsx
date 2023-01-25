import { useEffect, useRef } from 'react';

import styled from 'styled-components';

import CamStatus from './CamStatus';
import CamUserStatus from './CamUserStatus';

interface CamProps {
  userId: number;
  userStream?: MediaStream;
  nickname: string;
  audio?: boolean;
  isMe?: boolean;
  isHost?: boolean;
  width?: number;
  height?: number;
  size: 'main' | 'sub';
}

// TODO: 게임 레디 전/레디 후/캠 키기 전 디자인을 추가해야한다.
const Cam = ({ userId, userStream, nickname, audio, isMe, isHost, width = 150, height = 130, size }: CamProps) => {
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
    <CamLayout width={width} height={height}>
      {userStream ? (
        <VideoBox>
          {size === 'sub' && <CamStatus userId={userId} isHost={isHost} />}
          <Video ref={videoRef} autoPlay playsInline muted={isMe} width={width} height={height} />
          <CamUserStatus isMicOn={audio} nickname={nickname} size={size} />
        </VideoBox>
      ) : (
        <VideoBox>
          <EmptyVideo>{nickname}</EmptyVideo>
        </VideoBox>
      )}
    </CamLayout>
  );
};

const CamLayout = styled.div<{ width: number; height: number }>`
  width: ${(props) => props.width + 'px'};
  height: ${(props) => props.height + 'px'};
`;

const VideoBox = styled.div`
  position: relative;
  height: 100%;
`;

const Video = styled.video<{ width: number; height: number }>`
  position: absolute;
  width: ${(props) => props.width + 'px'};
  height: ${(props) => props.height + 12 + 'px'};
`;

const EmptyVideo = styled.div`
  position: absolute;
  top: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 87%;
  background-color: black;
  color: white;
`;

export default Cam;
