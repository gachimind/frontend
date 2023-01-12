import { useEffect, useRef } from 'react';

import styled from 'styled-components';

import CamButton from './CamButton';
import MicButton from './MicButton';

interface CamProps {
  userStream: MediaStream;
  nickname: string;
  audio?: boolean;
  video?: boolean;
  isMe?: boolean;
  isHost?: boolean;
}

const Cam = ({ userStream, nickname, audio, video, isMe, isHost }: CamProps) => {
  const videoRef: React.RefObject<HTMLVideoElement> | null = useRef(null);

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
          <NameBox>
            {isHost && '<방장>'}
            {nickname}
            {isMe && '[ME]'}
          </NameBox>
          <MediaFlexBox>
            {isMe ? (
              <>
                <CamButton />
                <MicButton />
              </>
            ) : (
              <>
                <button>오디오 {audio ? '켜짐' : '꺼짐'}</button>
                <button>비디오 {video ? '켜짐' : '꺼짐'}</button>
              </>
            )}
          </MediaFlexBox>
          <Video ref={videoRef} autoPlay playsInline muted={isMe} />
        </VideoBox>
      ) : (
        <EmptyVideo>{nickname}</EmptyVideo>
      )}
    </CamLayout>
  );
};

const CamLayout = styled.div`
  border: 1px solid white;
  color: white;
`;

const NameBox = styled.div`
  position: absolute;
  top: 0;
  background-color: black;
`;

const MediaFlexBox = styled.div`
  position: absolute;
  bottom: 0;
  background-color: black;
`;

const VideoBox = styled.div`
  position: relative;
`;

const Video = styled.video`
  max-width: 100%;
  max-height: 100%;
`;
const EmptyVideo = styled.div``;

export default Cam;
