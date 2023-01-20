import { useEffect } from 'react';

const useClickAway = (ref: React.RefObject<HTMLElement>, handler: (event: MouseEvent) => void) => {
  useEffect(() => {
    const clickAwayListener = (event: MouseEvent) => {
      if (!ref.current || ref.current.contains(event.target as Node)) {
        return;
      }
      handler(event);
    };

    document.addEventListener('mousedown', clickAwayListener);
    return () => {
      document.removeEventListener('mousedown', clickAwayListener);
    };
  }, [ref, handler]);
};

export default useClickAway;
