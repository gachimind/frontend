import { toast, ToastOptions } from 'react-toastify';

const IconType = {
  success: '😽',
  info: '🐱',
  warning: '😿',
};

export const alertToast = (message: string, type: 'info' | 'success' | 'warning', options?: ToastOptions) => {
  const notify = (message: string, type: 'info' | 'success' | 'warning') => {
    dismissToast();
    toast[type](message + IconType[type], {
      ...options,
    });
  };

  function dismissToast() {
    toast.dismiss();
  }

  return notify(message, type);
};
