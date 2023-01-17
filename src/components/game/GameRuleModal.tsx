import { useRef } from 'react';
import { createPortal } from 'react-dom';

import styled from 'styled-components';

import CloseModalIcon from '@assets/svg_closeModalIcon.svg';
import useClickAway from '@hooks/useClickAway';

const GameRuleModal = ({ visible, onClose }: { visible: boolean; onClose: () => void }) => {
  const ref = useRef(null);
  useClickAway(ref, () => onClose && onClose());
  const portalDiv = document.querySelector('#modal-root');

  if (!portalDiv) {
    return null;
  }
  return (
    <>
      {visible &&
        createPortal(
          <GameRuleModalLayout visible={visible}>
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
            ,
          </GameRuleModalLayout>,
          portalDiv,
        )}
    </>
  );
};

const GameRuleModalLayout = styled.div<{ visible: boolean }>`
  display: ${({ visible }) => (visible ? 'block' : 'none')};
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  transform: scale(${(props) => props.theme.layout.scale});
  left: 11.2%;
  bottom: 4%;
  z-index: 999;
`;

const ModalBox = styled.div`
  background-color: white;
  box-shadow: ${(props) => props.theme.boxShadows.boxShadow};
  width: 409px;
  height: 511px;
  position: relative;
  z-index: 20;
  margin: auto;
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

export default GameRuleModal;
