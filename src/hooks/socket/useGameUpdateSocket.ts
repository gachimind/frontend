import { SUBSCRIBE } from '@constants/socket';
import useWebRTC from '@hooks/useWebRTC';
import { useAppDispatch } from '@redux/hooks';
import { clearAllGamePlayState, setPlayState } from '@redux/modules/gamePlaySlice';
import { addChat, updateRoom } from '@redux/modules/gameRoomSlice';
import { removePlayerStreamById, setPlayerList } from '@redux/modules/playerMediaSlice';

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
    return event === 'enter' || event === 'leave';
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
          event: 'enter' | 'leave' | 'ready' | 'start' | 'game-end';
        };
      }) => {
        if (data.event === 'game-end') {
          dispatch(updateRoom(data.room));
          if (data.room.participants.length === 1) {
            dispatch(
              setPlayState({
                event: 'gameEnd',
                timer: 1000,
              }),
            );
            setTimeout(() => {
              dispatch(clearAllGamePlayState());
            }, 1500);
          }
          return;
        }
        const { nickname, socketId, userId } = data.eventUserInfo;
        dispatch(updateRoom(data.room));
        if (data.event === 'enter' || data.event === 'leave') {
          dispatch(
            setPlayerList(
              data.room.participants.map((participant) => {
                return { ...participant, audio: participant.audio ?? true, video: participant.video ?? true };
              }),
            ),
          );
        }
        if (data.event === 'leave') {
          dispatch(removePlayerStreamById(socketId));
        }
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
              message: InOutEventMessageType[data.event as 'enter' | 'leave'],
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

  const offAnnounceRoomUpdate = () => {
    off(SUBSCRIBE.announceRenewedRoomForRoomMembers);
  };

  return { onAnnounceRoomUpdate, offAnnounceRoomUpdate };
};

export default useGameUpdateSocket;
