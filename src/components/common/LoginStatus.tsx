import { useEffect } from 'react';

import { useAppDispatch } from '@redux/hooks';
import { __getUserInfo } from '@redux/modules/userSlice';

const LoginStatus = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(__getUserInfo());
  }, []);
  return <></>;
};

export default LoginStatus;
