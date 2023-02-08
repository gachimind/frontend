import { PUBLISH } from '@constants/socket';

import socketInstance from './socketInstance';

const useEvaluateSocket = () => {
  const { emit } = socketInstance;
  const emitTurnEvaluation = (score: number, turn: number) => {
    emit(PUBLISH.sendTurnEvaluation, { data: { score, turn } });
  };

  return { emitTurnEvaluation };
};

export default useEvaluateSocket;
