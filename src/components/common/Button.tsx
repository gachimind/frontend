import styled from 'styled-components';

import cursorIcon from '@assets/svg_cursorIcon.svg';

const Button = ({ ...props }: React.ButtonHTMLAttributes<HTMLButtonElement>) => {
  return <ButtonLayout {...props}></ButtonLayout>;
};

const ButtonLayout = styled.button`
  cursor: url(${cursorIcon}), pointer;
  color: ${(props) => props.theme.colors.ivory2};
  text-shadow: ${(props) => props.theme.textShadow.textShadow1};
  background-color: ${(props) => props.theme.colors.darkGrey2};
  ${(props) => props.theme.borders.topLeftWhiteBorder}
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default Button;
