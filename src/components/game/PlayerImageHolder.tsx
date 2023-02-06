import styled from 'styled-components';

import { CatTheme } from '@constants/characters';
import { theme } from '@styles/theme';

import CatIcon from '@components/character/CatIcon';

const PlayerImageHolderStyles = {
  sub: {
    boxShadow: '0 0 0 1px #000 inset',
    width: '22px',
    height: '22px',
    border: `1px solid ${theme.colors.lightGrey3}`,
  },
  main: {
    boxShadow: '0 0 0 3px #000 inset',
    width: '40px',
    height: '40px',
    border: `2px solid ${theme.colors.lightGrey3}`,
  },
};

interface PlayerImageHolderStylesType {
  boxShadow: string;
  width: string;
  height: string;
  border: string;
}

interface PlayerImageHolderProps {
  size?: 'sub' | 'main';
  catTheme: CatTheme;
}

// TODO: children 또는 image 넣을 수 있게 props 추가
const PlayerImageHolder = ({ size = 'sub', catTheme }: PlayerImageHolderProps) => {
  return (
    <ImageHolderLayout customStyle={PlayerImageHolderStyles[size]}>
      <CatIconBox size={size}>
        <CatIcon catTheme={catTheme} />
      </CatIconBox>
    </ImageHolderLayout>
  );
};

const ImageHolderLayout = styled.div<{ customStyle: PlayerImageHolderStylesType }>`
  background-color: ${(props) => props.theme.colors.lightGrey10};
  box-shadow: ${(props) => props.customStyle.boxShadow};
  border: ${(props) => props.customStyle.border};
  border-radius: 50%;
  width: ${(props) => props.customStyle.width};
  height: ${(props) => props.customStyle.height};
`;

const CatIconBox = styled.div<{ size: 'sub' | 'main' }>`
  margin-left: ${(props) => (props.size === 'sub' ? '0px' : '11px')};
  margin-top: ${(props) => (props.size === 'sub' ? '6px' : '11px')};
  transform: ${(props) => (props.size === 'sub' ? 'scale(0.885)' : 'scale(1.64)')};
`;

export default PlayerImageHolder;
