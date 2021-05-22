import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

export const NotificationIcon = (): JSX.Element => {
  return (
    <Svg width={18} height={22} viewBox="0 0 18 22" fill="none">
      <Path
        d="M8.937 22a2.6 2.6 0 01-2.491-1.87.688.688 0 011.319-.387 1.224 1.224 0 002.351.001.692.692 0 01.853-.466c.363.107.573.489.466.853A2.607 2.607 0 018.937 22zM.688 17.875a.691.691 0 01-.618-.386.685.685 0 01.076-.725c.006-.008 1.23-1.777 1.23-7.139A7.55 7.55 0 018.25 2.094V.688a.688.688 0 011.375 0v1.406A7.55 7.55 0 0116.5 9.625c0 5.778 1.142 7.046 1.153 7.057.2.183.272.488.171.75a.683.683 0 01-.637.443H.688zM16.006 16.5c-.442-1.13-.881-3.18-.881-6.875a6.194 6.194 0 00-6.188-6.188A6.194 6.194 0 002.75 9.625c0 3.627-.532 5.754-.96 6.875h14.216z"
        fill="#0D132F"
      />
    </Svg>
  );
};
export default NotificationIcon;