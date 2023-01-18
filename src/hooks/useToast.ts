import { useRef } from 'react';

import { Id, toast } from 'react-toastify';

const IconType = {
  success: '😽',
  info: '🐱',
  warning: '😿',
};

const useToast = () => {
  const toastRef = useRef<Id>();

  const notify = (message: string, type: 'info' | 'success' | 'warning') => {
    dismissToast();
    toastRef.current = toast[type](message + IconType[type]);
  };

  function checkToastExists() {
    return toastRef.current && toast.isActive(toastRef.current);
  }

  function dismissToast() {
    if (checkToastExists()) {
      toastRef.current && toast.dismiss(toastRef.current);
    }
  }

  return { notify };
};

export default useToast;
