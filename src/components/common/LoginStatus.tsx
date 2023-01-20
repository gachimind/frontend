import { useEffect } from 'react';

import { useAppDispatch } from '@redux/hooks';
import { __getUserInfo } from '@redux/modules/userSlice';
import { getCookie } from '@utils/getCookie';

const LoginStatus = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    getCookie('jwt') && sessionStorage.setItem('accessToken', getCookie('jwt').split(' ')[1]);

    dispatch(__getUserInfo());
  }, []);
  return <></>;
};

export default LoginStatus;
