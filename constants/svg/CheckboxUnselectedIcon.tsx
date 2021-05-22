import * as React from 'react';
import Svg, { Rect } from 'react-native-svg';

interface Props {
  color?: string;
  size?: number;
}

export const CheckboxUnselectedIcon = ({ color, size }: Props): JSX.Element => {
  return (
    <Svg width={size || 22} height={size || 22} viewBox="0 0 22 22" fill="none">
      <Rect
        x={0.85}
        y={0.85}
        width={20.3}
        height={20.3}
        rx={1.65}
        stroke={color || '#0D132F'}
        strokeWidth={1.7}
      />
    </Svg>
  );
};

export default CheckboxUnselectedIcon;

CheckboxUnselectedIcon.defaultProps = {
  color: null,
  size: null,
};
