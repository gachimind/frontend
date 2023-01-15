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
  height: 92.1%;
  display: grid;
  grid-template-rows: 7fr 1fr;
`;

const ChatBox = styled.div`
  font-size: 24px;
  color: ${(props) => props.theme.colors.chatBoxFont};
  padding: 20px;
`;

const ChatInput = styled.input`
  background-color: ${(props) => props.theme.colors.footer};
  padding-top: 7px;
  padding-left: 20px;
  ::placeholder {
    color: ${(props) => props.theme.colors.outline};
    font-size: 24px;
  }
`;

export default ChatLog;
