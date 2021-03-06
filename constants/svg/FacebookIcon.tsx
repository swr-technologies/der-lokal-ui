import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

export const FacebookIcon = ({ size }: { size?: number }): JSX.Element => {
  return (
    <Svg width={size || 24} height={size || 24} fill="none">
      <Path
        d="M24 12c0-6.628-5.372-12-12-12S0 5.372 0 12s5.372 12 12 12c.07 0 .14 0 .21-.005v-9.337H9.634v-3.005h2.578V9.441c0-2.564 1.566-3.961 3.853-3.961 1.097 0 2.04.08 2.311.117v2.681H16.8c-1.242 0-1.486.59-1.486 1.458v1.912h2.977l-.39 3.005h-2.587v8.883C20.33 22.096 24 17.48 24 12z"
        fill="#3B5998"
      />
    </Svg>
  );
};

export default FacebookIcon;

FacebookIcon.defaultProps = {
  size: null,
};
