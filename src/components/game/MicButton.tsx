import styled from 'styled-components';

import MicButtonIcon from '@assets/svg_micButtonIcon.svg';
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
    <MicButtonLayout onClick={handleClick} aria-label={`마이크 ${userMic ? '켜짐' : '꺼짐'}`}>
      {userMic ? 'MIC켜짐' : <img src={MicButtonIcon} />}
    </MicButtonLayout>
  );
};

// TODO: MIC 커짐/켜짐 아이콘 바꾸기
const MicButtonLayout = styled.button`
  background-color: transparent;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default MicButton;
