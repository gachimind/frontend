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
  const [currentCount, setCurrentCount] = useState<number>(0);
  const [counterDescription, setCounterDescription] = useState<string>('');

  useEffect(() => {
    if (playState) {
      setCounter(playState.timer);
      setCurrentCount(playState.timer);
      setCounterDescription(CounterDescriptions[playState.event]);
      return;
    }
    setCounterDescription('');
  }, [playState]);

  useEffect(() => {
    if (currentCount <= 0 || counter <= 0) {
      setCounter(0);
      return;
    }
    const intervaelId = setInterval(() => {
      setCurrentCount((prev) => Math.max(0, prev - 1000));
    }, 990);
    return () => clearInterval(intervaelId);
  }, [counter]);

  return {
    count: currentCount,
    description: counterDescription,
  };
};

export default useGameTimeCountDown;
