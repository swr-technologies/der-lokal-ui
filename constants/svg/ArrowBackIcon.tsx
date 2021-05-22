import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

interface Props {
  color?: string;
  size?: number;
}

export const ArrowBackIcon = ({ color, size }: Props): JSX.Element => {
  return (
    <Svg width={size || 32} height={size || 32} viewBox="0 0 32 32" fill="none">
      <Path
        d="M2.667 16.5a.84.84 0 01.052-.289l.009-.024a.814.814 0 01.183-.277L14.578 4.244A.827.827 0 0115.167 4c.222 0 .432.087.589.244a.825.825 0 01.244.59.825.825 0 01-.244.588L5.51 15.667h22.99a.834.834 0 010 1.666H5.511l10.245 10.245a.828.828 0 01.243.589.825.825 0 01-.244.589.827.827 0 01-1.178 0L2.91 17.089a.848.848 0 01-.182-.273l-.011-.03a.829.829 0 01-.051-.286z"
        fill={color || '#0D132F'}
      />
    </Svg>
  );
};

export default ArrowBackIcon;

ArrowBackIcon.defaultProps = {
  color: null,
  size: null,
};
