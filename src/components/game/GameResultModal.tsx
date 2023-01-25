import { useNavigate } from 'react-router-dom';

import styled from 'styled-components';

import Button from '@components/common/Button';
import Modal from '@components/common/Modal';

// TODO: SCORE 폰트가 만약 한번만 사용되면 구글 링크가 없는 관계로 이미지를 활용한다.
const GameResultModal = ({ visible, onClose }: { visible: boolean; onClose: () => void }) => {
  const navigate = useNavigate();
  return (
    <Modal visible={visible} onClose={onClose} title="SCORE" width={640}>
      <GameResultModalLayout>
        <span>SCORE</span>
        <ResultBox>점수냥이</ResultBox>
        <ButtonBox>
          <LeaveRoomButton onClick={() => navigate('/', { replace: true })}>나가기</LeaveRoomButton>
          <ContinueGameButton onClick={onClose}>계속하기</ContinueGameButton>
        </ButtonBox>
      </GameResultModalLayout>
    </Modal>
  );
};

// TODO: 임시 색상으로 추후 변경되어야 한다.
const GameResultModalLayout = styled.div`
  padding: 78px 54px 56px 54px;
  gap: 32px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  span {
    font-size: 32px;
  }
`;

const ResultBox = styled.div`
  background-color: ${(props) => props.theme.colors.ivory1};
  width: 532px;
  height: 400px;
`;

const ButtonBox = styled.div`
  font-family: inherit;
  gap: 24px;
  display: flex;
  justify-content: center;
  margin-top: 24px;
`;

const LeaveRoomButton = styled(Button)`
  font-size: 24px;
  width: 250px;
  height: 72px;
`;

const ContinueGameButton = styled(Button)`
  font-size: 24px;
  background-color: ${(props) => props.theme.colors.purple1};
  width: 250px;
  height: 72px;
`;

export default GameResultModal;
