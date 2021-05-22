import * as React from 'react';
import Svg, { G, Path, Defs, ClipPath } from 'react-native-svg';

export const SecurityIcon = (): JSX.Element => {
  return (
    <Svg width={24} height={24} viewBox="0 0 24 24" fill="none">
      <G clipPath="url(#prefix__clip0)" fill="#0D132F">
        <Path d="M12 23c-.423 0-.838-.076-1.234-.228l-.954-.367c-4.449-1.711-7.437-6.063-7.437-10.829V4.597a2.052 2.052 0 011.197-1.874A20.446 20.446 0 0111.806 1h.37c2.856 0 5.63.578 8.24 1.719a2.06 2.06 0 011.209 1.883v6.974c0 4.766-2.988 9.118-7.437 10.83l-.954.366c-.396.152-.811.229-1.234.229zm-.183-20.625c-2.661 0-5.246.54-7.684 1.603a.67.67 0 00-.383.614v6.984c0 4.202 2.634 8.038 6.555 9.546l.954.366a2.053 2.053 0 001.482.001l.954-.366c3.92-1.51 6.555-5.345 6.555-9.547V4.597a.68.68 0 00-.394-.623 19.073 19.073 0 00-7.678-1.599h-.362z" />
        <Path d="M9.25 17.5a2.064 2.064 0 01-2.063-2.062v-4.125c0-.88.564-1.658 1.375-1.945v-.805A3.441 3.441 0 0112 5.126a3.441 3.441 0 013.438 3.437v.806a2.071 2.071 0 011.374 1.944v4.125a2.064 2.064 0 01-2.062 2.063h-5.5zm0-6.874a.688.688 0 00-.688.688v4.124c0 .38.309.688.688.688h5.5c.38 0 .688-.308.688-.688v-4.125a.688.688 0 00-.688-.687h-5.5zm4.813-1.375v-.688A2.064 2.064 0 0012 6.501a2.064 2.064 0 00-2.063 2.062v.688h4.126z" />
        <Path d="M12 14.433a1.031 1.031 0 100-2.063 1.031 1.031 0 000 2.063z" />
      </G>
      <Defs>
        <ClipPath id="prefix__clip0">
          <Path fill="#fff" transform="translate(1 1)" d="M0 0h22v22H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  );
};

export default SecurityIcon;