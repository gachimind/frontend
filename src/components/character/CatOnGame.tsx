import styled from 'styled-components';

import { CatTheme, RocketTheme } from '@constants/characters';

import AxisXOverflowedText from '@components/common/AxisXOverflowedText';

import Cat from './Cat';
import CatScore from './CatScore';

export interface CatOnGameProps {
  scoreInfo: {
    score: number;
  };
  catType: 'rocket' | 'body';
  catTheme: CatTheme;
  rocketTheme: RocketTheme;
  scale?: number;
  nickname: string;
  size?: 'small' | 'large';
  hasIdlePopupAnimation?: boolean;
  catMarginTop?: number;
}

const CatOnGame = ({
  scoreInfo,
  catType,
  catTheme,
  rocketTheme,
  scale = 1,
  size = 'small',
  nickname,
  hasIdlePopupAnimation = true,
  catMarginTop = -17,
}: CatOnGameProps) => {
  return (
    <CatOnGameLayout>
      <AxisXOverflowedText
        width={size === 'large' ? 80 : 73}
        animationSecond={3}
        innerText={nickname}
        maxLength={12}
        fontSize={14}
      >
        <NicknameText size={size}>{nickname}</NicknameText>
      </AxisXOverflowedText>
      <CatScore size={size} scoreInfo={scoreInfo} />
      <CatContainerBox catMarginTop={catMarginTop}>
        <Cat
          catTheme={catTheme}
          rocketTheme={rocketTheme}
          type={catType}
          hasIdlePopupAnimation={hasIdlePopupAnimation}
          scale={scale}
          letsMove={{ millSecond: scoreInfo.score * 10 }}
        />
      </CatContainerBox>
    </CatOnGameLayout>
  );
};

const CatOnGameLayout = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  grid-row-gap: 4px;
`;

const NicknameText = styled.span<{ size: 'small' | 'large' }>`
  font-size: ${(props) => (props.size === 'small' ? '14px' : '15px')};
  color: ${(props) => props.theme.colors.white};
`;

const CatContainerBox = styled.div<{ catMarginTop: number }>`
  margin-top: ${(props) => props.catMarginTop + 'px'};
  margin-left: 8px;
`;

export default CatOnGame;
