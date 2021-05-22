import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

export const LocationIcon = (): JSX.Element => {
  return (
    <Svg width={14} height={16} viewBox="0 0 12 16" fill="none">
      <Path
        d="M6 8.5c-1.654 0-3-1.346-3-3s1.346-3 3-3 3 1.346 3 3-1.346 3-3 3zm0-5c-1.103 0-2 .897-2 2s.897 2 2 2 2-.897 2-2-.897-2-2-2z"
        fill="#0D132F"
        fillOpacity={0.8}
      />
      <Path
        d="M5.999 16a.999.999 0 01-.832-.447 56.893 56.893 0 01-2.693-4.616C1.164 8.417.5 6.588.5 5.5.5 2.467 2.967 0 6 0s5.5 2.467 5.5 5.5c0 1.087-.664 2.917-1.974 5.437a56.943 56.943 0 01-2.693 4.616.992.992 0 01-.834.448zM6 1a4.505 4.505 0 00-4.5 4.5c0 1.92 2.93 7.135 4.5 9.5 1.57-2.365 4.5-7.58 4.5-9.5C10.5 3.02 8.481 1 6 1z"
        fill="#0D132F"
        fillOpacity={0.8}
      />
    </Svg>
  );
};

export default LocationIcon;
