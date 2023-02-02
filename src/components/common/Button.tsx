import styled from 'styled-components';

const Button = ({ ...props }: React.ButtonHTMLAttributes<HTMLButtonElement>) => {
  return <ButtonLayout {...props}></ButtonLayout>;
};

const ButtonLayout = styled.button`
  color: ${(props) => props.theme.colors.ivory2};
  text-shadow: ${(props) => props.theme.textShadow.textShadow1};
  background-color: ${(props) => props.theme.colors.darkGrey2};
  ${(props) => props.theme.borders.topLeftWhiteBorder}
  display: flex;
  justify-content: center;
  align-items: center;

  :focus {
    background-color: ${(props) => props.theme.colors.purple1};
    ${(props) => props.theme.borders.bottomRightWhiteBorder}
  }
`;

export default Button;
