import { useEffect, useState } from 'react';

import useLocalStream from '@hooks/useLocalStream';
import { useAppSelector } from '@redux/hooks';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import Cam, { CamProps } from '@components/game/Cam';

export default {
  title: 'game/Cam',
  component: Cam,
  parameters: {
    controls: {
      exclude: ['userStream', 'isMe', 'userId'],
    },
  },
} as ComponentMeta<typeof Cam>;

const Template: ComponentStory<typeof Cam> = (args: CamProps) => {
  const [stream, setStream] = useState<MediaStream>();
  const { userStream } = useAppSelector((state) => state.userMedia);
  const { initLocalStream } = useLocalStream();

  useEffect(() => {
    initLocalStream();
  }, []);

  useEffect(() => {
    userStream && setStream(userStream);
  }, [userStream]);

  return <Cam {...args} isMe={true} userStream={stream} />;
};

export const Default = Template.bind({});
Default.args = {
  size: 'main',
  nickname: '박동석',
};
