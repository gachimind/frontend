import styled from 'styled-components';

const Input = ({ ...props }: React.InputHTMLAttributes<HTMLInputElement>) => {
  return <InputLayout {...props} />;
};

const InputLayout = styled.input`
  font-family: inherit;
  font-size: 24px;
  color: ${(props) => props.theme.colors.white1};
  background-color: ${(props) => props.theme.colors.darkGrey2};
  height: 56px;
  text-align: center;
  ${(props) => props.theme.borders.bottomRightNormal1}

  :focus {
    outline: none;
  }

  ::placeholder {
    color: transparent;
  }
`;

export default Input;
