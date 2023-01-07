import { singletonHook } from 'react-singleton-hook';

import { SUBSCRIBE } from '@constants/socket';
import { useAppDispatch } from '@redux/hooks';
import { updateAllRooms } from '@redux/modules/gameRoomSlice';

import { GameRoomDetail } from '@customTypes/gameRoomType';

import { useSocketService } from './useSocketService';

interface UseGameSocketType {
  onBroadcastWholeRooms: () => void;
}

const useGameSocket = (): UseGameSocketType => {
  const { on } = useSocketService();
  const dispatch = useAppDispatch();

  const onBroadcastWholeRooms = () => {
    on?.(SUBSCRIBE.broadcastRenewedRoomForHomeUsers, ({ data }: { data: GameRoomDetail[] }) => {
      console.log(data);
      dispatch(updateAllRooms(data));
    });
  };

  return { onBroadcastWholeRooms };
};

export default useGameSocket;
