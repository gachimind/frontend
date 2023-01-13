import useStreamUpdateSocket from '@hooks/socket/useStreamUpdateSocket';
import { useAppDispatch, useAppSelector } from '@redux/hooks';
import { setUserMic } from '@redux/modules/userMediaSlice';

const MicButton = () => {
  const { userMic, localDevice, userStreamRef } = useAppSelector((state) => state.userMedia);
  const dispatch = useAppDispatch();
  const { emitUpdateUserStream } = useStreamUpdateSocket();

  const handleClick = () => {
    if (!localDevice.video || !userStreamRef?.current) {
      return;
    }
    userStreamRef.current.getAudioTracks().forEach((track) => (track.enabled = !track.enabled));
    const changedCamState = !userMic;
    dispatch(setUserMic(changedCamState));
    emitUpdateUserStream({ audio: changedCamState });
  };
  return (
    <button onClick={handleClick} aria-label={`마이크 ${userMic ? '켜짐' : '꺼짐'}`}>
      {userMic ? 'MIC켜짐' : 'MIC꺼짐'}
    </button>
  );
};

export default MicButton;
