import { useEffect } from 'react';

import { useAppDispatch } from '@redux/hooks';
import { clearAllGamePlayState, setPlayState } from '@redux/modules/gamePlaySlice';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import Timer from '@components/game/Timer';

export default {
  title: 'game/Timer',
  component: Timer,
} as ComponentMeta<typeof Timer>;

const Template: ComponentStory<typeof Timer> = () => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(
      setPlayState({
        timer: 10000,
        event: 'readyTimer',
      }),
    );
    return () => {
      dispatch(clearAllGamePlayState());
    };
  }, []);
  return <Timer />;
};

export const Default = Template.bind({});
