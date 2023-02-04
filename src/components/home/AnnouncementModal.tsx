import styled from 'styled-components';

import cursorIcon from '@assets/svg_cursorIcon.svg';
import gameRuleIcon from '@assets/svg_gameRuleIcon.svg';

import Modal from '@components/common/Modal';

const AnnouncementModal = ({ visible, onClose }: { visible: boolean; onClose: () => void }) => {
  const date = new Date();

  const day = date.getDate();
  const month = date.getMonth() + 1;
  const year = date.getFullYear();

  const currentDate = `${year}${month}${day}`;

  const handleClickShowOnlyTodaySpan = () => {
    localStorage.setItem('AnnouncementModalShownDate', currentDate);
    onClose();
  };

  return (
    <Modal visible={visible} onClose={onClose} title="ANNOUNCEMENT">
      <AnnouncementModalLayout>
        <ul>
          <li>
            1. 게임 입장 후 <img src={gameRuleIcon} /> 버튼을 눌러주시면 게임방법을 확인할 수 있습니다.
          </li>
          <br />
          <li>
            2.
            <span
              onClick={() =>
                window.open(
                  'https://docs.google.com/forms/d/e/1FAIpQLSc3tAbsilavKMmSKASjQXzRADMkkJ39PXPamgPZJ5CGJexUqQ/viewform?usp=sf_link',
                )
              }
            >
              가치마인드 피드백 공유하기
            </span>
          </li>
          <li>🎁카카오페이 10만원 상품권을 포함하여 총 38명에게 상품 증정!</li>
          <br />
          <li>3. 현재 게임 중 참여자가 방을 나갈 경우, 에러가 발생할 수 있습니다.</li>
          <li className="important">가능한 중도에 나가기 버튼은 지양해주세요!</li>
          <br />
          <br />
          <li>
            <span onClick={handleClickShowOnlyTodaySpan} style={{ display: 'flex', justifyContent: 'flex-end' }}>
              오늘 하루 보지 않기
            </span>
          </li>
        </ul>
      </AnnouncementModalLayout>
    </Modal>
  );
};

const AnnouncementModalLayout = styled.div`
  padding: 40px 40px;
  gap: 24px;
  display: flex;
  flex-direction: column;
  justify-content: center;

  ul {
    list-style: none;
    font-size: 22px;
    line-height: 24px;
    color: ${(props) => props.theme.colors.ivory1};
  }

  li {
    img {
      width: 25px;
      height: 25px;
    }
    span {
      cursor: url(${cursorIcon}), pointer;
      text-decoration: underline;
      :hover {
        color: yellow;
      }
    }
  }

  .important {
    color: red;
  }
`;

export default AnnouncementModal;
