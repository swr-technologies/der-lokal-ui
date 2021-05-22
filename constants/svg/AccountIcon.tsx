import React from 'react';
import Svg, { Path } from 'react-native-svg';

interface Props {
  color?: string;
  size?: number;
}

export const AccountIcon = ({ color, size }: Props): JSX.Element => {
  return (
    <Svg width={size || 24} height={size || 24} viewBox="0 0 22 22" fill="none">
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M11 0c6.075 0 11 4.925 11 11a10.98 10.98 0 01-4.155 8.611.75.75 0 01-.182.142A10.952 10.952 0 0111 22c-2.504 0-4.813-.837-6.662-2.247a.749.749 0 01-.183-.142A10.98 10.98 0 010 11C0 4.925 4.925 0 11 0zM3.953 17.384a9.509 9.509 0 1114.094 0v-.282a.745.745 0 00-.217-.526c-3.748-3.772-9.845-3.791-13.618-.043l-.04.041a.746.746 0 00-.219.528v.282zm1.492 1.334A9.465 9.465 0 0011 20.508a9.466 9.466 0 005.555-1.79v-1.301a8.138 8.138 0 00-11.11 0v1.3zM15.723 8.017a4.724 4.724 0 10-9.447 0 4.724 4.724 0 009.447 0zm-7.955 0a3.232 3.232 0 116.465 0 3.232 3.232 0 01-6.465 0z"
        fill={color || '#0D132F'}
      />
    </Svg>
  );
};

export default AccountIcon;

AccountIcon.defaultProps = {
  color: null,
  size: null,
};
