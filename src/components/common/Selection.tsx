import { useRef, useState } from 'react';

import styled from 'styled-components';

import SelectIcon from '@assets/svg_selectIcon.svg';
import useClickAway from '@hooks/useClickAway';

interface SelectionProps {
  width?: number;
  options: Array<{ value: string; label: string }>;
  setValue: React.Dispatch<React.SetStateAction<any>>;
}

const Selection = ({ width, options, setValue }: SelectionProps) => {
  const ref = useRef(null);
  useClickAway(ref, () => setShowOptions(false));

  const [currentValue, setCurrentValue] = useState(options[0]?.value);
  const [showOptions, setShowOptions] = useState(false);

  return (
    <SelectBox ref={ref} onClick={() => setShowOptions((prev) => !prev)}>
      <img src={SelectIcon}></img>
      <label>{currentValue}</label>
      <SelectOptions show={showOptions} width={width}>
        {options?.map((option) => (
          <Option
            key={option.label}
            value={option.value}
            onClick={() => {
              const value = option.value;
              setCurrentValue(value);
              setValue(value);
            }}
            width={width}
          >
            {option.label}
          </Option>
        ))}
      </SelectOptions>
    </SelectBox>
  );
};

const SelectBox = styled.div`
  cursor: pointer;
  position: relative;
  background-color: ${(props) => props.theme.colors.darkGrey2};
  height: 56px;
  padding-left: 20px;
  display: flex;
  justify-content: center;
  align-items: center;

  border-top: ${(props) => props.theme.borders.normalBlack};
  border-right: ${(props) => props.theme.borders.normalWhite};
  border-bottom: ${(props) => props.theme.borders.normalWhite};
  border-left: ${(props) => props.theme.borders.normalBlack};

  img {
    position: absolute;
    right: 17px;
  }

  label {
    font-family: inherit;
    font-size: 24px;
    color: ${(props) => props.theme.colors.ivory2};
    justify-content: center;
  }
`;

const SelectOptions = styled.ul<{ show: boolean; width?: number }>`
  position: absolute;
  z-index: 998;
  font-family: inherit;
  color: ${(props) => props.theme.colors.ivory2};
  background-color: ${(props) => props.theme.colors.darkGrey2};
  top: -4px;
  left: -4px;
  display: ${(props) => (props.show ? 'block' : 'none')};
  overflow: hidden;

  border-top: ${(props) => props.theme.borders.normalBlack};
  border-right: ${(props) => props.theme.borders.normalWhite};
  border-bottom: ${(props) => props.theme.borders.normalWhite};
  border-left: ${(props) => props.theme.borders.normalBlack};
`;

const Option = styled.li<{ width?: number }>`
  z-index: 999;
  font-family: inherit;
  font-size: 24px;
  border-bottom: 1px solid ${(props) => props.theme.colors.darkGrey3};
  width: ${(props) => (props.width ? props.width - 14 : 406)}px;
  height: 56px;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: background-color 0.2s ease-in;

  &:hover {
    background-color: ${(props) => props.theme.colors.black2};
  }
`;

export default Selection;
