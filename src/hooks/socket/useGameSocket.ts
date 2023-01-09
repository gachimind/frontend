import { NavigateFunction } from 'react-router-dom';

import { PUBLISH, SUBSCRIBE } from '@constants/socket';
import { useAppDispatch } from '@redux/hooks';
import { updateRoom } from '@redux/modules/gameRoomSlice';

import { GameRoomDetail } from '@customTypes/gameRoomType';
import { CreateRoomRequest } from '@customTypes/socketType';

import socketInstance from './socketInstance';

interface UseGameSocketType {
  onBroadcastWholeRooms: () => void;
  onAnnounceRoomUpdate: () => void;
  onShowCreatedRoomId: (navigate: NavigateFunction, path: string) => void;
  emitUserLeaveRoom: () => void;
  emitJoinRoom: (roomId: string) => void;
  emitCreateRoom: (createRoom: CreateRoomRequest) => void;
}

const useGameSocket = (): UseGameSocketType => {
  const { on, emit } = socketInstance;
  const dispatch = useAppDispatch();

  const onBroadcastWholeRooms = () => {
    //
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

  const emitCreateRoom = (createRoom: CreateRoomRequest) => {
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
