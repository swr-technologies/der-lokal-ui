import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

export const StatusWarningIcon = (): JSX.Element => {
  return (
    <Svg width={14} height={14} viewBox="0 0 14 14" fill="none">
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7 0C3.2 0 0 3.2 0 7s3.2 7 7 7 7-3.1 7-7-3.1-7-7-7zm-.5 3h1v5h-1V3zm.5 8.2c-.4 0-.8-.4-.8-.8s.3-.8.8-.8c.4 0 .8.4.8.8s-.4.8-.8.8z"
        fill="#C8353E"
      />
    </Svg>
  );
};

export default StatusWarningIcon;
