import { NavigateFunction } from 'react-router-dom';

import { PUBLISH, SUBSCRIBE } from '@constants/socket';
import useLocalStream from '@hooks/useLocalStream';

import { CreateRoomRequest, EnterRoomRequest } from '@customTypes/socketType';

import socketInstance from './socketInstance';

interface UseGameSocketType {
  onBroadcastWholeRooms: () => void;
  onShowCreatedRoomId: (navigate: NavigateFunction, path: string) => void;
  onJoinRoom: () => void;
  emitUserLeaveRoom: () => void;
  emitJoinRoom: ({ roomId, roomPassword }: EnterRoomRequest) => void;
  emitCreateRoom: (createRoom: CreateRoomRequest) => void;
}

const useGameSocket = (): UseGameSocketType => {
  const { on, emit } = socketInstance;
  const { initLocalStream } = useLocalStream();

  const onBroadcastWholeRooms = () => {
    //
  };

  const onShowCreatedRoomId = (navigate: NavigateFunction, path: string) => {
    on(SUBSCRIBE.showCreatedRoomIdForOwner, async ({ data }: { data: { roomId: string } }) => {
      console.log('[on] create-room');
      await initLocalStream();
      navigate(path + data.roomId);
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

  return {
    onBroadcastWholeRooms,
    onShowCreatedRoomId,
    onJoinRoom,
    emitUserLeaveRoom,
    emitJoinRoom,
    emitCreateRoom,
  };
};

export default useGameSocket;
