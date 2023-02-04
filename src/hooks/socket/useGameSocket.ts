import { NavigateFunction } from 'react-router-dom';

import { PUBLISH, SUBSCRIBE } from '@constants/socket';
import { useAppDispatch } from '@redux/hooks';
import { setLastEnteredRoom } from '@redux/modules/gameRoomSlice';

import { CreateRoomRequest, EnterRoomRequest } from '@customTypes/socketType';

import socketInstance from './socketInstance';

interface UseGameSocketType {
  onShowCreatedRoomId: (navigate: NavigateFunction, path: string, password?: string) => void;
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

  const onShowCreatedRoomId = (navigate: NavigateFunction, path: string, password?: string) => {
    on(SUBSCRIBE.showCreatedRoomIdForOwner, async ({ data }: { data: { roomId: string } }) => {
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
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    on(PUBLISH.joinGame, () => {});
  };

  const emitUserLeaveRoom = () => {
    emit(PUBLISH.leaveGame);
  };

  const emitJoinRoom = ({ roomId, roomPassword }: EnterRoomRequest) => {
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
