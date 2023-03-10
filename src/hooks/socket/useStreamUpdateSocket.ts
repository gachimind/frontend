import { PUBLISH, SUBSCRIBE } from '@constants/socket';
import { useAppDispatch, useAppSelector } from '@redux/hooks';
import { setPlayerList } from '@redux/modules/playerMediaSlice';

import socketInstance from './socketInstance';

export interface OnUpdateUserStreamProps {
  socketId: string;
  audio: boolean;
  video: boolean;
}

export interface EmitUpdateUserStreamProps {
  audio?: boolean;
  video?: boolean;
}

const useStreamUpdateSocket = () => {
  const { on, off, emit } = socketInstance;
  const dispatch = useAppDispatch();
  const { userCam, userMic } = useAppSelector((state) => state.userMedia);
  const { playerList } = useAppSelector((state) => state.playerMedia);

  const emitUpdateUserStream = (values: EmitUpdateUserStreamProps) => {
    emit(PUBLISH.updateUserStream, {
      data: {
        video: values?.video ?? userCam,
        audio: values?.audio ?? userMic,
      },
    });
  };

  const onUpdateUserStream = () => {
    on(SUBSCRIBE.updateUserStream, ({ data }: { data: OnUpdateUserStreamProps }) => {
      const updatedPlayerList = [...playerList].map((player) =>
        data.socketId === player.socketId ? { ...player, audio: data.audio, video: data.video } : player,
      );
      dispatch(setPlayerList(updatedPlayerList));
    });
  };

  const offUpdateUserStream = () => {
    off(SUBSCRIBE.updateUserStream);
  };

  return { emitUpdateUserStream, onUpdateUserStream, offUpdateUserStream };
};

export default useStreamUpdateSocket;
