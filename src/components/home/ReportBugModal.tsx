import { useState } from 'react';

import axios from 'axios';
import styled from 'styled-components';

import { alertToast } from '@utils/toast';

import Button from '@components/common/Button';
import Input from '@components/common/Input';
import InputContainer from '@components/common/InputContainer';
import Modal from '@components/common/Modal';

const ReportBugModal = ({ visible, onClose }: { visible: boolean; onClose: () => void }) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [reportTitle, setReportTitle] = useState<string>('');
  const [reportContent, setReportContent] = useState<string>('');

  const handleClickReportBugButton = async () => {
    if (!reportTitle.replace(/\s/g, '').length || !reportContent.replace(/\s/g, '').length) {
      alertToast('내용을 입력해주라옹', 'info', {
        hideProgressBar: true,
      });
      return;
    }
    await axios
      .post(process.env.REACT_APP_API_ENDPOINT + `/api/admin/report`, { title: reportTitle, content: reportContent })
      .then(() => {
        alertToast('소중한 제보 감사하다옹~!', 'info', {
          hideProgressBar: true,
        });
        onClose();
      })
      .catch(() =>
        alertToast('서버 연결이 불안정하다옹ㅠ', 'info', {
          hideProgressBar: true,
        }),
      );
  };

  return (
    <Modal visible={visible} onClose={onClose} title="REPORT A BUG" width={700}>
      <ReportBugModalLayout>
        <InputContainer label="제목">
          <Input
            type="text"
            value={reportTitle}
            onChange={(e) => setReportTitle(e.target.value)}
            maxLength={18}
            style={{ textAlign: 'initial', paddingLeft: '20px' }}
          />
        </InputContainer>
        <InputContainer label="내용">
          <ReportTextarea
            spellCheck={false}
            value={reportContent}
            onChange={(e) => setReportContent(e.target.value)}
          ></ReportTextarea>
        </InputContainer>
        <ReportBugButton onClick={handleClickReportBugButton}>제보하기</ReportBugButton>
      </ReportBugModalLayout>
    </Modal>
  );
};

const ReportBugModalLayout = styled.div`
  padding: 56px 80px 64px 80px;
  gap: 24px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const ReportBugButton = styled(Button)`
  font-family: inherit;
  font-size: 24px;
  height: 72px;
  margin-top: 24px;
  background-color: ${(props) => props.theme.colors.purple1};
`;

const ReportTextarea = styled.textarea`
  font-family: inherit;
  font-size: 24px;
  color: ${(props) => props.theme.colors.white1};
  background-color: ${(props) => props.theme.colors.darkGrey2};
  height: 299px;
  padding: 20px;
  resize: none;
  ${(props) => props.theme.borders.bottomRightNormal1}

  :focus {
    outline: none;
  }
`;

export default ReportBugModal;
