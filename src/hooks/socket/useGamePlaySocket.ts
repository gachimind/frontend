import { useEffect } from 'react';

import { PUBLISH, SUBSCRIBE } from '@constants/socket';
import { useAppDispatch } from '@redux/hooks';
import { clearAllGamePlayState, setPlayState, setTurn } from '@redux/modules/gamePlaySlice';
import { setIsGameOnState, setScore } from '@redux/modules/gameRoomSlice';
import { alertToast } from '@utils/toast';

import { GameEndResponse, GameStartResponse, GameTurnInfoResponse } from '@customTypes/socketType';

import socketInstance from './socketInstance';

const useGamePlaySocket = () => {
  const { on, off, emit } = socketInstance;
  const dispatch = useAppDispatch();

  useEffect(() => {
    on(SUBSCRIBE.gameTimeStart, ({ data }: { data: GameStartResponse }) => {
      console.log('[on] game-start');
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
        dispatch(setPlayState({ ...data, event: 'gameEnd', timer: 2000 }));
        dispatch(setIsGameOnState(false));
        alertToast('게임이 종료되었습니다!', 'info', {
          hideProgressBar: true,
        });
        setTimeout(() => {
          dispatch(clearAllGamePlayState());
        }, 1500);
        // FIXME: 서버에서 레디상태 초기화 해줄 경우 삭제할 것
        emit(PUBLISH.readyGame);
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
