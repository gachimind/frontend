import styled from 'styled-components';

import useStreamUpdateSocket from '@hooks/socket/useStreamUpdateSocket';
import { useAppDispatch, useAppSelector } from '@redux/hooks';
import { setUserCam } from '@redux/modules/userMediaSlice';

import camIcon from '../../assets/camIcon.svg';

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
    <CAMButton onClick={handleClick} aria-label={`캠 ${userCam ? '켜짐' : '꺼짐'}`}>
      {userCam ? 'CAM켜짐' : <img src={camIcon} />}
    </CAMButton>
  );
};

// TODO: CAM 커짐/켜짐 아이콘 바꾸기

const CamButtonLayout = styled.button`
  background-color: transparent;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default CamButton;
