import { useEffect } from 'react';

import { useAppDispatch } from '@redux/hooks';
import { setPlayState } from '@redux/modules/gamePlaySlice';
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
        event: 'startCount',
        timer: 60000,
      }),
    );
  }, []);

  return (
    <div>
      <button
        onClick={() => {
          dispatch(
            setPlayState({
              event: 'startCount',
              timer: 60000,
            }),
          );
        }}
        style={{ marginBottom: '40px', fontSize: '18px' }}
      >
        다시 시작
      </button>
      <Timer />
    </div>
  );
};

export const Default = Template.bind({});
