import styled from 'styled-components';

import MicButtonOffIcon from '@assets/svg_micButtonOffIcon.svg';
import MicButtonOnIcon from '@assets/svg_micButtonOnIcon.svg';
import useStreamUpdateSocket from '@hooks/socket/useStreamUpdateSocket';
import { useAppDispatch, useAppSelector } from '@redux/hooks';
import { setUserMic } from '@redux/modules/userMediaSlice';

import Button from '@components/common/Button';

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
      {userMic ? <img src={MicButtonOnIcon} /> : <img src={MicButtonOffIcon} />}
    </MicButtonLayout>
  );
};

const MicButtonLayout = styled(Button)`
  width: 56px;
  height: 56px;
  display: flex;
  justify-content: center;
  align-items: center;
  :focus {
    ${(props) => props.theme.borders.topLeftNormal1}
  }
  :hover {
    background-color: ${(props) => props.theme.colors.darkGrey2};
  }
`;

export default MicButton;
