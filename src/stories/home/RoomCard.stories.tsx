import { ComponentMeta, ComponentStory } from '@storybook/react';

import RoomCard, { RoomCardProps } from '@components/home/RoomCard';

export default {
  title: 'home/RoomCard',
  component: RoomCard,
  parameters: {
    controls: {
      exclude: ['onJoinClick'],
    },
  },
} as ComponentMeta<typeof RoomCard>;

const Template: ComponentStory<typeof RoomCard> = (args: RoomCardProps) => {
  return <RoomCard {...args} />;
};

export const Default = Template.bind({});
Default.args = {
  room: {
    isGameOn: false,
    isSecretRoom: false,
    maxCount: 6,
    participants: 3,
    roomId: 1,
    roomTitle: '방제목이다.',
  },
};

export const Full = Template.bind({});
Full.args = {
  room: {
    isGameOn: false,
    isSecretRoom: false,
    maxCount: 5,
    participants: 5,
    roomId: 1,
    roomTitle: '방제목이다.',
  },
};

export const Secret = Template.bind({});
Secret.args = {
  room: {
    isGameOn: false,
    isSecretRoom: true,
    maxCount: 5,
    participants: 5,
    roomId: 1,
    roomTitle: '방제목이다.',
  },
};

export const GameOn = Template.bind({});
GameOn.args = {
  room: {
    isGameOn: true,
    isSecretRoom: true,
    maxCount: 3,
    participants: 1,
    roomId: 1,
    roomTitle: '방제목이다.',
  },
};
