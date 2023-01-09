import { useEffect, useState } from 'react';

import { useDispatch } from 'react-redux';
import { singletonHook } from 'react-singleton-hook';

import { PUBLISH, SUBSCRIBE } from '@constants/socket';
import { useAppSelector } from '@redux/hooks';
import { updateAllRooms } from '@redux/modules/gameRoomSlice';
import { setUser } from '@redux/modules/userSlice';

import { GameRoomBroadcastResponse } from '@customTypes/socketType';
import { MyProfile } from '@customTypes/userType';

import socketInstance from './socketInstance';

const initValue = {
  authorized: false,
};

// FIXME: 인증 구현 후 모두 지울 것
const authentication = { token1: 1, token2: 2, token3: 3 }; // {token : userId} in db
const fakeDBUserTable: MyProfile[] = [
  {
    userId: 1,
    nickname: '세현1',
    profileImg: 'https://t3.ftcdn.net/jpg/02/95/94/94/360_F_295949484_8BrlWkTrPXTYzgMn3UebDl1O13PcVNMU.jpg',
    OAuth: 'kakao',
  },
  {
    userId: 2,
    nickname: '예나1',
    profileImg: 'https://t3.ftcdn.net/jpg/02/95/94/94/360_F_295949484_8BrlWkTrPXTYzgMn3UebDl1O13PcVNMU.jpg',
    OAuth: 'kakao',
  },
  {
    userId: 3,
    nickname: '도영1',
    profileImg: 'https://t3.ftcdn.net/jpg/02/95/94/94/360_F_295949484_8BrlWkTrPXTYzgMn3UebDl1O13PcVNMU.jpg',
    OAuth: 'kakao',
  },
];
// eslint-disable-next-line prefer-const

const useAuthSocketImpl = () => {
  const [authorized, setAuthorized] = useState<boolean>(false);
  const { isLogined } = useAppSelector((state) => state.user);
  const dispatch = useDispatch();
  const { emit, on } = socketInstance;

  // FIXME: 인증 구현 후 지울 것
  useEffect(() => {
    if (!isLogined) {
      const token = localStorage.getItem('accessToken') as 'token1' | 'token2' | 'token3';
      dispatch(setUser(fakeDBUserTable[authentication[token] - 1]));
    }
  }, [isLogined]);

  useEffect(() => {
    if (isLogined) {
      if (!authorized) {
        emit(PUBLISH.login, { data: { authentication: localStorage.getItem('accessToken') } });
        setAuthorized(true);
      }
    }
  }, [authorized, isLogined]);

  useEffect(() => {
    on(SUBSCRIBE.showRoomListForFirstUser, ({ data }: { data: GameRoomBroadcastResponse[] }) => {
      console.log('[on] room-list');
      dispatch(updateAllRooms(data));
    });
    on(SUBSCRIBE.broadcastRenewedRoomForHomeUsers, ({ data }: { data: GameRoomBroadcastResponse[] }) => {
      console.log('[on] rooms-refresh');
      dispatch(updateAllRooms(data));
    });
  }, []);

  return { authorized };
};

export const useAuthSocket = singletonHook(initValue, useAuthSocketImpl);
