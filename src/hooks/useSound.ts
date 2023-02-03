import { useAppSelector } from '@redux/hooks';

const useSound = () => {
  const { isSoundOn } = useAppSelector((state) => state.userMedia);
  const audio = new Audio();

  const playSound = (src: string, volume = 1, loop = false) => {
    if (!isSoundOn) {
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
