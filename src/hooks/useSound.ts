import { useAppSelector } from '@redux/hooks';

const useSound = () => {
  const { isEffectSoundOn } = useAppSelector((state) => state.userMedia);
  const audio = new Audio();

  const playSound = (src: string, volume = 0.7, loop = false) => {
    if (!isEffectSoundOn) {
      return;
    }
    audio.src = src;
    audio.volume = volume;
    audio.loop = loop;
    audio.play();
  };

  return { playSound };
};

export default useSound;
