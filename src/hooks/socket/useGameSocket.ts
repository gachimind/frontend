import { PUBLISH, SUBSCRIBE } from '@constants/socket';
import { useAppDispatch } from '@redux/hooks';
import { updateAllRooms } from '@redux/modules/gameRoomSlice';

import { GameRoomDetail } from '@customTypes/gameRoomType';

import { useSocketService } from './useSocketService';

interface UseGameSocketType {
  onBroadcastWholeRooms: () => void;
  emitUserLeaveRoom: () => void;
}

const useGameSocket = (): UseGameSocketType => {
  const { on, emit } = useSocketService();
  const dispatch = useAppDispatch();

  const onBroadcastWholeRooms = () => {
    on(SUBSCRIBE.broadcastRenewedRoomForHomeUsers, ({ data }: { data: GameRoomDetail[] }) => {
      dispatch(updateAllRooms(data));
    });
  };

  const emitUserLeaveRoom = () => {
    emit(PUBLISH.leaveGame);
  };

  return { onBroadcastWholeRooms, emitUserLeaveRoom };
};

export default useGameSocket;
