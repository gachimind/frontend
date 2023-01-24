import { useEffect } from 'react';

import { SUBSCRIBE } from '@constants/socket';
import { useAppDispatch } from '@redux/hooks';
import { setPlayState } from '@redux/modules/gamePlaySlice';
import { setIsGameOnState } from '@redux/modules/gameRoomSlice';

import { GameEndResponse, GameStartResponse } from '@customTypes/socketType';

import socketInstance from './socketInstance';

const useGamePlaySocket = () => {
  const { on, off } = socketInstance;
  const dispatch = useAppDispatch();

  useEffect(() => {
    on(SUBSCRIBE.gameTimeStart, ({ data }: { data: GameStartResponse }) => {
      console.log('[on] game-start');
      console.log(data);
      dispatch(setPlayState(data));
      switch (data.event) {
        case 'startCount':
          dispatch(setIsGameOnState(true));
          break;
        case 'readyTimer':
          break;
        default:
          break;
      }
    });

    on(SUBSCRIBE.gameTimeEnd, ({ data }: { data: GameEndResponse }) => {
      if (data.nextTurn === 0) {
        console.log('[on] game-end');
        dispatch(setPlayState({ ...data, event: 'gameEnd' }));
        dispatch(setIsGameOnState(false));
      }
    });

    on(SUBSCRIBE.getGameInfo, (data) => {
      console.log('[on] game-info');
      console.log(data);
    });

    return () => {
      off(SUBSCRIBE.gameTimeStart);
    };
  }, []);
};

export default useGamePlaySocket;
