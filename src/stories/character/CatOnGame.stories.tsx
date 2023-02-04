import { useState } from 'react';

import { useAppDispatch, useAppSelector } from '@redux/hooks';
import { setScore } from '@redux/modules/gameRoomSlice';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import CatOnGame, { CatOnGameProps } from '@components/character/CatOnGame';

export default {
  title: 'character/CatOnGame',
  component: CatOnGame,
} as ComponentMeta<typeof CatOnGame>;

const Template: ComponentStory<typeof CatOnGame> = (args: CatOnGameProps) => {
  const dispatch = useAppDispatch();
  return (
    <div>
      <button
        style={{ fontSize: '20px', marginRight: '30px' }}
        onClick={() =>
          dispatch(
            setScore({
              userId: 999,
              score: 100,
            }),
          )
        }
      >
        +100
      </button>
      <button
        style={{ fontSize: '20px' }}
        onClick={() =>
          dispatch(
            setScore({
              userId: 999,
              score: 200,
            }),
          )
        }
      >
        +200
      </button>
      <div style={{ marginTop: '50px' }}>
        <CatOnGame {...args} />
      </div>
    </div>
  );
};

export const Default = Template.bind({});
Default.args = {
  size: 'large',
  scoreInfo: {
    score: 0,
  },
  nickname: 'hello',
  userId: 999,
};
