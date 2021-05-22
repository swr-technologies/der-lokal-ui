import * as React from 'react';
import Svg, { Path, Circle } from 'react-native-svg';

interface StatusSuccessIconProps {
  size?: number;
}

export const StatusSuccessIcon = ({
  size = 24,
}: StatusSuccessIconProps): JSX.Element => {
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <Circle cx={12} cy={12} r={12} fill="#33B272" />
      <Path
        d="M10.18 16.5c-.158 0-.314-.037-.457-.108a1.103 1.103 0 01-.374-.305L7.012 13.14a1.204 1.204 0 01-.209-.4 1.263 1.263 0 01.066-.9c.065-.137.155-.26.264-.36.11-.1.236-.177.372-.224a1.02 1.02 0 01.834.07c.128.07.242.167.335.285l1.644 2.074 5.903-5.173a1.04 1.04 0 01.8-.255c.288.033.552.187.734.428a1.241 1.241 0 01-.155 1.654l-6.73 5.898a1.042 1.042 0 01-.69.264z"
        fill="#fff"
      />
    </Svg>
  );
};

export default StatusSuccessIcon;
StatusSuccessIcon.defaultProps = {
  size: null,
};
