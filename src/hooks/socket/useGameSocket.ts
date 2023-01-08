import { NavigateFunction } from 'react-router-dom';

import { PUBLISH, SUBSCRIBE } from '@constants/socket';
import { useAppDispatch } from '@redux/hooks';
import { updateAllRooms, updateRoom } from '@redux/modules/gameRoomSlice';

import { GameRoomCreateRequest, GameRoomDetail } from '@customTypes/gameRoomType';

import socketInstance from './socketInstance';

interface UseGameSocketType {
  onBroadcastWholeRooms: () => void;
  onAnnounceRoomUpdate: () => void;
  onShowCreatedRoomId: (navigate: NavigateFunction, path: string) => void;
  emitUserLeaveRoom: () => void;
  emitJoinRoom: (roomId: string) => void;
  emitCreateRoom: (createRoom: GameRoomCreateRequest) => void;
}

const useGameSocket = (): UseGameSocketType => {
  const { on, emit } = socketInstance;
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

  const onShowCreatedRoomId = (navigate: NavigateFunction, path: string) => {
    on(SUBSCRIBE.showCreatedRoomIdForOwner, ({ roomId }: { roomId: string }) => {
      navigate(path + roomId);
    });
  };

  const emitUserLeaveRoom = () => {
    emit(PUBLISH.leaveGame);
  };

  const emitJoinRoom = (roomId: string) => {
    emit(PUBLISH.joinGame, { roomId });
  };

  const emitCreateRoom = (createRoom: GameRoomCreateRequest) => {
    emit(PUBLISH.createGame, createRoom);
  };

  return {
    onBroadcastWholeRooms,
    onAnnounceRoomUpdate,
    onShowCreatedRoomId,
    emitUserLeaveRoom,
    emitJoinRoom,
    emitCreateRoom,
  };
};

export default useGameSocket;
