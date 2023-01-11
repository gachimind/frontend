import { useEffect, useRef } from 'react';

import styled from 'styled-components';

interface CamProps {
  userStream: MediaStream;
  nickname: string;
  audio?: boolean;
  video?: boolean;
  isMe?: boolean;
}

const Cam = ({ userStream, nickname, audio, video, isMe }: CamProps) => {
  const videoRef: React.RefObject<HTMLVideoElement> | null = useRef(null);

  useEffect(() => {
    if (!videoRef.current || !userStream) {
      return;
    }
    videoRef.current.srcObject = userStream;
  }, [userStream]);

  return (
    <CamLayout>
      {userStream ? <Video ref={videoRef} autoPlay playsInline muted={isMe} /> : <EmptyVideo>{nickname}</EmptyVideo>}
    </CamLayout>
  );
};

const CamLayout = styled.div`
  border: 1px solid white;
  color: white;
`;

const Video = styled.video`
  max-width: 100%;
  max-height: 100%;
`;
const EmptyVideo = styled.div``;

export default Cam;
