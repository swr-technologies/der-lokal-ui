import * as React from 'react';
import Svg, { G, Path, Defs, ClipPath } from 'react-native-svg';

export const ContactSupport = (): JSX.Element => {
  return (
    <Svg width={24} height={24} viewBox="0 0 24 24" fill="none">
      <G clipPath="url(#prefix__clip0)">
        <Path
          d="M12 23a2.064 2.064 0 01-2.063-2.063c0-1.137.925-2.062 2.063-2.062h1.375c.88 0 1.657.564 1.944 1.375h1.493a2.064 2.064 0 002.063-2.063 1.377 1.377 0 01-1.375-1.375V9.938c0-.746.599-1.355 1.34-1.374A6.863 6.863 0 0012 2.375a6.863 6.863 0 00-6.84 6.188c.741.019 1.34.628 1.34 1.374v6.876c0 .758-.617 1.375-1.375 1.375h-.688A3.441 3.441 0 011 14.75V12c0-1.66 1.174-3.06 2.775-3.372A8.225 8.225 0 0112 1a8.225 8.225 0 018.225 7.628A3.431 3.431 0 0123 12v2.75a3.431 3.431 0 01-2.75 3.367v.07a3.441 3.441 0 01-3.438 3.438H15.32A2.07 2.07 0 0113.375 23H12zm0-2.75a.688.688 0 000 1.375h1.375a.688.688 0 000-1.375H12zm6.875-3.438h.688a2.064 2.064 0 002.062-2.062V12a2.064 2.064 0 00-2.063-2.063h-.687v6.876zM4.437 9.938A2.064 2.064 0 002.376 12v2.75c0 1.138.925 2.063 2.063 2.063h.687V9.938h-.688z"
          fill="#0D132F"
        />
      </G>
      <Defs>
        <ClipPath id="prefix__clip0">
          <Path fill="#fff" d="M0 0h24v24H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  );
};

export default ContactSupport;
