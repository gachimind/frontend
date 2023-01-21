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
        <ImageHolder></ImageHolder>
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

  div {
    gap: 4px;
    display: flex;
    align-items: center;
  }
`;

const ImageHolder = styled.span`
  background-color: ${(props) => props.theme.colors.lightGrey3};
  box-shadow: 0 0 0 1px #000 inset;
  border: 1px solid ${(props) => props.theme.colors.lightGrey3};
  border-radius: 50%;
  width: 22px;
  height: 22px;
`;

const NicknameText = styled.span`
  font-size: 12px;
  color: ${(props) => props.theme.colors.lightGrey3};
`;

export default CamUserStatus;
