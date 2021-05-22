import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

interface Props {
  height?: number;
  width?: number;
}

export const IdIcon = ({ height, width }: Props): JSX.Element => {
  return (
    <Svg
      width={width || 88}
      height={height || 64}
      viewBox="0 0 88 64"
      fill="none"
    >
      <Path
        d="M79.899 63.573H8.1C3.676 63.573 0 60 0 55.473V8.527C0 4.103 3.574.427 8.101.427H79.9C84.324.427 88 4 88 8.527v46.945c0 4.425-3.575 8.101-8.101 8.101z"
        fill="#243699"
      />
      <Path
        d="M79.899.427H44v63.146h35.899c4.526 0 8.101-3.676 8.101-8.1V8.527C88 4 84.324.427 79.899.427z"
        fill="#243699"
      />
      <Path
        d="M27.431 36.325a6.911 6.911 0 01-6.903-6.903 6.911 6.911 0 016.903-6.904 6.912 6.912 0 016.904 6.904 6.912 6.912 0 01-6.904 6.903zM38.477 52.528H16.385a2.578 2.578 0 01-2.578-2.578c0-7.513 6.112-13.624 13.624-13.624 7.512 0 13.624 6.111 13.624 13.624a2.578 2.578 0 01-2.578 2.578z"
        fill="#fff"
      />
      <Path
        d="M71.614 30.436h-19.33a2.578 2.578 0 010-5.156h19.33a2.578 2.578 0 110 5.156zM71.615 16.628h-55.23a2.578 2.578 0 110-5.156h55.23a2.578 2.578 0 010 5.156zM71.614 41.482h-19.33a2.578 2.578 0 010-5.156h19.33a2.578 2.578 0 110 5.156zM66.091 52.528H52.284a2.578 2.578 0 010-5.157h13.807a2.578 2.578 0 010 5.157z"
        fill="#9CA6DB"
      />
      <Path
        d="M74.193 14.05a2.578 2.578 0 00-2.578-2.578H44v5.156h27.615a2.578 2.578 0 002.578-2.578z"
        fill="#9CA6DB"
      />
    </Svg>
  );
};

export default IdIcon;

IdIcon.defaultProps = {
  width: null,
  height: null,
};