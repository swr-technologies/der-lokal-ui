import * as React from 'react';
import Svg, { G, Path, Defs, ClipPath } from 'react-native-svg';

export const FaceIdIcon = ({ size }: { size?: number }): JSX.Element => {
  return (
    <Svg width={size || 32} height={size || 32} viewBox="0 0 32 32" fill="none">
      <G clipPath="url(#prefix__clip0)" fill="#0D132F" fillOpacity={0.8}>
        <Path d="M16 25.847a9.894 9.894 0 01-6.674-2.6.991.991 0 01-.325-.694 1 1 0 011.672-.785A7.9 7.9 0 0016 23.844a7.9 7.9 0 005.326-2.076.998.998 0 011.672.785.994.994 0 01-.325.694 9.888 9.888 0 01-6.673 2.6zM9 12.832a1 1 0 01-1-1v-3a1 1 0 012 0v3a1 1 0 01-1 1zM23 12.832a1 1 0 01-1-1v-3a1 1 0 012 0v3a1 1 0 01-1 1zM13 18.832a1 1 0 010-2h1a1 1 0 001-1v-7a1 1 0 012 0v7c0 1.655-1.345 3-3 3h-1zM25 31.832a1 1 0 010-2h4a1 1 0 001-1v-4a1 1 0 012 0v4c0 1.655-1.345 3-3 3h-4zM31 7.832a1 1 0 01-1-1v-4a1 1 0 00-1-1h-4a1 1 0 010-2h4c1.655 0 3 1.345 3 3v4a1 1 0 01-1 1zM1 7.832a1 1 0 01-1-1v-4c0-1.655 1.345-3 3-3h4a1 1 0 010 2H3a1 1 0 00-1 1v4a1 1 0 01-1 1zM3 31.832c-1.655 0-3-1.345-3-3v-4a1 1 0 012 0v4a1 1 0 001 1h4a1 1 0 010 2H3z" />
      </G>
      <Defs>
        <ClipPath id="prefix__clip0">
          <Path fill="#fff" d="M0 0h32v32H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  );
};

export default FaceIdIcon;

FaceIdIcon.defaultProps = {
  size: null,
};
