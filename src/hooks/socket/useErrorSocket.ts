import { useEffect } from 'react';

import useToast from '@hooks/useToast';

import { ErrorResponse } from '@customTypes/socketType';

import socketInstance from './socketInstance';

const useErrorSocket = () => {
  const { on, off } = socketInstance;
  const { notify } = useToast();

  const onError = (condition?: { target: keyof ErrorResponse; value: string | number }, callback?: () => void) => {
    on('error', ({ error }: { error: ErrorResponse }) => {
      notify(error.errorMessage, 'warning');
      if (condition) {
        error[condition.target] === condition.value && callback?.();
      }
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
