import styled from 'styled-components';

import { useAppSelector } from '@redux/hooks';

import Cam from './Cam';

interface PresenterCamProps {
  nickname: string;
  isMe: boolean;
  userId?: number;
}

const PresenterCam = ({ nickname, isMe, userId }: PresenterCamProps) => {
  const { playerStreamMap, playerList } = useAppSelector((state) => state.playerMedia);
  const { userStream, userMic } = useAppSelector((state) => state.userMedia);
  const currentPlayer = playerList.find((player) => player.userId === userId);

  return (
    <PresenterCamLayout>
      {isMe ? (
        <Cam
          userId={userId as number}
          userStream={userStream}
          nickname={nickname}
          isMe={isMe}
          audio={userMic}
          size="main"
          width={551}
          height={448}
        />
      ) : (
        <Cam
          userId={userId as number}
          userStream={playerStreamMap[currentPlayer?.socketId as string]}
          nickname={nickname}
          audio={currentPlayer?.audio}
          size="main"
          width={551}
          height={448}
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
