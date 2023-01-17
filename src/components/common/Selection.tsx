import { useRef, useState } from 'react';

import styled from 'styled-components';

import SelectIcon from '@assets/svg_selectIcon.svg';
import useClickAway from '@hooks/useClickAway';

const Selection = ({ options }: { options: Array<{ value: string; label: string }> }) => {
  const ref = useRef(null);
  useClickAway(ref, () => setShowOptions(false));

  const [currentValue, setCurrentValue] = useState(options[0]?.label);
  const [showOptions, setShowOptions] = useState(false);

  return (
    <SelectBox onClick={() => setShowOptions((prev) => !prev)}>
      <img src={SelectIcon}></img>
      <label>{currentValue}</label>
      <SelectOptions ref={ref} show={showOptions}>
        {options?.map((option) => (
          <Option key={option.value} value={option.label} onClick={() => setCurrentValue(option.label)}>
            {option.label}
          </Option>
        ))}
      </SelectOptions>
    </SelectBox>
  );
};

// TODO: 임시 스타일링으로 추후 수정되어야 한다.
const SelectBox = styled.div`
  cursor: pointer;
  position: relative;
  font-family: ${(props) => props.theme.font.korean};
  background-color: ${(props) => props.theme.colors.ivory1};
  height: 56px;
  padding-left: 20px;
  display: flex;
  align-items: center;

  img {
    position: absolute;
    right: 17px;
  }

  label {
    font-family: inherit;
    font-size: 24px;
  }
`;

const SelectOptions = styled.ul<{ show: boolean }>`
  position: absolute;
  z-index: 998;
  font-family: inherit;
  color: #fefefe;
  background-color: #222222;
  max-height: ${(props) => (props.show ? 'none' : '0')};
  top: 56px;
  left: 0;
  overflow: hidden;
`;

const Option = styled.li`
  z-index: 999;
  font-family: inherit;
  font-size: 24px;
  width: 420px;
  height: 56px;
  padding-left: 20px;
  display: flex;
  align-items: center;
  transition: background-color 0.2s ease-in;

  &:hover {
    background-color: #595959;
  }
`;

export default Selection;
