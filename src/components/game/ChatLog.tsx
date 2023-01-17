import styled from 'styled-components';

const ChatLog = () => {
  return (
    <ChatLogLayout>
      <ChatBox>
        <p>ANSWER 1</p>
        <p>ANSWER 2</p>
      </ChatBox>
      <ChatInput placeholder="| TEXT ..." />
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
  overflow-y: auto;
  display: flex;
  flex-direction: column-reverse;
`;

const ChatInput = styled.input`
  font-size: 18px;
  background-color: ${(props) => props.theme.colors.lightGrey1};
  width: 100%;
  padding: 14px 0 11px 20px;
  color: ${(props) => props.theme.colors.ivory1};
  ::placeholder {
    color: ${(props) => props.theme.colors.ivory1};
    opacity: 0.6;
  }
  :focus {
    outline: none;
  }
`;

export default ChatLog;
