import { useEffect } from 'react';

import { alertToast } from '@utils/toast';

import { ErrorResponse } from '@customTypes/socketType';

import socketInstance from './socketInstance';

interface ErrorConditionType {
  target: keyof ErrorResponse;
  value: string | number;
  callback?: () => void;
  skipAlert?: boolean;
}

const useErrorSocket = () => {
  const { on, off } = socketInstance;

  const onError = (conditions?: ErrorConditionType[]) => {
    on('error', ({ error }: { error: ErrorResponse }) => {
      console.log(error);
      conditions?.forEach((condition, i) => {
        if (error[condition.target] === condition.value) {
          !condition.skipAlert && alertToast(error.errorMessage, 'warning');
          condition?.callback?.();
        }
      });
    });
  };

  const offError = () => {
    off('error');
  };

  useEffect(() => {
    return () => offError();
  }, []);

  return { onError, offError };
};

export default useErrorSocket;
