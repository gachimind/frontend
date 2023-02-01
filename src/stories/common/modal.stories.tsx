import { useState } from 'react';

import { ComponentMeta, ComponentStory } from '@storybook/react';
import { theme } from '@styles/theme';

import Modal, { ModalProps } from '@components/common/Modal';

export default {
  title: 'common/Modal',
  component: Modal,
  parameters: {
    controls: {
      exclude: ['visible', 'onClose'],
    },
  },
} as ComponentMeta<typeof Modal>;

const Template: ComponentStory<typeof Modal> = (args: ModalProps) => {
  const [visible, setVisible] = useState<boolean>(false);
  return (
    <>
      <button style={{ fontSize: '16px' }} onClick={() => setVisible(true)}>
        click to show
      </button>
      <Modal {...args} visible={visible} onClose={() => setVisible(false)}>
        <div style={{ height: '400px', color: theme.colors.ivory2 }}>hello</div>
      </Modal>
    </>
  );
};

export const Default = Template.bind({});
Default.args = {
  title: 'title',
};
