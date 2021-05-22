import * as React from 'react';
import Svg, { Rect } from 'react-native-svg';

interface Props {
  color?: string;
  size?: number;
}

export const CloseIcon = ({ color, size }: Props): JSX.Element => {
  return (
    <Svg width={size || 24} height={size || 24} viewBox="0 0 24 24" fill="none">
      <Rect
        y={1.517}
        width={2.146}
        height={28.967}
        rx={1.073}
        transform="rotate(-45 0 1.517)"
        fill={color || '#0D132F'}
      />
      <Rect
        x={20.482}
        width={2.146}
        height={28.967}
        rx={1.073}
        transform="rotate(45 20.482 0)"
        fill={color || '#0D132F'}
      />
    </Svg>
  );
};

export default CloseIcon;

CloseIcon.defaultProps = {
  color: null,
  size: null,
};
