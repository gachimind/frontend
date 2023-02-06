import { ComponentMeta, ComponentStory } from '@storybook/react';

import PresenterKeywordBox, { PresenterKeywordBoxProps } from '@components/game/PresenterKeywordBox';

export default {
  title: 'game/PresenterKeywordBox',
  component: PresenterKeywordBox,
} as ComponentMeta<typeof PresenterKeywordBox>;

const Template: ComponentStory<typeof PresenterKeywordBox> = (args: PresenterKeywordBoxProps) => {
  return (
    <div style={{ width: '530px', position: 'relative' }}>
      <PresenterKeywordBox {...args} />
    </div>
  );
};

export const IamPresenter = Template.bind({});

IamPresenter.args = {
  isMe: true,
  keyword: '단일책임원칙',
};

export const IamNotPresenter = Template.bind({});

IamNotPresenter.args = {
  isMe: false,
  keyword: '313 GP',
};
