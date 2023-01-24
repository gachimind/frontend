import styled from 'styled-components';

import CamButtonOffIcon from '@assets/svg_camButtonOffIcon.svg';
import CamButtonOnIcon from '@assets/svg_camButtonOnIcon.svg';
import useStreamUpdateSocket from '@hooks/socket/useStreamUpdateSocket';
import { useAppDispatch, useAppSelector } from '@redux/hooks';
import { setUserCam } from '@redux/modules/userMediaSlice';

import Button from '@components/common/Button';

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
      {userCam ? <img src={CamButtonOnIcon} /> : <img src={CamButtonOffIcon} />}
    </CamButtonLayout>
  );
};

const CamButtonLayout = styled(Button)`
  width: 56px;
  height: 56px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default CamButton;
