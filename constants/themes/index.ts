import { DefaultTheme } from 'styled-components/native';

declare module 'styled-components' {
  export interface DefaultTheme {
    color: Colors;
    fontFamily: FontFamily;
    fontWeight: FontWeight;
    size: Size;
  }

  export interface FontFamily {
    regular: string;
    black: string;
    bold: string;
    light: string;
    medium: string;
  }
  export interface FontWeight {
    regular: number;
    medium: number;
    large: number;
    bold: string;
  }

  export interface Size {
    // paddings
    padding1: number;
    padding2: number;
    padding3: number;
    padding4: number;
    padding5: number;
    padding6: number;
    padding7: number;
    padding8: number;
    padding9: number;

    // titles & headings
    largeTitle: number;
    heading1: number;
    heading2: number;
    heading3: number;
    heading4: number;
    heading5: number;
    heading6: number;

    // body
    bodyL1: number;
    bodyL2: number;
    bodyM1: number;
    bodyM2: number;
    bodyS1: number;
    bodyS2: number;
    bodyXs1: number;
    bodyXs2: number;

    // productive styles
    callout1: number;
    callout2: number;
    label1: number;
    label2: number;
    label3: number;
    label4: number;
    helperText1: number;
    helperText2: number;
    helperText3: number;
    caption1: number;
  }

  export interface Colors {
    primary: string;
    primary70: string;
    primary50: string;
    primary30: string;
    primary20: string;
    primary10: string;
    primary200: string;

    // secondary palette
    secondary: string;
    secondary10: string;
    secondary20: string;
    secondary30: string;
    secondary50: string;
    secondary70: string;
    secondary200: string;

    // information / graphs
    info: string;
    info10: string;
    info20: string;
    info30: string;
    info50: string;
    info70: string;
    info200: string;

    // alert / danger / error
    error: string;
    error10: string;
    error20: string;
    error30: string;
    error50: string;
    error70: string;
    error200: string;

    // done / success / completed
    success: string;
    success10: string;
    success20: string;
    success30: string;
    success50: string;
    success70: string;
    success200: string;

    // warning / pending
    warning: string;
    warning10: string;
    warning20: string;
    warning30: string;
    warning50: string;
    warning70: string;
    warning200: string;

    // text & icon palette
    textIcon: string;
    textIcon10: string;
    textIcon20: string;
    textIcon30: string;
    textIcon50: string;
    textIcon70: string;
    textIcon200: string;
    textIconWhite: string;

    // border color
    borderBottomFocus: string;
    borderBottomUnfocus: string;
    borders: string;
    // others
    shadowColor: string;
    background: string;
    white: string;
    black: string;
    transparent: string;
  }
}

export const appTheme: DefaultTheme = {
  fontFamily: {
    regular: 'NotoSansKRRegular',
    black: 'NotoSansKRBlack',
    bold: 'NotoSansKRBold',
    medium: 'NotoSansKRMedium',
    light: 'NotoSansKRLight',
  },
  color: {
    // primary palette
    primary200: '#16267E',
    primary: '#243699',
    primary70: '#6672B8',
    primary50: '#919BCC',
    primary30: '#BDC3E0',
    primary20: '#D3D7EB',
    primary10: '#E9EBF5',

    // secondary palette
    secondary200: '#A42830',
    secondary: '#C8353E',
    secondary70: '#D97278',
    secondary50: '#E39A9F',
    secondary30: '#EFC2C5',
    secondary20: '#F4D7D8',
    secondary10: '#F9EBEC',

    // information / graphs
    info200: '#144B9D',
    info: '#1C61C9',
    info70: '#4D86D4',
    info50: '#80A8E0',
    info30: '#B3CBED',
    info20: '#CCDCF3',
    info10: '#E5EEF9',

    // alert / danger / error
    error200: '#AD1A00',
    error: '#DA2100',
    error70: '#E5644D',
    error50: '#EC9080',
    error30: '#F8D3CC',
    error20: '#FBE9E5',
    error10: '#FDF4F2',

    // done / success / completed
    success200: '#258555',
    success: '#33B272',
    success70: '#70C99C',
    success50: '#99D8B8',
    success30: '#C2E8D5',
    success20: '#D6F0E3',
    success10: '#EBF7F1',

    // warning / pending
    warning200: '#D99837',
    warning: '#F4AD42',
    warning70: '#F7C67B',
    warning50: '#F9D6A0',
    warning30: '#FCE6C6',
    warning20: '#FDEFD9',
    warning10: '#FEF7EC',

    // text & icon palette
    textIcon200: '#070C25',
    textIcon: '#0D132F',
    textIcon70: '#565A6D',
    textIcon50: '#868997',
    textIcon30: '#B6B8C1',
    textIcon20: '#CFD0D5',
    textIcon10: '#E7E7EA',
    textIconWhite: '#FFFFFF',

    // border color
    borderBottomFocus: '#243699',
    borderBottomUnfocus: '#cccdd5',
    // others
    borders: '#9EA1AC',
    background: '#E5E5E5',
    white: '#FFFFFF',
    black: '#000000',
    shadowColor: '#0B2143',
    transparent: 'transparent',
  },
  fontWeight: {
    regular: 500,
    medium: 600,
    large: 700,
    bold: 'bold',
  },
  size: {
    padding1: 8,
    padding2: 16,
    padding3: 24,
    padding4: 32,
    padding5: 40,
    padding6: 48,
    padding7: 56,
    padding8: 64,
    padding9: 72,

    // titles & headings
    largeTitle: 32,
    heading1: 28,
    heading2: 24,
    heading3: 22,
    heading4: 20,
    heading5: 18,
    heading6: 16,

    // body
    bodyL1: 19,
    bodyL2: 19,
    bodyM1: 18,
    bodyM2: 18,
    bodyS1: 16,
    bodyS2: 16,
    bodyXs1: 15,
    bodyXs2: 15,

    // productive styles
    callout1: 16,
    callout2: 13,
    label1: 16,
    label2: 15,
    label3: 13,
    label4: 10,
    helperText1: 14,
    helperText2: 12,
    helperText3: 11,
    caption1: 12,
  },
};

export * from './font';
export * from './AppContainer';
