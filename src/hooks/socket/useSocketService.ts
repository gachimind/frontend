import { useEffect, useState } from 'react';

import { singletonHook } from 'react-singleton-hook';
import { io, Socket } from 'socket.io-client';

import { PUBLISH } from '@constants/socket';
import { useAppSelector } from '@redux/hooks';

const initValue: Socket = io(process.env.REACT_APP_API_ENDPOINT || 'http://localhost:8080');

const on = (event: string, callback: (...args: any[]) => void) => {
  initValue.on(event, callback);
};

const off = (event: string) => {
  initValue.off(event);
};

// TODO: 예외 핸들링이 추가되어야 한다.
const emit = (event: string, ...args: any[]) => {
  initValue.emit(event, ...args);
};
interface UseSocketServiceType {
  socketInstance: Socket;
  on: (event: string, callback: (...args: any[]) => void) => void;
  off: (event: string) => void;
  emit: (event: string, ...args: any[]) => void;
  authorized: boolean;
}

const useSocketServiceImpl = (): UseSocketServiceType => {
  const [socketInstance, setSocketInstance] = useState<Socket>(initValue);
  const [authorized, setAuthorized] = useState<boolean>(false);
  const { user, isLogined } = useAppSelector((state) => state.user);
  useEffect(() => {
    if (!socketInstance) {
      setSocketInstance(initValue);
      return;
    }
  }, [socketInstance]);

  useEffect(() => {
    if (isLogined) {
      // FIXME: 백엔드 소켓 로직 구현과 프론트엔드 인증상태 관리 구현 후 2번째 인수 data에 accessToken을 보내도록 수정되어야 한다.
      emit(PUBLISH.login, { data: user }, () => {
        setAuthorized(true);
      });
    }
  }, [isLogined]);

  return { socketInstance, on, off, emit, authorized };
};

export const useSocketService = singletonHook(
  { socketInstance: initValue, on, off, emit, authorized: false },
  useSocketServiceImpl,
);
