import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import { COLOR_TYPE } from '../../types';

interface ChevronDownProps {
  color?: COLOR_TYPE;
  size?: number;
}

export const ChevronDown = ({ color, size }: ChevronDownProps): JSX.Element => {
  return (
    <Svg width={size || 24} height={size || 24} viewBox="0 0 24 24" fill="none">
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M2.878 6.322a1.1 1.1 0 00-1.556 1.556l9.9 9.9a1.1 1.1 0 001.556 0l9.9-9.9a1.1 1.1 0 10-1.556-1.556L12 15.444 2.878 6.322z"
        fill={color || '#0D132F'}
      />
    </Svg>
  );
};

export default ChevronDown;
ChevronDown.defaultProps = {
  color: null,
  size: null,
};
