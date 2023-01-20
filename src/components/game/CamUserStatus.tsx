import styled from 'styled-components';

interface CamUserStatusProps {
  nickname: string;
  isCamOn?: boolean;
  isMicOn?: boolean;
}

const CamUserStatus = ({ nickname, isCamOn, isMicOn }: CamUserStatusProps) => {
  return (
    <CamUserStatusLayout>
      <div>
        {/* TODO: 아이콘 넣기 */}
        {isCamOn ? 'cam-on' : 'cam-off'}
        <NicknameText>{nickname}</NicknameText>
      </div>
      <div>
        {/* TODO: 아이콘 넣기 */}
        {isMicOn ? 'mic-on' : 'mic-off'}
      </div>
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
  font-family: ${(props) => props.theme.font.korean};
  font-weight: 700;
  font-size: 12px;
  color: white;
`;

export default CamUserStatus;
