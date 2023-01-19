import styled from 'styled-components';

import { BUG_OPTIONS } from '@constants/options';

import Input from '@components/common/Input';
import InputContainer from '@components/common/InputContainer';
import Modal from '@components/common/Modal';
import Selection from '@components/common/Selection';

const ReportBugModal = ({ visible, onClose }: { visible: boolean; onClose: () => void }) => {
  return (
    <Modal visible={visible} onClose={onClose} title="REPORT" width={700}>
      <ReportBugModalLayout>
        <InputContainer label="제목">
          <Input placeholder="제목이 들어간당" />
        </InputContainer>
        <InputContainer label="카테고리">
          <Selection options={BUG_OPTIONS} width={560} />
        </InputContainer>
        <InputContainer label="내용">
          {/* FIXME: textarea로 바꿀 것 */}
          <Input style={{ height: '200px' }} placeholder="내용이 들어간당" />
        </InputContainer>
        <ButtonBox>
          <button onClick={onClose}>취소하기</button>
          <button>제보하기</button>
        </ButtonBox>
      </ReportBugModalLayout>
    </Modal>
  );
};

// TODO: 임시 색상으로 추후 변경되어야 한다.
const ReportBugModalLayout = styled.div`
  font-family: ${(props) => props.theme.font.korean};
  padding: 40px 70px 52px 70px;
  gap: 28px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const ButtonBox = styled.div`
  font-family: inherit;
  height: 56px;
  gap: 26px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin-top: 20px;
  button {
    font-family: inherit;
    font-size: 24px;
    color: ${(props) => props.theme.colors.ivory1};
    background-color: ${(props) => props.theme.colors.darkGrey1};
  }
`;

export default ReportBugModal;
