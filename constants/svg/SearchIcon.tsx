import * as React from 'react';
import Svg, { G, Path, Defs, ClipPath } from 'react-native-svg';

interface SearchIconProps {
  size?: number;
  color?: string;
}

export const SearchIcon = ({ size, color }: SearchIconProps): JSX.Element => {
  return (
    <Svg width={size || 16} height={size || 16} viewBox="0 0 16 16" fill="none">
      <G clipPath="url(#prefix__clip0)">
        <Path
          d="M15.497 15.997a.495.495 0 01-.353-.146L10.8 11.507a6.549 6.549 0 01-1.702 1.052 6.51 6.51 0 01-5.006.046A6.497 6.497 0 01.519 9.097a6.499 6.499 0 01-.046-5.006A6.5 6.5 0 013.98.518 6.496 6.496 0 018.987.472c1.62.654 2.89 1.9 3.573 3.508a6.5 6.5 0 01.046 5.007 6.54 6.54 0 01-1.1 1.812l4.345 4.345a.501.501 0 01-.354.853zM6.538.993c-.743 0-1.472.15-2.166.445A5.507 5.507 0 001.4 4.465a5.507 5.507 0 00.038 4.241 5.507 5.507 0 003.027 2.972 5.52 5.52 0 004.241-.04 5.524 5.524 0 002.972-3.026 5.504 5.504 0 00-.04-4.241 5.505 5.505 0 00-3.026-2.972A5.52 5.52 0 006.538.993z"
          fill={color || '#243699'}
        />
      </G>
      <Defs>
        <ClipPath id="prefix__clip0">
          <Path fill="#fff" d="M0 0h16v16H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  );
};

export default SearchIcon;

SearchIcon.defaultProps = { size: null, color: null };
