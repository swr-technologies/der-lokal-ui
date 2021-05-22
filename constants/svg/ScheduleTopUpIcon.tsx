import * as React from 'react';
import Svg, { G, Path, Defs, ClipPath } from 'react-native-svg';

export const ScheduleTopUpIcon = (): JSX.Element => {
  return (
    <Svg width={24} height={24} viewBox="0 0 24 24" fill="none">
      <G clipPath="url(#prefix__clip0)" fill="#0D132F">
        <Path d="M16.95 23.006c-.637 0-1.27-.107-1.881-.316A5.768 5.768 0 0112 20.228v1.398a.688.688 0 01-1.375 0v-3.438c0-.379.308-.687.688-.687h3.437a.688.688 0 010 1.375h-1.895a4.424 4.424 0 004.094 2.753c.674 0 1.327-.153 1.94-.454a4.392 4.392 0 002.237-2.538.689.689 0 011.268-.08c.08.164.093.351.033.524a5.758 5.758 0 01-2.932 3.328 5.698 5.698 0 01-2.545.597zM18.875 16.127a.688.688 0 010-1.375h1.895A4.424 4.424 0 0016.684 12a4.424 4.424 0 00-4.186 2.99.687.687 0 11-1.301-.445 5.8 5.8 0 017.359-3.607 5.768 5.768 0 013.069 2.462v-1.398A.688.688 0 0123 12.002v3.437c0 .38-.308.688-.688.688h-3.437z" />
        <Path d="M3.063 16.127A2.064 2.064 0 011 14.065v-11c0-1.138.925-2.063 2.063-2.063h15.124c1.138 0 2.063.925 2.063 2.062v5.5a.688.688 0 01-1.375 0V6.502h-16.5v7.563c0 .379.308.687.688.687h5.5a.688.688 0 010 1.375h-5.5zm15.812-11V3.064a.688.688 0 00-.688-.687H3.063a.688.688 0 00-.687.687v2.063h16.5z" />
        <Path d="M4.438 9.94a.688.688 0 010-1.376h5.5a.688.688 0 010 1.375h-5.5zM4.438 12.69a.688.688 0 010-1.376h2.75a.688.688 0 010 1.375h-2.75z" />
      </G>
      <Defs>
        <ClipPath id="prefix__clip0">
          <Path fill="#fff" transform="translate(1 1)" d="M0 0h22v22H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  );
};

export default ScheduleTopUpIcon;