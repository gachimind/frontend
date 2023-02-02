import { ComponentMeta, ComponentStory } from '@storybook/react';

import GameButton, { GameButtonProps } from '@components/common/GameButton';

export default {
  title: 'common/GameButton',
  component: GameButton,
} as ComponentMeta<typeof GameButton>;

const Template: ComponentStory<typeof GameButton> = (args: GameButtonProps) => {
  return <GameButton {...args}>HELLO</GameButton>;
};

export const Default = Template.bind({});
