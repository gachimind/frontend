import { useEffect } from 'react';

import { PUBLISH, SUBSCRIBE } from '@constants/socket';
import { useAppDispatch } from '@redux/hooks';
import { addChat } from '@redux/modules/gameRoomSlice';

import { EventUserInfo } from '@customTypes/socketType';

import socketInstance from './socketInstance';

const useChatSocket = () => {
  const { on, emit, off } = socketInstance;
  const dispatch = useAppDispatch();

  useEffect(() => {
    on(SUBSCRIBE.receiveChat, ({ data }: { data: { message: string; eventUserInfo: EventUserInfo } }) => {
      dispatch(addChat({ ...data.eventUserInfo, message: data.message, type: 'chat' }));
    });
    return () => {
      off(SUBSCRIBE.receiveChat);
    };
  }, []);

  const emitSendChat = (message: string) => {
    emit(PUBLISH.sendChat, { data: { message } });
  };

  return { emitSendChat };
};

export default useChatSocket;
