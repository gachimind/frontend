import { useEffect, useState } from 'react';

import { useDispatch } from 'react-redux';
import { singletonHook } from 'react-singleton-hook';

import { PUBLISH, SUBSCRIBE } from '@constants/socket';
import { updateAllRooms } from '@redux/modules/gameRoomSlice';
import { useGetUserInfoQuery } from '@redux/query/user';

import { GameRoomBroadcastResponse } from '@customTypes/socketType';

import socketInstance from './socketInstance';

const initValue = {
  authorized: false,
};

const useAuthSocketImpl = () => {
  const [authorized, setAuthorized] = useState<boolean>(false);
  const { isSuccess } = useGetUserInfoQuery();
  const isLogined = isSuccess;
  const dispatch = useDispatch();
  const { emit, on } = socketInstance;

  useEffect(() => {
    if (isLogined) {
      if (!authorized) {
        emit(PUBLISH.login, { data: { authorization: sessionStorage.getItem('accessToken') } });
        setAuthorized(true);
      }
    }
  }, [authorized, isLogined]);

  useEffect(() => {
    on(SUBSCRIBE.showRoomListForFirstUser, ({ data }: { data: GameRoomBroadcastResponse[] }) => {
      dispatch(updateAllRooms(data));
    });
  }, []);

  return { authorized };
};

export const useAuthSocket = singletonHook(initValue, useAuthSocketImpl);
