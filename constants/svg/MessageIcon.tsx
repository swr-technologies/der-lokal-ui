import React from 'react';
import Svg, { Path, Defs, G, ClipPath } from 'react-native-svg';

interface Props {
  color?: string;
  size?: number;
}

export const MessageIcon = ({ color, size }: Props): JSX.Element => {
  return (
    <Svg width={size || 24} height={size || 24} viewBox="0 0 24 24" fill="none">
      <G clipPath="url(#prefix__clip0)" fill={color || '#0D132F'}>
        <Path d="M.748 24a.75.75 0 01-.678-1.072l2.911-6.113a11.245 11.245 0 01-1.484-5.596C1.507 5.033 6.547 0 12.733 0h.034c2.101 0 4.155.587 5.94 1.696a11.172 11.172 0 015.011 7c.683 2.93.187 5.946-1.397 8.494a11.176 11.176 0 01-6.998 5.016 11.208 11.208 0 01-8.139-1.189l-6.112 2.911A.777.777 0 01.748 24zM12.733 1.5c-5.36 0-9.727 4.361-9.735 9.721a9.724 9.724 0 001.47 5.158.745.745 0 01.04.719l-2.174 4.567L6.9 19.49a.747.747 0 01.718.041 9.71 9.71 0 007.362 1.214 9.69 9.69 0 006.066-4.347c2.839-4.566 1.434-10.59-3.132-13.428a9.74 9.74 0 00-5.148-1.47h-.033z" />
        <Path d="M8.246 9a.75.75 0 010-1.5h9a.75.75 0 010 1.5h-9zM6.746 12a.75.75 0 010-1.5h12a.75.75 0 010 1.5h-12zM8.246 15a.75.75 0 010-1.5h9a.75.75 0 010 1.5h-9z" />
      </G>
      <Defs>
        <ClipPath id="prefix__clip0">
          <Path fill="#fff" d="M0 0h24v24H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  );
};

export default MessageIcon;

MessageIcon.defaultProps = {
  color: null,
  size: null,
};
