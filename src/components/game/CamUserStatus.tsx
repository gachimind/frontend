import styled from 'styled-components';

import smallMicOffIcon from '@assets/svg_smallMicOffIcon.svg';
import smallMicOnIcon from '@assets/svg_smallMicOnIcon.svg';
import { CatTheme } from '@constants/characters';

import PlayerImageHolder from '@components/game/PlayerImageHolder';

interface CamUserStatusProps {
  nickname: string;
  isMicOn?: boolean;
  catTheme: CatTheme;
  size?: 'main' | 'sub';
}

const CamStatusStyles = {
  sub: {
    fontSize: '12px',
    gap: '6px',
    padding: '6px 8px',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  main: {
    fontSize: '18px',
    gap: '16px',
    padding: '12px 24px',
    backgroundColor: 'rgba(0, 0, 0, 0.9)',
  },
};

interface CamStatusStylesProps {
  fontSize: string;
  gap: string;
  padding: string;
  backgroundColor: string;
}

const CamUserStatus = ({ nickname, isMicOn, size = 'sub', catTheme }: CamUserStatusProps) => {
  return (
    <CamUserStatusLayout customStyles={CamStatusStyles[size]}>
      <div>
        <PlayerImageHolder size={size} catTheme={catTheme} />
        {size === 'sub' ? (
          <NicknameEllipsisedText>{nickname}</NicknameEllipsisedText>
        ) : (
          <NicknameText>{nickname}</NicknameText>
        )}
      </div>
      <div>
        <img
          style={{ transform: size === 'main' ? 'scale(1.5)' : 'scale(1.0)' }}
          src={isMicOn ? smallMicOnIcon : smallMicOffIcon}
        />
      </div>
    </CamUserStatusLayout>
  );
};

const CamUserStatusLayout = styled.div<{ customStyles: CamStatusStylesProps }>`
  position: absolute;
  bottom: 0;
  display: flex;
  justify-content: space-between;
  padding: ${(props) => props.customStyles.padding};
  align-items: center;
  width: 100%;
  background-color: ${(props) => props.customStyles.backgroundColor};

  div {
    gap: ${(props) => props.customStyles.gap};
    display: flex;
    align-items: center;
  }
  span {
    color: ${(props) => props.theme.colors.ivory2};
    font-size: ${(props) => props.customStyles.fontSize};
    font-weight: 500;
  }
`;

const NicknameText = styled.span`
  font-size: 12px;
  color: ${(props) => props.theme.colors.lightGrey3};
  display: inline-block;
`;

const NicknameEllipsisedText = styled(NicknameText)`
  width: 80px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export default CamUserStatus;
