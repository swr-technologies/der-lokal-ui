import * as React from 'react';
import Svg, { G, Path, Defs, ClipPath } from 'react-native-svg';

interface InvoiceTicketIconProps {
  size?: number;
}

export const InvoiceTicketIcon = ({
  size = 40,
}: InvoiceTicketIconProps): JSX.Element => {
  return (
    <Svg width={size} height={size} viewBox="0 0 40 40" fill="none">
      <G clipPath="url(#prefix__clip0)">
        <Path
          d="M35.273 0h-1.27a3.808 3.808 0 00-3.808 3.808V14.14h9.766V4.687A4.687 4.687 0 0035.273 0z"
          fill="#93C6E1"
        />
        <Path
          d="M34.022 0H5.898A5.866 5.866 0 00.04 5.86v32.967a1.172 1.172 0 001.822.974l2.865-1.91 2.867 1.91c.393.263.906.263 1.3 0l2.865-1.91 2.866 1.91c.393.263.906.263 1.3 0l2.865-1.91 2.865 1.91c.393.263.906.263 1.3 0l2.865-1.91 2.866 1.91a1.172 1.172 0 001.822-.974V4.687A4.687 4.687 0 0134.64.033 5.772 5.772 0 0034.022 0z"
          fill="#B8E0F5"
        />
        <Path
          d="M34.023 0H15.234v39.997c.24.01.482-.056.69-.196l2.866-1.91 2.864 1.91c.394.263.907.263 1.3 0l2.866-1.91 2.865 1.91a1.172 1.172 0 001.822-.974V4.687A4.687 4.687 0 0134.641.033 5.77 5.77 0 0034.023 0z"
          fill="#B8E0F5"
        />
        <Path
          d="M10.246 24.378l-2.96-1.48a.389.389 0 01-.216-.349v-.987c0-.216.175-.391.39-.391h1.563c.216 0 .39.175.39.39a1.172 1.172 0 002.345 0 2.738 2.738 0 00-2.344-2.705v-1.2a1.172 1.172 0 10-2.344 0v1.2a2.738 2.738 0 00-2.343 2.706v.987c0 1.042.579 1.98 1.511 2.445l2.96 1.48c.133.067.216.2.216.35v.987c0 .216-.175.39-.39.39H7.46a.391.391 0 01-.39-.39 1.172 1.172 0 00-2.344 0 2.738 2.738 0 002.343 2.706v1.2a1.172 1.172 0 002.344 0v-1.2a2.738 2.738 0 002.344-2.706v-.987a2.72 2.72 0 00-1.512-2.446z"
          fill="#FF641A"
        />
        <Path
          d="M5.898 9.453H24.57a1.172 1.172 0 000-2.344H5.898a1.172 1.172 0 000 2.344z"
          fill="#0052C2"
        />
        <Path
          d="M25.742 8.28c0 .648-.525 1.173-1.172 1.173h-9.336V7.109h9.336c.647 0 1.172.525 1.172 1.172zM25.741 12.968c0-.647-.524-1.172-1.171-1.172H5.898a1.172 1.172 0 000 2.344H24.57c.647 0 1.171-.525 1.171-1.172z"
          fill="#0052C2"
        />
        <Path
          d="M25.742 12.968c0 .647-.525 1.172-1.172 1.172h-9.336v-2.344h9.336c.647 0 1.172.525 1.172 1.172zM24.648 18.827h-9.375a1.172 1.172 0 000 2.344h9.375a1.172 1.172 0 000-2.344z"
          fill="#0052C2"
        />
        <Path
          d="M25.82 19.999c0 .647-.525 1.172-1.172 1.172h-9.375l-.039-.001v-2.342h9.414c.647 0 1.172.524 1.172 1.171zM24.648 23.515h-9.375a1.172 1.172 0 000 2.343h9.375a1.172 1.172 0 000-2.343z"
          fill="#0052C2"
        />
        <Path
          d="M25.82 24.686c0 .647-.525 1.172-1.172 1.172h-9.414v-2.343h9.414c.647 0 1.172.525 1.172 1.171zM24.648 28.202h-9.375a1.172 1.172 0 000 2.344h9.375a1.172 1.172 0 000-2.344z"
          fill="#0052C2"
        />
        <Path
          d="M25.82 29.374c0 .647-.525 1.172-1.172 1.172h-9.375l-.039-.001v-2.342l.04-.001h9.374c.647 0 1.172.525 1.172 1.172z"
          fill="#0052C2"
        />
      </G>
      <Defs>
        <ClipPath id="prefix__clip0">
          <Path fill="#fff" d="M0 0h40v40H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  );
};

export default InvoiceTicketIcon;

InvoiceTicketIcon.defaultProps = {
  size: null,
};