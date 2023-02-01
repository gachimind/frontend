import { ComponentMeta, ComponentStory } from '@storybook/react';

import TitleText from '@components/common/TitleText';

export default {
  title: 'common/TitleText',
  component: TitleText,
} as ComponentMeta<typeof TitleText>;

const Template: ComponentStory<typeof TitleText> = () => {
  return <TitleText />;
};

export const Default = Template.bind({});
