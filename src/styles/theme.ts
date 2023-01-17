import { DefaultTheme } from 'styled-components';

const SCALE =
  window.innerWidth / window.innerHeight < 1.83
    ? Number((window.innerWidth / 1960).toFixed(2))
    : Number((window.innerHeight * 1.93) / 1960).toFixed(2);

export const colors = {
  /**
   * white: #F4F4F4
   */
  white: '#F4F4F4',
  /**
   * ivory1: #F0F0F0
   */
  ivory1: '#F0F0F0',
  /**
   * ivory2: #FFFFFF
   */
  ivory2: '#FFFFFF',
  /**
   * light grey1: #757575
   */
  lightGrey1: '#757575',
  /**
   * light grey2: #696969
   */
  lightGrey2: '#696969',
  /**
   * light grey3: #C4C4C4
   */
  lightGrey3: '#C4C4C4',
  /**
   * light grey4: #AAAAAA
   */
  lightGrey4: '#AAAAAA',
  /**
   * dark grey1: #444444
   */
  darkGrey1: '#444444',
  /**
   * dark grey2: #2C2C2C
   */
  darkGrey2: '#2C2C2C',
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
