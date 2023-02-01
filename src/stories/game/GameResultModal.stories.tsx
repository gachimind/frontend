import { useState } from 'react';

import { ComponentMeta, ComponentStory } from '@storybook/react';

import GameResultModal, { GameResultModalProps } from '@components/game/GameResultModal';

export default {
  title: 'game/GameResultModal',
  component: GameResultModal,
  parameters: {
    controls: {
      exclude: ['visible', 'onClose'],
    },
  },
} as ComponentMeta<typeof GameResultModal>;

const Template: ComponentStory<typeof GameResultModal> = (args: GameResultModalProps) => {
  const [visible, setVisible] = useState<boolean>(false);
  return (
    <>
      <button onClick={() => setVisible(true)}>click to show</button>
      <GameResultModal {...args} visible={visible} onClose={() => setVisible(false)} />
    </>
  );
};

export const Default = Template.bind({});
Default.args = {
  participants: [
    { nickname: '한글은여섯개', isReady: true, userId: 1, socketId: '', profileImg: '' },
    { nickname: '여섯글자가넘으면어떡해', isReady: true, userId: 2, socketId: '', profileImg: 'brown-red' },
    { nickname: 'Helloworld', isReady: true, userId: 3, socketId: '', profileImg: 'black-blue' },
    { nickname: 'ehd0309박동석123', isReady: true, userId: 4, socketId: '', profileImg: 'gray-red' },
    { nickname: '컴퓨터텔레비죤', isReady: true, userId: 5, socketId: '', profileImg: 'mix-yellow' },
    { nickname: '콜라', isReady: true, userId: 6, socketId: '', profileImg: 'orange-red' },
  ],
  scoreMap: {
    [1]: 240,
    [2]: 150,
    [3]: 450,
    [4]: 60,
    [5]: 90,
    [6]: 100,
  },
  userId: 1,
};
