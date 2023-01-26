import { NavigateFunction } from 'react-router-dom';

import { PUBLISH, SUBSCRIBE } from '@constants/socket';
import { useAppDispatch } from '@redux/hooks';
import { setLastEnteredRoom } from '@redux/modules/gameRoomSlice';

import { CreateRoomRequest, EnterRoomRequest } from '@customTypes/socketType';

import socketInstance from './socketInstance';

interface UseGameSocketType {
  onShowCreatedRoomId: (navigate: NavigateFunction, path: string, password?: number) => void;
  onJoinRoom: () => void;
  onValidRoomPassword: (callback: () => void) => void;
  emitUserLeaveRoom: () => void;
  emitJoinRoom: ({ roomId, roomPassword }: EnterRoomRequest) => void;
  emitCreateRoom: (createRoom: CreateRoomRequest) => void;
  emitValidRoomPassword: (roomId: number, roomPassword: number) => void;
}

const useGameSocket = (): UseGameSocketType => {
  const { on, emit } = socketInstance;
  const dispatch = useAppDispatch();

  const onShowCreatedRoomId = (navigate: NavigateFunction, path: string, password?: number) => {
    on(SUBSCRIBE.showCreatedRoomIdForOwner, async ({ data }: { data: { roomId: string } }) => {
      console.log('[on] create-room');
      dispatch(
        setLastEnteredRoom({
          roomId: data.roomId,
          password: password,
        }),
      );
      navigate(path + data.roomId);
    });
  };

  const onValidRoomPassword = (callback: () => void) => {
    on(SUBSCRIBE.validRoomPassword, () => {
      callback();
    });
  };

  const onJoinRoom = () => {
    on(PUBLISH.joinGame, (data) => {
      console.log('[on] join-room');
      console.log(data);
    });
  };

  const emitUserLeaveRoom = () => {
    emit(PUBLISH.leaveGame);
  };

  const emitJoinRoom = ({ roomId, roomPassword }: EnterRoomRequest) => {
    console.log('[emit] enter-room');
    emit(PUBLISH.joinGame, { data: { roomId, roomPassword } });
  };

  const emitCreateRoom = (createRoom: CreateRoomRequest) => {
    emit(PUBLISH.createGame, { data: createRoom });
  };

  const emitValidRoomPassword = (roomId: number, password: number) => {
    emit(PUBLISH.validRoomPassword, { data: { roomId, password } });
  };

  return {
    onShowCreatedRoomId,
    onJoinRoom,
    onValidRoomPassword,
    emitUserLeaveRoom,
    emitJoinRoom,
    emitCreateRoom,
    emitValidRoomPassword,
  };
};

export default useGameSocket;
