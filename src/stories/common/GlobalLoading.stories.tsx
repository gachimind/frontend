import { ComponentMeta, ComponentStory } from '@storybook/react';

import GlobalLoading, { GlobalLoadingProps } from '@components/common/GlobalLoading';

export default {
  title: 'common/GlobalLoading',
  component: GlobalLoading,
} as ComponentMeta<typeof GlobalLoading>;

const Template: ComponentStory<typeof GlobalLoading> = (args: GlobalLoadingProps) => {
  return (
    <div style={{ width: '100%', height: '100%', marginLeft: '-20%' }}>
      <div id="loading-root"></div>
      <GlobalLoading {...args} />
    </div>
  );
};

export const Default = Template.bind({});
Default.args = {
  isLoading: false,
};
