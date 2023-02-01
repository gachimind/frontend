import { ComponentMeta, ComponentStory } from '@storybook/react';

import LoadingCat, { LoadingCatProps } from '@components/character/LoadingCat';

export default {
  title: 'character/LoadingCat',
  component: LoadingCat,
} as ComponentMeta<typeof LoadingCat>;

const Template: ComponentStory<typeof LoadingCat> = (args: LoadingCatProps) => {
  return <LoadingCat {...args} />;
};

export const Default = Template.bind({});
Default.args = {
  duration: 2000,
  transitionX: -33,
};
