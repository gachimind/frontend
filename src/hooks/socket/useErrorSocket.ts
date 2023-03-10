import { useEffect } from 'react';

import { alertToast } from '@utils/toast';

import { ErrorResponse } from '@customTypes/socketType';

import socketInstance from './socketInstance';

interface ErrorConditionType {
  target: keyof ErrorResponse;
  value: string | number;
  callback?: (msg?: string) => void;
  skipAlert?: boolean;
}

const useErrorSocket = () => {
  const { on, off } = socketInstance;

  const onError = (conditions?: ErrorConditionType[]) => {
    on('error', ({ error }: { error: ErrorResponse }) => {
      if (!error) {
        return;
      }
      conditions?.forEach((condition) => {
        if (error[condition.target] === condition.value) {
          !condition.skipAlert &&
            alertToast(error.errorMessage, 'warning', {
              hideProgressBar: true,
            });
          condition?.callback?.(error.errorMessage);
          return;
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
