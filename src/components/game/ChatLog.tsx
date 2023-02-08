import React, { useEffect, useState } from 'react';

import styled from 'styled-components';

import useChatSocket from '@hooks/socket/useChatSocket';
import { useAppDispatch, useAppSelector } from '@redux/hooks';
import { clearChatList } from '@redux/modules/gameRoomSlice';

interface ChatColorType {
  notification: string;
  answer: string;
  chat: string;
  warning: string;
}

const ChatColor: ChatColorType = {
  notification: 'yellow',
  answer: 'green',
  chat: 'inherit',
  warning: 'red',
};

const ChatLog = () => {
  const { chatList } = useAppSelector((state) => state.gameRoom);
  const [chat, setChat] = useState<string>('');
  const dispatch = useAppDispatch();
  const { emitSendChat } = useChatSocket();

  useEffect(() => {
    return () => {
      dispatch(clearChatList());
    };
  }, []);

  const handleInputKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (!chat || e.key !== 'Enter' || e.nativeEvent.isComposing) {
      return;
    }
    emitSendChat(chat);
    setChat('');
  };

  return (
    <ChatLogLayout>
      <ChatBox>
        {chatList.map((chat, index) => (
          <Chat chatColor={ChatColor[chat.type]} key={index}>
            {chat.type === 'chat' ? chat.nickname + ': ' + chat.message : chat.message}
          </Chat>
        ))}
      </ChatBox>
      <ChatInput
        placeholder="TEXT ..."
        onKeyDown={handleInputKeyDown}
        onChange={(e) => setChat(e.target.value)}
        value={chat}
      />
    </ChatLogLayout>
  );
};

const ChatLogLayout = styled.div`
  height: 100%;
`;

const ChatBox = styled.div`
  font-size: 20px;
  color: ${(props) => props.theme.colors.lightGrey4};
  height: 401px;
  padding: 20px;
  margin-bottom: 2px;
  overflow-y: auto;
  display: flex;
  flex-direction: column-reverse;
  word-wrap: break-word;
  word-break: break-all;
  ::-webkit-scrollbar {
    width: 8px;
  }
  ::-webkit-scrollbar-thumb {
    background-color: ${(props) => props.theme.colors.lightGrey1};
  }
`;

const ChatInput = styled.input`
  font-size: 24px;
  background-color: ${(props) => props.theme.colors.lightGrey1};
  width: 100%;
  padding: 14px 0 11px 20px;
  color: ${(props) => props.theme.colors.ivory1};
  ::placeholder {
    color: ${(props) => props.theme.colors.ivory1};
  }
  :focus {
    outline: none;
  }
`;

const Chat = styled.p<{ chatColor: string }>`
  font-size: 18px;
  margin-top: 6px;
  color: ${(props) => props.chatColor};
`;

export default ChatLog;
