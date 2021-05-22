import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

interface BeamIconProps {
  color?: string;
  size?: number;
}

export const BeamIcon = ({
  color = '#0D132F',
  size = 24,
}: BeamIconProps): JSX.Element => {
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <Path
        d="M1.688 7.327A.688.688 0 011 6.64a5.644 5.644 0 015.638-5.638.688.688 0 010 1.375A4.267 4.267 0 002.375 6.64c0 .379-.309.687-.688.687z"
        fill={color}
      />
      <Path
        d="M4.217 7.408a.688.688 0 01-.688-.687 3.662 3.662 0 013.659-3.659.688.688 0 010 1.376A2.285 2.285 0 004.904 6.72c0 .38-.309.687-.687.687zM22.313 23a.681.681 0 01-.219-.036l-4.714-1.57a6.216 6.216 0 01-2.249-1.335l-.542.55a1.673 1.673 0 01-1.191.494c-.448 0-.87-.174-1.185-.49L3.71 12.11a1.665 1.665 0 01-.49-1.187c0-.448.174-.869.491-1.185l.671-.671a.68.68 0 01.486-.202.68.68 0 01.486.202.68.68 0 01.202.486.68.68 0 01-.202.485l-.672.672a.297.297 0 00-.089.214c0 .082.03.156.088.213l6.737 6.738 1-1.001a2.212 2.212 0 01.592-2.078c.42-.42.98-.651 1.577-.651.17 0 .338.02.502.057l1.795-1.795-3.196-3.194a.318.318 0 01-.06-.06l-3.48-3.479a.298.298 0 00-.215-.09.297.297 0 00-.213.087l-.433.436a.685.685 0 01-1.174-.485c0-.183.07-.357.2-.487l.434-.434a1.669 1.669 0 011.185-.492c.45 0 .87.175 1.187.493l3.031 3.03a3.93 3.93 0 012.585-.957c.877 0 1.738.296 2.429.832l3.57 2.774a.687.687 0 11-.845 1.085l-3.57-2.773a2.556 2.556 0 00-1.585-.544c-.593 0-1.153.197-1.607.56l4.497 4.495c.316.318.491.739.49 1.188 0 .448-.174.869-.491 1.185l-.873.894.476.318a.683.683 0 01.19.953.688.688 0 01-.954.19l-3.405-2.27a.846.846 0 00-.472-.143.846.846 0 00-.853.85c0 .228.09.442.25.603l1.959 1.959c.523.523 1.17.923 1.872 1.158l4.715 1.57A.688.688 0 0122.313 23zm-9.128-3.359a.298.298 0 00.214.09c.082 0 .156-.031.214-.089l.544-.55-1.005-1.005-.76.762.793.792zm4.404-3.945l1.06-1.086a.303.303 0 00.006-.433l-.797-.796-1.497 1.496 1.228.819z"
        fill={color}
      />
      <Path
        d="M12.448 14.05a.689.689 0 01-.498-.215l-.225-.236a2.735 2.735 0 01-1.825.346.68.68 0 01-.447-.277.68.68 0 01-.12-.512.684.684 0 01.79-.568 1.356 1.356 0 001.214-.42l.01-.01a.454.454 0 01.038-.031 1.01 1.01 0 00.298-1.296 1.01 1.01 0 00-1.306.228 2.388 2.388 0 01-3.295.386.68.68 0 01-.154-.163 2.379 2.379 0 01.021-2.719l-.202-.215a.684.684 0 01.025-.972.69.69 0 01.973.026l.225.238a2.739 2.739 0 011.82-.353.687.687 0 11-.216 1.36 1.353 1.353 0 00-1.184.397.741.741 0 01-.086.076c-.41.304-.53.85-.295 1.293a1.018 1.018 0 001.309-.228A2.384 2.384 0 0112.61 9.8c.06.045.11.099.153.161a2.38 2.38 0 01-.018 2.717l.2.212a.683.683 0 01.19.491.682.682 0 01-.688.669z"
        fill={color}
      />
    </Svg>
  );
};

export default BeamIcon;

BeamIcon.defaultProps = {
  color: null,
  size: null,
};
