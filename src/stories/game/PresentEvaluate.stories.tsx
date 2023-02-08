import { ComponentMeta, ComponentStory } from '@storybook/react';

import PresentEvaluate, { PresentEvaluateProps } from '@components/game/PresentEvaluate';

export default {
  title: 'game/PresentEvaluate',
  component: PresentEvaluate,
  parameters: {
    controls: {
      exclude: ['currentTurn'],
    },
  },
} as ComponentMeta<typeof PresentEvaluate>;

const Template: ComponentStory<typeof PresentEvaluate> = (args: PresentEvaluateProps) => {
  return <PresentEvaluate {...args} />;
};

export const Default = Template.bind({});
Default.args = {
  currentTurn: 1,
  emitEvaluate: () => alert('HI'),
};
