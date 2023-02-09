import { useEffect } from 'react';

import { singletonHook } from 'react-singleton-hook';

import backgroundSound from '@assets/sounds/background.mp3';
import { useAppSelector } from '@redux/hooks';

const audio = new Audio();

const mute = (startFirstTime?: boolean) => {
  audio.pause();
  if (startFirstTime) {
    audio.currentTime = 0;
  }
};
const unmute = () => {
  audio.play();
};

const useBackgroundSoundImpl = () => {
  const { isBackgroundSoundOn } = useAppSelector((state) => state.userMedia);

  const play = () => {
    audio.src = backgroundSound;
    audio.volume = 0.05;
    audio.loop = true;
    audio.play();
  };

  useEffect(() => {
    if (isBackgroundSoundOn) {
      play();
    }
  }, []);

  useEffect(() => {
    if (isBackgroundSoundOn) {
      if (!audio.src) {
        play();
        return;
      }
      unmute();
      return;
    }
    mute();
  }, [isBackgroundSoundOn]);

  return { mute, unmute };
};

export const useBackgroundSound = singletonHook({ mute, unmute }, useBackgroundSoundImpl);
