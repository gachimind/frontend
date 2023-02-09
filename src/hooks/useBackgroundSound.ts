import { useCallback, useEffect, useState } from 'react';

import { singletonHook } from 'react-singleton-hook';

import backgroundSound from '@assets/sounds/background.mp3';
import { useAppSelector } from '@redux/hooks';

const audio = new Audio();

const mute = (startFirstTime?: boolean) => {
  audio.muted = true;
  if (startFirstTime) {
    audio.currentTime = 0;
  }
};
const unmute = () => {
  audio.muted = false;
};

const useBackgroundSoundImpl = () => {
  const { isBackgroundSoundOn } = useAppSelector((state) => state.userMedia);
  const { playState } = useAppSelector((state) => state.gamePlay);
  const [isSoundPlayable, setIsSoundPlayable] = useState<boolean>(false);
  const [isPlayed, setIsPlayed] = useState<boolean>(false);

  const play = useCallback(async () => {
    audio.src = backgroundSound;
    audio.volume = 0.05;
    audio.loop = true;
    await audio.play();
    setIsPlayed(true);
  }, []);

  useEffect(() => {
    if (!isSoundPlayable) {
      document.addEventListener('click', play);
      setIsSoundPlayable(true);
      return;
    }
    if (isPlayed) {
      document.removeEventListener('click', play);
    }
  }, [isSoundPlayable, isPlayed]);

  useEffect(() => {
    if (isBackgroundSoundOn) {
      if (!playState?.event) {
        unmute();
      }
      return;
    }
    mute();
  }, [isBackgroundSoundOn, playState]);

  return { mute, unmute };
};

export const useBackgroundSound = singletonHook({ mute, unmute }, useBackgroundSoundImpl);
