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
   * light grey6: #D9D9D9
   */
  lightGrey6: '#D9D9D9',
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
   * dark grey4: #797979
   */
  darkGrey4: '#797979',
  /**
   * dark grey5: #535353
   */
  darkGrey5: '#535353',
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
  /**
   * black4: #212122
   */
  black4: '#212122',
  /**
   * purple1: #402f5c
   */
  purple1: '#402f5c',
  /**
   * purple2: #9400b9
   */
  purple2: '#9400b9',
};

export const boxShadows = {
  /**
   * boxShadow1: 14px 8px 0px #000000
   */
  boxShadow1: '14px 8px 0px #000000',
  /**
   * boxShadow2: 16px 12px 0px #000000
   */
  boxShadow2: '16px 12px 0px #000000',
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
   * normalWhite: 4px solid #FFFFFF
   */
  normalWhite: '4px solid #FFFFFF',
  /**
   * thinGrey: 2px solid #444444
   */
  thinGrey: '2px solid #444444',
  /**
   * topLeftWhiteBorder:
     border-top: 4px solid #FFFFFF;
     border-right: 4px solid #000000;
     border-bottom: 4px solid #000000;
     border-left: 4px solid #FFFFFF;
   */
  topLeftWhiteBorder: `
    border-top: 4px solid #FFFFFF;
    border-right: 4px solid #000000;
    border-bottom: 4px solid #000000;
    border-left: 4px solid #FFFFFF;
  `,
  /** 
   * bottomRightWhiteBorder:
    border-top: 4px solid #000000;
    border-right: 4px solid #FFFFFF;
    border-bottom: 4px solid #FFFFFF;
    border-left: 4px solid #000000;
   */
  bottomRightWhiteBorder: `
  border-top: 4px solid #000000;
  border-right: 4px solid #FFFFFF;
  border-bottom: 4px solid #FFFFFF;
  border-left: 4px solid #000000;
  `,
  /**
   * topLeftGreyBorder:
    border-top: 4px solid #d7d7d7;
    border-right: 4px solid #000000;
    border-bottom: 4px solid #000000;
    border-left: 4px solid #d7d7d7;
   */
  topLeftGreyBorder: `
  border-top: 4px solid #d7d7d7;
  border-right: 4px solid #000000;
  border-bottom: 4px solid #000000;
  border-left: 4px solid #d7d7d7;
  `,
  /**
   * roomCardBorder:
    border-top: 4px solid #FFFFFF;
    border-right: 4px solid #797979;
    border-bottom: 4px solid #797979;
    border-left: 4px solid #FFFFFF;
   */
  roomCardBorder: `
    border-top: 4px solid #FFFFFF;
    border-right: 4px solid #797979;
    border-bottom: 4px solid #797979;
    border-left: 4px solid #FFFFFF;
    `,
};

export const font = {
  ibmPlexMono: 'IBMPlexMono',
  joystick: 'Joystick',
  notoSansKR: 'NotoSansKR',
};

export const textShadow = {
  /**
   * textShadow1: '-1px 0 #797979, 0 1px #797979, 1px 0 #797979, 0 -1px #797979'
   */
  textShadow1: '-1px 0 #797979, 0 1px #797979, 1px 0 #797979, 0 -1px #797979',
  /**
   * textShadow2: '-1px 0 #000000, 0 1px #000000, 1px 0 #000000, 0 -1px #000000'
   */
  textShadow2: '-1px 0 #000000, 0 1px #000000, 1px 0 #000000, 0 -1px #000000',
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
