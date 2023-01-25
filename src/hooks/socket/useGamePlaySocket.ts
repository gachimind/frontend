import { useEffect } from 'react';

import { SUBSCRIBE } from '@constants/socket';
import { useAppDispatch } from '@redux/hooks';
import { setPlayState, setTurn } from '@redux/modules/gamePlaySlice';
import { setIsGameOnState, setScore } from '@redux/modules/gameRoomSlice';

import { GameEndResponse, GameStartResponse, GameTurnInfoResponse } from '@customTypes/socketType';

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

    on(SUBSCRIBE.getGameInfo, ({ data }: { data: GameTurnInfoResponse }) => {
      console.log('[on] game-info');
      dispatch(setTurn(data));
    });

    on(SUBSCRIBE.getScore, ({ data }: { data: { userId: number; score: number } }) => {
      console.log('[on] score');
      dispatch(setScore({ ...data }));
    });

    return () => {
      off(SUBSCRIBE.gameTimeStart);
      off(SUBSCRIBE.gameTimeEnd);
      off(SUBSCRIBE.getGameInfo);
      off(SUBSCRIBE.getScore);
    };
  }, []);
};

export default useGamePlaySocket;
