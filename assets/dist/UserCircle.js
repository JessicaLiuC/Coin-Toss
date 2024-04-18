import React from 'react';
import { Svg, Path } from 'react-native-svg';

const SvgUserCircle = () => {
  const pathData =
    'M128 24a104 104 0 1 0 104 104A104.11 104.11 0 0 0 128 24M74.08 197.5a64 64 0 0 1 107.84 0 87.83 87.83 0 0 1-107.84 0M96 120a32 32 0 1 1 32 32 32 32 0 0 1-32-32m97.76 66.41a79.66 79.66 0 0 0-36.06-28.75 48 48 0 1 0-59.4 0 79.66 79.66 0 0 0-36.06 28.75 88 88 0 1 1 131.52 0';

  return (
    <Svg width={32} height={32} viewBox="0 0 256 256">
      <Path d={pathData} fill="grey" />
    </Svg>
  );
};

export default SvgUserCircle;
