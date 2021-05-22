import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

export const CopyIcon = (): JSX.Element => {
  return (
    <Svg width={16} height={16} viewBox="0 0 16 16" fill="none">
      <Path
        d="M2.75 16c-.827 0-1.5-.673-1.5-1.5V3.75a.5.5 0 011 0V14.5a.5.5 0 00.5.5h9a.5.5 0 010 1h-9z"
        fill="#fff"
      />
      <Path
        d="M4.91 13.833a1.707 1.707 0 01-1.66-1.738V1.728A1.7 1.7 0 014.903 0h5.948c.45.002.882.19 1.189.517l2.23 2.347c.312.33.482.76.48 1.213v8.026a1.703 1.703 0 01-1.653 1.73H4.91zM4.92 1a.698.698 0 00-.67.716v10.39a.707.707 0 00.681.728h8.153a.697.697 0 00.667-.715V4.075a.759.759 0 00-.207-.524l-2.23-2.347A.65.65 0 0010.848 1H4.92z"
        fill="#fff"
      />
    </Svg>
  );
};

export default CopyIcon;
