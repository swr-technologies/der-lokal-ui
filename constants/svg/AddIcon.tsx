import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

interface Props {
  color?: string;
  size?: number;
}

export const AddIcon = ({ color, size }: Props): JSX.Element => {
  return (
    <Svg width={size || 24} height={size || 24} viewBox="0 0 24 24" fill="none">
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 1a1 1 0 00-1 1v9H2a1 1 0 100 2h9v9a1 1 0 102 0v-9h9a1 1 0 100-2h-9V2a1 1 0 00-1-1z"
        fill={color || '#0D132F'}
      />
    </Svg>
  );
};

export default AddIcon;

AddIcon.defaultProps = {
  color: null,
  size: null,
};
