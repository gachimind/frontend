import styled from 'styled-components';

const Button = ({ ...props }: React.ButtonHTMLAttributes<HTMLButtonElement>) => {
  return <ButtonLayout {...props}></ButtonLayout>;
};

const ButtonLayout = styled.button`
  cursor: pointer;
  color: ${(props) => props.theme.colors.ivory2};
  text-shadow: ${(props) => props.theme.textShadow.textShadow1};
  background-color: ${(props) => props.theme.colors.darkGrey2};
  ${(props) => props.theme.borders.topLeftWhiteBorder}
`;

export default Button;