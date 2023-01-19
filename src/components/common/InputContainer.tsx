import styled from 'styled-components';

interface InputContainerProps {
  label?: string;
  children: React.ReactNode;
}
const InputContainer = ({ label, children }: InputContainerProps) => {
  return (
    <InputCotainerLayout>
      <LabelText>{label}</LabelText>
      {children}
    </InputCotainerLayout>
  );
};

const InputCotainerLayout = styled.div`
  font-family: inherit;
  display: flex;
  flex-direction: column;
`;

const LabelText = styled.span`
  font-family: inherit;
  font-size: 24px;
  margin-bottom: 8px;
`;

export default InputContainer;
