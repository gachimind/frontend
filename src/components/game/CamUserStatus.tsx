import styled, { keyframes } from 'styled-components';

import smallMicOffIcon from '@assets/svg_smallMicOffIcon.svg';
import smallMicOnIcon from '@assets/svg_smallMicOnIcon.svg';

import PlayerImageHolder from '@components/game/PlayerImageHolder';

interface CamUserStatusProps {
  nickname: string;
  isMicOn?: boolean;
  size?: 'main' | 'sub';
}

const CamStatusStyles = {
  sub: {
    fontSize: '12px',
    gap: '6px',
    padding: '8px 8px',
  },
  main: {
    fontSize: '18px',
    gap: '16px',
    padding: '12px 24px',
  },
};

interface CamStatusStylesProps {
  fontSize: string;
  gap: string;
  padding: string;
}

const CamUserStatus = ({ nickname, isMicOn, size = 'sub' }: CamUserStatusProps) => {
  return (
    <CamUserStatusLayout customStyles={CamStatusStyles[size]}>
      <div>
        <PlayerImageHolder size={size}></PlayerImageHolder>
        <NicknameText>{nickname.length > 7 ? <div>{nickname}</div> : nickname}</NicknameText>
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
  background-color: rgba(0, 0, 0, 0.5);

  div {
    gap: ${(props) => props.customStyles.gap};
    display: flex;
    align-items: center;
  }
  span {
    color: ${(props) => props.theme.colors.white};
    font-size: ${(props) => props.customStyles.fontSize};
    font-weight: 500;
  }
`;

const nicknameAnimation = keyframes`
  0%,
  20% {
    transform: translateX(0%);
    left: 0%;
  }
  80%,
  100% {
    transform: translateX(-210%);
    left: 210%;
  }
`;

const NicknameText = styled.span`
  font-size: 12px;
  color: ${(props) => props.theme.colors.lightGrey3};
  width: 80px;
  white-space: nowrap;
  display: block;
  overflow: hidden;

  div {
    -moz-animation: ${nicknameAnimation} 3s infinite alternate ease-in-out;
    -webkit-animation: ${nicknameAnimation} 3s infinite alternate ease-in-out;
    animation: ${nicknameAnimation} 3s infinite alternate ease-in-out;
  }
`;

export default CamUserStatus;
