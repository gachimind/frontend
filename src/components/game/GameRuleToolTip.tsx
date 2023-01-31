import { useRef } from 'react';

import styled from 'styled-components';

import CloseModalIcon from '@assets/svg_closeModalIcon.svg';
import cursorIcon from '@assets/svg_cursorIcon.svg';
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
                <li>게임 규칙</li>
                <br />
                <li>1. 발표자와 . . .</li>
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
  box-shadow: ${(props) => props.theme.boxShadows.boxShadow1};
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
  cursor: url(${cursorIcon}), pointer;
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
    font-size: 24px;
    list-style: none;
  }
`;

export default GameRuleToolTip;
