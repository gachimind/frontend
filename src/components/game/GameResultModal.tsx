import styled from 'styled-components';

import Modal from '@components/common/Modal';

// TODO: SCORE 폰트가 만약 한번만 사용되면 구글 링크가 없는 관계로 이미지를 활용한다.
const GameResultModal = ({ visible, onClose }: { visible: boolean; onClose: () => void }) => {
  return (
    <Modal visible={visible} onClose={onClose} title="SCORE" width={640}>
      <GameResultModalLayout>
        <span>SCORE</span>
        <ResultBox>점수냥이</ResultBox>
        <ButtonBox>
          <button>나가기</button>
          <button>계속하기</button>
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
  gap: 20px;
  display: flex;
  justify-content: center;
  margin-top: 24px;
  button {
    font-family: inherit;
    font-size: 24px;
    color: ${(props) => props.theme.colors.ivory1};
    background-color: ${(props) => props.theme.colors.darkGrey1};
    width: 200px;
    height: 56px;
  }
`;

export default GameResultModal;
