import { PUBLISH, SUBSCRIBE } from '@constants/socket';
import { useAppDispatch } from '@redux/hooks';
import { updateAllRooms, updateRoom } from '@redux/modules/gameRoomSlice';

import { GameRoomDetail } from '@customTypes/gameRoomType';

import { useSocketService } from './useSocketService';

interface UseGameSocketType {
  onBroadcastWholeRooms: () => void;
  onAnnounceRoomUpdate: () => void;
  emitUserLeaveRoom: () => void;
  emitJoinRoom: (roomId: string) => void;
}

const useGameSocket = (): UseGameSocketType => {
  const { on, emit } = useSocketService();
  const dispatch = useAppDispatch();

  const onBroadcastWholeRooms = () => {
    on(SUBSCRIBE.broadcastRenewedRoomForHomeUsers, ({ data }: { data: GameRoomDetail[] }) => {
      dispatch(updateAllRooms(data));
    });
  };

  const onAnnounceRoomUpdate = () => {
    on(SUBSCRIBE.announceRenewedRoomForRoomMembers, ({ room }: { room: GameRoomDetail }) => {
      dispatch(updateRoom(room));
    });
  };

  const emitUserLeaveRoom = () => {
    emit(PUBLISH.leaveGame);
  };

  const emitJoinRoom = (roomId: string) => {
    emit(PUBLISH.joinGame, { roomId });
  };

  return { onBroadcastWholeRooms, onAnnounceRoomUpdate, emitUserLeaveRoom, emitJoinRoom };
};

export default useGameSocket;
