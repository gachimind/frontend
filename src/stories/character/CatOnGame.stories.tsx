import { ComponentMeta, ComponentStory } from '@storybook/react';

import CatOnGame, { CatOnGameProps } from '@components/character/CatOnGame';

export default {
  title: 'character/CatOnGame',
  component: CatOnGame,
} as ComponentMeta<typeof CatOnGame>;

const Template: ComponentStory<typeof CatOnGame> = (args: CatOnGameProps) => {
  return <CatOnGame {...args} />;
};

export const Default = Template.bind({});
Default.args = {
  size: 'large',
  scoreInfo: {
    score: 0,
  },
  nickname: 'hello',
};
