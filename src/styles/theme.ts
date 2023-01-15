import { DefaultTheme } from 'styled-components';

const SCALE =
  window.innerWidth / window.innerHeight < 1.83
    ? Number((window.innerWidth / 1960).toFixed(2))
    : Number((window.innerHeight * 1.83) / 1960).toFixed(2);

export const colors = {
  background: '#2C2C2C',
  outline: '#F0F0F0',
  footer: '#757575',
  button: '#444444',
  logo: '#FFFFFF',
  presenterFont: '#F4F4F4',
  chatBoxFont: '#AAAAAA',
};

export const boxShadows = {
  boxShadow: '14px 8px 0px #000000',
};

export const layout = {
  maxWidth: '1920px',
  maxHeight: '1080px',
  scale: SCALE < 0.5 ? 0.5 : SCALE,
};

export const borders = {
  template: '8px solid #F0F0F0',
  card: '4px solid #F0F0F0',
  camList: '2px solid #444444',
};

export const font = {
  korean: "'Noto Sans KR', sans-serif",
};

export type ColorTypes = typeof colors;
export type BoxShadowTypes = typeof boxShadows;
export type LayoutTypes = typeof layout;
export type BorderTypes = typeof borders;
export type FontTypes = typeof font;

export const theme: DefaultTheme = {
  colors,
  boxShadows,
  layout,
  borders,
  font,
};
