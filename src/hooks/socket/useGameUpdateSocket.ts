import { useEffect } from 'react';

import { SUBSCRIBE } from '@constants/socket';
import useWebRTC from '@hooks/useWebRTC';
import { useAppDispatch } from '@redux/hooks';
import { updateRoom } from '@redux/modules/gameRoomSlice';
import { setPlayerList } from '@redux/modules/playerMediaSlice';

import { GameRoomDetail } from '@customTypes/gameRoomType';

import socketInstance from './socketInstance';

const useGameUpdateSocket = () => {
  const dispatch = useAppDispatch();
  const { createOffers } = useWebRTC();
  const { on, off } = socketInstance;

  const onAnnounceRoomUpdate = () => {
    on(
      SUBSCRIBE.announceRenewedRoomForRoomMembers,
      ({ data }: { data: { room: GameRoomDetail; eventUserInfo: { socketId: string; isEnterEvent: boolean } } }) => {
        dispatch(updateRoom(data.room));
        dispatch(setPlayerList(data.room.participants));
        const mySocketId = socketInstance.socketInstance.id;
        if (mySocketId !== data.eventUserInfo.socketId) {
          const participantsFilteredMe = data.room.participants.filter(
            (participant) => participant.socketId !== mySocketId,
          );
          participantsFilteredMe.forEach((participant) => {
            createOffers(participant.socketId);
          });
        }
      },
    );
  };

  useEffect(() => {
    return () => {
      console.log('[on] update-room');
      off(SUBSCRIBE.announceRenewedRoomForRoomMembers);
    };
  }, []);

  return { onAnnounceRoomUpdate };
};

export default useGameUpdateSocket;
