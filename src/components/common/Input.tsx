import styled from 'styled-components';

const Input = ({ ...props }: React.InputHTMLAttributes<HTMLInputElement>) => {
  return <InputLayout {...props} />;
};

const InputLayout = styled.input`
  font-family: inherit;
  font-size: 24px;
  padding: 6px 20px;
  background-color: ${(props) => props.theme.colors.ivory1};
  height: 56px;
`;

export default Input;
