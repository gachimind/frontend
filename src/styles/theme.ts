import { DefaultTheme } from 'styled-components';

const SCALE =
  window.innerWidth / window.innerHeight < 1.83
    ? Number((window.innerWidth / 1960).toFixed(2))
    : Number((window.innerHeight * 1.95) / 1960).toFixed(2);

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
   * light grey5: #d7d7d7
   */
  lightGrey5: '#d7d7d7',
  /**
   * dark grey1: #444444
   */
  darkGrey1: '#444444',
  /**
   * dark grey2: #2C2C2C
   */
  darkGrey2: '#2C2C2C',
  /**
   * dark grey3: #3A3A3A
   */
  darkGrey3: '#3A3A3A',
  /**
   * black1: #272727
   */
  black1: '#272727',
  /**
   * black2: #202020
   */
  black2: '  #202020',
  /**
   * black3: #1C1C1C
   */
  black3: '#1C1C1C',
};

export const boxShadows = {
  /**
   * boxShadow1: 14px 8px 0px #000000
   */
  boxShadow1: '14px 8px 0px #000000',
  /**
   * boxShadow2: 16px 12px 0px #797979
   */
  boxShadow2: '16px 12px 0px #797979',
};

export const layout = {
  maxWidth: '1920px',
  maxHeight: '1080px',
  scale: SCALE < 0.5 ? 0.5 : SCALE,
};

export const borders = {
  /**
   * thickIvory: 8px solid #F0F0F0
   */
  thickIvory: '8px solid #F0F0F0',
  /**
   * normalIvory: 4px solid #F0F0F0
   */
  normalIvory: '4px solid #F0F0F0',
  /**
   * thinGrey: 2px solid #444444
   */
  thinGrey: '2px solid #444444',
  /**
   * black: 4px solid black
   */
  normalBlack: '4px solid black',
  /**
   * white: 4px solid white
   */
  normalWhite: '4px solid white',
  /**
   * normalGrey: 4px solid #d7d7d7
   */
  normalGrey: '4px solid #d7d7d7',
};

export const font = {
  ibmPlexMono: 'IBMPlexMono',
  joystick: 'Joystick',
  notoSansKR: 'NotoSansKR',
};

export const textShadow = {
  textShadow: '-1px 0 #797979, 0 1px #797979, 1px 0 #797979, 0 -1px #797979',
};

export type ColorTypes = typeof colors;
export type BoxShadowTypes = typeof boxShadows;
export type LayoutTypes = typeof layout;
export type BorderTypes = typeof borders;
export type FontTypes = typeof font;
export type TextShadowTypes = typeof textShadow;

export const theme: DefaultTheme = {
  colors,
  boxShadows,
  layout,
  borders,
  font,
  textShadow,
};
