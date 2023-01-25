import styled from 'styled-components';

import { theme } from '@styles/theme';

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
}

// TODO: children 또는 image 넣을 수 있게 props 추가
const PlayerImageHolder = ({ size = 'sub' }: PlayerImageHolderProps) => {
  return <ImageHolderLayout customStyle={PlayerImageHolderStyles[size]}></ImageHolderLayout>;
};

const ImageHolderLayout = styled.div<{ customStyle: PlayerImageHolderStylesType }>`
  background-color: ${(props) => props.theme.colors.lightGrey3};
  box-shadow: ${(props) => props.customStyle.boxShadow};
  border: ${(props) => props.customStyle.border};
  border-radius: 50%;
  width: ${(props) => props.customStyle.width};
  height: ${(props) => props.customStyle.height};
`;

export default PlayerImageHolder;
