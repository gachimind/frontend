import { useState } from 'react';

import { ComponentMeta, ComponentStory } from '@storybook/react';

import BubbleContents, { BubbleContentsProps } from '@components/common/BubbleContents';

export default {
  title: 'common/BubbleContents',
  component: BubbleContents,
  parameters: {
    controls: {
      exclude: ['onMouseLeave'],
    },
  },
} as ComponentMeta<typeof BubbleContents>;

const Template: ComponentStory<typeof BubbleContents> = (args: BubbleContentsProps) => {
  const [visible, setVisible] = useState<boolean>(false);
  return (
    <div>
      <div style={{ width: '30px', height: '30px', position: 'relative' }}>
        <button onMouseOver={() => setVisible(true)}>보기</button>
        {visible && <BubbleContents {...args} onMouseLeave={() => setVisible(false)} />}
      </div>
    </div>
  );
};

export const Default = Template.bind({});
Default.args = {
  text: 'hello world',
};
