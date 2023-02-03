import React, { useState } from 'react';

import Modal from '@components/common/Modal';

import SetUpInfo from './SetUpInfo';
import SetUpInfoSuccess from './SetUpInfoSuccess';

const SetUpInfoModal = ({ visible, onClose, mypage }: { visible: boolean; onClose: () => void; mypage?: boolean }) => {
  const [isSetUpInfoSuccess, setIsSetUpInfoSuccess] = useState<boolean>(false);
  return (
    <Modal
      visible={visible}
      onClose={onClose}
      title={mypage ? 'EDIT PROFILE' : 'SET UP'}
      width={!isSetUpInfoSuccess ? 1020 : undefined}
      isModalCloseButtonShown={mypage ? true : false}
    >
      {!isSetUpInfoSuccess ? (
        <SetUpInfo isSetUpInfoSuccess={setIsSetUpInfoSuccess} onClose={onClose} mypage={mypage} />
      ) : (
        <SetUpInfoSuccess isSetUpInfoSuccess={setIsSetUpInfoSuccess} onClose={onClose} />
      )}
    </Modal>
  );
};

export default SetUpInfoModal;
