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
              HELP
              <ModalCloseButton onClick={() => onClose && onClose()}>
                <img src={CloseModalIcon} />
              </ModalCloseButton>
            </ModalHeader>
            <RuleBox>
              <ul>
                <label>게임 규칙</label>
                <li className="first-rule">1. 발표자와 . . .</li>
                <li>2. 참여자는 . . .</li>
                <li>3. </li>
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
  box-shadow: ${(props) => props.theme.boxShadows.boxShadow2};
  position: absolute;
  width: 409px;
  height: 511px;
  left: 148px;
  bottom: 88px;
`;

const ModalHeader = styled.div`
  position: relative;
  font-size: 24px;
  color: ${(props) => props.theme.colors.ivory1};
  height: 48px;
  background-color: ${(props) => props.theme.colors.darkGrey1};
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalCloseButton = styled.button`
  cursor: pointer;
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
  padding: 40px 70px;
  ul {
    font-family: ${(props) => props.theme.font.korean};
    font-size: 24px;
    list-style: none;
    label {
      font-family: inherit;
      font-size: inherit;
    }
    li {
      font-family: inherit;
      font-size: inherit;
    }
    .first-rule {
      padding-top: 24px;
    }
  }
`;

export default GameRuleToolTip;
