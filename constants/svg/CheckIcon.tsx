import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

interface Props {
  color?: string;
  width?: number;
  height?: number;
}

export const CheckIcon = ({ color, width, height }: Props): JSX.Element => {
  return (
    <Svg
      width={width || 15}
      height={height || 11}
      viewBox="0 0 15 11"
      fill="none"
    >
      <Path
        d="M4.574 11c-.21 0-.42-.049-.61-.144a1.472 1.472 0 01-.499-.406L.35 6.519a1.607 1.607 0 01-.278-.535A1.684 1.684 0 01.16 4.786c.087-.183.206-.347.352-.48.145-.134.314-.236.496-.3a1.36 1.36 0 011.112.094c.17.094.322.223.446.38l2.193 2.765 7.87-6.897c.3-.26.684-.383 1.067-.34.383.044.735.249.978.571.243.322.358.735.32 1.148a1.608 1.608 0 01-.526 1.056l-8.974 7.865c-.26.228-.584.352-.919.352z"
        fill={color || '#fff'}
      />
    </Svg>
  );
};

export default CheckIcon;
CheckIcon.defaultProps = {
  color: null,
  width: null,
  height: null,
};
