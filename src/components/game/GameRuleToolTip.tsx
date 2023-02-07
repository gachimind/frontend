import styled from 'styled-components';

import Modal from '@components/common/Modal';

const GameRuleToolTip = ({ visible, onClose }: { visible: boolean; onClose: () => void }) => {
  return (
    <Modal
      visible={visible}
      onClose={onClose}
      title="GAME RULE"
      width={409}
      modalName="GameRuleToolTip"
      hasBackgroundShadow={false}
      isBackgroundClickEventDisabled={false}
    >
      <RuleBox>
        <ul>
          <li>1. 본 게임은 개발자 모의 면접 준비를 위한 게임입니다</li>
          <br />
          <li>2. 참가자들은 차례를 돌아가며 키워드를 설명합니다</li>
          <br />
          <li>3. 발표자 외 참가자는 채팅창에 키워드를 입력해 정답을 맞춥니다</li>
          <br />
          <li>4. 토론 시간동안 채팅창에 발표자의 발표 점수를 책정합니다</li>
          <br />
          <li>5. 마이페이지에서 내가 푼 키워드를 확인할 수 있습니다</li>
        </ul>
      </RuleBox>
    </Modal>
  );
};

const RuleBox = styled.div`
  padding: 30px 40px;
  background-color: white;
  ul {
    font-family: ${(props) => props.theme.font.notoSansKR};
    font-size: 24px;
    list-style: none;
  }
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default GameRuleToolTip;
