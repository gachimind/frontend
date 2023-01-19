import { PUBLISH } from '@constants/socket';

import socketInstance from './socketInstance';

const useGameInitiationSocket = () => {
  const { emit } = socketInstance;

  const emitGameReady = () => {
    emit(PUBLISH.readyGame);
  };

  const emitGameStart = () => {
    emit(PUBLISH.startGame);
  };

  return { emitGameReady, emitGameStart };
};

export default useGameInitiationSocket;
