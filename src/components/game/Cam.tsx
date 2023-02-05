import { useEffect, useRef } from 'react';

import styled from 'styled-components';

import { getCatInfoByQuery } from '@utils/character';

import Cat from '@components/character/Cat';

import CamStatus from './CamStatus';
import CamUserStatus from './CamUserStatus';

type SizeType = 'main' | 'sub';
export interface CamProps {
  userId: number;
  userStream?: MediaStream;
  nickname: string;
  profileImg?: string;
  video?: boolean;
  audio?: boolean;
  isMe?: boolean;
  isHost?: boolean;
  size: SizeType;
}

const SizeTypes = {
  main: {
    width: 551,
    height: 448,
  },
  sub: {
    width: 150,
    height: 130,
  },
};

// TODO: 게임 레디 전/레디 후/캠 키기 전 디자인을 추가해야한다.
const Cam = ({ userId, userStream, nickname, profileImg, video, audio, isMe, isHost, size }: CamProps) => {
  const videoRef: React.RefObject<HTMLVideoElement> | null = useRef(null);
  const { cat, rocket } = getCatInfoByQuery(profileImg);
  useEffect(() => {
    if (!videoRef.current || !userStream) {
      return;
    }
    videoRef.current.srcObject = userStream;
  }, [userStream, video]);

  return (
    <CamLayout size={size}>
      <VideoBox>
        <CamStatus userId={userId} isHost={isHost} />
        {userStream ? (
          <>
            <Video ref={videoRef} autoPlay playsInline muted={isMe} size={size} />
            {!video && (
              <EmptyVideo size={size}>
                <Cat
                  catTheme={cat}
                  rocketTheme={rocket}
                  type="face"
                  hasIdlePopupAnimation={false}
                  scale={size === 'sub' ? 0.8 : 2}
                />
              </EmptyVideo>
            )}
          </>
        ) : (
          <EmptyVideo size={size}>
            <Cat
              catTheme={cat}
              rocketTheme={rocket}
              type="face"
              hasIdlePopupAnimation={false}
              scale={size === 'sub' ? 0.8 : 2}
            />
          </EmptyVideo>
        )}
        <CamUserStatus isMicOn={audio} nickname={nickname} size={size} />
      </VideoBox>
    </CamLayout>
  );
};

const CamLayout = styled.div<{ size: SizeType }>`
  width: ${(props) => SizeTypes[props.size].width + 'px'};
  height: ${(props) => SizeTypes[props.size].height + 'px'};
`;

const VideoBox = styled.div`
  position: relative;
  height: 100%;
`;

const Video = styled.video<{ size: SizeType }>`
  position: absolute;
  width: ${(props) => SizeTypes[props.size].width + 'px'};
  height: ${(props) => SizeTypes[props.size].height + 12 + 'px'};
`;

const EmptyVideo = styled.div<{ size: SizeType }>`
  position: absolute;
  top: ${(props) => (props.size === 'sub' ? '14px' : '22px')};
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: ${(props) => (props.size === 'sub' ? '87%' : '95.3%')};
  background-color: black;
  color: white;
`;

export default Cam;
