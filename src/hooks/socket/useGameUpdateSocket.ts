import { useEffect } from 'react';

import { SUBSCRIBE } from '@constants/socket';
import useWebRTC from '@hooks/useWebRTC';
import { useAppDispatch } from '@redux/hooks';
import { addChat, updateRoom } from '@redux/modules/gameRoomSlice';
import { setPlayerList } from '@redux/modules/playerMediaSlice';

import { GameRoomDetail } from '@customTypes/gameRoomType';
import { EventUserInfo } from '@customTypes/socketType';

import socketInstance from './socketInstance';

interface InOutEventMessageType {
  enter: string;
  leave: string;
  'leave-force': string;
}

const useGameUpdateSocket = () => {
  const dispatch = useAppDispatch();
  const { createOffers } = useWebRTC();
  const { on, off } = socketInstance;

  function isInOutEvent(event: string) {
    return event === 'enter' || event === 'leave' || event === 'leave-force';
  }

  const onAnnounceRoomUpdate = () => {
    on(
      SUBSCRIBE.announceRenewedRoomForRoomMembers,
      ({
        data,
      }: {
        data: {
          room: GameRoomDetail;
          eventUserInfo: EventUserInfo;
          event: 'enter' | 'leave' | 'leave-force' | 'ready' | 'start';
        };
      }) => {
        console.log('[on] update-room');
        const { nickname, socketId, userId } = data.eventUserInfo;
        dispatch(updateRoom(data.room));
        dispatch(setPlayerList(data.room.participants));
        if (isInOutEvent(data.event)) {
          const InOutEventMessageType: InOutEventMessageType = {
            enter: `'${nickname}'님이 입장하셨습니다.`,
            leave: `'${nickname}'님이 떠나갔습니다..`,
            'leave-force': `'${nickname}'님이 퇴장당하셨습니다.`,
          };
          dispatch(
            addChat({
              nickname: '알림',
              userId,
              socketId,
              message: InOutEventMessageType[data.event as 'enter' | 'leave' | 'leave-force'],
              type: 'notification',
            }),
          );
        }
        const mySocketId = socketInstance.socketInstance.id;
        if (mySocketId !== socketId) {
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
      off(SUBSCRIBE.announceRenewedRoomForRoomMembers);
    };
  }, []);

  return { onAnnounceRoomUpdate };
};

export default useGameUpdateSocket;
