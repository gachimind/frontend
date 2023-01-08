import { useState } from 'react';

import { SUBSCRIBE } from '@constants/socket';

import { Chat } from '@customTypes/chatType';
import { Participant } from '@customTypes/gameRoomType';

import socketInstance from './socketInstance';

const useChatSocket = () => {
  const [chatList, setChatList] = useState<Chat[]>([]);
  const { on } = socketInstance;

  function sendMessage(chat: Chat) {
    setChatList((prev) => prev.concat(chat));
  }

  const onUserDisconnected = () => {
    on(SUBSCRIBE.showDisconnectedRoomMember, ({ user }: { user: Participant }) => {
      sendMessage({
        message: '방을 떠났다..',
        type: 'noti',
        nickname: user.nickname,
      });
    });
  };

  const onUserConnected = () => {
    on(SUBSCRIBE.showConnectedRoomMember, ({ user }: { user: Participant }) => {
      sendMessage({
        message: '방을 드러왔다.',
        type: 'noti',
        nickname: user.nickname,
      });
    });
  };

  return { onUserConnected, onUserDisconnected, chatList };
};

export default useChatSocket;
