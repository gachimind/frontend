import { useRef } from 'react';

import styled from 'styled-components';

import CloseModalIcon from '@assets/svg_closeModalIcon.svg';
import useClickAway from '@hooks/useClickAway';

const GameRuleToolTip = ({ visible, onClose }: { visible: boolean; onClose: () => void }) => {
  const ref = useRef(null);
  useClickAway(ref, () => onClose && onClose());

  return (
    <>
      {visible && (
        <GameRuleToolTipLayout visible={visible}>
          <ModalBox ref={ref}>
            <ModalHeader>
              GAME RULE
              <ModalCloseButton onClick={() => onClose && onClose()}>
                <img src={CloseModalIcon} />
              </ModalCloseButton>
            </ModalHeader>
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
          </ModalBox>
        </GameRuleToolTipLayout>
      )}
    </>
  );
};

const GameRuleToolTipLayout = styled.div<{ visible: boolean }>`
  display: ${({ visible }) => (visible ? 'block' : 'none')};
  position: absolute;
  width: 1760px;
  height: 928px;
  left: 0;
  bottom: 0;
  right: 0;
  top: 0;
  margin: auto;
`;

const ModalBox = styled.div`
  background-color: white;
  box-shadow: ${(props) => props.theme.boxShadows.boxShadow1};
  position: absolute;
  width: 409px;
  height: 550px;
  left: 148px;
  bottom: 510px;
`;

const ModalHeader = styled.div`
  position: relative;
  font-family: ${(props) => props.theme.font.joystick};
  font-size: 24px;
  color: ${(props) => props.theme.colors.ivory1};
  height: 48px;
  background-color: ${(props) => props.theme.colors.darkGrey1};
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalCloseButton = styled.button`
  position: absolute;
  font-size: inherit;
  color: inherit;
  background-color: transparent;
  right: 27px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const RuleBox = styled.div`
  padding: 30px 40px;
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
