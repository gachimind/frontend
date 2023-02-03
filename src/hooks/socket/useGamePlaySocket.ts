import { useEffect } from 'react';

import { SUBSCRIBE } from '@constants/socket';
import { useAppDispatch } from '@redux/hooks';
import { clearAllGamePlayState, setPlayState, setTurn } from '@redux/modules/gamePlaySlice';
import { setIsGameOnState, setScore } from '@redux/modules/gameRoomSlice';
import { alertToast } from '@utils/toast';

import { GameEndResponse, GameStartResponse, GameTurnInfoResponse } from '@customTypes/socketType';

import socketInstance from './socketInstance';

const useGamePlaySocket = () => {
  const { on, off } = socketInstance;
  const dispatch = useAppDispatch();

  useEffect(() => {
    on(SUBSCRIBE.gameTimeStart, ({ data }: { data: GameStartResponse }) => {
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
        dispatch(setPlayState({ ...data, event: 'gameEnd', timer: 2000 }));
        dispatch(setIsGameOnState(false));
        alertToast('게임이 종료되었습니다!', 'info', {
          hideProgressBar: true,
        });
        setTimeout(() => {
          dispatch(clearAllGamePlayState());
        }, 1500);
      }
    });

    on(SUBSCRIBE.getGameInfo, ({ data }: { data: GameTurnInfoResponse }) => {
      dispatch(setTurn(data));
    });

    on(SUBSCRIBE.getScore, ({ data }: { data: { userId: number; score: number } }) => {
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
