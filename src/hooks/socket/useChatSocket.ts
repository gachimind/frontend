import { useEffect } from 'react';

import { PUBLISH, SUBSCRIBE } from '@constants/socket';
import { useAppDispatch } from '@redux/hooks';
import { setAnswered } from '@redux/modules/gamePlaySlice';
import { addChat } from '@redux/modules/gameRoomSlice';
import { useGetUserInfoQuery } from '@redux/query/user';

import { EventUserInfo } from '@customTypes/socketType';

import socketInstance from './socketInstance';

const useChatSocket = () => {
  const { on, emit, off } = socketInstance;
  const dispatch = useAppDispatch();
  const { data, isSuccess } = useGetUserInfoQuery();
  const user = data;
  const isLogined = isSuccess;
  useEffect(() => {
    on(
      SUBSCRIBE.receiveChat,
      ({ data }: { data: { message: string; eventUserInfo: EventUserInfo; type: 'chat' | 'answer' } }) => {
        if (isLogined && data.type === 'answer') {
          if (data.eventUserInfo.userId === user?.userId) {
            dispatch(setAnswered());
          }
        }
        dispatch(addChat({ ...data.eventUserInfo, message: data.message, type: data.type }));
      },
    );
    return () => {
      off(SUBSCRIBE.receiveChat);
    };
  }, [isLogined]);

  const emitSendChat = (message: string) => {
    emit(PUBLISH.sendChat, { data: { message } });
  };

  return { emitSendChat };
};

export default useChatSocket;
