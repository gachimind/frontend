import React from 'react';

import styled from 'styled-components';

import soundMuted from '@assets/svg_soundMuted.svg';
import soundUnMuted from '@assets/svg_soundUnmuted.svg';
import { useAppDispatch, useAppSelector } from '@redux/hooks';
import { setBackgroundSoundState, setEffectSoundState } from '@redux/modules/userMediaSlice';

import Button from './Button';

// TODO: 추후 백그라운드 버튼 분리
const SoundEffectButton = () => {
  const dispatch = useAppDispatch();
  const { isEffectSoundOn } = useAppSelector((state) => state.userMedia);

  return (
    <SoundEffectButtonLayout
      onClick={() => {
        dispatch(setEffectSoundState());
        dispatch(setBackgroundSoundState());
      }}
    >
      <img src={isEffectSoundOn ? soundUnMuted : soundMuted} />
    </SoundEffectButtonLayout>
  );
};

const SoundEffectButtonLayout = styled(Button)`
  font-size: 16px;
  width: 56px;
  height: 56px;
  gap: 8px;
`;

export default SoundEffectButton;
