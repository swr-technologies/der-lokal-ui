import * as React from 'react';
import Svg, { Path, G, Defs } from 'react-native-svg';
/* SVGR has dropped some elements not supported by react-native-svg: filter */

export const ToggleOnIcon = (): JSX.Element => {
  return (
    <Svg width={56} height={40} viewBox="0 0 56 40" fill="none">
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0 18.826C0 10.086 7.176 3 15.99 3h20.02C44.84 3 52 10.103 52 18.826c0 8.74-7.176 15.826-15.99 15.826H15.99C7.16 34.652 0 27.55 0 18.826z"
        fill="#243699"
      />
      <G>
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M37 33.12c7.732 0 14-6.4 14-14.294 0-7.895-6.268-14.294-14-14.294s-14 6.4-14 14.294c0 7.895 6.268 14.295 14 14.295z"
          fill="#fff"
        />
        <Path
          d="M37 32.87c7.589 0 13.75-6.282 13.75-14.044 0-7.761-6.161-14.044-13.75-14.044s-13.75 6.283-13.75 14.044c0 7.762 6.161 14.045 13.75 14.045z"
          stroke="#E7E7EA"
          strokeWidth={0.5}
        />
      </G>
      <Defs />
    </Svg>
  );
};

export default ToggleOnIcon;
