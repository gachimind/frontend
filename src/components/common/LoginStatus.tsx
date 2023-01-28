import { useLayoutEffect } from 'react';

import { useAppDispatch } from '@redux/hooks';
import { __getUserInfo } from '@redux/modules/userSlice';
import { useGetUserInfoQuery } from '@redux/query/user';

const LoginStatus = () => {
  // const { data } = useGetUserInfoQuery();
  // console.log(data);

  const dispatch = useAppDispatch();

  useLayoutEffect(() => {
    // sessionStorage.getItem('accessToken') && dispatch(__getUserInfo());
  }, []);
  return <></>;
};

export default LoginStatus;
