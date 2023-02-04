import { ComponentMeta, ComponentStory } from '@storybook/react';

import CatScore, { CatScoreProps } from '@components/character/CatScore';

export default {
  title: 'character/CatScore',
  component: CatScore,
} as ComponentMeta<typeof CatScore>;

const Template: ComponentStory<typeof CatScore> = (args: CatScoreProps) => {
  return <CatScore {...args} />;
};

export const Default = Template.bind({});
Default.args = {
  size: 'large',
  score: 0,
};
