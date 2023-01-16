import React, { useState } from 'react';

import styled from 'styled-components';

import useChatSocket from '@hooks/socket/useChatSocket';
import { useAppSelector } from '@redux/hooks';

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
  const { emitSendChat } = useChatSocket();

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
  display: flex;
  flex-direction: column-reverse;
  height: 401px;
  overflow-y: auto;
  font-size: 20px;
  color: ${(props) => props.theme.colors.chatBoxFont};
  padding: 20px;
`;

const ChatInput = styled.input`
  background-color: ${(props) => props.theme.colors.footer};
  padding: 14px 0 11px 20px;
  font-size: 18px;
  width: 100%;
  color: ${(props) => props.theme.colors.outline};
  ::placeholder {
    color: ${(props) => props.theme.colors.outline};
    opacity: 0.6;
  }
  :focus {
    outline: none;
  }
`;

// TODO: 폰트 변경할 것
const Chat = styled.p<{ chatColor: string }>`
  font-size: 15px;
  margin-top: 6px;
  color: ${(props) => props.chatColor};
`;

export default ChatLog;
