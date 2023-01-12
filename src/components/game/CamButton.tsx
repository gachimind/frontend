import { useAppDispatch, useAppSelector } from '@redux/hooks';
import { setUserCam } from '@redux/modules/userMediaSlice';

const CamButton = () => {
  const { userCam, localDevice, userStreamRef } = useAppSelector((state) => state.userMedia);
  const dispatch = useAppDispatch();
  const handleClick = () => {
    if (!localDevice.video || !userStreamRef?.current) {
      return;
    }
    userStreamRef.current.getVideoTracks().forEach((track) => (track.enabled = !track.enabled));
    const changedCamState = !userCam;
    dispatch(setUserCam(changedCamState));
  };
  return (
    <button onClick={handleClick} aria-label={`캠 ${userCam ? '켜짐' : '꺼짐'}`}>
      {userCam ? 'CAM켜짐' : 'CAM꺼짐'}
    </button>
  );
};

export default CamButton;
