import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

interface Props {
  size?: number;
}

export const PencilIcon = ({ size }: Props): JSX.Element => {
  return (
    <Svg width={size || 16} height={size || 16} viewBox="0 0 16 16" fill="none">
      <Path
        d="M.498 16a.503.503 0 01-.485-.624l1.18-4.603a.557.557 0 01.03-.081.487.487 0 01.101-.149L11.008.86A2.903 2.903 0 0113.073 0c.786 0 1.518.303 2.071.853l.02.019c.547.56.842 1.299.833 2.08a2.904 2.904 0 01-.88 2.059l-9.662 9.662a.488.488 0 01-.154.103.523.523 0 01-.074.028L.62 15.985A.516.516 0 01.498 16zm.694-1.194l2.94-.754-2.187-2.183-.753 2.937zm3.912-1.197l8.68-8.68-2.716-2.716-8.682 8.683 2.718 2.713zm9.386-9.388a1.929 1.929 0 00-.04-2.648l-.013-.013A1.915 1.915 0 0013.08 1V.75 1c-.49.001-.948.18-1.303.508l2.714 2.713z"
        fill="#243699"
      />
    </Svg>
  );
};

export default PencilIcon;

PencilIcon.defaultProps = { size: null };
