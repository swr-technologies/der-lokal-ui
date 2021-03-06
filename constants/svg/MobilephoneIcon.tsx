import * as React from 'react';
import Svg, { G, Path, Defs, ClipPath } from 'react-native-svg';

export const MobilephoneIcon = (): JSX.Element => {
  return (
    <Svg width={56} height={56} viewBox="0 0 56 56" fill="none">
      <G clipPath="url(#prefix__clip0)">
        <Path
          d="M49.966 16.695h-13.18a1.64 1.64 0 00-.199 3.268l-3.995 32.756h-.2a1.64 1.64 0 000 3.281h17.574a6.04 6.04 0 006.033-6.034V22.728a6.04 6.04 0 00-6.033-6.033z"
          fill="#33B36D"
        />
        <Path
          d="M54.36 28.762H36.787a1.64 1.64 0 010-3.281H54.36a1.64 1.64 0 110 3.281z"
          fill="#167C45"
        />
        <Path
          d="M43.816 38.427h-7.029a1.64 1.64 0 010-3.28h7.03a1.64 1.64 0 110 3.28zM43.816 47.214h-7.029a1.64 1.64 0 110-3.282h7.03a1.64 1.64 0 110 3.282z"
          fill="#fff"
        />
        <Path
          d="M36.786 6.034a4.406 4.406 0 00-4.393-4.393H6.034a4.406 4.406 0 00-4.393 4.393v34.267h35.145V6.034z"
          fill="#fff"
        />
        <Path
          d="M32.393 0H6.034A6.04 6.04 0 000 6.034v43.932A6.04 6.04 0 006.034 56h26.359a6.04 6.04 0 006.034-6.034V6.034A6.04 6.04 0 0032.393 0zM3.28 6.034a2.756 2.756 0 012.753-2.753h26.359a2.756 2.756 0 012.753 2.753v32.627H3.28V6.034z"
          fill="#0089FF"
        />
        <Path
          d="M32.393 0h-13.18v3.281h13.18a2.756 2.756 0 012.752 2.753v32.627H19.213V56h13.18a6.04 6.04 0 006.033-6.034V6.034A6.04 6.04 0 0032.393 0z"
          fill="#0089FF"
        />
        <Path
          d="M19.214 43.054a4.282 4.282 0 00-4.276 4.276 4.282 4.282 0 004.276 4.277 4.281 4.281 0 004.277-4.277 4.282 4.282 0 00-4.277-4.276z"
          fill="#fff"
        />
      </G>
      <Defs>
        <ClipPath id="prefix__clip0">
          <Path fill="#fff" d="M0 0h56v56H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  );
};

export default MobilephoneIcon;
