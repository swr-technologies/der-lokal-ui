import * as React from 'react';
import Svg, { Path, G, Defs } from 'react-native-svg';
/* SVGR has dropped some elements not supported by react-native-svg: filter */

export const ToggleOffIcon = (): JSX.Element => {
  return (
    <Svg width={57} height={40} viewBox="0 0 57 40" fill="none">
      <Path
        d="M20.166 3.75C11.661 3.75 4.75 10.585 4.75 19c0 8.398 6.895 15.25 15.416 15.25h20.24c8.504 0 15.415-6.835 15.415-15.25 0-8.398-6.895-15.25-15.416-15.25H20.166z"
        fill="#E7E7EA"
        stroke="#E7E7EA"
        strokeWidth={1.5}
      />
      <G>
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M19.165 33.452c7.817 0 14.154-6.47 14.154-14.452 0-7.981-6.337-14.452-14.154-14.452S5.01 11.018 5.01 19c0 7.981 6.337 14.452 14.154 14.452z"
          fill="#fff"
        />
        <Path
          d="M19.165 33.202c7.674 0 13.904-6.354 13.904-14.202S26.839 4.798 19.165 4.798C11.49 4.798 5.26 11.152 5.26 19s6.23 14.202 13.904 14.202z"
          stroke="#E7E7EA"
          strokeWidth={0.5}
        />
      </G>
      <Defs />
    </Svg>
  );
};

export default ToggleOffIcon;
