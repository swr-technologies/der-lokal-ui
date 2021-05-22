import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

export const BinIcon = ({ size }: { size?: number }): JSX.Element => {
  return (
    <Svg width={size || 16} height={size || 16} viewBox="0 0 16 16">
      <Path
        d="M4.42 15.5c-.773 0-1.43-.604-1.494-1.376L2.04 3.5H1a.5.5 0 010-1h4V2C5 1.173 5.673.5 6.5.5h3c.827 0 1.5.673 1.5 1.5v.5h4a.5.5 0 010 1h-1.04l-.885 10.625A1.508 1.508 0 0111.58 15.5H4.42zm-.498-1.459c.021.258.24.459.499.459h7.159a.502.502 0 00.498-.459L12.957 3.5H3.043l.879 10.541zM10 2.5V2a.5.5 0 00-.5-.5h-3A.5.5 0 006 2v.5h4z"
        fill="#003263"
      />
      <Path
        d="M6.5 12a.5.5 0 01-.5-.5v-5a.5.5 0 011 0v5a.5.5 0 01-.5.5zM9.5 12a.5.5 0 01-.5-.5v-5a.5.5 0 011 0v5a.5.5 0 01-.5.5z"
        fill="#003263"
      />
    </Svg>
  );
};

export default BinIcon;

BinIcon.defaultProps = {
  size: null,
};
