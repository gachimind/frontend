import { ComponentMeta, ComponentStory } from '@storybook/react';

import Cat, { CatProps } from '@components/character/Cat';

export default {
  title: 'character/Cat',
  component: Cat,
} as ComponentMeta<typeof Cat>;

const Template: ComponentStory<typeof Cat> = (args: CatProps) => {
  return <Cat {...args} />;
};

export const Default = Template.bind({});
Default.args = {
  scale: 3,
  catTheme: 'white',
  letsMove: { millSecond: 2000 },
  type: 'rocket',
  hasIdlePopupAnimation: true,
};
