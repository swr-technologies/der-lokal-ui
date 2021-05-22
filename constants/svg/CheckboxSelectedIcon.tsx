import * as React from 'react';
import Svg, { Rect, Path } from 'react-native-svg';

export const CheckboxSelectedIcon = ({
  size,
}: {
  size?: number;
}): JSX.Element => {
  return (
    <Svg width={size || 24} height={size || 24} viewBox="0 0 24 24" fill="none">
      <Rect
        x={1.5}
        y={1.5}
        width={21}
        height={21}
        rx={2}
        fill="#243699"
        stroke="#243699"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10.32 17a.938.938 0 01-.681-.299L5.782 12.62a1.063 1.063 0 010-1.444.927.927 0 011.364 0l3.118 3.301 6.538-8.118a.928.928 0 011.36-.114c.405.365.453 1.01.108 1.439l-7.216 8.958a.945.945 0 01-.695.358L10.32 17z"
        fill="#fff"
      />
    </Svg>
  );
};

export default CheckboxSelectedIcon;

CheckboxSelectedIcon.defaultProps = {
  size: null,
};
