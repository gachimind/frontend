import { ComponentMeta, ComponentStory } from '@storybook/react';

import CatIcon, { CatIconProps } from '@components/character/CatIcon';

export default {
  title: 'character/CatIcon',
  component: CatIcon,
} as ComponentMeta<typeof CatIcon>;

const Template: ComponentStory<typeof CatIcon> = (args: CatIconProps) => {
  return <CatIcon {...args} />;
};

export const Default = Template.bind({});
