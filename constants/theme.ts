import { Dimensions, StyleSheet, StatusBar } from 'react-native';

const { width, height } = Dimensions.get('window');

export const COLORS = {
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
};

export const BUTTONS = {
  // button style
  primary: { backgroundColor: COLORS.primary, color: COLORS.white },
  secondary: { backgroundColor: COLORS.secondary, color: COLORS.white },
  success: { backgroundColor: COLORS.success, color: COLORS.white },
  default: { backgroundColor: 'transparent', color: COLORS.primary },
  outlineDefault: {
    backgroundColor: 'transparent',
    borderColor: COLORS.primary,
    borderWidth: 1,
    color: COLORS.primary,
  },
};

export const SIZES = {
  // paddings
  padding1: 8,
  padding2: 16,
  padding3: 24,
  padding4: 32,
  padding5: 40,
  padding6: 48,
  padding7: 56,
  padding8: 64,
  padding9: 72,

  // margins
  margin1: 8,
  margin2: 16,
  margin3: 24,
  margin4: 32,
  margin5: 40,
  margin6: 48,
  margin7: 56,
  margin8: 64,
  margin9: 72,
  margin10: 80,

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

  // app dimensions
  width,
  height,
};

export const THEMES = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
    paddingHorizontal: SIZES.padding2,
    paddingTop: StatusBar.currentHeight,
  },
});

export const FONTS = StyleSheet.create({
  largeTitle: {
    fontFamily: 'NotoSansKRBlack',
    fontSize: SIZES.largeTitle,
    lineHeight: 44,
  },
  h1: {
    fontFamily: 'NotoSansKRBlack',
    fontSize: SIZES.heading1,
    lineHeight: 37,
  },
  h2: {
    fontFamily: 'NotoSansKRBlack',
    fontSize: SIZES.heading2,
    lineHeight: 34,
  },
  h3: {
    fontFamily: 'NotoSansKRBlack',
    fontSize: SIZES.heading3,
    lineHeight: 31,
  },
  h4: {
    fontFamily: 'NotoSansKRBlack',
    fontSize: SIZES.heading4,
    lineHeight: 28,
  },
  h5: {
    fontFamily: 'NotoSansKRBlack',
    fontSize: SIZES.heading5,
    lineHeight: 25,
  },
  h6: {
    fontFamily: 'NotoSansKRBlack',
    fontSize: SIZES.heading6,
    lineHeight: 22,
  },
  bodyL1: {
    fontFamily: 'NotoSansKRBold',
    fontSize: SIZES.bodyL1,
    lineHeight: 28,
  },
  bodyL2: {
    fontFamily: 'NotoSansKRMedium',
    fontSize: SIZES.bodyL2,
    lineHeight: 28,
  },
  bodyM1: {
    fontFamily: 'NotoSansKRBold',
    fontSize: SIZES.bodyM1,
    lineHeight: 25,
  },
  bodyM2: {
    fontFamily: 'NotoSansKRMedium',
    fontSize: SIZES.bodyM2,
    lineHeight: 25,
  },
  bodyS1: {
    fontFamily: 'NotoSansKRBold',
    fontSize: SIZES.bodyS1,
    lineHeight: 22,
  },
  bodyS2: {
    fontFamily: 'NotoSansKRMedium',
    fontSize: SIZES.bodyS2,
    lineHeight: 20,
  },
  bodyXs1: {
    fontFamily: 'NotoSansKRBold',
    fontSize: SIZES.bodyXs1,
    lineHeight: 20,
  },
  bodyXs2: {
    fontFamily: 'NotoSansKRMedium',
    fontSize: SIZES.bodyXs2,
    lineHeight: 20,
  },
  callout1: {
    fontFamily: 'NotoSansKRBold',
    fontSize: SIZES.callout1,
    lineHeight: 20,
  },
  callout2: {
    fontFamily: 'NotoSansKRBold',
    fontSize: SIZES.callout2,
    lineHeight: 16,
  },
  label1: {
    fontFamily: 'NotoSansKRMedium',
    fontSize: SIZES.label1,
    lineHeight: 22,
  },
  label2: {
    fontFamily: 'NotoSansKRMedium',
    fontSize: SIZES.label2,
    lineHeight: 20,
  },
  label3: {
    fontFamily: 'NotoSansKRMedium',
    fontSize: SIZES.label3,
    lineHeight: 19,
  },
  label4: {
    fontFamily: 'NotoSansKRMedium',
    fontSize: SIZES.label4,
    lineHeight: 18,
  },
  helperText1: {
    fontFamily: 'NotoSansKRBold',
    fontSize: SIZES.helperText1,
    lineHeight: 20,
  },
  helperText2: {
    fontFamily: 'NotoSansKRBold',
    fontSize: SIZES.helperText2,
    lineHeight: 18,
  },
  helperText3: {
    fontFamily: 'NotoSansKRMedium',
    fontSize: SIZES.helperText3,
    lineHeight: 16,
  },
  caption1: {
    fontFamily: 'NotoSansKRMedium',
    fontSize: SIZES.caption1,
    lineHeight: 14,
  },
});

const appTheme = { COLORS, SIZES, FONTS, BUTTONS, THEMES };

export default appTheme;
