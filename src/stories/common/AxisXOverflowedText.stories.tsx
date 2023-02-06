import { ComponentMeta, ComponentStory } from '@storybook/react';

import AxisXOverflowedText, { AxisXOverflowedTextProps } from '@components/common/AxisXOverflowedText';

export default {
  title: 'common/AxisXOverflowedText',
  component: AxisXOverflowedText,
  parameters: {
    controls: {
      exclude: ['innerText', 'children'],
    },
  },
} as ComponentMeta<typeof AxisXOverflowedText>;

const Template: ComponentStory<typeof AxisXOverflowedText> = (args: AxisXOverflowedTextProps) => {
  return (
    <AxisXOverflowedText {...args}>
      <h1 style={{ color: 'white' }}>hello world</h1>
    </AxisXOverflowedText>
  );
};

export const Default = Template.bind({});
Default.args = {
  animationSecond: 3,
  maxLength: 6,
  width: 20,
  innerText: 'hello world',
};
