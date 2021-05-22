import styled from 'styled-components/native';

import { COLOR_TYPE } from './types';

const Fonts = styled.Text<{ color?: COLOR_TYPE }>`
  color: ${({ color = 'black', theme }) =>
    theme.color[color] ? theme.color[color] : theme.color.black};
`;

export const LargeTitle = styled(Fonts)`
  font-family: ${({ theme }) => theme.fontFamily.black};
  font-size: ${({ theme }) => theme.size.largeTitle}px;
  line-height: 44px;
`;

export const H1 = styled(Fonts)`
  font-family: ${({ theme }) => theme.fontFamily.black};
  font-size: ${({ theme }) => theme.size.heading1}px;
  line-height: 37px;
`;

export const H2 = styled(Fonts)`
  font-family: ${({ theme }) => theme.fontFamily.black};
  font-size: ${({ theme }) => theme.size.heading2}px;
  line-height: 34px;
`;
export const H3 = styled(Fonts)`
  font-family: ${({ theme }) => theme.fontFamily.black};
  font-size: ${({ theme }) => theme.size.heading3}px;
  line-height: 31px;
`;
export const H4 = styled(Fonts)`
  font-family: ${({ theme }) => theme.fontFamily.black};
  font-size: ${({ theme }) => theme.size.heading4}px;
  line-height: 28px;
`;
export const H5 = styled(Fonts)`
  font-family: ${({ theme }) => theme.fontFamily.black};
  font-size: ${({ theme }) => theme.size.heading5}px;
  line-height: 25px;
`;
export const H6 = styled(Fonts)`
  font-family: ${({ theme }) => theme.fontFamily.black};
  font-size: ${({ theme }) => theme.size.heading6}px;
  line-height: 22px;
`;
export const BodyL1 = styled(Fonts)`
  font-family: ${({ theme }) => theme.fontFamily.bold};
  font-size: ${({ theme }) => theme.size.bodyL1}px;
  line-height: 28px;
`;
export const BodyL2 = styled(Fonts)`
  font-family: ${({ theme }) => theme.fontFamily.medium};
  font-size: ${({ theme }) => theme.size.bodyL2}px;
  line-height: 28px;
`;
export const BodyM1 = styled(Fonts)`
  font-family: ${({ theme }) => theme.fontFamily.bold};
  font-size: ${({ theme }) => theme.size.bodyM1}px;
  line-height: 25px;
`;
export const BodyM2 = styled(Fonts)`
  font-family: ${({ theme }) => theme.fontFamily.medium};
  font-size: ${({ theme }) => theme.size.bodyM2}px;
  line-height: 25px;
`;
export const BodyS1 = styled(Fonts)`
  font-family: ${({ theme }) => theme.fontFamily.bold};
  font-size: ${({ theme }) => theme.size.bodyS1}px;
  line-height: 22px;
`;
export const BodyS2 = styled(Fonts)`
  font-family: ${({ theme }) => theme.fontFamily.medium};
  font-size: ${({ theme }) => theme.size.bodyS2}px;
  line-height: 22px;
`;
export const BodyXs1 = styled(Fonts)`
  font-family: ${({ theme }) => theme.fontFamily.bold};
  font-size: ${({ theme }) => theme.size.bodyXs1}px;
  line-height: 20px;
`;
export const BodyXs2 = styled(Fonts)`
  font-family: ${({ theme }) => theme.fontFamily.medium};
  font-size: ${({ theme }) => theme.size.bodyXs2}px;
  line-height: 20px;
`;
export const Callout1 = styled(Fonts)`
  font-family: ${({ theme }) => theme.fontFamily.bold};
  font-size: ${({ theme }) => theme.size.callout1}px;
  line-height: 20px;
`;
export const Callout2 = styled(Fonts)`
  font-family: ${({ theme }) => theme.fontFamily.bold};
  font-size: ${({ theme }) => theme.size.callout2}px;
  line-height: 16px;
`;
export const Label1 = styled(Fonts)`
  font-family: ${({ theme }) => theme.fontFamily.medium};
  font-size: ${({ theme }) => theme.size.label1}px;
  line-height: 22px;
`;
export const Label2 = styled(Fonts)`
  font-family: ${({ theme }) => theme.fontFamily.medium};
  font-size: ${({ theme }) => theme.size.label2}px;
  line-height: 20px;
`;
export const Label3 = styled(Fonts)`
  font-family: ${({ theme }) => theme.fontFamily.medium};
  font-size: ${({ theme }) => theme.size.label3}px;
  line-height: 19px;
`;
export const Label4 = styled(Fonts)`
  font-family: ${({ theme }) => theme.fontFamily.medium};
  font-size: ${({ theme }) => theme.size.label4}px;
  line-height: 18px;
`;
export const HelperText1 = styled(Fonts)`
  font-family: ${({ theme }) => theme.fontFamily.bold};
  font-size: ${({ theme }) => theme.size.helperText1}px;
  line-height: 20px;
`;
export const HelperText2 = styled(Fonts)`
  font-family: ${({ theme }) => theme.fontFamily.bold};
  font-size: ${({ theme }) => theme.size.helperText2}px;
  line-height: 18px;
`;
export const HelperText3 = styled(Fonts)`
  font-family: ${({ theme }) => theme.fontFamily.medium};
  font-size: ${({ theme }) => theme.size.helperText3}px;
  line-height: 16px;
`;
export const Caption1 = styled(Fonts)`
  font-family: ${({ theme }) => theme.fontFamily.medium};
  font-size: ${({ theme }) => theme.size.caption1}px;
  line-height: 14px;
`;
export default {
  LargeTitle,
  H1,
  H2,
  H3,
  H4,
  H5,
  H6,
  BodyL1,
  BodyL2,
  BodyM1,
  BodyM2,
  BodyXs1,
  BodyXs2,
  Callout1,
  Callout2,
  Label1,
  Label2,
  Label3,
  Label4,
  HelperText1,
  HelperText2,
  HelperText3,
  Caption1,
};
