import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

export const HowDerLokalWorks = (): JSX.Element => {
  return (
    <Svg width={24} height={24} viewBox="0 0 24 24" fill="none">
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 21.5a9.5 9.5 0 100-19 9.5 9.5 0 000 19zm0 1.5c6.075 0 11-4.925 11-11S18.075 1 12 1 1 5.925 1 12s4.925 11 11 11zm.5-6.25a1 1 0 100-2 1 1 0 000 2zm-1.2-3.95a.7.7 0 00.7.7c1.93 0 3.5-1.57 3.5-3.5S13.93 6.5 12 6.5 8.5 8.07 8.5 10a.7.7 0 001.4 0c0-1.158.942-2.1 2.1-2.1 1.158 0 2.1.942 2.1 2.1 0 1.158-.942 2.1-2.1 2.1a.7.7 0 00-.7.7z"
        fill="#0D132F"
      />
    </Svg>
  );
};

export default HowDerLokalWorks;
