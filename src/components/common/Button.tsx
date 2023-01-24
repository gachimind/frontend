import styled from 'styled-components';

const Button = ({ ...props }: React.ButtonHTMLAttributes<HTMLButtonElement>) => {
  return <ButtonLayout {...props}></ButtonLayout>;
};

const ButtonLayout = styled.button`
  cursor: pointer;
  color: ${(props) => props.theme.colors.ivory2};
  text-shadow: ${(props) => props.theme.textShadow.textShadow1};
  background-color: ${(props) => props.theme.colors.darkGrey2};
  border-top: ${(props) => props.theme.borders.normalWhite};
  border-right: ${(props) => props.theme.borders.normalBlack};
  border-bottom: ${(props) => props.theme.borders.normalBlack};
  border-left: ${(props) => props.theme.borders.normalWhite};
`;

export default Button;
