import { useEffect } from 'react';

import useChatSocket from '@hooks/socket/useChatSocket';

const ChatLog = () => {
  const { onUserConnected, onUserDisconnected, chatList } = useChatSocket();

  useEffect(() => {
    onUserConnected();
    onUserDisconnected();
  }, []);

  return (
    <div>
      {chatList.map((chat, i) => (
        <p key={i} style={{ color: chat.type === 'noti' ? 'red' : 'black' }}>
          {chat.nickname}: {chat.message}
        </p>
      ))}
    </div>
  );
};

export default ChatLog;
