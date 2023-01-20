import styled from 'styled-components';

const Input = ({ ...props }: React.InputHTMLAttributes<HTMLInputElement>) => {
  return <InputLayout {...props} />;
};

const InputLayout = styled.input`
  font-family: inherit;
  font-size: 24px;
  color: ${(props) => props.theme.colors.ivory2};

  background-color: ${(props) => props.theme.colors.darkGrey2};
  height: 56px;
  text-align: center;

  border-top: ${(props) => props.theme.borders.normalblack};
  border-right: ${(props) => props.theme.borders.normalwhite};
  border-bottom: ${(props) => props.theme.borders.normalwhite};
  border-left: ${(props) => props.theme.borders.normalblack};

  :focus {
    outline: none;
  }

  ::placeholder {
    color: transparent;
  }
`;

export default Input;