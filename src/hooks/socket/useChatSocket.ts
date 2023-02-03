import { useEffect } from 'react';

import { PUBLISH, SUBSCRIBE } from '@constants/socket';
import { useAppDispatch, useAppSelector } from '@redux/hooks';
import { setAnswered } from '@redux/modules/gamePlaySlice';
import { addChat } from '@redux/modules/gameRoomSlice';

import { EventUserInfo } from '@customTypes/socketType';

import socketInstance from './socketInstance';

const useChatSocket = () => {
  const { on, emit, off } = socketInstance;
  const dispatch = useAppDispatch();
  const { user, isLogined } = useAppSelector((state) => state.user);
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

  const emitTurnEvaluation = (score: number, turn: number) => {
    emit(PUBLISH.sendTurnEvaluation, { data: { score, turn } });
  };

  return { emitSendChat, emitTurnEvaluation };
};

export default useChatSocket;
