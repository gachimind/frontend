import { ComponentMeta, ComponentStory } from '@storybook/react';

import CircularProgress from '@components/common/CircularProgress';

export default {
  title: 'common/CircularProgress',
  component: CircularProgress,
} as ComponentMeta<typeof CircularProgress>;

const Template: ComponentStory<typeof CircularProgress> = (args: { second: number }) => {
  return <CircularProgress {...args} />;
};

export const Default = Template.bind({});
Default.args = {
  second: 7,
};
