import { ComponentMeta, ComponentStory } from '@storybook/react';

import GameReady from '@components/game/GameReady';

export default {
  title: 'game/GameReady',
  component: GameReady,
  parameters: {
    controls: {
      exclude: ['handleClick'],
    },
  },
} as ComponentMeta<typeof GameReady>;

const Template: ComponentStory<typeof GameReady> = () => {
  return (
    <GameReady
      handleClick={() => {
        //
      }}
    />
  );
};

export const Default = Template.bind({});
