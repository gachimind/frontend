import { useEffect, useState } from 'react';

import { useAppSelector } from '@redux/hooks';

const CounterDescriptions = {
  startCount: '게임시작까지',
  readyTimer: '남은 준비시간',
  speechTimer: '남은 발표시간',
  discussionTimer: '토론종료까지',
  gameEnd: '게임 종료됨!',
};

const useGameTimeCountDown = () => {
  const { playState } = useAppSelector((state) => state.gamePlay);
  const [counter, setCounter] = useState<number>(0);
  const [counterDescription, setCounterDescription] = useState<string>('');

  useEffect(() => {
    if (playState) {
      setCounter(playState.timer);
      setCounterDescription(CounterDescriptions[playState.event]);
      return;
    }
    setCounterDescription('');
  }, [playState]);

  useEffect(() => {
    if (counter <= 0) {
      return;
    }
    const timeoutId = setTimeout(() => {
      setCounter(counter - 1000);
    }, 980);

    return () => clearTimeout(timeoutId);
  }, [counter]);

  return {
    count: counter,
    description: counterDescription,
  };
};

export default useGameTimeCountDown;
