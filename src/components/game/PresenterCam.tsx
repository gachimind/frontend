import styled from 'styled-components';

import { useAppSelector } from '@redux/hooks';

import Cam from './Cam';

interface PresenterCamProps {
  nickname: string;
  isMe: boolean;
  userId?: number;
  profileImg?: string;
}

const PresenterCam = ({ nickname, isMe, userId, profileImg }: PresenterCamProps) => {
  const { playerStreamMap, playerList } = useAppSelector((state) => state.playerMedia);
  const { userStream, userMic, userCam } = useAppSelector((state) => state.userMedia);
  const currentPlayer = playerList.find((player) => player.userId === userId);

  return (
    <PresenterCamLayout>
      {isMe ? (
        <Cam
          userId={userId as number}
          userStream={userStream}
          nickname={nickname}
          isMe={isMe}
          video={userCam}
          audio={userMic}
          size="main"
          profileImg={profileImg}
        />
      ) : (
        <Cam
          userId={userId as number}
          userStream={playerStreamMap[currentPlayer?.socketId as string]}
          nickname={nickname}
          video={currentPlayer?.video}
          audio={currentPlayer?.audio}
          size="main"
          profileImg={profileImg}
        />
      )}
    </PresenterCamLayout>
  );
};

const PresenterCamLayout = styled.div`
  position: absolute;
  top: 16px;
  left: 0;
  z-index: 2;
`;

export default PresenterCam;
