import { useEffect, useState } from 'react';

import { singletonHook } from 'react-singleton-hook';

import { PUBLISH } from '@constants/socket';
import { useAppSelector } from '@redux/hooks';

import socketInstance from './socketInstance';

const initValue = {
  authorized: false,
};

const useAuthSocketImpl = () => {
  const [authorized, setAuthorized] = useState<boolean>(false);
  const { user, isLogined } = useAppSelector((state) => state.user);
  const { emit } = socketInstance;
  useEffect(() => {
    if (isLogined) {
      // FIXME: 백엔드 소켓 로직 구현과 프론트엔드 인증상태 관리 구현 후 2번째 인수 data에 accessToken을 보내도록 수정되어야 한다.
      if (!authorized) {
        emit(PUBLISH.login, { data: user }, () => {
          setAuthorized(true);
        });
      }
    }
  }, [authorized, isLogined]);

  return { authorized };
};

export const useAuthSocket = singletonHook(initValue, useAuthSocketImpl);
