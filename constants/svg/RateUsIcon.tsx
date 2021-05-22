import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

export const RateUsIcon = (): JSX.Element => {
  return (
    <Svg width={24} height={24} viewBox="0 0 24 24" fill="none">
      <Path
        d="M18.319 23c-.222 0-.445-.053-.644-.153L12 20.037l-5.671 2.808a1.427 1.427 0 01-1.92-.638 1.431 1.431 0 01-.104-1.011L6 15.036l-4.577-4.534a1.424 1.424 0 01.885-2.434l5.517-.546 2.893-5.736A1.429 1.429 0 0112 1a1.445 1.445 0 011.279.784l2.898 5.743 5.528.548a1.423 1.423 0 01.874 2.432l-4.573 4.532 1.695 6.155a1.438 1.438 0 01-1.016 1.76c-.119.03-.243.046-.367.046zm-6.32-4.418c.105 0 .212.024.306.072l5.984 2.963c.011.005.02.008.03.008.045-.01.064-.042.056-.072l-1.8-6.537a.689.689 0 01.179-.671l4.858-4.815a.05.05 0 00.015-.032.052.052 0 00-.046-.055l-5.914-.585a.687.687 0 01-.547-.374l-3.066-6.077a.065.065 0 00-.027-.026.059.059 0 00-.028-.006c-.037.008-.049.018-.057.034l-3.06 6.07a.686.686 0 01-.546.375l-5.903.585c-.03.002-.04.012-.042.014a.048.048 0 00-.015.036c0 .014.005.026.015.035l4.862 4.815c.176.175.244.431.178.671l-1.8 6.543a.056.056 0 00.005.036.06.06 0 00.077.026l5.98-2.962a.695.695 0 01.306-.071z"
        fill="#0D132F"
      />
    </Svg>
  );
};

export default RateUsIcon;