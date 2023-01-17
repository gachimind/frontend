import styled from 'styled-components';

import { BUG_OPTIONS } from '@constants/options';

import Modal from '@components/common/Modal';
import Selection from '@components/common/Selection';

const ReportBugModal = ({ visible, onClose }: { visible: boolean; onClose: () => void }) => {
  return (
    <Modal visible={visible} onClose={onClose} title="REPORT" width={700}>
      <ReportBugModalLayout>
        <InputBox>
          <span>제목</span>
          <input placeholder="제목이 들어간당" />
        </InputBox>
        <InputBox>
          <span>카테고리</span>
          <Selection options={BUG_OPTIONS} />
        </InputBox>
        <InputBox>
          <span>내용</span>
          <input className="contents" placeholder="내용이 들어간당" />
        </InputBox>
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

const InputBox = styled.div`
  font-family: inherit;
  display: flex;
  flex-direction: column;
  span {
    font-family: inherit;
    font-size: 24px;
    margin-bottom: 8px;
  }
  input {
    font-family: inherit;
    font-size: 24px;
    background-color: ${(props) => props.theme.colors.ivory1};
    height: 56px;
    ::placeholder {
      padding-left: 20px;
    }
  }
  .contents {
    height: 200px;
  }
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
