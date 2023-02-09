import styled from 'styled-components';

import buttonSound from '@assets/sounds/button.wav';
import useSound from '@hooks/useSound';

const Button = ({ ...props }: React.ButtonHTMLAttributes<HTMLButtonElement>) => {
  const { playSound } = useSound();

  return (
    <ButtonLayout
      {...props}
      onClick={(e) => {
        if (props.onClick) {
          playSound(buttonSound, 0.1);
          props?.onClick?.(e);
        }
      }}
    ></ButtonLayout>
  );
};

const ButtonLayout = styled.button`
  color: ${(props) => props.theme.colors.white1};
  text-shadow: ${(props) => props.theme.textShadow.textShadow1};
  background-color: ${(props) => props.theme.colors.darkGrey2};
  ${(props) => props.theme.borders.topLeftNormal1}
  display: flex;
  justify-content: center;
  align-items: center;

  :active:hover {
    background-color: ${(props) => props.theme.colors.purple1};
    ${(props) => props.theme.borders.bottomRightNormal1}
  }

  :hover {
    background-color: ${(props) => props.theme.colors.lightGrey10};
  }
`;

export default Button;
