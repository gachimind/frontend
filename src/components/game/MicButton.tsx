import styled from 'styled-components';

import useStreamUpdateSocket from '@hooks/socket/useStreamUpdateSocket';
import { useAppDispatch, useAppSelector } from '@redux/hooks';
import { setUserMic } from '@redux/modules/userMediaSlice';

import micIcon from '../../assets/micIcon.svg';

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
    <MICButton onClick={handleClick} aria-label={`마이크 ${userMic ? '켜짐' : '꺼짐'}`}>
      {userMic ? 'MIC켜짐' : <img src={micIcon} />}
    </MICButton>
  );
};

// TODO: MIC 커짐/켜짐 아이콘 바꾸기

const MICButton = styled.button`
  background-color: transparent;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default MicButton;
