import { ComponentMeta, ComponentStory } from '@storybook/react';

import StarlightBackground from '@components/common/StarlightBackground';

export default {
  title: 'common/StarlightBackground',
  component: StarlightBackground,
} as ComponentMeta<typeof StarlightBackground>;

const Template: ComponentStory<typeof StarlightBackground> = () => {
  return <StarlightBackground />;
};

export const Default = Template.bind({});
