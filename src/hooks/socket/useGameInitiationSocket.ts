import { PUBLISH } from '@constants/socket';
import { alertToast } from '@utils/toast';

import socketInstance from './socketInstance';

const useGameInitiationSocket = () => {
  const { emit } = socketInstance;

  const emitGameReady = () => {
    emit(PUBLISH.readyGame);
  };

  const emitGameStart = () => {
    alertToast('게임시작!', 'info', {
      hideProgressBar: true,
    });
    emit(PUBLISH.startGame);
  };

  return { emitGameReady, emitGameStart };
};

export default useGameInitiationSocket;
