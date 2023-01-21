import React, { useEffect, useState } from 'react';

import styled from 'styled-components';

import useChatSocket from '@hooks/socket/useChatSocket';
import { useAppDispatch, useAppSelector } from '@redux/hooks';
import { clearChatList } from '@redux/modules/gameRoomSlice';

// TODO: 색상 변경할 것
interface ChatColorType {
  notification: string;
  answer: string;
  chat: string;
}

const ChatColor: ChatColorType = {
  notification: 'yellow',
  answer: 'green',
  chat: 'inherit',
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
    if (!chat) {
      return;
    }
    if (e.key === 'Enter') {
      emitSendChat(chat);
      setChat('');
    }
  };

  return (
    <ChatLogLayout>
      <ChatBox>
        {chatList.map((chat, index) => (
          <Chat chatColor={ChatColor[chat.type]} key={index}>
            {chat.nickname}: {chat.message}
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

// TODO: 스크롤 스타일링
const ChatBox = styled.div`
  font-size: 20px;
  color: ${(props) => props.theme.colors.lightGrey4};
  height: 401px;
  padding: 20px;
  overflow-y: auto;
  display: flex;
  flex-direction: column-reverse;
`;

const ChatInput = styled.input`
  font-family: ${(props) => props.theme.font.korean};
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
  font-family: ${(props) => props.theme.font.korean};
  font-size: 18px;
  margin-top: 6px;
  color: ${(props) => props.chatColor};
`;

export default ChatLog;
