import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

export const TimeIcon = (): JSX.Element => {
  return (
    <Svg width={14} height={14} viewBox="0 0 14 14" fill="none">
      <Path
        d="M7 14c-3.86 0-7-3.14-7-7s3.14-7 7-7 7 3.14 7 7-3.14 7-7 7zM7 1.273A5.734 5.734 0 001.273 7 5.734 5.734 0 007 12.727 5.734 5.734 0 0012.727 7 5.734 5.734 0 007 1.273z"
        fill="#0D132F"
        fillOpacity={0.8}
      />
      <Path
        d="M7 7.636A.637.637 0 016.363 7V3.182a.637.637 0 011.273 0v3.182h3.182a.637.637 0 010 1.272H7z"
        fill="#0D132F"
        fillOpacity={0.8}
      />
    </Svg>
  );
};

export default TimeIcon;
