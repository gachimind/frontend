import styled from 'styled-components';

import { useAppSelector } from '@redux/hooks';

import Cam from './Cam';

// TODO: 사용자들의 캠 대신 이름으로 참여 여부를 먼저 나타냈다. 수정되어야 한다.
const CamList = () => {
  const { userStream, userCam, userMic } = useAppSelector((state) => state.userMedia);
  const { user } = useAppSelector((state) => state.user);
  return (
    <CamListLayout>
      {user && <Cam userStream={userStream} nickname={user.nickname} video={userCam} audio={userMic} isMe={true} />}
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
