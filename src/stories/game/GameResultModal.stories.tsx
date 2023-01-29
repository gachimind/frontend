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
    { nickname: '최혜연', isReady: true, userId: 1, socketId: '', profileImg: '', score: 150 },
    { nickname: '박동석', isReady: true, userId: 2, socketId: '', profileImg: '', score: 60 },
    { nickname: '최예나', isReady: true, userId: 3, socketId: '', profileImg: '', score: 240 },
    { nickname: '편도영', isReady: true, userId: 4, socketId: '', profileImg: '', score: 420 },
    { nickname: '백세현', isReady: true, userId: 5, socketId: '', profileImg: '', score: 0 },
  ],
  userId: 1,
};
