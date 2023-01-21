import styled from 'styled-components';

import smallMicOffIcon from '@assets/svg_smallMicOffIcon.svg';
import smallMicOnIcon from '@assets/svg_smallMicOnIcon.svg';

interface CamUserStatusProps {
  nickname: string;
  isMicOn?: boolean;
}

const CamUserStatus = ({ nickname, isMicOn }: CamUserStatusProps) => {
  return (
    <CamUserStatusLayout>
      <div>
        <NicknameText>{nickname}</NicknameText>
      </div>
      <div>{isMicOn ? <img src={smallMicOnIcon} /> : <img src={smallMicOffIcon} />}</div>
    </CamUserStatusLayout>
  );
};
const CamUserStatusLayout = styled.div`
  position: absolute;
  bottom: 10px;
  display: flex;
  justify-content: space-between;
  padding: 0 8px;
  align-items: center;
  width: 150px;
  height: 35px;
  background-color: rgba(0, 0, 0, 0.5);
`;

const NicknameText = styled.span`
  font-family: ${(props) => props.theme.font.notoSansKR};
  font-weight: 500;
  font-size: 12px;
  color: white;
`;

export default CamUserStatus;
