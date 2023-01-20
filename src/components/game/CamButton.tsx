import styled from 'styled-components';

import CamButtonIcon from '@assets/svg_camButtonIcon.svg';
import useStreamUpdateSocket from '@hooks/socket/useStreamUpdateSocket';
import { useAppDispatch, useAppSelector } from '@redux/hooks';
import { setUserCam } from '@redux/modules/userMediaSlice';

const CamButton = () => {
  const { userCam, localDevice, userStreamRef } = useAppSelector((state) => state.userMedia);
  const dispatch = useAppDispatch();
  const { emitUpdateUserStream } = useStreamUpdateSocket();
  const handleClick = () => {
    if (!localDevice.video || !userStreamRef?.current) {
      return;
    }
    userStreamRef.current.getVideoTracks().forEach((track) => (track.enabled = !track.enabled));
    const changedCamState = !userCam;
    dispatch(setUserCam(changedCamState));
    emitUpdateUserStream({ video: changedCamState });
  };
  return (
    <CamButtonLayout onClick={handleClick} aria-label={`캠 ${userCam ? '켜짐' : '꺼짐'}`}>
      {userCam ? 'CAM켜짐' : <img src={CamButtonIcon} />}
    </CamButtonLayout>
  );
};

// TODO: CAM 커짐/켜짐 아이콘 바꾸기
const CamButtonLayout = styled.button`
  cursor: pointer;
  background-color: transparent;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default CamButton;
