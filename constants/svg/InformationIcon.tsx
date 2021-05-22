import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

interface Props {
  color?: string;
  size?: number;
}

export const InformationIcon = ({ color, size }: Props): JSX.Element => {
  return (
    <Svg width={size || 22} height={size || 22} viewBox="0 0 22 22" fill="none">
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M11 20.5a9.5 9.5 0 100-19 9.5 9.5 0 000 19zm0 1.5c6.075 0 11-4.925 11-11S17.075 0 11 0 0 4.925 0 11s4.925 11 11 11zm1.3-6.063c-1.092 0-1.98-.874-1.98-1.95v-3.25h-.66a.655.655 0 01-.66-.65c0-.358.296-.65.66-.65h.66c.727 0 1.32.584 1.32 1.3v3.25c0 .36.295.65.66.65h.66c.363 0 .66.292.66.65 0 .36-.297.65-.66.65h-.66zM9.66 7.031c0 .569.445 1.032.99 1.032.503 0 .921-.391.98-.914a.754.754 0 000-.238 1.012 1.012 0 00-.927-.908l-.017-.001a.53.53 0 00-.151.008c-.5.062-.875.498-.875 1.021z"
        fill={color || '#0D132F'}
      />
    </Svg>
  );
};

export default InformationIcon;

InformationIcon.defaultProps = {
  color: null,
  size: null,
};
