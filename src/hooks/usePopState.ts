import { useEffect } from 'react';

const usePopState = () => {
  const preventGoBack = () => {
    history.pushState(null, '', location.href);
  };

  useEffect(() => {
    (() => {
      history.pushState(null, '', location.href);
      window.addEventListener('popstate', preventGoBack);
    })();

    return () => {
      window.removeEventListener('popstate', preventGoBack);
    };
  }, []);
};

export default usePopState;
