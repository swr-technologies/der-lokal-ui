import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

export const ImageIcon = ({
  size,
  color,
}: {
  size?: number;
  color?: string;
}): JSX.Element => {
  return (
    <Svg width={size || 24} height={size || 24} viewBox="0 0 24 24">
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M3.063 1h17.875C22.075 1 23 1.924 23 3.063v17.875A2.063 2.063 0 0120.937 23H3.063A2.063 2.063 0 011 20.937V3.063C1 1.925 1.924 1 3.063 1zm-.688 16.5v3.438c0 .379.308.687.688.687h17.875c.379 0 .687-.308.687-.688V17.5H2.375zm3.094-1.375H2.375V3.062c0-.379.308-.687.688-.687h17.875c.379 0 .687.308.687.688v13.062H7.188l2.348-3.131a.687.687 0 01.963-.139l.037.03.978.976a.687.687 0 001.036-.073l3.025-4.034a.687.687 0 011.099-.001l2.448 3.265a.688.688 0 001.1-.825l-2.447-3.264a2.062 2.062 0 00-3.3 0l-2.55 3.4-.38-.382a2.063 2.063 0 00-3.109.221l-2.967 3.957zM9.25 6.844a2.406 2.406 0 10-4.811-.001 2.406 2.406 0 004.811 0zm-3.438 0a1.03 1.03 0 112.062-.001 1.03 1.03 0 01-2.061 0z"
        fill={color || '#0D132F'}
        // fillOpacity={0.7}
      />
    </Svg>
  );
};
export default ImageIcon;

ImageIcon.defaultProps = {
  size: null,
  color: null,
};
