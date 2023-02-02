import { ComponentMeta, ComponentStory } from '@storybook/react';

import GliteringStar, { GliteringStarProps } from '@components/character/GliteringStar';

export default {
  title: 'character/GliteringStar',
  component: GliteringStar,
} as ComponentMeta<typeof GliteringStar>;

const Template: ComponentStory<typeof GliteringStar> = (args: GliteringStarProps) => {
  return (
    <div style={{ position: 'relative', width: '600px', height: '400px', border: '1px solid white' }}>
      <GliteringStar {...args} />
    </div>
  );
};

export const Default = Template.bind({});
Default.args = {
  left: 100,
  top: 50,
};
