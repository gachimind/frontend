import 'styled-components';
import { BorderTypes, BoxShadowTypes, ColorTypes, FontTypes, LayoutTypes, TextShadowTypes } from './src/styles/theme';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: ColorTypes;
    boxShadows: BoxShadowTypes;
    layout: LayoutTypes;
    borders: BorderTypes;
    font: FontTypes;
    textShadow: TextShadowTypes;
  }
}
