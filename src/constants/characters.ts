export interface CatStyles {
  body: string;
  middleBody?: string;
  rightBody?: string;
  leftBody?: string;
  shadow: string;
  leftEyeBelowLeft: string;
  leftEyeBelowRight: string;
  rightEyeBelowLeft: string;
  rightEyeBelowRight: string;
  tailEdge?: string;
  middleHead?: string;
  rightHead?: string;
  leftHead?: string;
  rightEar?: string;
  leftEar?: string;
  mouse?: string;
  toe?: string;
  face?: string;
}

export interface RocketStyles {
  base: string;
  side: string;
  middle: string;
  core: string;
}

export const CATS = ['white', 'brown', 'orange', 'mix', 'black', 'gray'] as const;
export const ROCKETS = ['red', 'blue', 'yellow'] as const;
export type CatTheme = typeof CATS[number];
export type RocketTheme = typeof ROCKETS[number];

export const CatColor = {
  white: {
    body: '#FFFFFF',
    shadow: '#CECCDA',
    leftEyeBelowLeft: '#1591C6',
    leftEyeBelowRight: '#0AACEB',
    rightEyeBelowLeft: '#F19117',
    rightEyeBelowRight: '#FF9918',
    toe: '#CECCDA',
  } as CatStyles,
  brown: {
    body: '#FAEAD1',
    shadow: '#F9DBA9',
    leftEyeBelowLeft: '#1591C6',
    leftEyeBelowRight: '#0AACEB',
    rightEyeBelowLeft: '#1591C6',
    rightEyeBelowRight: '#0AACEB',
    tailEdge: '#744A34',
    rightEar: '#744A34',
    leftEar: '#744A34',
    toe: '#744A34',
    face: '#744A34',
  } as CatStyles,
  orange: {
    body: '#FF9918',
    shadow: '#E87409',
    leftEyeBelowLeft: '#454551',
    leftEyeBelowRight: '#72707A',
    rightEyeBelowLeft: '#454551',
    rightEyeBelowRight: '#72707A',
    tailEdge: '#E87409',
    middleHead: '#E87409',
    toe: '#BE6009',
  } as CatStyles,
  mix: {
    body: '#FFFFFF',
    leftBody: '#FF9918',
    rightBody: '#353535',
    shadow: '#CECCDA',
    leftEyeBelowLeft: '#454551',
    leftEyeBelowRight: '#72707A',
    rightEyeBelowLeft: '#454551',
    rightEyeBelowRight: '#72707A',
    tailEdge: '#FF9918',
    leftHead: '#353535',
    rightHead: '#FF9918',
    toe: '#FF9918',
  } as CatStyles,
  black: {
    body: '#535353',
    shadow: '#212122',
    leftEyeBelowLeft: '#F19117',
    leftEyeBelowRight: '#FFE818',
    rightEyeBelowLeft: '#F19117',
    rightEyeBelowRight: '#FFE818',
    tailEdge: '#535353',
    toe: '#212122',
  } as CatStyles,
  gray: {
    body: '#72707A',
    middleBody: '#FFFFFF',
    shadow: '#454551',
    leftEyeBelowLeft: '#454551',
    leftEyeBelowRight: '#454551',
    rightEyeBelowLeft: '#454551',
    rightEyeBelowRight: '#454551',
    tailEdge: '#FFFFFF',
    middleHead: '#454551',
    mouse: '#FFFFFF',
    toe: '#FFFFFF',
  } as CatStyles,
};

export const RocketColor = {
  red: {
    base: '#F90400',
    side: '#F90400',
    middle: '#FF9918',
    core: '#FDD000',
  },
  blue: {
    base: '#5000F9',
    side: '#F90400',
    middle: '#FF9918',
    core: '#FDD000',
  },
  yellow: {
    base: '#FDD000',
    side: '#F90400',
    middle: '#FF9918',
    core: '#FDD000',
  },
};
